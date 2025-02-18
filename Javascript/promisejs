const fs = require("fs");

function getData(fetchData){
    fetchData();
}

function fetchData(){
    console.log("Fetching data...");
    console.log("Data fetched");
}

let p = new Promise(getData);
// p.then(fetchData);

// write a function that reads content of file
// remove extra space
// write back clean data tof file

// fs.writeFile("b.txt","ganesh",()=>console.log("File written"));

function cleanFile(){
    fs.readFile("a.txt","utf-8",(err,data)=>{
        console.log("Old File "+data+"\n");
        fs.writeFile("data.txt",data.trim(),()=>console.log("File rewritten"));
        console.log("New File "+data.trim());
    });
  
}

let p1 = new Promise(function(resolve){
    resolve();
});
p1.then(cleanFile)
// cleanFile();
// fs.readFile("./a.txt","utf-8",(err,data)=>{
//     console.log(data.trim())
// })

