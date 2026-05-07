import { Request, Response } from "express";

import { 
    addAttendance, 
    fetchAttendance, 
    fetchAttendanceById,
    changeAttendance,
    removeAttendance
} from "../services/attendanceService";



//get
export const getAttendance = async (req: Request, res: Response) => {
    try {
        const data = await fetchAttendance();
        res.json(data);
    } catch (error: any) { //error: any is temporary
        res.status(500).json({ error: error.message });
    }
}


export const getAttendanceById = async (
    req: Request<{ id: string}>, res: Response
) => {
    try {
        const { id } = req.params;

        const data = await fetchAttendanceById(id);
        res.json(data);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
}








//CRUD

export const createAttendance = async (req: Request, res: Response) => {
    try {
        const data = await addAttendance(req.body);
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


export const updateAttendance = async (
    req: Request<{ id: string}>, 
    res: Response
) => {
    try {
        const { id } = req.params;
        const payload = req.body;

        await changeAttendance(id, payload);

        res.status(200).json({ message: "Attendance updated successfully"});
    } catch(error: any) {
        res.status(500).json({ error: error.message });
    }
}



export const deleteAttendance = async( 
    req: Request<{ id: string }>, 
    res: Response
) => {
    try {
        const { id } = req.params;

        await removeAttendance(id);
        res.status(200).json({ message: "Attendance deleted successfully"});
    } catch (error: any) {
        res.status(500).json({ error: error.message })
    }
}