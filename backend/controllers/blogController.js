import { error } from "console";
import blogModel from "../models/blogModel.js";
import fs from "fs";

//add blog item

const addBlog = async (req, res) => {
  let authorId = req.user;
  let image_filename = `${req.file.filename}`;
  const blog = new blogModel({
    thumbnail: image_filename,
    title: req.body.title,
    desc: req.body.desc,
    category: req.body.category,
    content: req.body.content,
    author: authorId,
  });
  try {
    await blog.save();
    res.json({ success: true, message: "Blog Created" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

//all blog list
const listBlog = async (req, res) => {
  try {
    const foods = await blogModel.find({});
    res.json({ success: true, data: foods });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "error" });
  }
};

//remove blog

const removeBlog = async (req, res) => {
  try {
    const blog = await blogModel.findById(req.body.id);
    fs.unlink(`uploads/${blog.thumbnail}`, () => {});

    await blogModel.findByIdAndDelete(req.body.id);

    res.json({ success: true, message: "Blog deleted" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

export { addBlog, listBlog, removeBlog };
