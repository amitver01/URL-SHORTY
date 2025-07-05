import { nanoid } from "nanoid";
import urlSchema from "../models/shortURL.js";


export const shortUrl = async (req , res)=>{
    try{const {full_url} = req.body;
    const short=nanoid(7);
   // console.log(full_url);
    const newUrl=new urlSchema({
        full_url:full_url,
        short_url:short
    });
    newUrl.save();
    res.send(short);}
    catch(error){
        console.error("Error creating short URL:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}