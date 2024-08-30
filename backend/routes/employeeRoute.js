import express from "express";
import { verifyJWT } from "../middleware/verifyJWT.js";
import { uplaod } from "../middleware/upload.js";
import {
  addEmployee,
  listEmployees,
} from "../controllers/employeeController.js";

const employeeRouter = express.Router();

employeeRouter.post("/add", verifyJWT, uplaod.single("img"), addEmployee);
employeeRouter.post("/list", listEmployees);

export default employeeRouter;
