// const stars = 2;
// let price;

// if (stars === 1) {
//   price = 20;
// } else if (stars === 2) {
//   price = 30;
// } else if (stars === 3) {
//   price = 50;
// } else if (stars === 4) {
//   price = 70;
// } else if (stars === 5) {
//   price = 120;
// } else {
//   console.log("there is no such stars amount");
// }

// switch (stars) {
//   case 1:
//     price = 20;
//     break;

//   case 2:
//     price = 30;
//     break;

//   case 3:
//     price = 50;
//     break;

//   case 4:
//     price = 70;
//     break;

//   case 5:
//     price = 120;
//     break;

//   default:
//     console.log("there is no such stars amount");
// }

// console.log(price);

// const mass = [1, 2, 3, 6, 5, 4, 7, 8, 9];
// let totalMass = 0;

// for (const val of mass) {
//   totalMass += val;
// }

// console.log("totalMass: ", totalMass);

// const loginMass = ["firstLogin", "secondLogin", "thirdLogin"];
// let loginToFind = "secondLogin";
// let message = `user ${loginToFind} has NOT been found :(`;

// for (let i = 0; i < loginMass.length; i += 1) {
//   const login = loginMass[i];

//   console.log("Login :", login);

//   if (login === loginToFind) {
//     message = `user ${loginToFind} has been found!`;
//     break;
//   }
// }

// for (const login of loginMass) {
//   console.log("Login :", login);

//   if (login === loginToFind) {
//     message = `user ${loginToFind} has been found!`;
//     break;
//   }
// }
// console.log(message);

// const messageForLogins = loginMass.includes(loginToFind)
//   ? `user ${loginToFind} has been found!`
//   : `user ${loginToFind} has NOT been found :(`;

// console.log(messageForLogins);

// const string = "This Is StRiNG";
// let splitedString = string.split("");
// let invertedString = "";

// for (const letter of splitedString) {
//   if (val === val.toLowerCase()) {
//     console.log("This is lowercase! --", val);
//     invertedString += val.toUpperCase();
//   } else {
//     console.log(val);
//     invertedString += val.toLowerCase();
//   }

//   invertedString +=
//     letter === letter.toLowerCase()
//       ? letter.toUpperCase()
//       : letter.toLowerCase();
// }

// console.log(invertedString);

// closures ЗАМЫКАНИЯ

// const makeShef = function (name) {
//   const makeDish = function (dish) {
//     console.log(`Shef ${name} made ${dish}!`);
//   };
//   return makeDish;
// };

// let t1 = makeShef("mango");

// t1("eggs");

// CLOSURES ЗАМЫКАНИЯ!

// функция конструктор

// const Car = function ({ brand, model, price } = {}) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
// };

// const car = new Car({
//   brand: "audi",
//   model: "Q3",
//   price: 202020,
// });
// console.log(car);

// классы это синтаксисечкий сахар, удобная обертка для функции конструктора

// class Car1 {
//   constructor({ brand, model, price } = {}) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
// }

// const carInstance = new Car1({
//   brand: "audi",
//   model: "Q3",
//   price: 202020,
// });

// console.log("carInstance: ", carInstance);

//////////
