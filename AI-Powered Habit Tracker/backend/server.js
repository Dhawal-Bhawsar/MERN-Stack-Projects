import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import authRoutes from "./routes/auth.js";
import habitRoutes from "./routes/habits.js";
import logRoutes from "./routes/logs.js";
import aiRoutes from "./routes/ai.js";
import { notFound, errorHandler } from "./middleware/errorHandler.js";


dotenv.config({ path: new URL("./.env", import.meta.url) });

const app = express();

const allowedOrigins = (process.env.CLIENT_URL || "")
    .split(",")
    .map((origin) => origin.trim())
    .filter(Boolean);

const corsOptions = {
    origin: (origin, callback) => {
        if (!origin) return callback(null, true);

        if(/^https?:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/.test(origin)) {
            return callback(null, true);
        }
        if (allowedOrigins.includes(origin)) return callback(null, true);

        return callback(new Error(`Origin ${origin} not allowed by CORS`));
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE","OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
};

// Middleware
app.use(cors(corsOptions));
app.options(/.*/, cors(corsOptions));
app.use(express.json({limit: "1mb"}));

app.get("/api/health", (req, res) => 
    res.json({ status: "ok", time: new Date().toISOString() })
);

app.use("/api/auth", authRoutes);
app.use("/api/habits", habitRoutes);
app.use("/api/logs", logRoutes);
app.use("/api/ai", aiRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 8000;

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
});