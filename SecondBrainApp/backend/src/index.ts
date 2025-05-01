import express from "express";
import dotenv from 'dotenv'
import userRouter from "./routes/userRouter";
import mongoose from "mongoose";
import cookieParser from 'cookie-parser'
import contentRouter from "./routes/contentRouter";
import auth from "./middlewares/auth";
import shareRouter from "./routes/shareRouter";

const app = express();

dotenv.config()

const port = parseInt(process.env.PORT || "3001",10) ;  

app.use(express.json())
app.use(cookieParser())
// Route Handler for User       
app.use("/api/v1/user",userRouter)

// Route Handler for Brain Share Tasks      
app.use("/api/v1/brain",shareRouter)

// Route Handler for Content      
app.use("/api/v1/content",contentRouter)

const main = async ()=>{
    await mongoose.connect(process.env.MONGO_URI as string).then(()=>console.log("Connected to DB"));
    app.listen(port,()=>console.log(`listening on port ${port}`))
}

main()
