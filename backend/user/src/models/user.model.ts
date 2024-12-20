import mongoose,{Document} from "mongoose";
import bcrypt from "bcryptjs"
export interface UserType extends Document{
    name:string;
    email:string;
    gender:"male"|"female",
    contact:number;
    safety:{
        contact:number;
        name:string;
    }[],
    isStudent:boolean;
    password:string;
    isPasswordMatch:(password:string)=>boolean;
}

const userSchema = new mongoose.Schema<UserType>({
    name:{
        type:String,
        required:[true,"Enter the User name"],
    },
    email:{
        type:String,
        required:[true,"Enter the User email"],
    },
    gender:{
        type:String,
        required:[true,"Enter the User gender"],
        enum:["male","female"]
    },
    contact:{
        type:Number,
        required:[true,"Enter the User contact number"],
    },
    safety:[
        {
          contact:{
            type:Number
          },
          name:{
            type:String
          }
        }

    ],
    isStudent:{
        type:Boolean,
        default:false
    },
    password:{
        type:String,
        required:[true,"please enter the password"],
        select:false
    }
})

userSchema.pre("save", async function(next){
    if(this.isModified("password")){
        this.password = await bcrypt.hash(this.password,10);
    }
    next()
});

userSchema.methods.isPasswordMatch = async function (password:string){
    return await bcrypt.compare(password,this.password);
}


const userModel = mongoose.models?.User as mongoose.Model<UserType> || mongoose.model("User",userSchema);
export default userModel;
