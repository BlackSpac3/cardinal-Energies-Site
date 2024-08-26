import express from "express";

import multer from "multer";
import jwt from "jsonwebtoken";
import {
  addImage,
  countImages,
  listImages,
} from "../controllers/imageController.js";

const imageRouter = express.Router();

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
  destination: "uploads/images",
  filename: (req, file, cb) => {
    return cb(null, `${Date.now()}${file.originalname}`);
  },
});

const uplaod = multer({ storage: storage });

imageRouter.post("/add", verifyJWT, uplaod.single("image"), addImage);

imageRouter.post("/list", listImages);

imageRouter.post("/count", countImages);

// imageRouter.post("/remove", removeBlog);

// imageRouter.post("/get-image", getBlog);

export default imageRouter;
