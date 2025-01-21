import mongoose from "mongoose";

const HomeSchema = new mongoose.Schema({
    bgimage:{
        type:"String"
    },
    titleimage:{
        type:"String"
    },
    description:{
        type:"String"
    },
    matchstring:{
        type:"String"
    }
})

const HomeModel = mongoose.model('home',HomeSchema)
export default HomeModel