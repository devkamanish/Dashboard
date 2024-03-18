import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

export const app = express();

// routes
import dashboardRoute from "./routes/dashboardRoute.js";

// middlewares
app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());
app.use("/api/v1/dashboard", dashboardRoute);

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Home route",
  });
});
