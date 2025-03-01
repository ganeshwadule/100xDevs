const {program} = require("commander")
const fs = require("fs")

program.
option("-p")
.argument('<string>')

program.parse()
// console.log(program.args[0])

fs.readFile(program.args[0],"utf-8",(err,data)=>{
    const arr = data.split(/\s+/);
    // console.log(arr)
    console.log(arr.length)
})