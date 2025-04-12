import express from "express";
import signupmodel from "./models/Signup.js";
const app = express();

app.post("/signup", async (req, res) => {
  //for signup
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