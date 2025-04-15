import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const auth = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (!req.cookies || !req.cookies.authToken) {
      res.status(403).json("Unauthorized");
      return;
    }

    const userId = jwt.verify(
      req.cookies.authToken,
      process.env.JWT_SECRET as string
    );

    if (!userId) return res.status(403).json("Unauthorized");

    req.userId = userId;
    next();
  } catch (error) {
    res.status(500).json({ err: "Internal Server Error" });
    console.log(error);
  }
};
