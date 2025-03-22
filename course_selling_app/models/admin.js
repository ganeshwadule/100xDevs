const mongoose = require("mongoose")

const adminSchema = new mongoose.Schema({
    email:{type:String,unique:true},
    password:String,
    username:String
})

const Admin = mongoose.model("admins",adminSchema);

module.exports = {Admin}