import { Request, Response } from "express";

import {
    createScore, 
    fetchScores, 
    fetchScoreById, 
    changeScore,
    removeScore

} from "../services/scoreService";
import { deleteStudent } from "../services/studentService";


//getting the scores
export const getScores = async (req: Request, res: Response) => {
    try {
        const data = await fetchScores();
        res.json(data);
    } catch (error: any) {
        res.status(500).json({ error: error.message })
    }
};

export const getScoreById = async (
    req: Request<{ id: string }>, 
    res: Response
) => {
    try {
        const { id } = req.params;

        const data = await fetchScoreById(id);

        res.status(200).json(data);
    } catch (error: any) {
        res.status(500).json({error: error.message})
    }
}



//CRUD
export const addScore = async (req: Request, res: Response) => {
    try {
        const data = await createScore(req.body);
        res.json(data);
    } catch (error: any) {
        if (error.code === "23505") {
            return res.status(400).json({
                message: "Score already exists for this entry"
            });
        }

        res.status(500).json({ error: error.message });
    }
};

export const updateScore = async (
    req: Request<{ id: string }>, 
    res: Response
) => {
    try {
        const { id } = req.params;
        const payload = req.body;

        const data = await changeScore(id, payload);

        res.status(200).json(data)
    } catch(error: any) {
        res.status(500).json({ error: error.message });
    }
}


export const deleteScore = async (
    req: Request<{ id: string }>, 
    res: Response
) => {
    try {
        const { id } = req.params;

        const data = await removeScore(id);

        res.status(200).json(data);
    } catch(error: any) {
        res.status(500).json({ error: error.message });
    }
} 
