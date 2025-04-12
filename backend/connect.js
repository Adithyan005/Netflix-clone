import mongoose from "mongoose";
import dotenv from "dotenv"
import express from "express"
import cors from "cors"


var app = express();
app.use(cors());
app.use(express.json());

dotenv.config();
const mongourl =process.env.MONGO_URL;

const connectDB = async() =>{
    mongoose.connect(mongourl);
    try {
      console.log("connected to database");
    } catch (error) {
      console.log("error connecting to database");
    }
}


export default connectDB;