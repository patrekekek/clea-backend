import { Request, Response } from "express";
import { logInUser, signUpUser } from "../services/authService";

export const register = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;

        const data = await signUpUser(email, password);

        res.json(data);
    } catch (error: unknown) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        } else {
            res.status(500).json({ error: "Something went wrong" });
        }
    }
}

export const login = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;

        const data = await logInUser(email, password);

        res.json(data);
    } catch (error: unknown) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        } else {
            res.status(500).json({ error: "Something went wrong" });
        }
    }

}