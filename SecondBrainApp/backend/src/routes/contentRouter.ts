import { Router } from "express";
import contentController from "../controllers/contentController";
import auth from "../middlewares/auth";


const contentRouter = Router();
contentRouter.use(auth)
contentRouter.post("/",contentController.addContent)
contentRouter.get("/",contentController.getContent)
contentRouter.delete("/",contentController.deleteContent)

export default contentRouter;