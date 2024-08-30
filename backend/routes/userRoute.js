import express from "express";
import { verifyJWT } from "../middleware/verifyJWT.js";
import { uplaod } from "../middleware/upload.js";
import {
  changeUserPassword,
  getUserData,
  listUsers,
  loginUser,
  registerUser,
  removeUser,
  updateUser,
} from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.post("/register", registerUser);

userRouter.post("/login", loginUser);

userRouter.post(
  "/update-user",
  verifyJWT,
  uplaod.single("profile_img"),
  updateUser
);

userRouter.post("/change-password", verifyJWT, changeUserPassword);

userRouter.post("/get-user", getUserData);

userRouter.post("/list-users", verifyJWT, listUsers);

userRouter.post("/remove-user", verifyJWT, removeUser);

export default userRouter;
