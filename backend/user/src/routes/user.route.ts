import express from "express";
import { userRegister } from "../controller/user.controler.js";
const router = express.Router();

router.post("/register",userRegister);

export default router;