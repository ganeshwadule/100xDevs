const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("Hello word")
})
app.post("/sum",(req,res)=>{
    console.log("I got the request")
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);
    console.log(a+" "+b);

    res.json({
        ans:a+b
    })
})

app.listen(3001,()=>console.log("server is listening"));