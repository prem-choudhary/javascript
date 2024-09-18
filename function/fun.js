function score() {
  let match1 = 78;
  let match2 = 105;
  let total = match1 + match2;
  for (let i = 0; i < 5; i++) {
    console.log("total score is ", total);
  }
}
score();
console.log("    \n  ");

function calling() {
  let str = "Hello";
  let str1 = " Namaste";
  const concatenation = str + str1;
  console.log(concatenation);
}

calling();

function miltiplication() {
  let x = 10;
  let z = 10;
  const multi = x * z;
  console.log(multi);
}
miltiplication(); // O/P == 100
console.log("******************");

function division() {
  let a = 100;
  let b = 10;
  const divis = a / b;
  console.log(divis);
}
division(); // O/P == 10

function res(x, y) {
  console.log("The value of x is  ", x, y);
}
res(10, 100);

function addision(a, b) {
  const sum = a + b;
  console.log(" The sum of two number is ", sum);
}
addision(100, 900);
addision(1100, 900);

//  output is 1000

