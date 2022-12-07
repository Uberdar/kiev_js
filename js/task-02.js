const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// console.log("ingredients: ", ingredients);
const ingredientsMass = [];

for (const el of ingredients) {
  // console.log("el: ", el);
  let newElem = document.createElement("li");
  newElem.classList.add("item");
  newElem.textContent = `${el}`;

  // console.log("newElem: ", newElem);
  ingredientsMass.push(newElem);
  // console.log("ingredientsMass: ", ingredientsMass);
}

const ingredientsEl = document.querySelector("ul#ingredients");
// console.log("ingredientsEl: ", ingredientsEl);

ingredientsEl.append(...ingredientsMass);
