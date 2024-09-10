import blogModel from "../models/blogModel.js";
import fs from "fs";
import { nanoid } from "nanoid";
import userModel from "../models/userModel.js";
import compressImages from "compress-images";
import activityModel from "../models/activityModel.js";

//add image in blog

const addImgInBlog = async (req, res) => {
  let imageFilename = req.file.filename;
  const imagePath = req.file.path;

  const compressedFilePath = "uploads/blog-images/" + imageFilename;
  const compression = 60;

  compressImages(
    imagePath,
    compressedFilePath,
    {
      compress_force: false,
      statistic: true,
      autoupdate: true,
    },
    false,
    { jpg: { engine: "mozjpeg", command: ["-quality", compression] } },
    {
      png: {
        engine: "pngquant",
        command: ["--quality=" + compression + "-" + compression, "-o"],
      },
    },
    { svg: { engine: "svgo", command: "--multipass" } },
    {
      gif: { engine: "gifsicle", command: ["--colors", "64", "--use-col=web"] },
    },
    async (error, completed, statistic) => {
      console.log("______");
      console.log(error);
      console.log(completed);
      console.log(statistic);
      console.log("______");

      fs.unlink(imagePath, (err) => {
        if (err) throw err;
      });
    }
  );
  res.json({
    success: 1,
    file: {
      url: `http://localhost:4000/blog-images/${imageFilename}uploads/${imageFilename}`,
    },
  });
};
//create blog

const createBlog = async (req, res) => {
  console.log("CREATE BLOG ENDPOINT HIT");
  let { title, desc, banner, content, tags, draft, id } = req.body;
  let authorId = req.user;

  if (req.file) {
    banner = req.file.filename;
    const bannerPath = req.file.path;
    const compressedFilePath = "uploads/blog-images/" + banner;
    const compression = 60;

    compressImages(
      bannerPath,
      compressedFilePath,
      {
        compress_force: false,
        statistic: true,
        autoupdate: true,
      },
      false,
      { jpg: { engine: "mozjpeg", command: ["-quality", compression] } },
      {
        png: {
          engine: "pngquant",
          command: ["--quality=" + compression + "-" + compression, "-o"],
        },
      },
      { svg: { engine: "svgo", command: "--multipass" } },
      {
        gif: {
          engine: "gifsicle",
          command: ["--colors", "64", "--use-col=web"],
        },
      },
      async (error, completed, statistic) => {
        console.log("______");
        console.log(error);
        console.log(completed);
        console.log(statistic);
        console.log("______");

        fs.unlink(bannerPath, (err) => {
          if (err) throw err;
        });
      }
    );
  }

  let blog_id =
    id ||
    title
      .replace(/[^a-zA-Z0-9]/g, " ")
      .replace(/\s+/g, "-")
      .trim() + nanoid();

  content = JSON.parse(content);
  tags = JSON.parse(tags);
  draft = JSON.parse(draft);
  draft = Boolean(draft);

  if (id) {
    blogModel
      .findOneAndUpdate(
        { blog_id },
        { title, desc, banner, content, tags, draft: draft ? draft : false }
      )
      .then((blog) => {
        return res.json({
          success: true,
          message: "Blog Updated",
          id: blog.id,
        });
      })
      .catch((err) => {
        console.log(err);

        return res.json({
          success: false,
          message: "An unkown error occured",
        });
      });
  } else {
    if (!title.length) {
      return res.json({
        success: false,
        message: "You must provide a title for your blog",
      });
    }

    if (!draft) {
      if (!desc.length || desc.length > 200) {
        return res.json({
          success: false,
          message:
            "You must provide a description for your blog under 200 characters",
        });
      }

      if (!content.blocks.length) {
        return res.json({
          success: false,
          message: "You must provide content for your blog",
        });
      }

      if (!tags.length || tags.length > 5) {
        return res.json({
          success: false,
          message: "Provide tags in order to publish",
        });
      }
    }

    const blog = new blogModel({
      blog_id,
      title,
      banner: banner,
      desc,
      content,
      tags,
      author: authorId,
      draft,
    });

    try {
      await blog.save();

      if (blog.draft) {
        console.log("updating drafts");
        await userModel.findOneAndUpdate(
          { _id: authorId },
          {
            $inc: { "account_info.total_drafts": 1 },
            $push: { blogs: blog._id },
          }
        );
      } else {
        console.log("updating posts");
        await userModel.findOneAndUpdate(
          { _id: authorId },
          {
            $inc: { "account_info.total_posts": 1 },
            $push: { blogs: blog._id },
          }
        );

        const activity = new activityModel({
          title,
          type: "blog_add",
          author: authorId,
        });

        try {
          await activity.save();
        } catch (error) {
          console.log(error);
        }
      }

      return res.json({ success: true, message: "Blog Created" });
    } catch (error) {
      console.log(error);
      res.json({
        success: false,
        message: "An Unknown Error Occured",
      });
    }
  }
};

//all blog list
const listBlogs = async (req, res) => {
  console.log("______________________________________________________");
  console.log("LIST BLOGS ENDPOINT CALLED");
  console.log("______________________________________________________");

  let { author_id, tags, query, page, max, draft, eliminate_blog } = req.body;
  draft = Boolean(draft);
  let findQuery;

  if (eliminate_blog) {
    findQuery = {
      tags: { $in: tags },
      draft,
      blog_id: { $ne: eliminate_blog },
    };
  } else if (query && author_id) {
    findQuery = {
      $or: [
        { title: new RegExp(query, "i") },
        { tags: new RegExp(query, "i") },
        { desc: new RegExp(query, "i") },
      ],
      author: author_id,
      draft,
    };
  } else if (query) {
    findQuery = {
      $or: [
        { title: new RegExp(query, "i") },
        { tags: new RegExp(query, "i") },
        { desc: new RegExp(query, "i") },
      ],
      draft,
    };
  } else if (author_id) {
    findQuery = { author: author_id, draft };
  } else {
    findQuery = { draft };
  }
  // let maxLimit = max;
  try {
    const blogs = await blogModel
      .find(findQuery)
      .populate(
        "author",
        "personal_info.first_name personal_info.last_name personal_info.profile_img _id"
      )
      .sort({ publishedAt: -1 })
      .skip((page - 1) * max)
      .limit(max);
    res.json({ success: true, data: blogs });
    console.log("BLOGS RETURNED");
    console.log("_______________________________________");
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "error" });
  }
};

const countBlogs = async (req, res) => {
  console.log("_______________________________________");
  console.log("BLOG COUNT CALLED");
  console.log("_______________________________________");
  let { author_id, query, tag, tags, draft, eliminate_blog } = req.body;
  let findQuery;

  if (tag && !eliminate_blog) {
    findQuery = { tags: tag, draft };
  } else if (eliminate_blog) {
    findQuery = {
      tags: { $in: tags },
      draft,
      blog_id: { $ne: eliminate_blog },
    };
  } else if (query && author_id) {
    findQuery = {
      $or: [
        { title: new RegExp(query, "i") },
        { tags: new RegExp(query, "i") },
        { desc: new RegExp(query, "i") },
      ],
      author: author_id,
      draft,
    };
  } else if (query) {
    findQuery = {
      $or: [
        { title: new RegExp(query, "i") },
        { tags: new RegExp(query, "i") },
        { desc: new RegExp(query, "i") },
      ],
      draft,
    };
  } else if (author_id) {
    findQuery = { author: author_id, draft };
  } else {
    findQuery = { draft };
  }
  blogModel
    .countDocuments(findQuery)
    .then((count) => {
      return res.json({ totalDocs: count });
    })
    .catch((err) => {
      console.log(err.message);
      return res.json({ error: err.message });
    });
};

const getBlog = async (req, res) => {
  let { blog_id, mode } = req.body;

  let incrementVal = mode == "edit" ? 0 : 1;

  blogModel
    .findOneAndUpdate({ blog_id }, { $inc: { total_reads: incrementVal } })
    .populate(
      "author",
      "personal_info.first_name personal_info.last_name personal_info.profile_img personal_info.email -_id"
    )
    .select(
      "blog_id title banner desc tags content total_reads publishedAt draft"
    )
    .then((blog) => {
      userModel
        .findOneAndUpdate(
          { "personal_info.email": blog.author.personal_info.email },
          {
            $inc: { "account_info.total_reads": incrementVal },
          }
        )
        .catch((err) => {
          console.log(err.message);
          return res.json({ error: err.message });
        });

      // if blog

      return res.json({ success: true, data: blog });
    })
    .catch((err) => {
      console.log(err.message);
      return res.json({ error: err.message });
    });
};

// const countSearchedBlogs = async (req, res) => {
//   let { query, category } = req.body;
//   let findQuery;

//   if (category) {
//     findQuery = { category: category };
//   } else if (query) {
//     findQuery = { title: new RegExp(query, "i") };
//   }
//   blogModel
//     .countDocuments(findQuery)
//     .then((count) => {
//       return res.json({ totalDocs: count });
//     })
//     .catch((err) => {
//       console.log(err.message);
//       return res.json({ error: err.message });
//     });
// };

//remove blog

const removeBlog = async (req, res) => {
  console.log("_______________________________________________");
  console.log("DELETE BLOG ENDPOINT HIT");
  console.log("_______________________________________________");

  let { blog_id, draft } = req.body;

  try {
    const blog = await blogModel.findOne({ blog_id });
    const title = blog.title;
    fs.unlink(
      `uploads/blog-images/${blog.banner}uploads/${blog.banner}`,
      () => {}
    );

    await blogModel.findOneAndDelete({ blog_id });

    if (draft) {
      await userModel.findOneAndUpdate(
        { _id: blog.author },
        {
          $inc: { "account_info.total_drafts": -1 },
          $pull: { blogs: blog._id },
        }
      );
    } else {
      await userModel.findOneAndUpdate(
        { _id: blog.author },
        {
          $inc: { "account_info.total_posts": -1 },
          $pull: { blogs: blog._id },
        }
      );

      const activity = new activityModel({
        title,
        type: "blog_del",
        author: req.user,
      });

      try {
        await activity.save();
      } catch (error) {
        console.log(error);
      }
    }

    res.status(200).json({ success: true, message: "Blog deleted" });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ success: false, message: "Something went wrong somewhere" });
  }
};

export const trendingBlogs = async (req, res) => {
  try {
    const blogs = await blogModel
      .find({ draft: false })
      .populate(
        "author",
        "personal_info.first_name personal_info.last_name personal_info.profile_img -_id"
      )
      .sort({ total_reads: -1, publishedAt: -1 })
      .limit(3);
    res.status(200).json({ success: true, data: blogs });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "error" });
  }
};

export { listBlogs, removeBlog, countBlogs, getBlog, addImgInBlog, createBlog };
