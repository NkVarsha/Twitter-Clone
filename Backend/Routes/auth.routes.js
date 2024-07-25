import express from "express"
import {protectRoute} from '../middleware/protectRoute.js'
import { signup,login,logout, getme } from "../Controllers/auth.controller.js";

const router = express.Router();

router.get("/me",protectRoute,getme);

router.post("/signup",signup)

router.post("/login",login)

router.post("/logout",logout)

export default router