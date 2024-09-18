// given x = 20
//  step 1: find square of x
//  step 2: multiply the above result with 10
//  steo 3:  print the step2 output

//  write  3 function
// 1. square of a  number

function square(x) {
  const sq = x * x;
  return sq;
}
function multiply10(x) {
  const mul = x * 10;
  return mul;
}

function result(n) {
  console.log(n);
}

let res = 20;
let res1 = square(res);
let res2 = multiply10(res1);
result(res2);

function gadaFamily() {
  const gadaSon = "tappu";
  console.log(gadaSon);
}

function bhidefamily() {
  const bhideSon = "rahul";
  console.log(bhideSon);
}

function hathiFamily() {
  const hathiSon = "Goli";
  console.log(hathiSon);
  console.log(choudharyFamily);
  // first function call in theard function
}

const choudharyFamily = "Praveen Chaudhary";
hathiFamily();

