import { Response } from "express";
import { CustomRequest } from "../middlewares/auth";
import Content from "../models/Content";
import mongoose from "mongoose";
import { z } from "zod";

const isValidObjectId = (id: string) => mongoose.Types.ObjectId.isValid(id);

const contentSchema = z.object({
  link: z.string().url(),
  type: z.string(),
  title: z.string(),
  tags: z
    .array(z.string().refine(isValidObjectId, {
      message: "Each tag must be a valid MongoDB ObjectId",
    })).optional()
    
});


const addContent = async (req: CustomRequest, res: Response) => {
 try {
    
     const { userId } = req;

     // Zod validation
    const {success,error,data} =  contentSchema.safeParse(req.body);

    if(!success){
        res.status(400).json({err:error.issues[0].message});
        return;
    }

     const { link, type, title, tags } = data;
     

     await Content.create({ link, type, title, tags, userId });
   
     res.status(201).json({
      link, type, title, tags, userId
     });

 } catch (error) {
    console.log(error)
    res.status(500).json("Error While adding content into db")
 }
};


const getContent = async (req: CustomRequest, res: Response) => {
   try {
     const { userId } = req;
   
   
     const data = await Content.find({userId}).populate("userId","username");
   
     res.json(data);

   } catch (error) {

    console.log(error)
    res.status(500).json("Error while fetching Content")

   }
  };

  const deleteContent = async (req:CustomRequest,res:Response)=>{
      try {

        const {id} = req.body;

        const {userId} = req;

        const deletedContent = await Content.findOneAndDelete({ _id: id, userId: userId });
        
        res.status(201).json({message:"Deletion successful",content:deletedContent})

      } catch (error) {
          res.status(500).json({message:"Internal Server Error",error:error})
      }
  }

export default {addContent,getContent,deleteContent}
