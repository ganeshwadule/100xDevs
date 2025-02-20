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