import express from "express";
import connectDB from "./connect.js";
import dotenv from "dotenv";
import cors from "cors";


dotenv.config();
var app = express();
app.use(cors());
app.use(express.json());
connectDB();
const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
