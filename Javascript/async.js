const fs = require("fs");

fs.readFile("./data.txt", "utf8",(err,data)=>console.log(data));

// console.log(data);
fs.readFile("data.json", "utf8",(err,data)=>console.log(data));
// console.log(jsonData);

function calc(a,b,fun){
    fun(a,b);
}

const sum = (a,b)=>{console.log(a+b)}
calc(3,4,sum);