/* loop in js */
// for (let i = 1; i <= 5; i++) {
//   console.log("i = ", i);
// }
// console.log("loop has ended ");

//  loop of sum 1 to 5
// loop of sum 1 to n

let sum = 0;
let n = 100;
for( let i =1; i<=100 ; i++){
    sum = sum + i}
console.log("sum = ", sum)

// console.log("loop has ended")

//  while loop in js //

// let i = 1;
// while (i <= 10) {
//   console.log("i = ", i);
//   i++;
// }

//  do ---  while loop
// let i = 1
// do{
//     console.log("prem choudhary");
//     i++ ;
// } while(i<=5);

// for of loop in javascrpit ++++++   for only string  and Array ++++

// let str = "javascript";
// let size = 0;
// for (let val of str) {
//   console.log(" val= ", val);
//   size++;
// }

// console.log("srting size =", size);

// for in loop in javascrpit ++++++   object and Array

// let student = {
//   name: "rahul choudhary",
//   age: 21,
//   cgpa: 7.5,
//   ispaas: true,
// };

// for (let str in student) {
//     console.log( str ,  student[str])

//  }

//  for (let num = 0; num <=100; num++) {
//     // console.log(i)
//     // print 0 to 100 even number
//     if( num%2 == 0){
//         console.log("even = ", num)

//     }
//  }

//   print 0 to 100 odd number
// for (let num = 0; num<=100; num++){
//     if(num%2 !== 0)
//         console.log("odd number = ", num)
// }

//  prectic qustion
// let gamenum = 45;
// let usernum = prompt("guess the game number : ");

// while (usernum != gamenum) {
//   usernum = "You entered the wrong number. guess again ";
// }
// console.log("woh! You enterd the right number");

//  for loop
// for (let i = 1; i  10; i++) {
//   console.log(i);
// }
// var i = 1
// const number = [
//   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20
// ];

// for (var i = 0; i <= 120; i += 2) {
//   console.log(i);

//   }
// console.log(i)
// for (let i = 0; i < number.length; i++) {
//   console.log(number[i]);
// // }
// const fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];

// for (var i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }
// console.log(i)

// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
//   // [10,11,12,13,
// ];

// for (let i = 0; i < matrix.length; i++) {
//   for (let j = 0; j < matrix[i].length; j++) {
//     console.log(matrix[i][j]);
//   }
//   // console.log(matrix)
//   console.log(i);
// }
// split

// const str = " Rohit sharma is my idol";

// const chars = str.split("");
// console.log(chars[3]);

// const strCopy = str.split();
// console.log(strCopy);

// console.log(str)

// for loop

// for (let i = 1; i < number.length; i++) {
//   console.log(number)
// }

//  for of loop o

// const name = 'wes 🥹  Bos'
// for (const letter of name) {
//     // const chars =
//   console.log(letter);
// }

// const wes = {
//   name: "cool",
//   age: 22,
//   boos: true,
// };

// for (const prop in wes) {
//   console.log(prop);
// }

// const baseHumanStats = {
//   feet: 2,
//   arms: 2,
//   eyes: 2,
//   head: 1,
// };

// function Humen(name) {
//   this.name = name;
// }
// Humen.prototype = baseHumanStats;
// const wes2 = new Humen("wes");
// // console.log(wes2);

// // console.log(Object.entries(wes2));

// for (const prop in wes2) {
//   //   console.log(prop);
// }

// // while loop

// // let cool = true;
// // while (cool === true) {
// //   console.log('You are cool');
// // }  infinety

// // let cool = true;
// // let i = 1;
// // while (cool === true) {
// //   console.log('You are cool');
// //   i++
// //   if (i > 100) {
// //     cool = false;
// //   }
// // }

// // // do{} while() loop
// // let i = 0;

// // do {
// //   console.log(i);
// //   i++;
// // } while (i < 5);

// let userInput;
// do {
//   userInput = prompt("enter a number greater than 10:");
// } while (userInput < 10);

// console.log("You Entered : ", userInput);
