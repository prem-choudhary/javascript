// given x = 10, y = 20;
// step1 : find sum of x and y
// step2 : find the squar of result of step1
// step3 : print the result

// function addTwoNumber(x, y) {
//   var sumOfTwoNumber = x + y;
//   return sumOfTwoNumber
// }
// var result = addTwoNumber(10,20)
// console.log(result)
// function squar (result){
//     var sq =result*result
//     return sq
// }
// console.log(squar(result))

function add(a, b) {
  return a + b;
}
function square(n) {
  return n * n;
}
var addoftwonumber = add(20, 30);
var result = square(addoftwonumber);
console.log(result);
