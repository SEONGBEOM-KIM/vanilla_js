const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector("ul");

const TODO_KEY = "toDo";
const TODO_ARRAY = [];

function saveToDo(content) {
  TODO_ARRAY.push(content);
  localStorage.setItem(TODO_KEY, JSON.stringify(TODO_ARRAY));
}

function paintToDo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  delBtn.innerText = "X";
  const span = document.createElement("span");
  span.innerText = text;
  const listId = TODO_ARRAY.length + 1;
  li.appendChild(delBtn);
  li.appendChild(span);
  li.id = listId;
  const toDoObject = { content: text, id: listId };
  toDoList.appendChild(li);
  toDoInput.value = "";
  saveToDo(toDoObject);
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
