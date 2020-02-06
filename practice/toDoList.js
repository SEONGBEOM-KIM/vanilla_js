const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector("ul");

const TODO_KEY = "toDo";
let TODO_ARRAY = [];

function deleteToDo(event) {
  const btn = event.target;
  const delList = btn.parentElement;
  toDoList.removeChild(delList);
  const cleanToDos = TODO_ARRAY.filter(function(toDo) {
    return toDo.id !== parseInt(delList.id);
  });
  TODO_ARRAY = cleanToDos;
  saveToDo();
}

function saveToDo(content) {
  localStorage.setItem(TODO_KEY, JSON.stringify(TODO_ARRAY));
}

function paintToDo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  delBtn.innerText = "X";
  delBtn.addEventListener("click", deleteToDo);
  const span = document.createElement("span");
  span.innerText = text;
  const listId = TODO_ARRAY.length + 1;
  li.appendChild(delBtn);
  li.appendChild(span);
  li.id = listId;
  const toDoObject = { content: text, id: listId };
  toDoList.appendChild(li);
  toDoInput.value = "";
  TODO_ARRAY.push(toDoObject);
  saveToDo();
}

function handleSubmit(event) {
  event.preventDefault();
  const toDo_content = toDoInput.value;
  paintToDo(toDo_content);
}
function loadToDo() {
  const toDoValue = localStorage.getItem(TODO_KEY);
  if (toDoValue !== null) {
    const parsedToDos = JSON.parse(toDoValue);
    parsedToDos.forEach(function(toDo) {
      paintToDo(toDo.content);
    });
  }
}

function init() {
  loadToDo();
  toDoForm.addEventListener("submit", handleSubmit);
}
init();
