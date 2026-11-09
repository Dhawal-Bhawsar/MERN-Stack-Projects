import express from "express";
import {
    weeklyReport,
    suggestHabits,
    recoveryPlan,
    chat,
    morning,
} from "../controllers/aiController.js";
import { protect } from "../middleware/auth.js";

const router = express.Router();

router.use(protect);

router.post("/weekly-report", weeklyReport);
router.post("/suggest-habits", suggestHabits);
router.post("/recovery-plan", recoveryPlan);
router.post("/chat", chat);
router.get("/morning", morning);

export default router;
