import mongoose from "mongoose";

const contentSchema = new mongoose.Schema({
  link: { type: String },
  type: { type: String },
  title: { type: String, required: true },
  tags: [ {type: mongoose.Types.ObjectId , ref:"Tag"} ] ,
  userId: { type: mongoose.Types.ObjectId, ref:"User", required: true },
});

const Content = mongoose.model("Content", contentSchema);

export default Content;
