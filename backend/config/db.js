import mongoose from "mongoose";
import "dotenv/config";

export const connectToDB = async () => {
  await mongoose
    .connect(process.env.DB_LOCATION, { autoIndex: true })
    .then(() => console.log("Database connection successful"));
};
