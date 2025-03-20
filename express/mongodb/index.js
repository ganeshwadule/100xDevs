const express = require("express");
const jwt = require("jsonwebtoken");
const { User, Todo } = require("./db");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt")

mongoose
  .connect(
    "mongodb+srv://ganesh:cluster-7@cluster-7.kltfg.mongodb.net/todoApp?retryWrites=true&w=majority&appName=Cluster-7"
  )
  .then(() => console.log("connected to database"))
  .catch((err) => console.error(err));

const JWT_SECRET = "IAMAGENIUS";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/signup", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const username = req.body.username;

  const hashedPassword = await bcrypt.hash(password,5);

  const user = await User.findOne({ email: email });

  if (user)
    return res.json({ message: "User already exists" });

  await User.create({
    email:email,
    password:hashedPassword,
    username:username
  });

  res.json({ message: "You are signed up" });
});

app.post("/signin", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const user = await User.findOne({ email: email});
  if (!user) return res.json({ message: "User doesn't exists" });

  const passwordMatch = await bcrypt.compare(password,user.password)
  console.log(passwordMatch)

  if(!passwordMatch)
    return res.json({message:"Invalid Credentials"})

  const token = jwt.sign({userID:user._id}, JWT_SECRET);

  res.json({ token: token });
});

// check for token
// check for token validity
// modifiy the request object
// move to next middleware/handler
function auth(req,res,next){

    const token = req.headers.token;
    if(!token)
        return res.json({message:"Unauthorized"})
    // recomputes the signature and compares it with 
    const user = jwt.verify(token,JWT_SECRET)
    if(!user)
      return res.status(403).json({message:"Invalid token"})

    req.userID = user.userID;
    next()
}

app.get("/user",auth,async (req,res)=>{
    const userID = req.userID;
    const user = await User.findOne({_id:userID})
    if(!user)
        return res.json({messageL:"User doesn't exists"})
    res.json({user})
})

app.post("/todo",auth,async (req,res)=>{
    const title = req.body.title;
    const done = req.body.done;

    const user = await User.findOne({_id:req.userID})
    if(!user)
        return res.json({message:"Unauthorized"})

    await Todo.create({title:title,done:done,user:user._id})
    res.json({message:"created todo"})

})
app.listen(3000, () => console.log("Server listening on PORT 3000"));
