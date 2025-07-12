import express from "express";
const router=express.Router();
import { analytics } from "../controllers/analytics_Controller.js";
import { verifyToken } from "../middleware/authMiddleware.js";

router.get("/analytics", verifyToken, analytics);

export default router;