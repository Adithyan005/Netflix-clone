import express from "express"
import netflixmodel from "../models/Onlynetflix.js"
const router=express.Router();

router.post("/onlynetflix", async (req,res) => {
   const {image,name,year,duration,director,cast,writers,rating,description,trailerurl,} = req.body;
   try {
    const onlyonflix = new netflixmodel({
        image,name,year,duration,director,cast,writers,rating,description,trailerurl
    })
    await onlyonflix.save();
    res.status(200).json({"Message":"Successfully Inserted"})
   } catch (error) {
        res.status(500).json({"Message":"Not inserted"})
        console.log(error);
   }
})

router.get("/onlyonnetflix", async (req,res) => {
    const onlyonflix = await netflixmodel.find()
    try {
        console.log(onlyonflix)
        res.status(200).json({onlyonflix});
    } catch (error) {
        console.log(error)
        res.status(500).json({"Message":"Error fetching movies"});
    }
})

export default router;
