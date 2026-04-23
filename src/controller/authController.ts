import { Request, Response } from "express";
import { logInUser, signUpUser } from "../services/authService";

export const register = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;

        const data = await signUpUser(email, password);

        res.json(data);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
}

export const login = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;

        const data = await logInUser(email, password);

        res.json(data);
    } catch (error: any) {
        res.status(500).json({ error: error.message })
    }

}