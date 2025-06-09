import express from "express"
import Uploadmodel from "../models/Upload.js";

const router=express.Router();

router.post("/uploadmovies", async (req,res) => {
    const {category,image,name,year,duration,director,cast,writers,rating,description,trailerurl} = req.body;
    try {
        const upload = new Uploadmodel({
            category,image,name,year,duration,director,cast,writers,rating,description,trailerurl
        })
        await upload.save();
        console.log(upload)
        res.status(200).json({"Message":"Sent Successfully"})
    } catch (error) {
        console.log(error)
        res.status(500).json({"Message":"Failed to send"})
    }
    
})

export default router;