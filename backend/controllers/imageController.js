import imageModel from "../models/ImageModel.js";
import fs from "fs";
import userModel from "../models/userModel.js";
import compressImages from "compress-images";

export const addImage = async (req, res) => {
  console.log("IMAGE UPLOAD ENDPOINT HIT");
  let { desc } = req.body;
  let author = req.user;

  const descLimit = 150;

  if (!req.file) {
    return res
      .status(400)
      .json({ success: false, message: "Can't process without an image" });
  }

  if (!desc || desc.length > descLimit) {
    return res.status(400).json({
      success: false,
      message: `Image must have a decription under ${descLimit} characters`,
    });
  }

  const imageName = req.file.filename;
  const imagePath = req.file.path;

  const compressedFilePath = "uploads/gallery/" + imageName;
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

      if (error) {
        return res
          .status(500)
          .json({ success: false, message: "Could not upload image" });
      }

      const newImage = new imageModel({
        image: imageName,
        desc,
        author,
      });

      try {
        await newImage.save();
        await userModel.findOneAndUpdate(
          { _id: author },
          {
            $inc: { "account_info.total_images": 1 },
            $push: { images: newImage._id },
          }
        );
        return res
          .status(200)
          .json({ success: true, message: "Image Uploaded" });
      } catch (error) {
        console.log(error);
        res
          .status(500)
          .json({ success: false, message: "Something went wrong somewhere" });
      }
    }
  );
};

export const listImages = async (req, res) => {
  let { query, author_id, page, max } = req.body;
  let findQuery;
  if (query && author_id) {
    findQuery = { desc: new RegExp(query, "i"), author: author_id };
  } else if (query) {
    findQuery = { desc: new RegExp(query, "i") };
  } else if (author_id) {
    findQuery = { author: author_id };
  }
  try {
    const images = await imageModel
      .find(findQuery)
      .populate(
        "author",
        "personal_info.first_name personal_info.last_name personal_info.profile_img -_id"
      )
      .sort({ uploadedAt: -1 })
      .skip((page - 1) * max)
      .limit(max);

    res.status(200).json({
      success: true,
      message: "Images retrieved successfully",
      data: images,
    });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ success: false, message: "Something went wrong somewhere" });
  }
};

export const countImages = async (req, res) => {
  let { query, author_id } = req.body;
  let findQuery;
  if (query && author_id) {
    findQuery = { desc: new RegExp(query, "i"), author: author_id };
  } else if (query) {
    findQuery = { desc: new RegExp(query, "i") };
  } else if (author_id) {
    findQuery = { author: author_id };
  }
  try {
    const count = await imageModel.countDocuments(findQuery);
    return res.status(200).json({
      success: true,
      message: "Image count successful",
      totalDocs: count,
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ success: false, message: error.message });
  }
};
