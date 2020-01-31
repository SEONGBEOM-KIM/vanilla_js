const title = document.getElementById("title");

// title.innerHTML = "Hi! From JS.";
// title.style.color = "red";
// document.title = "I own you now.";
// console.dir(document);

function handleClick() {
  title.style.color = "blue";
}

title.addEventListener("click", handleClick); //주의! handleResize()로 입력하면 즉시 function 실행
