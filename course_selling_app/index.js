const express = require("express");
const cookieParser = require("cookie-parser")
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const userRouter = require("./routes/userRouter")
const courseRouter = require("./routes/courseRouter")
const adminRouter = require("./routes/adminRouter")

// configuring environment variables
dotenv.config();

const PORT = process.env.PORT | 3000;

// connecting to DB
mongoose
  .connect(process.env.CONNECTION_STRING)
  .then(() => console.log("connected to db"))
  .catch((err) => console.log(err));

const app = express();

app.use(cookieParser())
app.use(express.json());

//Never forget initial " / "
app.use('/api/v1/user',userRouter)
app.use("/api/v1/course",courseRouter)
app.use("/api/v1/admin",adminRouter);

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
