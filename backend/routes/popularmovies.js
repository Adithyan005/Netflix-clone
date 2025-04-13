import express from "express"
import Movie_Model from "../models/Movie.js";
const router = express.Router();

router.post("/moviepage/insert", async (req, res) => {
    //for popular movies
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
  
  router.get("/movies", async (req, res) => {
    try {
      const movie = await Movie_Model.find();
      res.status(200).json(movie);
    } catch (error) {
      console.log(error);
    }
  });
  router.get("/movies/:id", async (req, res) => {
    const id = req.params.id;
    try {
      const movie = await Movie_Model.findOne({ _id: id });
      res.status(200).json(movie);
      console.log(movie);
    } catch (error) {
      console.log(error);
    }
  });

  export default router;