//  1 .... Assignment Operators
// let x = 10;
// x += 5;
// x -= 3;
// // console.log(x);
// x *= 2;
// // console.log(x);
// x /= 4;
// // console.log(x);

// x %= 3;

// // console.log(x);

// 3 ... Comparison Operators <><><><<><>......

// let a = 5,
//   b = "5",
//   c = 10;
// console.log(a === b);
// console.log(a == b);
// console.log(a != c);
// console.log(a !== c);
// console.log(a > c);
// console.log(a < c);
// console.log(a <= c);
// console.log(a <= c);
// console.log(a >= c);

//  Logical Operators ****  && ,,, || ,,,,, !,,

// let z = true,
//   y = false;
// // console.log(z && y, a % b);
// console.log(z || y);
// console.log(!a);

//  Bitwise Operators
// let ro = 5;
// let ko = 3;

// console.log(ro & ko);
// console.log(ro | ko);
// console.log(ro ^ ko);
// console.log(~ro);
// console.log(ro << ko);
// console.log(ro >> ko);
// console.log(ro >>> ko);
// //  stirng Operators

// let firstName = "prem";
// let lastName = " chaudhary";
// let fullName = firstName + " " + lastName;
// console.log(fullName);

// <><><><><><><><><<> Ternary Operator<><><><><><><><<>>><><

// let age = 21;
// let canVote = age >= 18 ? "Yes" : "No";
// console.log(canVote);
//// 8 .  Type Operators <><><><><....
// let a = 5;
// let b = "Hello";
// console.log(typeof a); // number
// console.log(typeof b); // string
// console.log(b instanceof String);
// console.log(b instanceof String);

// console.log(`a + b`);
// console.log(`a + b`);

/*
Arithmetic operators

 */

// let a = 10;
// let b = 5;
// console.log("a +", "b ", a + b);
// console.log("a -", "b ", a - b);
// console.log("a *", "b ", a * b);
// console.log("a /", "b ", a / b);
// console.log("a %", "b ", a % b);

// console.log("a = ", ++a);
// // console.log("a++", a);
// console.log("a-- = ", a--);
// console.log("a-- =", a);
// console.log("--a =", --a);

//  Assignment Operators

// let a = 10;
// let b = 5;
// a **= 4;
// // b -= 1;
// // console.log("b -=", b); // 4
// console.log("a -= ", a); // 6

//  Comparison Operators

// let a = 10; // number
// let b = 5; // stirng
// console.log("10==9", a == b); //false // true
// console.log("10!=9", a != b); //true
// console.log("10===9", a === b); //false
// console.log("10!==9", a !== b); // true

// console.log("a>b", a > b); // true
// console.log("a<b", a < b); // false
// console.log("a>= b", a >= b); // true
// console.log("a<=b", a <= b); // false

// Logical operators
// ( && ... and  ( ||.... Or  ( ! ... Not  ) ))

// let a = 18;
// let b = 18;
// let c = 18;
// let d = 18;
// let cond1 = a >= b; // true
// let cond2 = b <= a; // true
// let cond3 = c >= d;
// let cond4 = c >= d;
// // console.log("cond1 || cond2 = ", cond1 || cond2); // true
// console.log("cond1 && cond2 = ", cond1 && cond2, cond3 && cond4); // true
// console.log("cond1 && cond2 = ", a > b && b < a); // false
// console.log("!a < b =", !a < b);

//  conditional ststements

// let age = 18;
// if (age >= 18) {
//   console.log("You can vote ");
// } else {
//   console.log("You can not vote");
// }
// let mode = "light";
// let color;
// if (mode === "dark") {
//   color = "black";
// }
// if (mode === "light") {
//   color = "red";
// }
// console.log(color);

// let mode = " white";
// let color;
// if (mode === "white") {
//   color = "Black";
// } else {
//   color = "blue";
// }

// console.log(color)
// let num = 13;
// if (num % 2 === 0) {
//   console.log(num, " is even");
// } else {
//   console.log(num, "is odd");
// }

//  else - if - statement

// let mode = "dark";
// let color;
// if (mode === "dark") {
//   color = "black";
// } else if (mode === "white") {
//   color = "white";
// } else if (mode === "pink") {
//   color = "pink";
// } else {
//   color = "blue";
// }
// console.log(color);
// if (mode === "pink") {
//   console.log(mode);
// }

// let mode = "white";
// let color = mode === "dark" ? "black" : mode === "white" ? "white" : mode === "pink" ? "pink" : "blue";

// console.log(color); // Output: "white"

// let age = 22;
// let res = age >= 18 ? "adult" : "not adult";
// console.log(res);

//  practie q1

// let num = prompt("enter a number");
// if (num % 5 === 0) {
//   console.log(num, "is a multiple of 5");
// } else console.log(num, "is NOT multiple of 5");

//  practice Q 2
// let score = prompt("enter your score 1-100 : ");
// let score = 78;
// let grade;
// if (score >= 90 && score <= 100) {
//   grade = "A";
// } else if (score >= 70 && score <= 89) {
//   grade = "B";
// } else if (score >= 60 && score <= 69) {
//   grade = "C";
// } else if (score >= 50 && score <= 59) {
//   grade = "D";
// } else if (score >= 0 && score <= 49) {
//   grade = "E";
// }
// console.log("according to your score , your grade was", grade);

/*
You are given a variable marks. Your task is to print:

- AA if marks is greater than .90
- AB if marks is greater than  80 and less than or equal to .90
- BB if marks is greater than   70  and less than or equal to .80
- BC if marks is greater than 60 and less than or equal to .70
- CC if marks is greater than  50 and less than or equal to .60    
- CD if marks is greater than 40 and less than or equal to . 50
- DD if marks is greater than 30 and less than or equal to . 40
- FF if marks is less than or equal to . 30
*/

// let marks = 91;
// if (marks > 90) {
//   console.log("hello");
// } else if (marks > 80 && marks <= 90) {
//   console.log("hey");
// } else if (marks > 70 && marks <= 80) {
//   console.log("hii");
// } else if (marks > 60 && marks <= 70) {
//   console.log(" Hello js user");
// } else if (marks > 50 && marks <= 60) {
//   console.log("hii");
// } else if (marks > 40 && marks <= 50) {
//   console.log("heee");
// } else if (marks > 30 && marks <= 40) {
//   console.log("marks");
// } else {
//   console.log(marks);
// }

let studentMarks = 81;
if (studentMarks > 90) {
  console.log("good socre");
} else if (studentMarks > 80) {
  console.log("good marks ");
}
