import mongoose from "mongoose";

const shortURLSchema = new mongoose.Schema({
    full_url:{
        type:String,
        required:true
    },
    short_url:{
        type:String,
        required:true,
        index:true,
        unique:true
    },
    no_click:{
        type:Number,
        default:0,
        required: true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"

    }
});

const shortURL=mongoose.model("shortURL" , shortURLSchema);
export default shortURL;