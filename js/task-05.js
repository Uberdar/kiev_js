const inputEl = document.querySelector("input#name-input");
const helloEl = document.querySelector("span#name-output");

inputEl.addEventListener("input", inputListen);

function inputListen(event) {
  //   console.log("currentTarget: ", event.currentTarget.value);
  if (event.currentTarget.value) {
    helloEl.innerText = event.currentTarget.value;
    return;
  }
  helloEl.innerText = "Anonymous";
}
