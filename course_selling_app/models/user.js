const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    email:{type:String,unique:true},
    password:String,
    username:String,
    courses:[]
})


const User = mongoose.model("users",UserSchema);

module.exports = {User}