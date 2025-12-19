const arr1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
const rows = arr1.length;
const cols = arr1[0].length;
let bag = "";
for (let j = 0; j < cols; j++) {
  // Iterate through each column from left to right
  for (let i = rows - 1; i >= 0; i--) {
    // Start from the last row and move up
    bag += arr1[i][j] + " ";
  }
}
console.log(bag);
