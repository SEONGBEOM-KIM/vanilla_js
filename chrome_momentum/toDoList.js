const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

const TODOS = "toDos";
let TODOS_ARRAY = [];

function handleDelClick() {
  const button = event.target;
  const del_li = button.parentElement;
  toDoList.removeChild(del_li);
  const newArray = TODOS_ARRAY.filter(function(element) {
    return element.id !== parseInt(del_li.id);
  });
  TODOS_ARRAY = newArray;
  saveToDos();
}

function saveToDos() {
  localStorage.setItem(TODOS, JSON.stringify(TODOS_ARRAY));
}

function paintToDos(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  delBtn.innerText = "X";
  delBtn.addEventListener("click", handleDelClick);
  const span = document.createElement("span");
  span.innerText = text;
  const newId = TODOS_ARRAY.length + 1;
  li.appendChild(delBtn);
  li.appendChild(span);
  li.id = newId;
  toDoList.appendChild(li);
  const toDos_object = { content: text, id: newId };
  TODOS_ARRAY.push(toDos_object);
  saveToDos();
}

function handleSubmit(event) {
  event.preventDefault();
  const currentToDo = toDoInput.value;
  paintToDos(currentToDo);
  toDoInput.value = "";
}

function loadToDos() {
  const toDo_value = localStorage.getItem(TODOS);
  if (toDo_value !== null) {
    const parsedToDos = JSON.parse(toDo_value);
    parsedToDos.forEach(function(object) {
      paintToDos(object.content);
    });
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}
init();
