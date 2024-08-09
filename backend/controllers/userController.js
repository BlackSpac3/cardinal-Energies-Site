import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";
import "dotenv/config";

const formatUserData = (user) => {
  const access_token = jwt.sign(
    { id: user._id },
    process.env.SECRET_ACCESS_KEY
  );

  return {
    access_token,
    profile_img: user.personal_info.profile_img,
    first_name: user.personal_info.first_name,
    last_name: user.personal_info.last_name,
    email: user.personal_info.email,
    email_validation_status: user.account_info.email_validation_status,
    total_posts: user.account_info.total_posts,
    user_type: user.account_info.type,
    blogs: user.blogs,
  };
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userModel.findOne({ "personal_info.email": email });

    if (!user) {
      return res.json({ success: false, message: `User does not exist` });
    }

    const isMatch = await bcrypt.compare(password, user.personal_info.password);
    if (!isMatch) {
      return res.json({ success: false, message: "Invalid credentials" });
    }
    // const token = generateToken(user._id);
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

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};

const registerUser = async (req, res) => {
  const { first_name, last_name, password, email } = req.body;
  try {
    //Check if user already exists
    const exists = await userModel.findOne({ email });
    if (exists) {
      return res.json({ success: false, message: "User already exists" });
    }

    //vaidatingn mail format & strong password
    if (!validator.isEmail(email)) {
      return res.json({
        success: false,
        message: "Please enter a valid email",
      });
    }

    if (password.length < 8) {
      return res.json({
        success: false,
        message: "Please use a stronger password",
      });
    }

    //encrypting user password
    const salt = await bcrypt.genSalt(10);

    const encryptedPass = await bcrypt.hash(password, salt);

    const newUser = new userModel({
      personal_info: {
        first_name: first_name,
        last_name: last_name,
        email: email,
        password: encryptedPass,
      },
    });

    const user = await newUser.save();
    const token = generateToken(user._id);

    res.json({ success: true, token });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "An unexpected error has occured" });
  }
};

export { loginUser, registerUser };
