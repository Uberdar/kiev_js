const inputEl = document.querySelector("input#font-size-control");
const spanEl = document.querySelector("span#text");

inputEl.addEventListener("input", inputCheckFn);

function inputCheckFn() {
  console.log(this.value);
  spanEl.style.fontSize = this.value + "px";
}
