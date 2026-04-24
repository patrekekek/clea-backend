import { Request, Response } from "express";

import { createScore, fetchScores } from "../services/scoreService";


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
}

export const getScores = async (req: Request, res: Response) => {
    try {
        const data = await fetchScores();
        res.json(data);
    } catch (error: any) {
        res.status(500).json({ error: error.message })
    }
}