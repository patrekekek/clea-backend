import { Router } from "express";

import { getAttendance, createAttendance, getAttendanceById, updateAttendance, deleteAttendance } from "../controllers/attendanceController";

// import { requireAuth } from "../middleware/requireAuth";

const router = Router();

router.post("/", createAttendance);
router.get("/", /*requireAuth,*/ getAttendance);
router.get("/:id", getAttendanceById);
router.put("/:id", updateAttendance);
router.delete("/:id", deleteAttendance)

export default router;