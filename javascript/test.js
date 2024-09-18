// /*
// print
// maths
// variables
// */

//  const name = "prem choudhary"
//  const name1 = "mak choudhary"
// //  let nam2 = "kailash choudhary"

//  console.log(name1);
//  console.info(name1)
//  console.error(name1)

// //  variables
// // var -> global scope
// var x = 10;
// var y = 10

// const res = x+y
// console.log(res);

// // let -> block scope, reassinganble

// let x = 10;
// let y = 10;
// let print = x*y
// console.log(print);

// // const

// const s = 20;
// const a = 10;
// console.log (s-a);

// let x = Math.floor(Math.random() * 10);
// console.log(x)

let num1 = 100;
let num2 = 10;

const sum = num1 + num2;
// console.log(sum)

// if (10 < 2) {
//   console.log("india");
// } else if (11 > 2) {
//   console.log("won by 6 run");
// } else if ( 15 > 14) {
//     console.log(' go khabutar go')
// }

// if (10 > 2) {
//     console.log('go corona go')

// }

// if (true) {
//     console.log('go raja ji go')

// }

// if (11 > 4) {
//     console.log('go hai toh moh hai')

// }

// const age  = 49

// if (age >70) {
//     console.log(" age is 70 ");

// } else if (age > 60){
//     console.log("print age 60 ");
// }else if (age > 50) {
//     console.log(" In Your 50");

// } else  {
//     console.log("nothing was true");
// }

// function slugify(sentence,lowercase){
//     if (lowercase) {
//         return sentence.replace(/\s/g, '-').toLowerCase();
//     } else{
//         return sentence.replace(/\s/g, '-');
//     }

// }

// console.log(null == undefined);
// console.log(null === undefined);
// console.log(undefined == undefined);
// console.log(undefined == null);

// console.log(10 !== "10");
// console.log (typeof 10 != "10");

// // console.log (10!>12)
// let x = 10;
// let y = 12;

// console.log( x > y)

// if ("prem" === "prem" || "prem" === "mak") {
//     console.log ("cool name")

// }
// if( 10 === 1 || (10 === 4 && 12 === 13)){
//     console.log("total")

// }

// const name = {};

// if (name) {
//   console.log("Hello sir ");
// } else {
//   console.log("Bye sir");
// }

// const cool = true

// if(cool){
//     console.log("ind vs usa")

// } else{
//     console.log("bharat mata ki jay")
// }

// const count = 2;
// let word;

// if (count === 2) {
//   word = "item";

//   console.log(word);
// } else {
//   word = "items";
//   console.log(word);
// }

// *+*+*++*+  ternary  ++**+*+**

// const count = 2
//  const word = count === " " ? 'item' : 'items';
// const sentence = `You have ${count} item${count === 1 ? '' : 's'} in your cart`;
// console.log(sentence);

// function check1() {
//   return true;
// }
// function check2() {
//   return true;
// }
// function check3() {
//   return false;
// }
// if (check1() && check2() && check3()) {
//   console.log("all checks passsed");
// } else {
//   console.log("some check failed");
// }

const Arry = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const Array2 = [9, 8, 7, 6, 5, 4, 3, 2, 1];
const sam = Arry + Array2;
if (Arry < Array2) {
  console.log(Arry);
} else console.log("you are to good man");

// const = [{}]
// console.log(typeof {})

// function buzzy() {
//   console.log("good afternoon");
// }

// console.log("starting");

// setTimeout(buzzy, 2000);

// console.log("ending");


setImmediateInterval(buzzer, 2000);

function sayHi(){
    console.log("Hello from my side")

}
setImmediateInterval(sayHi,200)


