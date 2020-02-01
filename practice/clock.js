const clock = document.querySelector(".js-clock"),
  time = clock.querySelector(".js-time");

function interval() {
  setInterval(currentTime, 1000);
}

function currentTime() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  time.innerText = `${hours < 10 ? `0${hours}` : `${hours}`}:${
    minutes < 10 ? `0${minutes}` : `${minutes}`
  }:${seconds < 10 ? `0${seconds}` : `${seconds}`}`;
  interval();
}

function init() {
  currentTime();
  // setInterval(currentTime, 1000);   <--- This also can work!
}
init();
