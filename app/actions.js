"use server";

import jwt from "jsonwebtoken";
import blogModel from "@lib/models/blogModel";
import connectDB from "@lib/config/db";
import { revalidatePath } from "next/cache";
import axios from "axios";

export const verifyResetPassToken = async (token) => {
  if (!token) {
    return { success: false, message: "No token" };
  }

  const jwtHandler = (err, user) => {
    if (err) {
      if (err.name === "TokenExpiredError") {
        return { success: false, message: "Expired Token", user: null };
      }
      return { success: false, message: "Invalid Token", user: null };
    }

    return { success: true, message: "Token Valid", user: user.id };
  };

  const resposne = jwt.verify(token, process.env.NEXTAUTH_SECRET, jwtHandler);

  return resposne;
};

export const getStaticBlogs = async () => {
  await connectDB();
  const blogs = await blogModel.find({ draft: false });

  return blogs;
};

export const revalidateBlogs = () => {
  revalidatePath("/blogs/[blog_id]", "page");
  revalidatePath("/blogs");
};

export const getCommoditiesApi = async () => {
  try {
    const cocoaRes = await axios.get(
      `https://api.commoditic.com/api/v1/commodities?key=${process.env.API_KEY}&name=cocoa`
    );

    const cornRes = await axios.get(
      `https://api.commoditic.com/api/v1/commodities?key=${process.env.API_KEY}&name=corn`
    );

    const soybeansRes = await axios.get(
      `https://api.commoditic.com/api/v1/commodities?key=${process.env.API_KEY}&name=soybeans`
    );
    const riceRes = await axios.get(
      `https://api.commoditic.com/api/v1/commodities?key=${process.env.API_KEY}&name=rice`
    );
    const wheatRes = await axios.get(
      `https://api.commoditic.com/api/v1/commodities?key=${process.env.API_KEY}&name=wheat`
    );
    const coffeeRes = await axios.get(
      `https://api.commoditic.com/api/v1/commodities?key=${process.env.API_KEY}&name=coffee`
    );

    const cocoaData = cocoaRes.data[0];
    const cornData = cornRes.data[0];
    const soybeansData = soybeansRes.data[0];
    const riceData = riceRes.data[0];
    const wheatData = wheatRes.data[0];
    const coffeeData = coffeeRes.data[0];

    const list = [
      cocoaData,
      coffeeData,
      cornData,
      riceData,
      soybeansData,
      wheatData,
    ];

    return list;
  } catch (error) {
    console.log(error);
    return null;
  }
};
