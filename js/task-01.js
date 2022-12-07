console.log("first task");

const maj = document.querySelector("ul");
// console.log("maj: ", maj);

// const cat = categ.querySelectorAll("li > h2");
// console.log("cat: ", cat);

// for (const el of cat) {
//   console.log("el: ", el.textContent);
// }

// const matchesCateg = categ.querySelectorAll("ul");

// for (const el of matchesCateg) {
//   console.log("el: ", el.querySelectorAll("li").length);
// }

const allcateg = maj.querySelectorAll("li.item");
console.log("Number of categories: ", allcateg.length);
console.log("");
// console.log("allcateg: ", allcateg);
for (const el of allcateg) {
  //   console.log("el: ", el);
  const categName = el.querySelector("h2").textContent;
  console.log("category: ", categName);
  const numberOfCat = el.querySelectorAll("ul > li").length;
  console.log("number of elements: ", numberOfCat);
  console.log("");
}
