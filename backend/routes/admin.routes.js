import express from "express";
import { adminLogin, getAllDonors } from "../controllers/admin.controller.js";
import isAuthenticate from "../middleware/isAuthenticate.js";

const router = express.Router();

router.post("/login", adminLogin);
router.get("/donors", isAuthenticate, getAllDonors);

export default router;
