const { Router } = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { Course } = require("../models/course");
const { Admin } = require("../models/admin");
const { z } = require("zod");
const userAuth = require("../middlewares/userAuth");
const adminAuth = require("../middlewares/adminAuth");

const adminRouter = Router();

adminRouter.post("/signup", async (req, res) => {
  const requiredBody = z.object({
    email: z.string().min(10).max(100).email(),
    password: z
      .string()
      .min(8)
      .max(50)
      .regex(/[A-Z]/, "password should have atleast one Capital Letter")
      .regex(/[^A-Za-z0-9]/, "password must contain a special symbol"),
    username: z.string().max(100),
  });

  const parsedBody = requiredBody.safeParse(req.body);

  if (!parsedBody.success)
    return res.status(400).json({
      message: "Incorrect Data format",
      error: parsedBody.error.issues[0].message,
    });

  try {
    const { email, password, username } = req.body;
    const Hashedpassword = await bcrypt.hash(password, 5);

    const admin = await Admin.findOne({ email });
    console.log(admin);
    if (admin) return res.json({ message: "Admin already exists" });

    await Admin.create({ email, password: Hashedpassword, username });
    res.json({ message: "Admin created Successfully" });
  } catch (error) {
    console.error(error);
    res.json({ message: "some error occurred" });
  }
});

adminRouter.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;

    const admin = await Admin.findOne({ email });

    if (!admin) return res.json({ message: "Admin doesn't exists" });

    const passwordMatch = await bcrypt.compare(password, admin.password);

    if (!passwordMatch) return res.json({ message: "Incorrect Password" });

    const token = jwt.sign({ email }, process.env.JWT_SECRET_KEY);

    res.json({ token });
  } catch (error) {
    console.error(error);
    res.json({ message: "some error occurred" });
  }
});

adminRouter.use(userAuth);
adminRouter.use(adminAuth);

adminRouter.post("/createCourse", async (req, res) => {
  try {
    const admin = await Admin.findOne({ email: req.email });

    const { title, description, price, imageUrl } = req.body;
    req.body.creatorId = admin._id;
    const course = await Course.findOne({ title, creatorId: admin._id });

    if (course) return res.json({ message: "Course already exists" });

    await Course.create(req.body);

    res.json({ message: "course created  successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json("some error occurred");
  }
});

adminRouter.put("/updateCourse", async (req, res) => {
  try {
    const { _id } = req.body;

    const course = await Course.findOne({ _id });

    if (!course) return res.json({ message: "Course doesn't exists" });

    await Course.updateOne({ _id }, req.body);

    res.status(200).json({ message: "course updated successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json("some error occurred");
  }
});

adminRouter.delete("/deleteCourse", async (req, res) => {
  try {
    const { _id } = req.body;

    const course = await Course.findById(_id);

    if (!course) return res.json({ message: "Course doesn't exists" });

    await Course.deleteOne({ _id }, req.body);

    res.status(200).json({ message: "course deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json("some error occurred");
  }
});

module.exports = adminRouter;
