function addision(a, b) {
  const sum = a + b;
  console.log("sum of two number is ", sum);
}

function division(a, b) {
  const divi = a - b;
  console.log("division of two number is ", divi);
}

function miltiplication(a, b) {
  const multi = a * b;
  console.log("miltipliction of two numer is ", multi);
}

addision(5, 15); // 20
division(100, 55); // 45
miltiplication(5, 5); // 25

function score(a, b, c) {
  console.log(`a is =  ${a}, b is  = ${b}, c is  = ${c}`); // a is 1 , b is 6 and c is undefined
}
score(1, -6, -50);

function fun(x, y, z) {
  const sum = x + y + z;
  console.log(sum);
}
let a = 10,
  b = 10,
  c = 10;
fun(a, b, c);

function addTwoNumber(x, y) {
  // let x = 20
  // let y = 30
  const add = x + y;
  console.log(add);
}
addTwoNumber(20, 78);
// console.log(addTwoNumber(),add)

function number(x, y) {
  const num = x / y;
  console.log(`a two number of division is ${num}`);
  return num;
}
const res = number(100, 2);
console.log(res);

function division (x , y){
    const division =x/y
    return division

}
let bag = division(50,2)
console.log(bag)