const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

let toDos = [];

// function filterFn(toDo) {
//   return toDo.id === 1;
// }

function deleteToDo(event) {
  const btn = event.target;
  const delLi = btn.parentNode;
  toDoList.removeChild(delLi);
  const cleanToDos = toDos.filter(function(toDo) {
    return toDo.id !== parseInt(delLi.id);
  });
  toDos = cleanToDos;
  saveToDos();
}

function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  delBtn.innerText = "X";
  delBtn.addEventListener("click", deleteToDo);
  const span = document.createElement("span");
  span.innerText = text;
  const newId = toDos.length + 1;
  li.appendChild(delBtn);
  li.appendChild(span);
  li.id = newId;
  toDoList.appendChild(li);
  const toDoObj = {
    text: text,
    id: newId
  };
  toDos.push(toDoObj); // <--- 만든 object를 array에 넣음. 넣는 것은 여기.
  saveToDos(); // <--- localStorage에 저장만 함.
}

// ul, li, button, span을 이용해서 리스트를 화면에 띄우고 localStorage에 저장함.
// 저장은 되어 있지만 refresh하면 저장만 되어있을 뿐 화면에는 사라짐.

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
}

function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if (loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos); //string ---> objetc 각 element를 분리,분석
    parsedToDos.forEach(function(toDo) {
      paintToDo(toDo.text); //localStorage에 값이 있을 때(!== null) 항상 화면에 띄우기
    });
  }
}

//toDo is object like {text : eating, id : 1}, so toDo.text means "eating"!

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}
init();
