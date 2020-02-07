const body = document.querySelector("body");
const IMAGE_NUMBER = 8;

function loadBgImg(imgNumber) {
  const image = new Image();
  image.src = `images/${imgNumber + 1}.jpg`;
  body.appendChild(image);
  image.classList.add("bgImage");
}

function genRandom() {
  const number = Math.floor(Math.random() * IMAGE_NUMBER);
  return number;
}

function init() {
  const randomNumber = genRandom();
  console.log(randomNumber);
  loadBgImg(randomNumber);
}
init();
