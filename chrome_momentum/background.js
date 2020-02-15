const body = document.querySelector("body");
const IMG_NUMBER = 8;

function paintImage(number) {
  const image = new Image();
  image.src = `images/${number + 1}.jpg`;
  body.appendChild(image);
  image.classList.add("backgroundImg");
}

function loadBackground() {
  const randomNumber = Math.floor(Math.random() * IMG_NUMBER);
  paintImage(randomNumber);
}

function init() {
  loadBackground();
}
init();
