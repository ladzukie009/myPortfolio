import express from "express";
import cors from "cors";
import morgan from "morgan";
import * as dotenv from "dotenv";
import {connectDB} from "./config/database.js"

// initialize app
const app = express();
dotenv.config();

connectDB();

// middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.listen(8000, () => {
    console.log("Server is running on 8000");
});