//  varaible Dec

var number = 10;
console.log(number);

let str = "Prem choudhary";
console.log(str);

const cool = true;
console.log(cool);

// --------------

// Data type

var num = 10;
console.log(typeof num, num);

let str1 = "prem choudhary";
console.log(typeof str1, str1);

const say = true;
console.log(typeof say, say);

let student = {
  stu: "mak sirvi",
  age: 25,
  rollNo: 101,
};
console.log(typeof student, student);

let arr = [1, 2, 3, "prem", "mak"];
console.log(typeof arr, arr);

// -----=-=-=-=-=-=----==---
// Reassiging Varibles

number = 20;
console.log(number);

str = "champa masi";
console.log(str);

// cool = false; // TypeError: Assignment to constant variable.
console.log(cool);

var char = "k";

if (!(char =="a" || char=="u" || char=="e" || char=="i" || char=="O" )
){
  console.log("Consanant");
 }