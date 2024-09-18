const arr = [
  ["A", "B", "C", "D"],
  ["E", "F", "G", "H"],
  ["I", "J", "K", "L"],
];

const rows1 = arr.length;
const cols1 = arr[0].length;

for (let father = 0; father <= rows1 - 1; father++) {
  let output = "";
  for (let son = 0; son <= 3; son++) {
    output = output + arr[father][son] + " ";
  }
  console.log(output);
}
console.log("-----------------");

const arr1 = [
  ["A", "B", "C", "D"],
  ["E", "F", "G", "H"],
  ["I", "J", "K", "L"],
];

const rows = arr1.length;
const cols = arr1[0].length;

for (let father = 0; father <= cols - 1; father++) {     
  let output = "";
  for (let son = 0; son <= rows - 1; son++) {
    output = output + arr[son][father] + " ";
  }
  console.log(output);
}
