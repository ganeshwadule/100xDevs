const mongoose = require("mongoose")

const adminSchema = new mongoose.Schema({
    email:String,
    password:String,
    username:String
})

const Admin = mongoose.model("admins",adminSchema);

module.exports = {Admin}