let todosEl = document.querySelector("#todos");
let todos = [];
let c = 0;
function addTodo() {
  todos.push({
    id: c,
    title: document.querySelector("input").value,
  });
  c++;
  document.querySelector("input").value = "";
  render();
}

function deleteTodo(index) {
  
    delete todos[index];
    render()
}

function render() {
  document.querySelector("#todos").innerHTML = "";

  todos.forEach((todo) => {
    createComponent(todo.id);
  });
}

function createComponent(id) {
  id = parseInt(id);

  let todoEl = document.createElement("div");
  todoEl.className = "todo"

  let inputEl = document.createElement("input");
  inputEl.value = todos[id].title;
  inputEl.disabled = true
  inputEl.id = id


  let deleteEl = document.createElement("button");
  deleteEl.innerHTML = "delete";
  deleteEl.id = id;
  deleteEl.onclick = ()=>deleteTodo(id);

  let updateEl = document.createElement("button");
  updateEl.innerHTML = "update";
  updateEl.id = id;
  updateEl.onclick = ()=>updateTodo(id,inputEl,updateEl);
  

  todoEl.appendChild(inputEl);
  todoEl.appendChild(updateEl);
  todoEl.appendChild(deleteEl);

  todosEl.appendChild(todoEl);
}
console.log(todos);

function updateTodo(index,inputEl,updateEl){
    
    inputEl.disabled = false;
    updateEl.innerHTML = "save"
    inputEl.classList.add("editable")

   
    // todos[parseInt(index)].title
    updateEl.onclick = ()=>{
        todos[parseInt(index)].title = inputEl.value;
        render()
    }
}