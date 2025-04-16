import { Router } from "express";
import userController from '../controllers/userController';
import auth from "../middlewares/auth";

const userRouter = Router();

userRouter.post("/signup", userController.signup);
userRouter.post("/signin", userController.signin);

export default userRouter;
