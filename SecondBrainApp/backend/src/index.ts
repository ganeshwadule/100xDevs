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

console.log("reached here 1")
app.use("/api/v1/brain",shareRouter)
// user authentication middleware

app.use("/api/v1/content",contentRouter)


app.get("/",(req,res)=>{
    res.send("Awwwwe Sheldon")
})



const main = async ()=>{
    await mongoose.connect(process.env.MONGO_URI as string).then(()=>console.log("Connected to DB"));
    app.listen(port,()=>console.log(`listening on port ${port}`))
}

main()
