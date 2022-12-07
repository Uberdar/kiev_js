const increaseButton = document.querySelector("button[data-action=increment]");
console.log("increaseButton: ", increaseButton);
const decreaseButton = document.querySelector("button[data-action=decrement]");
console.log("decreaseButton: ", decreaseButton);
const counterEl = document.querySelector("span#value");
console.log("counterEl: ", counterEl);
let counter = 0;

increaseButton.addEventListener("click", () => {
  counter += 1;
  counterEl.textContent = counter;
  console.log("counter: ", counter);
});
decreaseButton.addEventListener("click", () => {
  counter -= 1;
  counterEl.textContent = counter;
  console.log("counter: ", counter);
});
