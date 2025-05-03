import { Request, Response } from "express";
import User from "../models/User";
import { z } from "zod";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { CustomRequest } from "../middlewares/auth";

const signup = async (req: Request, res: Response) => {
  try {
    // validating schema using Zod

    const requiredSchema = z.object({
      username: z
        .string()
        .min(3, "Username should be atleast of 3 chars")
        .max(100, "Username should be at most of 10 chars"),

      password: z
        .string()
        .min(8, { message: "Password must be at least 8 characters long." })
        .max(100, {
          message: "Password must not be at most 100 characters long.",
        })
        .regex(/[A-Z]/, {
          message: "Password must contain at least one uppercase letter.",
        })
        .regex(/[^A-Za-z0-9]/, {
          message: "Password must contain at least one special character.",
        }),
    });

    const { success, data, error } = requiredSchema.safeParse(req.body);

    if (!success) {
      // console.log(error)
      res.json({message:error.issues[0].message});
      return;
    }

    // Destructuring data from Parsed Data object
    const { username, password } = data;

    // hashing the password with addition of Salt
    const hashedPassword = await bcrypt.hash(password, 5);

    // Checking if user has exists already
    const user = await User.findOne({ username });
    if (user) {
      res.status(400).json({ message: "User already exists" });
      return;
    }

    // Creating user in Database
    await User.create({ username, password: hashedPassword });

    res.status(201).json({ message: "User created successfully" });
  } catch (err) {
    console.error("Signup error:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};

const signin = async (req: Request, res: Response) => {
  try {
    // validating schema using Zod
    console.log("request came")
    const requiredSchema = z.object({
      username: z
        .string()
        .min(3, "Username should be atleast of 3 chars")
        .max(100, "Username should be at most of 10 chars"),

      password: z
        .string()
        .min(8, { message: "Password must be at least 8 characters long." })
        .max(100, {
          message: "Password must not be at most 100 characters long.",
        })
        .regex(/[A-Z]/, {
          message: "Password must contain at least one uppercase letter.",
        })
        .regex(/[^A-Za-z0-9]/, {
          message: "Password must contain at least one special character.",
        }),
    });

    const { success, data, error } = requiredSchema.safeParse(req.body);

    if (!success) {
      res.json(error.issues[0].message);
      return;
    }

    // Destructuring data from Parsed Data object
    const { username, password } = data;

    // Checking if user  exists
    const user = await User.findOne({ username });
    if (!user) {
      res.status(404).json({ message: "User doensn't exists" });
      return;
    }

    // checking for pass using bcrypt
    const passMatch = bcrypt.compare(password, user.password);

    if (!passMatch) {
      res.status(400).json("Wrong Password");
      return;
    }
    // creating token using JWT
    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET as string
    );

    res.cookie("authToken", token, {
      httpOnly: false, // Prevents JavaScript access for security
      secure: false,
      sameSite:"lax", // Must be true for HTTPS // Required for cross-origin requests // shou;d be None in production
      path: "/"

    });

    res.status(201).json({ token: token, message: "User signed in" });
  } catch (err) {
    console.error("SignIn error:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};

const userInfo = async (req: CustomRequest, res: Response) => {
  console.log("reached here")
  const { userId } = req;
  console.log(userId)
  const user = await User.findById(userId);
  res.status(200).json(user);
};
export default { signup, signin,userInfo };
