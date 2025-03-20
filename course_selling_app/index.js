const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const { z } = require("zod");
const { User } = require("./models/user");
const { Course } = require("./models/course");


// configuring environment variables
dotenv.config();

// connecting to DB
mongoose
  .connect(process.env.CONNECTION_STRING)
  .then(() => console.log("connected to db"))
  .catch((err) => console.log(err));

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to course selling app" });
});

app.get("/api/v1/users", async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Error while fetching users" });
  }
});
app.post("/api/v1/user/signup", async (req, res) => {
  const requiredBody = z.object({
    email: z.string().min(10).max(100).email(),
    password: z
      .string()
      .min(8)
      .max(50)
      .regex(/[A-Z]/, "Password must contain capital letter")
      .regex(/[^A-Za-z0-9]/, "password must contain a special symbol"),
    username: z.string().max(100),
  });

  const parsedData = requiredBody.safeParse(req.body);

  if (!parsedData.success)
    return res.json({
      message: "Incorrect Data format",
      error: parsedData.error.issues[0].message,
    });

  try {
    const { email, password, username } = req.body;

    const user = await User.findOne({ email: email });
    if (user) return res.json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 5);

    await User.create({ email, password: hashedPassword, username });

    return res.status(200).json({ message: "User added into db successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error occurred while signing up users" });
  }
});

// check if user exists
// if exists check it's password using bcrypt
// if password matches sign him using jwt
// return a jwt token
app.post("/api/v1/user/signin", async (req, res) => {
 
  try {
    const {email,password} = req.body;

    const user = await User.findOne({email:email})

    if(!user)
        return res.json({message:"user doesn't exists"})

    const passwordMatch = await bcrypt.compare(password,user.password);

    if(!passwordMatch){
        return res.json({message:"Incorrect Password"})
    }

    const token = jwt.sign({email},process.env.JWT_SECRET_KEY);
    res.json({token})
  } catch (error) {
    console.log(error)
    res.json({message:"Error while signinig user"})
  }
});
// check if user has Auhtorization Token
// if has verify it using jwt secret
// move to next handler
function auth(req,res,next){
    try {
        const Authorization = req.headers.authorization;
       
        const verifieduser = jwt.verify(Authorization,process.env.JWT_SECRET_KEY);

        if(!verifieduser.email)
            return res.json({message:"Unauthorized"})
        
        req.email = verifieduser.email
        next()
    } catch (error) {
        // console.log(error)
        res.json({message:"some error occurred"})
    }
}
app.use(auth)

app.get('/api/v1/user',async(req,res)=>{
    try {
        const {email} = req;
        const user = await User.findOne({email});
        if(!user)
            return res.json({message:"Unauthorized"})
        res.json({user})

    } catch (error) {
        console.log(error)
        res.json({message:"some error occurred"})
    }
})

app.post("/api/v1/user/purchase_course/:id",async(req,res)=>{
    try {
        const {email} = req;
        const user = await User.findOne({email});
        if(!user)
            return res.json({message:"Unauthorized"})
       
        const course = await Course.findOne({_id:req.params.id})
        user.courses.push(course)

        await User.updateOne({email},user)

        res.json({message:"purchased course successfully"})

    } catch (error) {
        console.log(error)
        res.json({message:"some error occurred"})
    }
})

app.get("/api/v1/user/courses",async (req,res)=>{
    try {
        const {email} = req;
        const user = await User.findOne({email});
        res.json(user.courses)
    } catch (error) {
        console.log(error)
        res.json({message:"some error occurred"})
    }
})

const PORT = process.env.PORT | 3000;
app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
