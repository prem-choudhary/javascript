const arr = [
  ["A", "B", "C"],
  ["E", "F", "G"],
  ["I", "J", "K"],
];

const rows = arr.length;
const cols = arr[0].length;

const leftDiagonal = [];
const rightDiagonal = [];

for (let i = 0; i <= rows - 1; i++) {
  for (let j = 0; j <= cols - 1; j++) {
    if (i == j) {
      leftDiagonal.push(arr[i][j]);
    }
    if (i + j == rows - 1) { // or cols -1 is also work  
      rightDiagonal.push(arr[i][j]);
    }
  }
}
console.log(leftDiagonal);
console.log(rightDiagonal);
