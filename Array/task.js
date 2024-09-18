var arr = [2, 4, 5, 3, 6, 8];
var out = arr.filter(function (el, i, arr) {
  if (i % 2 == 0) {
    return el;
  }
});
console.log(out);

const x = 10;

for (let i = 0; i <= x; i++) {
  if (i % 2 == 0) {
    console.log("number is even", i);
  } else {
    console.log("number is odd", i);
  }
  console.log("value of i is ", i);
}
console.log("value of x is ", x);
