import express from "express";
const router=express.Router();

import {register , login, logout} from "../controllers/auth_Controller.js";
import { verifyToken } from "../middleware/authMiddleware.js";


router.post("/signup" , register );
router.post("/login" , login);
router.post("/logout" , logout);

router.get("/test-cookie", (req, res) => {
  console.log("Cookies received at /test-cookie:", req.cookies);
  res.json({ cookies: req.cookies });
});

// Test route to verify auth middleware
router.get("/verify", verifyToken, (req, res) => {
  res.json({
    message: "Token verified successfully",
    user: req.user,
    tokenSource: req.cookies.token ? "cookie" : "header"
  });
});

export default router;