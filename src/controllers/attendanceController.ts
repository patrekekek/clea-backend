import { Request, Response } from "express";

import { createAttendance, fetchAttendance } from "../services/attendanceService";



export const markAttendance = async (req: Request, res: Response) => {
    try {
        const data = await createAttendance(req.body);
        res.json(data);
    } catch (error: any) {
        if (error.code === "23505") {
            return res.status(400).json({
                message: "Attendance already recorded for student today"
            });
        }
        
        res.status(500).json({ error: error.message });
    }

}


export const getAttendance = async (req: Request, res: Response) => {
    try {
        const data = await fetchAttendance();
        res.json(data);
    } catch (error: any) { //error: any is temporary
        res.status(500).json({ error: error.message });
    }
}