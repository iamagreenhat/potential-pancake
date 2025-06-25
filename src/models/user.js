import mongoose from "mongoose"


const userSchema=new mongoose.Schema({
    email:{
        required:true,
        type:String,
        unique:true

    },

    password:{
        type:String,
       
    },

    subscribed:{
        type:Boolean,
        default:false,
        required:true
    },

    role:{
        type:String,
        enum:['admin',"user"],
        default:"user",
        required:true
    }
},{timestamps:true})

const usermodel= mongoose.models.user || mongoose.model('user', userSchema);
export default usermodel
