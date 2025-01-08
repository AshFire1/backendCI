import mongoose from "mongoose";

const UserSchema:mongoose.Schema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    balance:{
        type:Number,
        default:0
    }
},{timestamps:true});

export const User= mongoose.model("UserPaytm",UserSchema);