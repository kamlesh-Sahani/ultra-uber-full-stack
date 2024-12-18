import express from "express";
import userRoute from "./routes/user.route.js";
const app = express();
app.use(express.json());



app.use("/api/user",userRoute);

export default app;