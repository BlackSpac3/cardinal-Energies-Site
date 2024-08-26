import express from "express";
import {
  changeUserPassword,
  getUserData,
  listUsers,
  loginUser,
  registerUser,
  updateUser,
} from "../controllers/userController.js";
import multer from "multer";
import jwt from "jsonwebtoken";

const userRouter = express.Router();

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

const storage = multer.diskStorage({
  destination: "uploads/profile-images",
  filename: (req, file, cb) => {
    return cb(null, `${Date.now()}${file.originalname}`);
  },
});

const uplaod = multer({ storage: storage });

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

userRouter.post("/list-users", listUsers);

export default userRouter;
