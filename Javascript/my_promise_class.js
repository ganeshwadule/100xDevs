const fs = require('fs');

class promise {
    constructor(fn) {
        // Store the function but don't execute it yet
        this.fn = fn;
        this.fn(()=>{
            this.resolves.forEach(fn => fn());
        })
    }

    then(resolve) {
        if(!this.resolves){
            this.resolves = []
        }
        this.resolves.push(resolve)
    }
}

// function readFileAsync(printData) {
//     fs.readFile("data.txt", "utf8", (err, data) => {
//         if (err) {
//             console.error("Error reading file:", err);
//             return;
//         }
//         printData(data);
//     });
// }

// function printData(data) {
//     console.log(data);
// }

// const p = new promise(readFileAsync);
// p.then(printData); // Ensuring resolve is set before execution

function setTimeoutPromisified(ms){
    return new promise(resolve=>setTimeout(resolve,ms));

}

// setTimeoutPromisified(2000).then(()=>console.log("Hello"))

function readFileAsync(filename){
    return new promise(resolve=>{
        fs.readFile(filename,"utf-8",(err,data)=>{
            resolve(data)
        });
    })
}

// fs.readFile("data.txt","utf8",(err,data)=>{
//     console.log(data);
// })

readFileAsync("data.txt").then((data)=>console.log(data))