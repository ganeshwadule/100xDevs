import { Router } from "express";
import contentController from "../controllers/contentController";


const contentRouter = Router();

contentRouter.post("/",contentController.addContent)
contentRouter.get("/",contentController.getContent)

export default contentRouter;