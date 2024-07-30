import express from "express";
import {
  addBlog,
  listBlog,
  removeBlog,
} from "../controllers/blogController.js";
import multer from "multer";

const blogRouter = express.Router();

//image storage engine

const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    return cb(null, `${Date.now()}${file.originalname}`);
  },
});

const uplaod = multer({ storage: storage });

blogRouter.post("/add", uplaod.single("thumbnail"), addBlog);

blogRouter.get("/list", listBlog);

blogRouter.post("/remove", removeBlog);

export default blogRouter;
