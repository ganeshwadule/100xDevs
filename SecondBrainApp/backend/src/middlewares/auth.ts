import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

// extending request object to add custom field to it
export interface CustomRequest extends Request {
  userId?: string;
}

const auth = async (req: CustomRequest, res: Response, next: NextFunction) => {
  try {
    // checking if cookies exist and do cookies have authToken
    const token = req.cookies?.authToken;

    if (!token) {
      res.status(403).json({ error: "Unauthorized: No token provided" });
      return;
    }

    const user = jwt.verify(
      req.cookies.authToken,
      process.env.JWT_SECRET as string
    ) as JwtPayload;

    if (!user || !user.userId) {
      res.status(403).json("Unauthorized");
      return;
    }

    // putting userId into Custom Request Objects
    req.userId = user.userId;

    next();
  } catch (error) {
    res.status(500).json({ err: "Internal Server Error" });
    console.log(error);
  }
};

export default auth;