// // let a = 10;
// // const b = 20;
// // var c = 30;

// if (true) {
//   let a = 10;
//   const b = 20;
//   var c = 30;
// }
// // console.log(a);
// // console.log(b);
// console.log(c);

function one() {
  const userName = "Praveen Srivi";

  function two() {
    const website = "Youtube";
    console.log(userName);
  }
  //   console.log(website);  // Error throw
  two();
}
one();
console.log(oneNum(10));
function oneNum(num) {
  return num + 10;
}

// console.log(TwoNumber(7))
const TwoNumber = function (num1) {
  return num1 + 2;
};
// console.log(TwoNumber(7))