import express from "express";
import {
    markCompleted,
    unmarkCompleted,
    getToday,
    getRange,
    getHeatmap,
    getHabitStats,
    getAllStats
} from "../controllers/logController.js";
import { protect } from "../middleware/auth.js";

const router = express.Router();

router.use(protect);

router.post("/", markCompleted);
router.delete("/", unmarkCompleted);
router.get("/today", getToday);
router.get("/range", getRange);
router.get("/heatmap", getHeatmap);
router.get("/stats/:habitId", getHabitStats);
router.get("/stats", getAllStats);

export default router;