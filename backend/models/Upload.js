import mongoose from "mongoose"

const UploadSchema = new mongoose.Schema({
    category:{
        type:String
    },
    image:{
        type:String
    },
    name:{
        type:String
    },
    year:{
        type:String
    },
    duration:{
        type:String
    },
    director:{
        type:String
    },
    cast:{
        type:String
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

const Uploadmodel = new mongoose.model("Upload",UploadSchema)
export default Uploadmodel;