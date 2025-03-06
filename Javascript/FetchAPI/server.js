const express = require("express")
const app  = express()

app.get("/add/:a/:b",(req,res)=>{
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);
    res.send(`${a+b}`)
})

app.get("/substract/:a/:b",(req,res)=>{
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);
    res.send(`${a-b}`)
})

app.get("/multiply/:a/:b",(req,res)=>{
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);
    res.send(`${a*b}`)
})

app.get("/divide/:a/:b",(req,res)=>{
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);
    res.send(`${a/b}`)
})

app.listen(3001,()=>console.log("server is listening"))