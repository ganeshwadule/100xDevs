const express = require("express");
const jwt = require("jsonwebtoken");
const path = require("path")
const app = express();

app.use(express.json());

const users = [];
const JWT_SECRET = "I am the Best";
app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html")
})
app.post("/signup", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const user = users.find((u) => u.username === username);

  if (user) return res.json({ message: "User already exists" });

  users.push({ username, password });
  res.json({ message: "You are signed up" });
});

app.post("/signin", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const user = users.find((u) => u.username === username);

  if (!user) return res.json({ message: "User doesn't exists" });

  const token = jwt.sign({ username }, JWT_SECRET);

  res.json({ token });
});

app.use((req, res, next) => {
  if (!req.headers.token) return res.json({ message: "Unauthorized" });
  const token = req.headers.token;
  const decodedUsser = jwt.verify(token, JWT_SECRET);
  if(!decodedUsser.username)return res.json({message:"Invalid User"})
  req.username = decodedUsser.username;
  next();
});

app.get("/me", (req, res) => {
  const user = users.find((u) => u.username === req.username);
  if (!user) return res.json({ message: "Unauthorized" });
  res.json({
    username: user.username,
    password: user.password,
  });
});

app.listen(3000, () => console.log("server is listening"));
