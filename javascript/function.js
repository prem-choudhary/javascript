function addTwoNumbers(number1, number2) {
  let add = number1 + number2;
  console.log("prem choudhary");
  return add;
}
const add = addTwoNumbers(10, 20);

console.log("add ;", add);

function Userlogin(username) {
  return `${username} just log in `;
}
Userlogin("prem");
console.log(Userlogin);

console.log(Userlogin("prem"));
console.log(Userlogin());

// function coding() {
//   let name = "prem";
//   const age = 21;
//   let email = "pk@2002";
//   return coding;
// }
// //  coding();
// console.log(coding());

// function addOneNumber(...num1) {
//   return num1;
// }
// // console.log(addOneNumber(200, 300, 500));

// function sum(a, b, c) {
//   return a + b + c;
// }
// const numbers = [1, 2, 3];
// console.log(sum(...numbers));

// console.log(...numbers);
// const array = [1, 2, 3];
// const array1 = [4, 5, 6];

// const mergedArray =

// getname();
// console.log(x);
// var x = 10;

// function getname() {
//   console.log("hello user ");
// }
// getname

// function calculateBill() {
// this is a function body
//   console.log("Running is calculate Bill !!");
//   const total = 100 * 1.13;
//   console.log(total);
//   return total
// }
// calculateBill();
// console.log(`Your total is $${calculateBill()}`);

// const bill = 100;
// const taxRate = 0.13;

// function calculateBill() {
//   console.log("Running calculate bill!!");
//   const total = bill * 1 + taxRate;
//   return total;
// }
// const myTotal = calculateBill();
// const myTotal2 = calculateBill();
// console.log(myTotal, myTotal2);

// function add() {
//   console.log(`add two number ${add}`);

//   return 2 + 3;
// }
// console.log(add());
// console.log(`add Two numbers${add}`);
// add();
// console.log(add);

// function addTwoNmubers(a, b) {
//   return a + b;
// }
// console.log(addTwoNmubers(5, 5));

//  something this like

// const Hello = "prem";
// function sayHello(Hello) {
//   return `Heyy SuperMan ${Hello}`;
//   //   return "Heyy SuperMan";
// }
// const greeting = sayHello("prem");
// console.log(greeting);
// console.log((sayHello));

// function docter(name) {
//   return `dr ${name}`;
// }
// console.log(docter("prem"));

// function yello(name) {
//   return `hey ${name.toUppercase()}`;
// }
// console.log(yello())

// function multiply(a, b = 1) {
//   return a * b;
// }

// console.log(multiply(5, 2));

// console.log(multiply(5));

//  this is a simple function method

// var x = 1;
// a();
// b();
// console.log(x)

// function a(){
//     var x = 10
//     console.log(x)
// }

// function b(){
//     var x = 100
//     console.log(x)
// }

/*  Anonymous Functions */
//  function(firstName){
//     return `dr ${firstName}`

//  }

// const doctorize = function (firstName) {
//     return `prem . ${firstName}`;
//   };

// const dicdoctorize = function (firstName) {
//   doesntExist();
//   return `prem ${firstName}`;
// };

// console.log(doctorize2("rinku"));

// const doctorize = function (firstName) {
//   return `prem. ${firstName}`;
// };
// function doctorize2(firstName) {
//   return `mayur bhai. ${firstName}`;
// }

// hoisiting();

//  function hoisiting() {
//   console.log(`this function has been hoisiting`);
// }

// function message() {
//   const userName = "Praveen";
//   console.log(userName);

//   function secName() {
//     const userlastName = "Chaudhary";
//     console.log(userlastName);
//   }
//   console.log(userlastName);

//   secName();
// }
// message();

/* +++++++++++++ if else +++++++++ */

// if (true) {
//   const username = "prem";
//   if (username === "prem") {
//     const webpage = " desi plan";
//     console.log(username + webpage);
//   }
//   console.log(webpage);
// }
// console.log(username);

// console.log(this)

// const user = {
//   username: "perm chaudhary",
//   price: 999,

//   welcomeMassge: function () {
//     console.log(`${this.username} welcome to Website`);
//     console.log(this);
//   },
// };

// user.welcomeMassge();
// user.username = "Hello";
// user.welcomeMassge;

//  const greet = function multiply(a,b){
//     return a*b;
// }

// const mgreet = ()=>{
//     return a*b;
// }

// greet(3,4);

// const greet = function () {
//   //   return (number = 100 + 10);
//   return 100;
// };
// // greet();
// console.log(greet());

// function addTwoNmubers(a, b = 3) {
//   const total = a + b;
//   return total;
// }
// console.log(addTwoNmubers());

/* ++++++++++ arrow function +++++++++ */

// const materials = ["prem", "superman", "superHero"];

// console.log(materials.map((material) => material.length));

// const sayHello = (name) => {
//   console.log("Hello" + name);
//   const x = {
//     name: "Rinku",
//     role: "js developer",
//     exp: 30,
//     show: function () {
//       console.log(` The name is ${this.name} \ The role is ${this.role}`);
//     },
//   };
//   x.show;
//   //   console.log(sayHello());
// };

// sayHello("joy");

// (function () {
//   var firstName = "prem chaudhary";
//   console.log(firstName);
// })();

// button.addEventListener("click", function () {
//     console.log("nice Job!");
//   });
