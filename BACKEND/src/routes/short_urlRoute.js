import express from "express";
const router=express.Router();
import {shortUrl}  from "../controllers/short_urlController.js";
import { verifyToken } from "../middleware/authMiddleware.js";


router.post("/dashboard" ,verifyToken, shortUrl);
router.post("/" , shortUrl);


export default router;