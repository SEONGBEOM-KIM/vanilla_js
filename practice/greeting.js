const form = document.querySelector(".js-form"),
  input = form.querySelector(".js-input"),
  h4 = document.querySelector(".js-h4");

const USER = "userKey";

function greeting(text) {
  h4.classList.add("showing");
  form.classList.remove("showing");
  h4.innerText = `Hello ${text}`;
}

function handleSubmit(enter) {
  enter.preventDefault();
  const userName = input.value;
  localStorage.setItem(USER, userName);
  greeting(userName);
}

function askForName() {
  form.classList.add("showing");
  form.addEventListener("submit", handleSubmit);
}

function loadName() {
  const currentUser = localStorage.getItem(USER); // currentUser is value of USER;
  if (currentUser === null) {
    askForName();
  } else {
    greeting(currentUser);
  }
}

function init() {
  loadName();
}
init();
