import express from "express";
import { verifyJWT } from "../middleware/verifyJWT.js";
import { uplaod } from "../middleware/upload.js";
import {
  addImgInBlog,
  countBlogs,
  createBlog,
  getBlog,
  listBlogs,
  removeBlog,
  trendingBlogs,
} from "../controllers/blogController.js";

const blogRouter = express.Router();

// blogRouter.post("/add", verifyJWT, uplaod.single("banner"), addBlog);
blogRouter.post("/create", verifyJWT, uplaod.single("banner"), createBlog);

blogRouter.post("/create/add-image", uplaod.single("image"), addImgInBlog);

blogRouter.post("/list", listBlogs);

blogRouter.post("/remove", verifyJWT, removeBlog);

blogRouter.post("/all-latest-blogs-count", countBlogs);
blogRouter.post("/get-blog", getBlog);
blogRouter.post("/trending", trendingBlogs);

export default blogRouter;
