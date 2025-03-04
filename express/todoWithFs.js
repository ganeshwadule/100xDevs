const fs =require("fs").promises

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
    // console.log(data)
    const todos = JSON.parse(data);
    // console.log(todos)
    const flag = todos.hasOwnProperty(String(id));
    console.log(flag)
    if (!flag) {
        return `Todo with ID ${id} doesn't exist`;
    }
    

    todos[id] = `{title:${todo.title}}`
    await fs.writeFile("todos.json", JSON.stringify(todos, null, 4));

    return `Todo with ID ${id} updated successfully`;

}

const newTodo = {
    id:2,
    title:"confidence is must"btfgt
}
console.log(updateTodo(5,newTodo).then(()=>console.log("done")))