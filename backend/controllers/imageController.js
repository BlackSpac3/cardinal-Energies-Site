import imageModel from "../models/ImageModel.js";
import fs from "fs";
import { nanoid } from "nanoid";
import userModel from "../models/userModel.js";

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

  const image = req.file.filename;

  if (desc.length > descLimit) {
    return res.status(400).json({
      success: false,
      message: `Description cannot be more than ${descLimit} characters`,
    });
  }

  const newImage = new imageModel({
    image,
    desc,
    author,
  });

  try {
    await newImage.save();
    return res.status(200).json({ success: true, message: "Image Uploaded" });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ success: false, message: "Something went wrong somewhere" });
  }
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
