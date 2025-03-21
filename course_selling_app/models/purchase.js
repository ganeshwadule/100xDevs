const mongoose = require("mongoose")

const purchaseSchema = new mongoose.Schema({
    courseId:mongoose.Types.ObjectId,
    userId:mongoose.Types.ObjectId
})

const Purchase = mongoose.model("purchases",purchaseSchema);

module.exports = {Purchase}