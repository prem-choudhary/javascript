function swapTwoNumber(nam1, nam2) {
  console.log("Before swapNamber", nam1 + " " + nam2);
  nam1 = nam2;
  nam2 = nam1;
  console.log("number after swapping ;", nam1 + " " + nam2);
}

swapTwoNumber(1, 2);

function isEqual(num) {
  if (10) {
    console.log("YES");
  } else {
    console.log("NO");
  }
}

isEqual(7); // yes

//  check is number is odd and even

const arr = [2,4];
const number = 2;
let sum = 0;
for (let i = 0; i < number; i++) {
  sum = sum + arr[i];
}
if (sum % 2 == 0) {
  console.log("EVEN");
} else {
  console.log("ODD");
}
