const fs = require("fs");

const data = fs.readFileSync("./data.txt", "utf8");

console.log(data);

const jsonData = fs.readFileSync("data.json", "utf8");
console.log(jsonData);