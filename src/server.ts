import express from "express";
import cors from "cors";
import "dotenv/config";

import authRoutes from "./routes/authRoutes";
import attendanceRoutes from "./routes/attendanceRoutes";
import scoreRoutes from "./routes/scoreRoutes";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("CLEA backend running");
});


//routes
app.use("/api/auth", authRoutes);
app.use("/api/attendance", attendanceRoutes);
app.use("/api/scores", scoreRoutes)


app.listen(process.env.PORT || 5000, () => {
  console.log("Server running...");
});