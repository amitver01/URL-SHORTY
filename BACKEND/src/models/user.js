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

const user=mongoose.model("user" , userSchema);
export default user;