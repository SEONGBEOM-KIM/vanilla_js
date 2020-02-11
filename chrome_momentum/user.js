const userForm = document.querySelector(".js-userForm"),
  userInput = userForm.querySelector("input"),
  userSpan = document.querySelector(".js-greeting");

const USER_NAME = "userName";

function paintUser(name) {
  userSpan.innerText = `Hello ${name}`;
}

function handleSubmit() {
  const userName = userInput.value;
  localStorage.setItem(USER_NAME, userName);
  paintUser(userName);
  userForm.classList.remove("showing");
}

function loadUser() {
  const userValue = localStorage.getItem(USER_NAME);
  if (userValue === null) {
    userForm.classList.add("showing");
    userForm.addEventListener("submit", handleSubmit);
  } else {
    paintUser(userValue);
  }
}

function init() {
  loadUser();
}
init();
