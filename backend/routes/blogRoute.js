import express from "express";
import {
  addBlog,
  listBlog,
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
  destination: "uploads",
  filename: (req, file, cb) => {
    return cb(null, `${Date.now()}${file.originalname}`);
  },
});

const uplaod = multer({ storage: storage });

blogRouter.post("/add", verifyJWT, uplaod.single("thumbnail"), addBlog);

blogRouter.get("/list", listBlog);

blogRouter.post("/remove", removeBlog);

export default blogRouter;
