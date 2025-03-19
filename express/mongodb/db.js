const mongoose = require("mongoose")

const user_schema = new mongoose.Schema({
    email:{type:String,unique:true},
    password:String,
    username:String
})

const todo_schema = new mongoose.Schema({
    title:String,
    done:Boolean,
    user:mongoose.Types.ObjectId
})

const User = mongoose.model("users",user_schema);
const Todo = mongoose.model("todos",todo_schema)

module.exports = {User,Todo}