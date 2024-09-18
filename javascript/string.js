// let str = "prem choudhary and his friend";

// // console.log();
// console.log(str);

// let backtick = `this is NEW HEADING     `;
// console.log(backtick);

// let num = "0123456789  ";
// let name = "Hello javascript";
// let result = num.concat(name);
// console.log(result);
// console.log(num.slice(2, 6));
// // console.log(name.slice());
// // console.log(num.concat(name))

// let hello = "Hello"
// // console.log(hello.replace("y","H"))
// console.log(hello.charAt(1))

// const person ={
//     name: "prem",
//     age: 21,

// }
// myMap.set(person1, 'Really cool');
// console.log(myMap);

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums = [];

arr.forEach((num) => {
  if (num > 4) {
    newNums.push(num);
  }
});
console.log(newNums);

// const newNums = arr.filter((num) => {
//   return num > 4;
// });
// console.log(newNums);
