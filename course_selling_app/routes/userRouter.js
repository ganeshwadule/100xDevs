const { Router } = require("express");
const auth = require("../middlewares/userAuth");
const { User } = require("../models/user");
const { Course } = require("../models/course");
const { z } = require("zod");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { Purchase } = require("../models/purchase");

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
    const { email, password } = req.body;

    const user = await User.findOne({ email: email });

    if (!user) return res.json({ message: "user doesn't exists" });

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.json({ message: "Incorrect Password" });
    }

    const token = jwt.sign({ email }, process.env.JWT_SECRET_KEY);
    res.json({ token });
  } catch (error) {
    console.log(error);
    res.json({ message: "Error while signinig user" });
  }
});
// check if user has Auhtorization Token
// if has verify it using jwt secret
// move to next handler

userRouter.use(auth);

userRouter.get("/", async (req, res) => {
  try {
    const { email } = req;
    const user = await User.findOne({ email });
    if (!user) return res.json({ message: "Unauthorized" });
    res.json({ user });
  } catch (error) {
    console.log(error);
    res.json({ message: "some error occurred" });
  }
});

userRouter.post("/purchase_course/:id", async (req, res) => {
  try {
    const { email } = req;
    const user = await User.findOne({ email });
    if (!user) return res.json({ message: "Unauthorized" });

    const course = await Course.findOne({ _id: req.params.id });
    if (!course) return res.json("course doesn't exist");

    await Purchase.create({ courseId: course._id, userId: user._id });

    res.json({ message: "purchased course successfully" });
  } catch (error) {
    console.log(error);
    res.json({ message: "some error occurred" });
  }
});

userRouter.get("/courses", async (req, res) => {
  try {
    const { email } = req;
    const user = await User.findOne({ email });

    if (!user) return res.json("User doesn't exists");

    const user_purchases = await Purchase.find({ userId: user._id });
    // res.json(user_purchases)
    // map doens't wait for each promoise to resolve thus returns 
    // unresolved promises so we have to use Promise.all before getting results
    const courses = await Promise.all(
      user_purchases.map(
        async (purchase) => await Course.findById(purchase.courseId)
      )
    );

    // const user_courses = user_purchases.map(async (purchase)=>(await Course.findOne({_id:purchase.courseId})))
    res.json(courses);
  } catch (error) {
    console.log(error);
    res.json({ message: "some error occurred" });
  }
});

module.exports = userRouter;
