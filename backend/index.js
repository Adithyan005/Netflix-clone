import express from "express";
import mongoose from "mongoose";
import Movie_Model from "./models/Movie.js";
import dotenv from "dotenv";
import cors from "cors";
import HomeModel from "./models/Homepage.js";
import signupmodel from "./models/Signup.js";

var app = express();
app.use(cors());

app.use(express.json());

dotenv.config();
const mongourl =
  "mongodb+srv://adithyanm22cse:YFMUMJIpsCJrbXP2@cluster0.kwm0w.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const port = process.env.port || 4000;

mongoose.connect(mongourl);
try {
  console.log("connected to database");
} catch (error) {
  console.log("error connecting to database");
}

app.post("/moviepage/insert", async (req, res) => {
  const {
    image,
    name,
    year,
    duration,
    director,
    cast,
    writers,
    rating,
    description,
    trailerurl,
  } = req.body;
  try {
    const movie = new Movie_Model({
      image,
      name,
      year,
      duration,
      director,
      cast,
      writers,
      rating,
      description,
      trailerurl,
    });
    await movie.save();
    res.status(200).json({ message: "successfully inserted" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Not inserted successfully" });
  }
});

app.get("/movies", async (req, res) => {
  try {
    const movie = await Movie_Model.find();
    res.status(200).json(movie);
  } catch (error) {
    console.log(error);
  }
});
app.get("/movies/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const movie = await Movie_Model.findOne({ _id: id });
    res.status(200).json(movie);
    console.log(movie);
  } catch (error) {
    console.log(error);
  }
});

app.post("/insert", async (req, res) => {
  const { bgimage, titleimage, description, matchstring } = req.body;
  try {
    const home = new HomeModel({
      bgimage,
      titleimage,
      description,
      matchstring,
    });
    await home.save();
    console.log(home);
    res.status(200).json({ message: "successfully inserted" });
  } catch (error) {
    console.log("error in posting");
  }
});


app.get("/homemovie", async (req, res) => {
  const home = await HomeModel.find();
  try {
    console.log(home);
    res.status(200).json(home);
  } catch (error) {
    console.log("error fetching");
  }
});

app.post("/signup", async (req, res) => {
  try {
    const { email, password } = req.body;
    const signup = new signupmodel({
      email,
      password,
    });
    await signup.save();
    console.log(signup);
    res.status(200).json({ message: "Successfully inserted" });
  } catch (error) {
    console.log("Error in inserting");
  }
});

app.post("/login",async(req,res)=>{
  try {
    const {email,password} = req.body;
    const user = await signupmodel.findOne({email})

    if (!user) {
      return res.json({ success: false, message: "User not found" });
    }
  
    if (user.password === password) {
      return res.json({ success: true, message: "Login successful" });
    } else {
      return res.json({ success: false, message: "Invalid credentials" });
    }

  } catch (error) {
    console.log(error)
  }
})

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
