import blogModel from "../models/blogModel.js";
import fs from "fs";
import { nanoid } from "nanoid";
import userModel from "../models/userModel.js";

//add image in blog

const addImgInBlog = async (req, res) => {
  let image_filename = `${req.file.filename}`;
  res.json({
    success: 1,
    file: { url: `http://localhost:4000/blog-images/${image_filename}` },
  });
};
//create blog

const createBlog = async (req, res) => {
  console.log("bCREATE BLOG ENDPOINT HIT");
  let { title, desc, banner, content, tags, draft, id } = req.body;
  let authorId = req.user;

  if (req.file) {
    banner = `${req.file.filename}`;
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
  let { author_id, tag, query, page, max, draft, eliminate_blog } = req.body;
  draft = Boolean(draft);
  let findQuery;

  if (tag && !eliminate_blog) {
    findQuery = { tags: tag, draft };
  } else if (eliminate_blog) {
    findQuery = { tags: tag, draft, blog_id: { $ne: eliminate_blog } };
  } else if (query && author_id) {
    findQuery = { title: new RegExp(query, "i"), author: author_id, draft };
  } else if (query) {
    findQuery = { title: new RegExp(query, "i"), draft };
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
        "personal_info.first_name personal_info.last_name personal_info.profile_img -_id"
      )
      .sort({ publishedAt: -1 })
      .skip((page - 1) * max)
      .limit(max);
    res.json({ success: true, data: blogs });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "error" });
  }
};

const countBlogs = async (req, res) => {
  let { author_id, query, tag, draft, eliminate_blog } = req.body;
  let findQuery;

  if (tag && !eliminate_blog) {
    findQuery = { tags: tag, draft };
  } else if (eliminate_blog) {
    findQuery = { tags: tag, draft, blog_id: { $ne: eliminate_blog } };
  } else if (query && author_id) {
    findQuery = { title: new RegExp(query, "i"), author: author_id, draft };
  } else if (query) {
    findQuery = { title: new RegExp(query, "i"), draft };
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

  let incrementVal = mode == "edit " ? 0 : 1;

  blogModel
    .findOneAndUpdate({ blog_id }, { $inc: { total_reads: incrementVal } })
    .populate(
      "author",
      "personal_info.first_name personal_info.last_name personal_info.profile_img personal_info.email -_id"
    )
    .select("blog_id title banner desc tags content total_reads publishedAt")
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
  try {
    const blog = await blogModel.findById(req.body.id);
    fs.unlink(`uploads/${blog.banner}`, () => {});

    await blogModel.findByIdAndDelete(req.body.id);

    res.json({ success: true, message: "Blog deleted" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

export { listBlogs, removeBlog, countBlogs, getBlog, addImgInBlog, createBlog };
