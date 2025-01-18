import express from "express";
import protect from "../middleware/authMiddleware.js"
const router = express.Router();
import {
  resgisterUser,
  loginUser,
  getMe,
} from "../controllers/userController.js";

router.post("/", resgisterUser);
router.post("/login", loginUser);
router.get("/me",protect, getMe);

export default router;
