//  absolule function

function findDifference(a, b) {
  return a - b;
}

function findAbsolute(x) {
  if (x < 0) {
    x = -1 * x;
  }
  return x;
}
const res = findDifference(10, 20);
console.log(res);
const res1 = findAbsolute(res);
console.log("Output is ", res1);
