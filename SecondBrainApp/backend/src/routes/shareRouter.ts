import { Router, Response, Request } from "express";
import auth, { CustomRequest } from "../middlewares/auth";
import Content from "../models/Content";
import User from "../models/User"
import bcrypt from "bcrypt"
import Link from "../models/Link";


const shareRouter = Router();

// will add param share in user schema
// set it to true
// then create hash of that link
// when another user tries to access get userId from hash
// check their share property
// based on that return response
shareRouter.post("/share", auth, async (req: CustomRequest, res: Response) => {
  const { userId } = req;

  const user = await User.findByIdAndUpdate(
    userId,
    { share: true },
    { new: true, runValidators: true }
  );

  const base64Id = Buffer.from(userId as string).toString("base64");

  await Link.create({hash:base64Id,userId});

  res.json({link:`http://localhost:3000/api/v1/brain/${base64Id}`})

});



shareRouter.get('/:shareLink',async(req:Request,res:Response)=>{
    
    
    const hash = req.params.shareLink;
    
    const link = await Link.findOne({hash});

    if(!link){
        res.json("Invalid Response");
        return; 
    }

    const userId = link.userId;

    const user = await User.findById(userId);

    if(!user || !user.share){
        res.json("Data is not shareble");
        return;
    }

    const content = await Content.find({userId});
    
    res.json({
            username:user.username,
            content
    })
})

export default shareRouter;
