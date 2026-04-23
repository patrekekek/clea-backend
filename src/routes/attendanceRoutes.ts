import { Router } from "express";

import { markAttendance } from "../controllers/attendanceController";

const router = Router();

router.post("/", markAttendance);

export default router;