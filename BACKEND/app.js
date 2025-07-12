import express from "express";
const app=express(); 
import cors from 'cors';
import dotenv from "dotenv";
import connectDB from "./src/config/monog.config.js"
import cookieParser from 'cookie-parser';
dotenv.config();

import short_urlRoute from "./src/routes/short_urlRoute.js"
import auth_Route from "./src/routes/auth_Route.js";
import redirect_urlRoute from "./src/routes/redirect_urlRoute.js"

app.use(cookieParser());
app.use(cors({
  origin: 'http://localhost:5173', // your frontend origin
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,               // allow cookies
}));
app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.get("/" , (req , res)=>{
    res.send("sherrrrr cheetaha hi bol de ");
})

app.use("/api/create" , short_urlRoute);
app.use("/api/auth" , auth_Route);

app.use("/", redirect_urlRoute);


app.listen(5000 , ()=>{
    connectDB();
    console.log("server is running on PORT 5000");
})
