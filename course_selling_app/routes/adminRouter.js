const {Router} = require("express");
const { Course } = require("../models/course");

const adminRouter = Router();
adminRouter.get("/",(req,res)=>{
    res.json("You are admin")
})
adminRouter.post("/createCourse",async (req,res)=>{
    
    try {
        const {course_name,course_duration,course_author} = req.body;
        
        const course = await Course.findOne({course_name,course_author});

        if(course)
            return res.json({message:"Course already exists"})
        
        await Course.create(req.body);

        res.json({message:"course created  successfully"});

    } catch (error) {
        console.log(error);
        res.status(500).json("some error occurred");
    }
})

adminRouter.put("/updateCourse",async (req,res)=>{
    
    try {
        const {_id} = req.body;
        
        const course = await Course.findOne({_id});

        if(!course)
            return res.json({message:"Course doesn't exists"})
        
        await Course.updateOne({_id},req.body);

        res.status(200).json({message:"course updated successfully"});

    } catch (error) {
        console.log(error);
        res.status(500).json("some error occurred");
    }
})


adminRouter.delete("/deleteCourse",async (req,res)=>{
    
    try {
        const {_id} = req.body;
        
        const course = await Course.findById(_id);

        if(!course)
            return res.json({message:"Course doesn't exists"})
        
        await Course.deleteOne({_id},req.body);

        res.status(200).json({message:"course deleted successfully"});

    } catch (error) {
        console.log(error);
        res.status(500).json("some error occurred");
    }
})

module.exports = adminRouter;