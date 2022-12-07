function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonEl = document.querySelector("button.change-color");
const spanEl = document.querySelector("span.color");

buttonEl.addEventListener("click", randomise);

function randomise() {
  let insideVar = getRandomHexColor();
  spanEl.textContent = insideVar;
  document.body.style.backgroundColor = insideVar;
}
