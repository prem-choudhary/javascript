function returnSum(x, y) {
  // console.log(x,y)
  var sum = x + y;
  //   console.log(sum)
  return sum;
}
// console.log(sum);
//console.log(returnSum(10, 20)); // this is also work in javascript but what can do is, i hold the value in variable so here is the way
var result = returnSum(10, 40);
console.log(result);

function addTwoNumber(a, b) {
  var addSum = a + b;
  return addSum;
}
const holdValue = addTwoNumber(99, 101);
console.log(holdValue);

function subTwoNumber(a, b) {
  var sub = a - b;
  return sub;
}
const holdValue1 = subTwoNumber(999, 101);
console.log(holdValue1);

function multiTwoNumber(a, b) {
  var multi = a / b;
  return multi;
}
const holdValue2 = multiTwoNumber(10, 2);
console.log(holdValue2);
