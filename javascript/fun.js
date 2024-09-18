// function myFunction() {
//   console.log("hello Js user ...)");
//   console.log("Hello coder ...!");
// }
// myFunction();

// // function myFunction(msg) {
// //   console.log(msg);
// // }
// // myFunction("Hello js user ");

// function sum(x, y) {
//   console.log(x + y);
// }
// sum(20, 20);
// // sum(20, 20);

// // function twoSum(x, y) {
// //   s = x + y;
// //   return s;
// // }
// // let res = twoSum(50, 50);
// // console.log(res);

// //  arrow function

// const arrowMul = (x, y) => {
//   return x * y;
// };
// let res = arrowMul(5, 5);
// console.log(res);

// const arrowSum = (x, y) => {
//   console.log(x + y);
// };
// let res1 = arrowSum(5, 5);
// console.log(res1);

// //  print HelloWorld

// const printHello = () => {
//   console.log("Hello");
// };
// let output = printHello();
// // console.log(output);

// //  print vowels in function

// function countVowels(str) {
//   let count = 0;
//   for (const char of str) {
//     if (
//       char === "a" ||
//       char === "e" ||
//       char === "i" ||
//       char === "o" ||
//       char === "u"
//     ) {
//       count++;
//     }
//   }
//   return count;
// }

// let res3 = countVowels("Hello i'm from surat");
// console.log(res3);

// const countVow = (str) => {
//   let count = 0;
//   for (const char of str) {
//     if (
//       char === "a" ||
//       char === "e" ||
//       char === "i" ||
//       char === "o" ||
//       char === "u"
//     ) {
//       count++;
//     }
//   }
//   return count;
// };

// let res3 = countVow("Hello i'm from surat");
// console.log(res3);

// let arr = ["pune", "surat", "dehli", "rajasthan"];
// console.log(arr);

// arr.forEach((val, idx, arr) => {
//   console.log(val.toUpperCase(), idx, arr);
//   //   console.log(val.toLowerCase());
// });

// arr.filter((val) => {
//   console.log(val);
// });

//  pratice QS
//  print All array square
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(numbers);

// numbers.forEach((num) => {
//   //   console.log(num * num); // second logice is num**2
//   console.log(num ** 2);
// });

//  print all addstion of array
// let addNum = [100, 254, 655, 146, 43, 541, 214, 541];
// let twoNum = [789, 456, 123, 321, 654, 987, 147, 852];

// let three = addNum.concat(twoNum);
// console.log(three);
// three.forEach((num) => {
//   console.log(num / 2);
// });

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// // console.log(numbers);
// let calcSquare = (num) => {
//   //   console.log(num * num); // second logice is num**2
//   console.log(num ** 2);
// };
// numbers.forEach(calcSquare);

// numbers.forEach((num) => {
//   //   console.log(num * num); // second logice is num**2
//   console.log(num ** 2);
// });

//  Map methode in function

// let nums = [12, 12, 32, 41, 52, 63];
// let newNums = nums.map((el) => {
//   return el + 2;
// });
// console.log(newNums);
// console.log(newNums);

//  filter methodes

let arr = [1, 2, 3, 4, 5, 6, 7, "8", 9, 10, 12, 13, 14, 15];
let filteredMethods = arr.filter((val) => {
  return val < 5;
});
console.log(filteredMethods);

// arr = [...arr, 1];

/* 
create a array
array of filter
array of map
odd and even 
factoryal
*/
const number = [1, 2, 3, 4, 5, 67, 89, "r", "20", "a"];
let filteredMethod = number.filter((val) => {
  return val > 5;
});
console.log(filteredMethod)

