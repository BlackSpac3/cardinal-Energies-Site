import mongoose, { Schema } from "mongoose";

const imageSchema = new mongoose.Schema(
  {
    image: { type: String },
    desc: { type: String, maxlength: 150 },
    author: { type: Schema.Types.ObjectId, required: true, ref: "users" },
  },
  { timestamps: { createdAt: "uploadedAt" } }
);

const imageModel = mongoose.model.blog || mongoose.model("images", imageSchema);

export default imageModel;
