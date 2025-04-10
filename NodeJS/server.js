const express = require("express");

const cors = require("cors");

const app = express();

app.use(cors());

const arr = [10, 4, 5, 27];

app.get("/notifications", (req, res) => {
  res.json({
    jobs: arr[0],
    messages: arr[1],
    network: arr[2],
    notifications: arr[3],
  });
});

const data = [{id:1,todo:"task 1"},{id:2,todo:"task 2"},{id:3,todo:"task 3"}];

app.get("/todos", (req, res) => {
  res.json(data)
});


app.get("/todos/:id", (req, res) => {
  const todo = data.find((t)=> t.id === parseInt(req.params.id))
  res.json(todo);
});

app.listen(3000, () => console.log("server is up"));
