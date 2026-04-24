import { Router } from "express";

import { addScore, getScores } from "../controllers/scoreController";

const router = Router();

router.post("/", addScore);
router.get("/", getScores);

export default router;