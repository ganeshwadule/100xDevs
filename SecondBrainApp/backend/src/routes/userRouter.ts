import { Router } from "express";
import userController from '../controllers/userController';

const userRouter = Router();

userRouter.post("/signup", userController.signup);
userRouter.post("/signin", userController.signin);

export default userRouter;
