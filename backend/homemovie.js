import express from "express";
const app = express();
import HomeModel from "./models/Homepage.js";

app.post("/insert", async (req, res) => {
  //for home page movie
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

export default app;