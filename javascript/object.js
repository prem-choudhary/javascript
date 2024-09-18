// const student = {
//   name: "prem choudhary",
//   marks: 94.99,

//   printmarsk: function () {
//     console.log("marsk = ", this.marks);
//   },
// };

// const employe = {
//   caltex() {
//     console.log("tax rate is 10%");
//   },
// };

// class ToyotaCar {
//   start() {
//     console.log("start");
//   }
//   stop() {
//     console.log("stop");
//   }
// }

// let fortuner = new ToyotaCar();
// let thar = new ToyotaCar();

// let person = {
//   name: "prem",
//   sum: (a, b) => {
//     return a + b;
//   },
// };

// let great = " hello sir ";
// let great1 = " welcome to webside";
// console.log(`Hello ${this.great1} from india `);

// sneeze = function ()  {
//   console.log("Ahhhh Choooo");
// };
// sneeze()

let name = "prem";
let name1 = "prem";
console.log(name === name1);
name = "scott";
console.log(name === name1);

// const total = function (){
//     person1 = "prem",
//     person2 = "prem"
// }

// console.log(total()person1 === person2);

const person1 = {
  first: "wes",
  last: "boos",
};
const person2 = {
  first: "wes",
  last: "boos",
};
const person3 = person1;
person3.first = 'Larry';
console.log(person3.first);
console.log(...person1.first);
