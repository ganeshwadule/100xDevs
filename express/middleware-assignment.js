const express = require("express")

const app = express()

app.use((req,res,next)=>{
    console.log(new Date())
    console.log(req.url)
    console.log(req.method)
    console.log(req.hostname)

    next()  // call to the actual route handler
})
app.post("/api/data",(req,res)=>{
    
    res.send("Hello world!");
})

app.put("/api/data",(req,res)=>{
    console.log(req.url)
    console.log(req.method)
    res.send("Hello world!");
})  

app.listen(3070,()=>console.log("Hii"))