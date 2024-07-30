import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
  thumbnail: { type: String, required: true },
  title: { type: String, required: true },
  desc: { type: String, required: true },
  date: { type: String, required: true },
  category: { type: String, required: true },
});

const blogModel = mongoose.model.blog || mongoose.model("blog", blogSchema);

export default blogModel;
