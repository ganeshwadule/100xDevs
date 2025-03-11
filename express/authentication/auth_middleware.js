const express = require("express")
const jwt = require("jsonwebtoken")

const app = express()
const JWT_SECRET_KEY = "MeBillionaire"

app.use(express.json())
const users = []




app.post("/signup",(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;

    const user = users.find(u => u.name === username);
    if(user)
        return res.json({message:"user already present"})

    users.push({
        username:username,password:password
    })
    res.json({message:"you are signed up"})
})

app.post("/signin",(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
    console.log(users)
    const user = users.find(u => u.username === username && u.password === password);
    console.log(user)
    if(!user)
        return res.json({message:"user doesn't exists"})

    const token = jwt.sign({username},JWT_SECRET_KEY);

    res.json({token:token})
})


//auth middleware
function auth(req,res,next){
    if(!req.headers.token){
        return res.json({message:"You are unathorized"})
    }
    const token = req.headers.token;
    const decodedUser = jwt.verify(token,JWT_SECRET_KEY)

    // const user = users.find(u=> u.username === decodedUser.username)
    if(!decodedUser.username)
        return res.json({message:"You are unathorized"})
    req.username = decodedUser.username
    next()
}
// 
// app.use(auth)

app.get("/me",auth,(req,res)=>{
   
    const user = users.find(u => u.username == req.username);

    if(!user)
        return res.status(401).json({message:"Unauthorized"});

    return res.json({username:user.username,password:user.password})
})

app.listen(3000,()=>console.log("server is listening"))