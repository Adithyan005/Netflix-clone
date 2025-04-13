import express from "express";
import signupmodel from "./models/Signup.js";
const app = express();

app.use(express.json())

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await signupmodel.findOne({ email });

    if (!user) {
      return res.json({ success: false, message: "User not found" });
    }

    if (user.password === password) {
      return res.json({ success: true, message: "Login successful" });
    } else {
      return res.json({ success: false, message: "Invalid credentials" });
    }
  } catch (error) {
    console.log(error);
  }
});

export default app;
