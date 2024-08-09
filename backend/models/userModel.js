import { Schema } from "mongoose";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    personal_info: {
      profile_img: { type: String, default: "default" },
      first_name: {
        type: String,
        required: true,
        lowercase: true,
      },
      last_name: {
        type: String,
        required: true,
        lowercase: true,
      },
      email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true,
      },
      password: {
        type: String,
        required: true,
      },
    },
    account_info: {
      email_validation_status: {
        type: Boolean,
        default: false,
      },
      total_posts: {
        type: Number,
        default: 0,
      },
      type: {
        type: String,
        default: "user",
        enum: ["admin", "user"],
        lowercase: true,
      },
    },
    blogs: {
      type: [Schema.Types.ObjectId],
      ref: "blogs",
      default: [],
    },
  },
  {
    timestamps: {
      createdAt: "joinedAt",
    },
  }
);

const userModel = mongoose.model.user || mongoose.model("user", userSchema);

export default userModel;
