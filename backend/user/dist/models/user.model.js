import mongoose from "mongoose";
import bcrypt from "bcryptjs";
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Enter the User name"],
    },
    email: {
        type: String,
        required: [true, "Enter the User email"],
    },
    gender: {
        type: String,
        required: [true, "Enter the User gender"],
        enum: ["male", "female"]
    },
    contact: {
        type: Number,
        required: [true, "Enter the User contact number"],
    },
    safety: [
        {
            contact: {
                type: Number
            },
            name: {
                type: String
            }
        }
    ],
    isStudent: {
        type: Boolean,
        default: false
    },
    password: {
        type: String,
        required: [true, "please enter the password"],
        select: false
    }
});
userSchema.pre("save", async function (next) {
    if (this.isModified("password")) {
        this.password = await bcrypt.hash(this.password, 10);
    }
    next();
});
userSchema.methods.isPasswordMatch = async function (password) {
    return await bcrypt.compare(password, this.password);
};
const userModel = mongoose.models?.User || mongoose.model("User", userSchema);
export default userModel;
