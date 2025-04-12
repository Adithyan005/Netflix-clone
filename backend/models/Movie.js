import mongoose from "mongoose";
const Movieschema = new mongoose.Schema({ //Movieschema for Popular Movies
    image:{
        type:"String",
    },
    name:{
        type:"String",
    },
    year:{
        type:"String",
    },
    duration:{
        type:"String",
    },
    director:{
        type:"String",
    },
    cast:{
        type:"String",
    },
    writers:{
        type:"String"
    },
    rating:{
        type:"String"
    },
    description:{
        type:"String"
    },
    trailerurl:{
        type:"String"
    }    
})

const Movie_Model = mongoose.model('movies',Movieschema)
export default Movie_Model