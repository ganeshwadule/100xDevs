import { Router, Response } from "express";
import auth, { CustomRequest } from "../middlewares/auth";
import Content from "../models/Content";

const shareRouter = Router();

shareRouter.post("/share",auth,async(req:CustomRequest,res:Response)=>{
    const {userId} = req;

});

export default shareRouter;
