const mongoose = require("mongoose")

const CourseSchema = new mongoose.Schema({
    course_name:String,
    course_duration:String,
    course_author:String
})


const Course = mongoose.model("courses",CourseSchema);

module.exports = {Course}