//  print frist half of array ( if array is odd or even )

const like = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,];
let end;
//  even condition
if (like.length % 2 == 0) {
  end = like.length / 2;
}
// odd condition4
else {
  // res = (like.length - 1) / 2;
  end = Math.floor(like.length / 2);
}
for (let i = 0; i < end; i++) {
  console.log(like[i]);
}

// /print the second half of the array if array is odd
console.log("---------");

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
console.log(names.length);

let half = Math.floor(names.length / 2);
for (let i = half; i < names.length; i++) {
  console.log(names[i]);
}

//  find am largest number of array
console.log("--------------^^^^^^^^------------");

const marks = [28, 34, 30, 45, 48, 44, 50];
console.log(marks[0]);
let maxPad = -Infinity;

for (let i = 1; i < marks.length; i++) {
  if (marks[i] > maxPad) {
    maxPad = marks[i];
  }
}
console.log(maxPad);

//  print toupercaset to lowercase char

const char = "a";

const lower = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const upper = [
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
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

for (let i = 0; i < upper.length; i++) {
  if (char == lower[i]) {
    console.log(upper[i]);
    break;
  }
}

const number = [11, 23, 41, 52, 78, 88, 16, 20];
// console.log(number);
let sum = 0;
let count = 0;

for (let i = 0; i < number.length; i++) {
  if (number[i] % 2 == 0) {
    sum = sum + number[i];
    count++;
  }
}
var average = sum / count;
console.log(average);


const arr = [789, 456, 123, 987, 654, 321];
let add = 0;


for (let i = 0; i < arr.length; i++) {
  add = add + arr[i];
}

console.log(add);
