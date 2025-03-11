const express = require("express")
const jwt = require("jsonwebtoken")

const app = express()

app.use(express.json())

const JWT_SECRET_KEY = "doespranitalikeme";

const users = []

function generateToken(){
    const chars = [...'abcdefghijklmnopqrstuvwxyz',
        ...'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        ..."0123456789"
    ]
    // console.log(chars[26])
    let token = ""

    for(let i=0;i<32;i++){
        token += chars[Math.floor(Math.random()*chars.length)];
    }
    return token;
    
}
// generateToken()
app.post("/signup",(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;

    const user = users.find(u=> u.username === username);
    if(user)
        return res.json({message:"user already present"});
    users.push({
        username:username,
        password:password
    })
    return res.json({message:"signup user successfully"});
})

app.post("/signin",(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
    
    const user = users.find(u => u.username === username);
    
    if(!user)
        return res.json({message:"user not present"})
    if(user.password !== password)
        return res.json({message:'incorrect password'})
    console.log(user)
    const token = jwt.sign({username:username},JWT_SECRET_KEY);
    // user.token=token;
    // console.log(user)
    return res.json({message:token})

})

// First authenticated endpoint
app.get("/me",(req,res)=>{
    const token = req.headers.token;
    const username = jwt.verify(token,JWT_SECRET_KEY).username ;
    const user = users.find(u => u.username === username);

    if(!user)
        return res.status(401).json({message:"Unauthorized"})
    
    res.json({userInfo:{
        username:user.username,
        password:user.password
    }})
})

app.listen(3000,()=>console.log("server is running"))