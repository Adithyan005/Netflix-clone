import mongoose from "mongoose";
const Signupschema = new mongoose.Schema({
    email:{
        type:String
    },
    password:{
        type:String
    }
})

const signupmodel = mongoose.model("signup",Signupschema)
export default signupmodel