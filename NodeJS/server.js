const express = require("express");

const cors = require("cors");

const app = express();

app.use(cors());

const arr = [10, 4, 5, 27];


let index = Math.floor(Math.random() * 4);
setInterval(() => {
  arr[index] += 1;
  console.log(arr)
}, 3000);

app.get("/notifications", (req, res) => {
  res.json({
    jobs: arr[0],
    messages: arr[1],
    network: arr[2],
    notifications: arr[3],
  });
});
app.listen(3000, () => console.log("server is up"));
