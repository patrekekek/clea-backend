import { Request, Response } from "express";
import {
    createStudent,
    getStudents,
    getStudentById,
    updateStudent,
    deleteStudent
} from "../services/studentService";

export const addStudent = async (req: Request, res: Response) => {
    try {
        const {
            first_name,
            last_name,
            middle_name,
            section,
            sex,
            status,
        } = req.body;

        if (!first_name || !last_name || !section || !sex || !status) {
            return res.status(400).json({ error: "missing required fields" });
        }

        const student = await createStudent({
            first_name,
            last_name,
            middle_name,
            section,
            sex,
            status
        });

        res.status(201).json(student);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

export const fetchStudents = async (_req: Request, res: Response) => {
    try {
        const students = await getStudents();
        res.json(students);
    } catch( error: any) {
        res.status(500).json({ error: error.message });
    }
}

export const fetchStudent = async (req: Request, res: Response) => {
  try {
    const student = await getStudentById(req.params.id as string);
    res.json(student);
  } catch {
    res.status(404).json({ error: "Student not found" });
  }
};

export const editStudent = async (req:Request, res: Response) => {
    try {
        const student = await updateStudent(req.params.id as string, req.body);
        res.json(student);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

export const removeStudent = async (req: Request, res: Response) => {
    try {
        await deleteStudent(req.params.id as string);
        res.json({ message: "Student deleteed" });
    } catch(error: any) {
        res.status(500).json({ error: error.message });
    }
}