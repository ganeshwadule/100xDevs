const fs =require("fs").promises

const getTodos =  async ()=>{
    
    const data = await fs.readFile("todos.json","utf-8");
    return JSON.parse(data)

}



const addTodo =  async (todo)=>{
    
    const data = await fs.readFile("todos.json","utf-8")
    console.log(data)
    const todos = JSON.parse(data)

    todos[todo.id] = `{title:${todo.title}}`

    const todosToAppend = JSON.stringify(todos,null,4) 

    await fs.writeFile("todos.json",todosToAppend)
    console.log("appended data successfully")
}

const updateTodo = async (id,todo)=>{
    const data = await fs.readFile("todos.json", "utf-8");
    
    const todos = JSON.parse(data);
    
    const flag = todos.hasOwnProperty(id);
    console.log(flag)
    if (!flag) {
        console.log(`Todo with ID ${id} doesn't exist`) ;
        return;
    }
    
    console.log("Hii I am still there bro");

    todos[id] = `{title:${todo.title}}`
    await fs.writeFile("todos.json", JSON.stringify(todos, null, 4));

    return `Todo with ID ${id} updated successfully`;

}
// check if todo exist
// if exists delete item with that id in todo.json file

const deleteTodo = async (id)=>{
    let data = await fs.readFile("todos.json","utf-8");
    let fileData = JSON.parse(data)
   
    if(!fileData.hasOwnProperty(id)){
        console.log(`todo with id ${id} doesn't exist`)
        return;
    }
    delete fileData[id]
    await fs.writeFile("todos.json",JSON.stringify(fileData,null,4))
    console.log(`todo with id ${id} deleted successfully`)
    // console.log(data)
}

// deleteTodo(5)
