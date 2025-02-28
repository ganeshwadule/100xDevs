const fs = require("fs")
// solve() 

const readFilePromisified = (fileName)=>{
    return new Promise((resolve,reject)=>{
        fs.readFile(fileName,"utf-8",(err,data)=>{
            if(err){
                reject("File Not Found")
            }
            resolve(data)
        })
    });
}


// readFilePromisified("data.txt").then((data)=>console.log(data))


const readingFile = async (fileName)=>{
    const data = await readFilePromisified(fileName).catch((d)=>console.log(d));
    console.log(data)
}

readingFile("ddata.txt")


function setTimeOutPromisified2(ms){
    return new Promise((resolve)=>{
        setTimeout(()=>resolve(),ms)






    });
}

setTimeOutPromisified2(3000).then(()=>console.log("You understand promises"));