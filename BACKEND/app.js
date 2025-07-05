import express from "express";
const app=express(); 
import cors from 'cors';
import dotenv from "dotenv";
import connectDB from "./src/config/monog.config.js"
dotenv.config("./.env");

import short_urlRoute from "./src/routes/short_urlRoute.js"
import redirect_urlRoute from "./src/routes/redirect_urlRoute.js"


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/" , (req , res)=>{
    res.send("sherrrrr cheetaha hi bol de ");
})

app.use("/api/create" , short_urlRoute);

app.use("/", redirect_urlRoute);


app.listen(5000 , ()=>{
    connectDB();
    console.log("server is running on PORT 5000");
})