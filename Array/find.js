const peoples = ["Prem ", "Ram ", "Kailash", "Bharat", "papu", "jarry"];
console.log(peoples.lastIndexOf("kailash"));

const arr = [123214];
arr.reverse();
console.log(arr);

const str = "premsirvi";
console.log(str.substring(2));

let y = "a";
y = Number(y);
console.log(y);

let x = "45";
x = Number(x);
console.log(x);

var animals = ["pigs", "goats", " sheep"];
var count = animals.push("cows", "buffalo");
console.log(count);
console.log(animals);

const moviesNames = [
  "shila ki javani",
  "do shahar ka raja",
  "jori ka gulam",
  "lapata",
  "kalki",
];
const remove = moviesNames.pop();
console.log(remove);
console.log(moviesNames);

var pilo = ["dog", "cat", "goat", "dono", "cow"];
console.log(pilo.lastIndexOf("dono"));

console.log(" ,,,,,,,...............,,,,,,,,,,,");

var people = ["kalo", "oggy", "pandu", "jamna das", " kalu"];
console.log(people.lastIndexOf("jamna das"));
console.log("/////////////////////");

// var res = [
//   "oggy",
//   "pandu",
//   "kalo",
//   "jamna das",
//   "kalicharan",
//   "leptop",
//   " kalo",
// ];
// var LastIndex = res.lastIndexOf("kalo");
// var fristIndex = res.indexOf("kalo");

// console.log("LastIndex", LastIndex);
// console.log("fristIndex", fristIndex);

var res = [
  "oggy",
  "pandu",
  "kalo",
  "jamna das",
  "kalicharan",
  "leptop",
  " kalo",
  "pandu",
];
var lastIndex = res.lastIndexOf("pandu");
var firstIndex = res.indexOf("pandu");

// console.log("firstIndex", firstIndex);
console.log("firstIndex", firstIndex);
console.log("LastIndex", lastIndex);

var arrs = [1, 2, 3, 4, 5];
var i = arrs.shift(); // shift , unshift , pop , push  are inbuilt function
console.log("remove frist element  ", i);
console.log(arrs);
console.log(typeof arrs); // object

// join function

// var item = ["M", "A", "N"];
// var bag = "";
// for (var i = 0; i < item.length; i++) {
//   bag = bag + item[i];
// }
// console.log(bag); // output =  MAN

var item = ["m", "n", "a"];
for (let i = 0; i < item.length; i++) {
  console.log(item[i]);
}
// output
// > m
// >  a
// >  n

var syntax = ["M" , "A" , "N"]
var k = syntax.join("")
console.log(k)



const element = ["Fire" , "Air" ,"Water"]
console.log(element.join()) // o/p Fire,Air,Water

const  gadgets  = ["Leptop","HeadPhone","Tab"]
console.log(gadgets.join("")) // o/p >>>> LeptopHeadPhoneTab

const fruitsName = ["Apple" , "Kivi" , "Banana" ,"Grapes"]
console.log(fruitsName.join(" ")) // o/p >>>  Apple-Kivi-Banana-Grapes 




