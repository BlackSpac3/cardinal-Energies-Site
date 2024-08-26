import express from "express";
import {
  addImgInBlog,
  countBlogs,
  createBlog,
  getBlog,
  listBlogs,
  removeBlog,
} from "../controllers/blogController.js";
import multer from "multer";
import jwt from "jsonwebtoken";

const blogRouter = express.Router();

const verifyJWT = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token === null) {
    return res.json({ success: false, message: "No access token" });
  }

  jwt.verify(token, process.env.SECRET_ACCESS_KEY, (err, user) => {
    if (err) {
      return res.json({ success: false, message: "Access token is invalid" });
    }
    req.user = user.id;

    next();
  });
};

//image storage engine

const storage = multer.diskStorage({
  destination: "uploads/blog-images",
  filename: (req, file, cb) => {
    return cb(null, `${Date.now()}${file.originalname}`);
  },
});

const uplaod = multer({ storage: storage });

// blogRouter.post("/add", verifyJWT, uplaod.single("banner"), addBlog);
blogRouter.post("/create", verifyJWT, uplaod.single("banner"), createBlog);

blogRouter.post("/create/add-image", uplaod.single("image"), addImgInBlog);

blogRouter.post("/list", listBlogs);

blogRouter.post("/remove", removeBlog);

blogRouter.post("/all-latest-blogs-count", countBlogs);
blogRouter.post("/get-blog", getBlog);

export default blogRouter;
