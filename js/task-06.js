const inputEl = document.querySelector("input#validation-input");
inputEl.addEventListener("blur", validationCheckFn);

function validationCheckFn() {
  console.log(this.value.length);
  if (Number(this.value.length) === Number(6)) {
    if (inputEl.classList.contains("invalid")) {
      inputEl.classList.remove("invalid");
    }
    inputEl.classList.add("valid");
    return;
  }
  inputEl.classList.remove("valid");
  inputEl.classList.add("invalid");
}
