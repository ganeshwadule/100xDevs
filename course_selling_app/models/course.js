const mongoose = require("mongoose")

const CourseSchema = new mongoose.Schema({
    title:String,
    description:String,
    price:Number,
    imageUrl:String,
    creatorId:mongoose.Types.ObjectId
})


const Course = mongoose.model("courses",CourseSchema);

module.exports = {Course}