import { Router, Response, Request } from "express";
import auth, { CustomRequest } from "../middlewares/auth";
import Content from "../models/Content";
import User from "../models/User";
import Link from "../models/Link";

const shareRouter = Router();

// will add param share in user schema
// set it to true
// then create hash of that link
// when another user tries to access get userId from hash
// check their share property
// based on that return response
shareRouter.post("/share", auth, async (req: CustomRequest, res: Response) => {
  try {
    const { userId } = req;
    const share:boolean = req.body.share;

    // make share = true
    const user = await User.findByIdAndUpdate(
      userId,
      { share: share },
      { new: true, runValidators: true }
    );

    if(!share){
      await Link.deleteOne({userId});
      res.json("Link removed")
      return;
    }

    // convert userId to bas64 encoded string
    const base64Id = Buffer.from(userId as string).toString("base64");

    // create the link with hashed id
    await Link.create({ hash: base64Id, userId });

    res.status(201).json({ link: `http://localhost:3000/api/v1/brain/${base64Id}` });

  } catch (error) {

    console.log(error);
    res.status(500).json("Internal Server Error");

  }
});

shareRouter.get("/:shareLink", async (req: Request, res: Response) => {
  try {
    // get the hash and find link using it
    const hash = req.params.shareLink;

    const link = await Link.findOne({ hash }).populate("userId","username share");

    // console.log(link)
    
    if (!link) {
      res.status(404).json("Invalid Link");
      return;
    }

    // if link exits get the userId
    const userId = link.userId;

    // get user data from userId
    const user = await User.findById(userId);

    // check for user and is sharing allowed
    if (!user || !user.share) {
      res.status(403).json("Data is not shareble");
      return;
    }

    // get the content
    const content = await Content.find({ userId });

    // return content with username
    res.status(201).json({
      username: user.username,
      content,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json("Internal Server Error");
  }
});

export default shareRouter;
