import express from "express";
import { userRegister, userLogin, userProfile } from "../controller/user.controler.js";
const router = express.Router();
router.post("/register", userRegister);
router.post("/login", userLogin);
router.get("/profile", userProfile);
export default router;
