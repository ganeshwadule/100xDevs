const {Router} = require("express")
const { Course } = require("../models/course")

const courseRouter = Router()

courseRouter.get("/preview/:id",async(req,res)=>{
    try {
        const course = await Course.findOne({_id:req.params.id});
        res.status(200).json(course)

    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Some error occured"})
    }

})

courseRouter.get("/courses",async (req,res)=>{
    try {
        const courses = await Course.find();
        res.status(201).json(courses)
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Some error occured"})
    }
})

module.exports = courseRouter;