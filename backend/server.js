import express from "express";
import cors from "cors";
import "dotenv/config";

import { connectToDB } from "./config/db.js";
import blogRouter from "./routes/blogRoute.js";
import userRouter from "./routes/userRoute.js";

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

app.use("/thumbnails", express.static("uploads"));

app.get("/", (req, res) => {
  res.send("API Working");
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
