import mongoose from "mongoose";
const Blockbusterschema = new mongoose.Schema({   //for blockbustermovies
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

const blockbuster_model = mongoose.model("blockbuster",Blockbusterschema)
export default blockbuster_model