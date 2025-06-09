import express from "express";
import connectDB from "./routes/connect.js";
import dotenv from "dotenv";
import cors from "cors";
import homeroute from "./routes/homemovie.js"
import blockbuster from "./routes/blockbustermovies.js"
import loginroute from "./routes/login.js"
import popularroute from "./routes/popularmovies.js"
import signuproute from "./routes/signup.js"
import onlyonflixroute from "./routes/onlynetflix.js"
import uploadmovies from "./routes/uploadmovies.js"


dotenv.config();
var app = express();
app.use(cors());
app.use(express.json());
connectDB();
const port = process.env.PORT || 4000;

app.use("/api/home",homeroute);
app.use("/api/buster",blockbuster);
app.use("/api/auth",loginroute);
app.use("/api/popular",popularroute);
app.use("/api/createauth",signuproute);
app.use("/api/flix",onlyonflixroute);
app.use("/api/adminupload",uploadmovies);


app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
