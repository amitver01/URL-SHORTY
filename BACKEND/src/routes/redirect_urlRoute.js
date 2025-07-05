import express from "express";
const router=express.Router();

import {redirect_url} from "../controllers/redirect_urlController.js";


router.get("/:id" , redirect_url );

export default router;