const express = require("express");

const mongoose = require("mongoose");
const dotenv = require("dotenv");

const userRouter = require("./routes/userRouter")

// configuring environment variables
dotenv.config();

const PORT = process.env.PORT | 3000;

// connecting to DB
mongoose
  .connect(process.env.CONNECTION_STRING)
  .then(() => console.log("connected to db"))
  .catch((err) => console.log(err));

const app = express();

app.use(express.json());

app.use('/api/v1/user',userRouter)

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
