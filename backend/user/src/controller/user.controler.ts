import {Request,Response} from "express"
import userModel from "../models/user.model.js";
import { generateToken } from "../utils/utils.js";

export const userRegister = async (req:Request,res:Response)=>{
    try {
        const {name,email,password,safety,gender,isStudent,contact} =  req.body;
        if(!name || !email || !password || !gender || !isStudent || !contact){
            return res.status(400).json({
                success:false,
                message:"please fill the all fields "
            })
        }
        const isExist  = await userModel.findOne({$or:[{contact},{email}]})
        if(isExist){
            return res.status(400).json({
                success:false,
                message:"already account registered"
            })
        }

        const newUser = await userModel.create({
            name,
            email,
            password,
            safety,
            gender,
            isStudent,
            contact
        });
        if(!newUser){
            return res.status(500).json({
                success:false,
                message:"something went error try again"
            })
        }

        const token = generateToken(newUser);
        res.cookie("auth-token", token,{
            maxAge:48*60*60*1000,
            secure:process.env.NODE_ENV === "production",
            httpOnly:true
        })
        return res.status(201).json({
            success:true,
            message:"register successfuly",
            token,
            user:newUser
        })
    } catch (error:any) {
        return res.status(500).json({
            success:false,
            message:error.message || "internal error"
        })
    }
}
export const userLogin = async(req:Request,res:Response)=>{
try {
    const {email,password} = req.body;
    if(!email || !password){
        return res.status(401).json({
            success:false,
            message:"please fill the all fields"
        })
    }
    const user = await userModel.findOne({email}).select("+password");
    if(!user){
        return res.status(404).json({
            success:false,
            message:"user is not found"
        })
    }

    const isMatched = await user.isPasswordMatch(password);
    if(!isMatched){
        return res.status(401).json({
            success:false,
            message:"email or password is not matched"
        })
    };

    const token = generateToken(user);
    res.cookie("auth-token",token,{
        maxAge:24*60*60*1000,
        httpOnly:true,
        secure:process.env.NODE_ENV=="production"
    })

    return res.status(200).json({
        success:true,
        message:"user successuly logined",
        token,
        user
    })
} catch (error:any) {
    return res.status(500).json({
        success:false,
        message:error.message||"internal error"
    })
}
}