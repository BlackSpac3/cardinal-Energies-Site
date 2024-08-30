import express from "express";
import cors from "cors";
import "dotenv/config";

import { connectToDB } from "./config/db.js";
import blogRouter from "./routes/blogRoute.js";
import userRouter from "./routes/userRoute.js";
import imageRouter from "./routes/imageRoute.js";
import employeeRouter from "./routes/employeeRoute.js";

//App config
const app = express();
const port = 4000;

//Middleware
app.use(express.json());
app.use(cors());

//DB connection
connectToDB();

//API endpoints
app.use("/api/blog", blogRouter);

app.use("/api/user", userRouter);

app.use("/api/image", imageRouter);

app.use("/api/employee", employeeRouter);

app.use("/blog-images", express.static("uploads/blog-images"));

app.use("/profile-images", express.static("uploads/profile-images"));

app.use("/images", express.static("uploads/gallery"));

app.use("/employee-images", express.static("uploads/employee-images"));

app.get("/", (req, res) => {
  res.send("API Working");
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
