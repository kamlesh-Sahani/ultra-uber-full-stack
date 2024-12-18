import { type UserType } from "../models/user.model.js";
import jwt from "jsonwebtoken"
export const generateToken = (newUser: UserType) => {
    const secret = process.env.JWT_SECRET || "sfsfkjds";
    const token = jwt.sign({ _id: newUser._id }, secret, { expiresIn: "2d" });
    return token;
}