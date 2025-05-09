import { Client } from "pg";
import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json());

const pgClient = new Client(process.env.CONNECTION_STRING as string);

async function connectToDB() {
  try {
    await pgClient.connect();
  } catch (error) {
    console.error(error);
  }
}

app.post("/", async (req, res) => {
  const { username, password } = req.body;
  // syntax to avoid SQL injection
  const insertQuery = "INSERT INTO users (username,password) VALUES($1,$2)";
  await connectToDB();
  await pgClient.query(insertQuery, [username, password]);
  res.json("you are signed up");
});

app.listen(3000, () => console.log("Server is listening"));
