// function square(a) {
//   const sq = a * a;
//   return sq;
// }
// const res = square(10);
// console.log(res);   // output is 100
//  i create a 3 function and every function canect to which function 

function addistion(a, b) {
  const add = a + b;
  return add;
}

function square(x) {
  const sq = x * x;
  return sq;
}
function printResult(r) {
  console.log(r);
}
const res = addistion(50, 50);
let p = square(res);
printResult(p);


