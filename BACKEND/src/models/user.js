import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    user_name:{
        type:String,
        requird:true
    },
    email:{
        type:String,
        requird:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
})

const User=mongoose.model("User" , userSchema);
export default User;