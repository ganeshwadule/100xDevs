const {program} = require("commander")
const fs = require("fs")

program.option("-a","addTodo")
.option("-d","deleteTodo")
.argument("<string>")

program.parse()

program.options.forEach((op)=>{
    if(op.flags === '-a'){
        fs.appendFileSync("todos.json",program.args[0]+"\n")
    }
    else if(op.flags === "-d"){
        
    }
})
// console.log(program.options.forEach((op)=>console.log(op.flags)))
