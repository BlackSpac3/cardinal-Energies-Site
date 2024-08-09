import mongoose, { Schema } from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    thumbnail: { type: String, required: true },
    title: { type: String, required: true },
    desc: { type: String, required: true },
    category: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: Schema.Types.ObjectId, required: true, ref: "users" },
    total_reads: { type: Number, default: 0 },
  },
  { timestamps: { createdAt: "publishedAt" } }
);

const blogModel = mongoose.model.blog || mongoose.model("blog", blogSchema);

export default blogModel;
