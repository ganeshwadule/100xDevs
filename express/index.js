const express = require("express")

const app = express()

// user functionality
// 
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
    res.json({todos})
})

app.put("/api/todo/:id",(req,res)=>{
    let todoExists = todos.find((todo)=>todo.id === req.params.id);

    if(!todoExists){
        return res.json({
            "message":"todo with id = "+req.params.id+" doesn't exists"
        })
    }

    const index = todos.findIndex((todo)=>todo.id == req.params.id)
    todos[index].id = req.body.id;
    todos[index].todo = req.body.todo;
    console.log(index)

    res.json({
        todos
    })

})

app.delete("/api/todo/:id",(req,res)=>{
    let todoExist = todos.find((todo)=>todo.id === req.params.id);
    if(!todoExist){
        return res.json({
            "message":`todo with ${req.params.id} doesn't exists`
        })
    }

    let index = todos.findIndex((todo)=>todo.id === req.params.id);

    delete todos[index]

    res.json({todos})
})

app.listen(3000,()=>console.log("serveer at 3000"))