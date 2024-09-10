import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";
import "dotenv/config";
import compressImages from "compress-images";
import fs from "fs";

const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,20}$/;

const formatUserData = (user) => {
  const access_token = jwt.sign(
    { id: user._id },

    process.env.SECRET_ACCESS_KEY
  );

  return {
    access_token,
    user_id: user._id,
    profile_img: user.personal_info.profile_img,
    first_name: user.personal_info.first_name,
    last_name: user.personal_info.last_name,
    email: user.personal_info.email,
    bio: user.personal_info.bio,
    email_validation_status: user.account_info.email_validation_status,
    total_posts: user.account_info.total_posts,
    total_reads: user.account_info.total_reads,
    total_drafts: user.account_info.total_drafts,
    total_images: user.account_info.total_images,
    user_type: user.account_info.type,
    blogs: user.blogs,
  };
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userModel.findOne({
      "personal_info.email": email,
      disabled: false,
    });

    if (!user) {
      return res.json({ success: false, message: `User does not exist` });
    }

    const isMatch = await bcrypt.compare(password, user.personal_info.password);
    if (!isMatch) {
      return res.json({ success: false, message: "Invalid credentials" });
    }

    res.json({ success: true, user: formatUserData(user) });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: "An unexpected",
      error: error.message,
    });
  }
};

export const getUserData = async (req, res) => {
  const { email } = req.body;
  console.log(req.body);
  console.log(req.file);
  console.log(email);
  const user = await userModel
    .findOne({ "personal_info.email": email })
    .select("-personal_info.password -updatedAt -blogs -__v");

  if (!user) {
    return res.status(404).json({ success: false, message: "user not found" });
  }

  res
    .status(200)
    .json({ success: true, message: "User found", data: user.account_info });
};

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.SECRET_ACCESS_KEY);
};

/////////////////////////////
//// REGISTER USER ROUTE ////
/////////////////////////////

export const registerUser = async (req, res) => {
  console.log("REGISTER USER ENDPOINT CALLED");

  let { first_name, last_name, password, email, user_type } = req.body;

  let type;
  !user_type ? (type = "user") : (type = user_type);

  if (!password) {
    password = "Cardinal@12345";
  }

  try {
    //Check if user already exists
    const exists = await userModel.findOne({ "personal_info.email": email });
    if (exists) {
      return res
        .status(409)
        .json({ success: false, message: "User already exists" });
    }

    //vaidatinng mail format & strong password
    if (!validator.isEmail(email)) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid email",
      });
    }

    if (!passwordRegex.test(password)) {
      return res.status(400).json({
        success: false,
        message: "Please use a stronger password",
      });
    }

    //encrypting user password
    const salt = await bcrypt.genSalt(10);

    const encryptedPass = await bcrypt.hash(password, salt);

    const newUser = new userModel({
      personal_info: {
        first_name,
        last_name,
        email,
        password: encryptedPass,
      },
      account_info: {
        type,
      },
    });

    const user = await newUser.save();
    const token = generateToken(user._id);

    res.status(200).json({
      success: true,
      message: `${
        first_name[0].toUpperCase() + first_name.slice(1)
      } added successfully`,
      token,
    });
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .json({ success: false, message: "Something went wrong somewhere" });
  }
};

//////////////////////////
//// LIST USERS ROUTE ////
//////////////////////////

export const listUsers = async (req, res) => {
  console.log("LIST USERS ENDPOINT CALLED");
  let { acct_type } = req.body;
  let findQuery;

  if (acct_type) {
    findQuery = {
      "account_info.type": acct_type,
      _id: { $ne: req.user },
      disabled: false,
    };
  } else {
    findQuery = { _id: { $ne: req.user }, disabled: false };
  }
  try {
    const users = await userModel
      .find(findQuery)
      .select("-personal_info.password -updatedAt -blogs -__v")
      // .populate(
      //   "blogs",
      //   "personal_info.first_name personal_info.last_name personal_info.profile_img -_id"
      // )
      .sort({ joinedAt: -1 });
    res.status(200).json({ success: true, data: users });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ success: false, message: "Something went wrong somewhere" });
  }
};

////////////////////////////////////
//// CHANGE USER PASSWORD ROUTE ////
////////////////////////////////////

export const changeUserPassword = async (req, res) => {
  let { currPassword, newPassword } = req.body;

  if (!passwordRegex.test(newPassword)) {
    return res.json({ success: false, message: "Set a stronger password" });
  }

  const user = await userModel.findOne({ _id: req.user });

  const match = await bcrypt.compare(currPassword, user.personal_info.password);

  if (!match) {
    return res.json({ success: false, message: "Incorrect Password" });
  }

  const salt = await bcrypt.genSalt(10);

  const encryptedPass = await bcrypt.hash(newPassword, salt);

  userModel
    .findOneAndUpdate(
      { _id: req.user },
      { "personal_info.password": encryptedPass }
    )
    .then((u) => {
      console.log(encryptedPass);
      res.json({ success: true, message: "Password Updated" });
    })
    .catch((err) => {
      console.log(err);
      res.json({ success: false, message: "Something went wrong somewhere" });
    });
};

///////////////////////////
//// UPDATE USER ROUTE ////
///////////////////////////

export const updateUser = async (req, res) => {
  console.log("UPDATE USER ENDPOINT CALLED");
  let { first_name, last_name, profile_img, email, bio } = req.body;

  const bioLimit = 150;

  if (first_name.length < 2 || last_name.length < 2) {
    return res.status(403).json({
      success: false,
      message: "Name cannot be less than 2 characters",
    });
  }

  if (bio.length > bioLimit) {
    return res.status(403).json({
      success: false,
      message: `Bio should not be more than ${bioLimit} characters`,
    });
  }

  if (req.file) {
    profile_img = req.file.filename;
    let profile_imgPath = req.file.path;
    const compressedFilePath = "uploads/profile-images/" + profile_img;
    const compression = 60;
    compressImages(
      profile_imgPath,
      compressedFilePath,
      {
        compress_force: false,
        statistic: true,
        autoupdate: true,
      },
      false,
      { jpg: { engine: "mozjpeg", command: ["-quality", compression] } },
      {
        png: {
          engine: "pngquant",
          command: ["--quality=" + compression + "-" + compression, "-o"],
        },
      },
      { svg: { engine: "svgo", command: "--multipass" } },
      {
        gif: {
          engine: "gifsicle",
          command: ["--colors", "64", "--use-col=web"],
        },
      },
      async (error, completed, statistic) => {
        console.log("______");
        console.log(error);
        console.log(completed);
        console.log(statistic);
        console.log("______");

        fs.unlink(profile_imgPath, (err) => {
          if (err) throw err;
        });
      }
    );
  }

  let updateObj = {
    "personal_info.first_name": first_name,
    "personal_info.last_name": last_name,
    "personal_info.email": email,
    "personal_info.profile_img": profile_img,
    "personal_info.bio": bio,
  };

  userModel
    .findOneAndUpdate({ _id: req.user }, updateObj, {
      runValidators: true,
    })
    .then(() => {
      const data = { first_name, email, last_name, profile_img, bio };
      return res.status(200).json({
        data,
        message: "Profile updated successfully",
      });
    })
    .catch((err) => {
      if (err.code == 11000) {
        return res
          .status(500)
          .json({ error: err.message, message: "Email already in use" });
      }
    });
};

//////////////////////////
/// DELETE USER ROUTE ////
///////////////////////////

export const removeUser = async (req, res) => {
  console.log("REMOVE USER ENDPOINT CALLED");
  let { del_user } = req.body;

  userModel
    .findById(req.user, "account_info.type")
    .then(({ account_info: { type } }) => {
      if (type != "admin") {
        return res
          .status(401)
          .json({ success: false, message: "Invalid access permision" });
      }
      userModel
        .findOneAndUpdate({ _id: del_user }, { disabled: true })
        .then(() => {
          console.log("removed user");
          res
            .status(200)
            .json({ success: true, message: "User removed successfully" });
        });
    });
};
