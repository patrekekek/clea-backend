import { Router } from "express";

import { addScore, getScores, getScoreById, updateScore, deleteScore } from "../controllers/scoreController";

const router = Router();

router.post("/", addScore);
router.get("/", getScores);
router.get("/:id", getScoreById);
router.put("/:id", updateScore);
router.delete("/:id", deleteScore);

export default router;