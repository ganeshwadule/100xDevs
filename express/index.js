const express = require("express")

const app = express()

const todos = []

app.use(express.json())
app.get("/api/todo",(req,res)=>{

    res.json({
        todos
    })
})

app.post("/api/todo",(req,res)=>{
   
    let todoExists = todos.find((todo)=>{return todo.id === req.body.id})
    
    if(todoExists){
        // todos.push(req.body)
        return res.json({
            "message":"todo already exists"
        })
    }
   
    todos.push(req.body)
    res.json({"message":"added a todo"})
})

app.put("/api/todo/:id",(req,res)=>{
    let todoExists = todos.find((todo)=>todo.id = req.params.id);

    if(!todoExists){
        return res.json({
            "message":"todo with id = "+req.params+" doesn't exists"
        })
    }

    todos.forEach((todo=>{
        if(todo.id === req.params.id){
            todo.todo = req.body.todo
        }
    }))

    res.json({
        "message":"Updated todo"
    })

})

app.listen(3000,()=>console.log("serveer at 3000"))