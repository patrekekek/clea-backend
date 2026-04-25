import { Request, Response, NextFunction } from "express";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_ANON_KEY!
);

export const requireAuth = async (req: Request, res: Response,next: NextFunction) => {

    try {
        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({ error: "Unauthorized"});
        }

        const token = authHeader.split(" ")[1];

        const { data, error } = await supabase.auth.getUser(token);

        if (error || !data.user) {
            return res.status(401).json({ error: "invalid token"});
        }

        //attaching user to request here
        (req as any).user = data.user;

        next();
    } catch (error) {
        res.status(401).json({ error: "Authentication failed" });
    }

}