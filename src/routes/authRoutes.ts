import { Router } from "express";


const router = Router();

router.get("/", async (req, res) => { res.send({ "mssg": "Bilat"})});

router.get("/login",
    async (req, res) => {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({ error: "No username or password char"})
        }

        res.status(200).json({ username, password, "message": "olok" });
    }
)


export default router;