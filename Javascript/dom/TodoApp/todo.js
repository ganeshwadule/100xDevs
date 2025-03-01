const parentTodos = document.querySelector(".todos");
let index = 0;
function createTodo() {
  const textContent = document.getElementById("input").value;

  const newTodoDiv = document.createElement("div");

  newTodoDiv.className = "todo";
  newTodoDiv.id = "node" + index;

  newTodoDiv.innerHTML = `<div>${textContent}</div> 
    <button onclick="updateTodo(${index})">Update</button> 
    <button onclick="deleteTodo(${index})">Delete</button>`;

  parentTodos.appendChild(newTodoDiv);

  document.getElementById("input").value = "";
  index++;
}

function deleteTodo(indx) {
  const element = document.querySelector("#node" + indx);

  element.parentElement.removeChild(element);
}

function updateTodo(indx) {
  const data = prompt("Write Updated Todo value");
  const element = document.querySelector("#node" + indx);

  element.innerHTML = `<div id="todo-data"+${indx}>${data}</div> 
    <button onclick="updateTodo(${indx})">Update</button> 
    <button onclick="deleteTodo(${indx})">Delete</button>`;
}
