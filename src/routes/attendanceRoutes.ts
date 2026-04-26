import { Router } from "express";

import { getAttendance, markAttendance } from "../controllers/attendanceController";

// import { requireAuth } from "../middleware/requireAuth";

const router = Router();

router.post("/", markAttendance);
router.get("/", /*requireAuth,*/ getAttendance);

export default router;