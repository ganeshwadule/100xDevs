const {Router} = require("express")
const auth = require("../middlewares/auth")
const { User } = require("../models/user");
const { Course } = require("../models/course");
const { z } = require("zod");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const userRouter = Router();

  userRouter.post("/signup", async (req, res) => {
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
  userRouter.post("/signin", async (req, res) => {
   
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
  
  userRouter.use(auth)
  
  userRouter.get('/',async(req,res)=>{
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
  
  userRouter.post("/purchase_course/:id",async(req,res)=>{
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
  
  userRouter.get("/courses",async (req,res)=>{
      try {
          const {email} = req;
          const user = await User.findOne({email});
          res.json(user.courses)
      } catch (error) {
          console.log(error)
          res.json({message:"some error occurred"})
      }
  })

  module.exports = userRouter;