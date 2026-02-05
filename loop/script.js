console.log("Hello user");
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
for (let j = 0; j < 5; j++) {
  console.log(j);
}
let k = 0;
do {
  console.log(k);
  k++;
} while (k < 5);
let arr = [1, 2, 3, 4, 5];
for (let index in arr) {
  console.log(index);
}
for (let value of arr) {
  console.log(value);
}
arr.forEach((value) => {
  console.log(value);
});
