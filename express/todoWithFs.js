const fs =require("fs").promises
const express = require("express")

// readFile data
// return it as js object
const getTodos =  async ()=>{

    const data = await fs.readFile("todos.json","utf-8");
    return JSON.parse(data);

}

// read file data
// parse file data as js object
// if id already exists return
// else append data in js object
// stringify js object
// rewrite file data
// return appropriate message

const addTodo =  async (todo)=>{
    
    const data = await fs.readFile("todos.json","utf-8")
    console.log(data)
    const todos = JSON.parse(data)
    if(todos.hasOwnProperty(todo.id)){
        return "todo with"+ todo.id +"already exist";
    }
    todos[todo.id] = `{title:${todo.title}}`

    const todosToAppend = JSON.stringify(todos,null,4) 

    await fs.writeFile("todos.json",todosToAppend)
    return "appended data successfully";
}

// read file data
// parse file data as js object
// if id doesn't exists return
// else update data in js object
// stringify js object
// rewrite file data
// return appropriate message

const updateTodo = async (id,todo)=>{
    const data = await fs.readFile("todos.json", "utf-8");
    
    const todos = JSON.parse(data);
    
   
    if (!todos.hasOwnProperty(id)) {
       
        return `Todo with ID ${id} doesn't exist`;
    }
    

    todos[id] = `{title:${todo.title}}`
    await fs.writeFile("todos.json", JSON.stringify(todos, null, 4));

    return `Todo with ID ${id} updated successfully`;

}

// read file data
// parse file data as js object
// if id doesn't  exists return
// else delete data in js object
// stringify js object
// rewrite file data
// return appropriate message

const deleteTodo = async (id)=>{
    let data = await fs.readFile("todos.json","utf-8");
    let fileData = JSON.parse(data)
   
    if(!fileData.hasOwnProperty(id)){
        return `todo with id ${id} doesn't exist`;
    }

    delete fileData[id]

    const d= await fs.writeFile("todos.json",JSON.stringify(fileData,null,4))
    console.log(d)

    return(`todo with id ${id} deleted successfully`);
    // console.log(data)
}


const app = express()

app.use(express.json())

app.get("/",(req,res)=>{
    res.send("welcome to file based todo app");
})



// Get all the todos from file
app.get("/api/todo",async(req,res)=>{
    const data = await getTodos();
    res.json(data)
})

// Add a todo in todos file 
app.post("/api/todo",async(req,res)=>{
    const result = await addTodo(req.body)
    // console.log(req.body)
    res.send({
        "message":result
    })
})

// update todo by providing a id
app.put("/api/todo/:id",async(req,res)=>{
    const result = await updateTodo(req.params.id,req.body)
    res.send({
        "message":result
    })
})

// update todo by providing a id
app.delete("/api/todo/:id",async(req,res)=>{
    const result = await deleteTodo(req.params.id);
    res.json({
        "message":result
    })
})

// app.listen(3000,()=>{
//     console.log("server listening on 3000");
// })

