import mongoose from "mongoose";
const Toppicksschema=new mongoose.Schema({
    image:{
        type:String,
    },
    name:{
        type:String,
    },
    year:{
        type:String,
    },
    duration:{
        type:String,
    },
    director:{
        type:String,
    },
    cast:{
        type:String,
    },
    writers:{
        type:String
    },
    rating:{
        type:String
    },
    description:{
        type:String
    },
    trailerurl:{
        type:String
    }   
})

const Toppickmodel=mongoose.model("Toppicks",Toppicksschema)
export default Toppickmodel