import express from "express";
const router=express.Router();
import {shortUrl}  from "../controllers/short_urlController.js";


router.post("/" , shortUrl);


export default router;