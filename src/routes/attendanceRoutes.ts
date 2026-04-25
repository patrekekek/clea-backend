import { Router } from "express";

import { getAttendance, markAttendance } from "../controllers/attendanceController";

const router = Router();

router.post("/", markAttendance);
router.get("/", getAttendance);

export default router;