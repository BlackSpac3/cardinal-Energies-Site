import mongoose from "mongoose";

export const connectToDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://toyinacobs12:toyinacobs12@cluster0.mpbraxh.mongodb.net/cardinal_energies"
    )
    .then(() => console.log("Database connection successful"));
};
