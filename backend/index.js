import express from "express"
import mongoose from "mongoose"
import Movie_Model from "./models/Movie.js"

const app=express()
app.use(express.json())

mongoose.connect("mongodb+srv://adithyanm22cse:YFMUMJIpsCJrbXP2@cluster0.kwm0w.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
try {
    console.log('connected to database')
} catch (error) {
    console.log('error connecting to database')
}

app.post('/moviepage/insert',async(req,res)=>{
    const {image,name,year,duration,director,cast,writers,rating,description}=req.body
    try {
        const movie=new Movie_Model({
            image,
            name,
            year,
            duration,
            director,
            cast,
            writers,
            rating,
            description
        })
        await movie.save()
        res.status(200).json({"message":"successfully inserted"})
    } catch (error) {
        console.log(error)
        res.status(500).json({"message":"Not inserted successfully"})
    }

})

app.listen(4000);
console.log('server running on 4000')