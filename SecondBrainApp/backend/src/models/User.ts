import mongoose from "mongoose";
import { string } from "zod";

const userSchema = new mongoose.Schema({
    
    username:{type:String,required:true,unique:true},

    password:{type:String,required:true},

    share:{type:Boolean,default:false}
})

const User = mongoose.model("User",userSchema)

export default User;