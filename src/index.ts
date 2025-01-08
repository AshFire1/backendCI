import express, { Application } from "express"
import mongoose from "mongoose";
import * as dotenv from "dotenv";
dotenv.config();
const app:Application=express()
app.use(express.json());
const PORT:string=process.env.PORT || "4040"
const connection:string=process.env.MONGO_URI||"";

//check again 


mongoose.connect(connection,
    {
        dbName:"PaytmApp",
    }
).then(()=>{
    app.listen(PORT,()=>console.log(`Server Port ${PORT}`))
}).catch((err)=>console.log(`${err} did not connect`))