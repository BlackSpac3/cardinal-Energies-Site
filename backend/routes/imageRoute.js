import express from "express";
import { verifyJWT } from "../middleware/verifyJWT.js";
import { uplaod } from "../middleware/upload.js";
import {
  addImage,
  countImages,
  listImages,
} from "../controllers/imageController.js";

const imageRouter = express.Router();

imageRouter.post("/add", verifyJWT, uplaod.single("image"), addImage);

imageRouter.post("/list", listImages);

imageRouter.post("/count", countImages);

// imageRouter.post("/remove", removeBlog);

// imageRouter.post("/get-image", getBlog);

export default imageRouter;
