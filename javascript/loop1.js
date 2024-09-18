//    for loop (print 1 to 3)

// for (let i = 1; i <= 5; i++) {
//   console.log(`print number = ${i}`);
// }
// console.log(" ");

// let numbre = 3;

// for (let count = 1; count <= numbre; count++) {
//   console.log("prem");
// }

//  calculatate sum of 1 to 5

// let sum = 0;
// let n = 100;
// for (let i = 1; i <= n; i++) {
//   sum = sum + i;
// }
// console.log(`sum of 1 to 5 is =  ${sum}`);

//  while loop (conditison)

// let i = 1;
// while (i <= 5) {
//   console.log("while loop", i);
//   i++;
// }

//   Do While loop
// let i = 1;
// do{
//     console.log('i is = ', i)
//     i++

// } while (i<=5)

//  for of loop

// let str = "javascript";
// let size = 0;
// for (let val of str) {
//   console.log("str = ", val);
//   size++;
// }
// console.log("size is = ", size);

//  for in loop

// let student = {
//   name: "Rahul kumar",
//   age: 26,
//   cgps: 8.5,
//   isPass: true,
// };

// for (let key in student) {
//   console.log("key = ", key, " value =", student[key]);
// }

// print all even number 1 to 100;

// let num = 100;
// for (let i = 1; i <= num; i++) {
//   if (i % 2 === 0) console.log(`All even number is = ${i}`);
// }

//  all odd number 1 to 100
// let num = 100;
// for (let i = 1; i <= num; i++) {
//   if (i % 2 !== 0) console.log(`All odd number is = ${i}`);
// }

let gameNumber = 45;
let userNumber = prompt(" guess the game  number :  ");

while (userNumber != gameNumber) {
  userNumber = prompt("You entered wrong number . Guess again:");
}

console.log("Congratulations , You entered the right number");



