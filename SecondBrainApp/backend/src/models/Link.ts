import mongoose from "mongoose";

const linkSchema = new mongoose.Schema({
  hash: { type: String, required: true },
  userId: { type: mongoose.Types.ObjectId,ref:"User" },
});



const Link = mongoose.model('Link',linkSchema)

export default Link