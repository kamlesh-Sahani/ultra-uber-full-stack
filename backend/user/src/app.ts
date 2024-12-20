import dotenv from "dotenv";
dotenv.config();
import express from "express";
import userRoute from "./routes/user.route.js"
import { dbConnected } from "./db/db.js";
const app = express();
app.use(express.json());
// database connection
dbConnected();
app.use("/api/user",userRoute);

export default app;