import { Router } from "express";
import { addStudent, fetchStudents, fetchStudent, editStudent, removeStudent } from "../controllers/studentController";

// import { requireAuth } from "../middleware/requireAuth";

const router = Router();

router.post("/", addStudent);
router.get("/", fetchStudents);
router.get("/:id", fetchStudent);
router.put("/:id", editStudent);
router.delete("/:id", removeStudent);

export default router;