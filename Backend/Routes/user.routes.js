import express from "express"
import {protectRoute} from '../middleware/protectRoute.js'
import { followUnfollowUser, getSuggestedusers, getUserProfile, updateUser } from "../Controllers/user.controller.js";

const router = express.Router();

router.get("/profile/:username",protectRoute,getUserProfile);
router.get("/suggested",protectRoute,getSuggestedusers);
router.post("/follow/:id",protectRoute,followUnfollowUser);
router.post("/update",protectRoute,updateUser);

export default router;