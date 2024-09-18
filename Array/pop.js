//  Pop function

const arr = ["Bahuballi", "Spider Man", "IronMan", "Pushpa"];
arr.pop();
arr.pop();
console.log(arr);

const number = [1, 2, 3, 4, 5];
console.log(number);
number.pop();
number.pop();
console.log(number);
number.pop();
number.pop();
console.log(number);
number.pop();
console.log(number);

// givin an array number
// delete last three number

const el = [1, 2, 3, 4, 5, 6];
console.log(el);
// its first way
// el.pop();
// el.pop();
// el.pop();

// second way is
for (let j = 1; j <= 3; j++) {
  el.pop();
}
for (let i = 0; i < el.length; i++) {
  console.log(el[i]);
}
// print first 3 movies only
const movies = ["Bahuballi", "Spider Man", "IronMan", "Pushpa"];
//  it's a first way

// for (let i = 0; i < 3; i++) {
//   console.log(movies[i]);
// }

//   and second way is
//  break statement

for (let i = 0; i <= movies.length; i++) {
  if (i === 3) {
    break;
  }
  console.log(movies[i]);
}
console.log("-----------");
// just ship to song in array list 1st is - dar and 2nd is -- buzz
const songs = ["buzz", "nacha meri rani", "dar", "rona nhi", "haste raho"];
for (let i = 0; i < songs.length; i++) {
  if (i === 0 || i === 2) {
    continue;
  }
  console.log(songs[i]);
}

const element = ["Ram", "Mohan", "Prem", "mak"];
for (let i = 0; i < element.length; i++) {
  if (i === 1 || i === 3) {
    continue;
  }
  console.log(element[i]);
}
console.log("%^^&&***&^^$$%^&");
//  print last 3 element
//  first way to print this array
let products = ["earPhone", "headPhone", "mic", "ipad", "cellPhone", "laptop"];
let start = 3;
for (let i = start; i <= 5; i++) {
  console.log(products[i]);
}

console.log("000-------0000000");

let products1 = ["earPhone", "headPhone", "mic", "ipad", "cellPhone", "laptop"];
for (let i = 0; i < products1.length; i++) {
  if (i == 0 || i == 1 || i == 2) {
    continue;
  }
  console.log(products1[i]);
}

console.log("-------------");

let products3 = ["earPhone", "headPhone", "mic", "ipad", "cellPhone", "laptop"];
let limit = products3.length - 3;
for (let i = limit; i < products3.length; i++) {
  console.log(products3[i]);
}

console.log("^^^^^^^^^^^^^^^^^^^^");

const products4 = ["earPhone", "headPhone"];
let limits = products4.length - 3;
for (let i = limits; i < products4.length; i++) {
  console.log(products4[i]);
}
// return;
console.log("-------acbdefgh--------");

// /print the second half of the array if array is odd

const names = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
];

let half = Math.floor(names.length / 2);
for (let i = half; i < names.length; i++) {
  console.log(names[i]);
}

//  print the second half pf array length when array is even
const cap = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
];

let part = cap.length / 2;
for (let i = part; i < cap.length; i++) {
  console.log(cap[i]);
}

//  if else conditions
console.log("*********^^^^^^^^^^^^^^^^^^");

const like = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let res;
//  even condition
if (like.length % 2 == 0) {
  res = like.length / 2;
} 
// odd condition 
else {
  // res = (like.length - 1) / 2;
  res = Math.floor(like.length / 2);
}
for (let i = res; i < like.length; i++) {
  console.log(like[i]);
}
