let N = 4,
  M = 4;
let matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

let top = 0,
  bottom = N - 1,
  left = 0,
  right = M - 1;

// Print the entire matrix
console.log("Entire Matrix:");
for (let i = top; i <= bottom; i++) {
  for (let j = left; j <= right; j++) {
    console.log(`matrix[${i}][${j}] = ${matrix[i][j]}`);
  }
}

// Print top boundary (row at index 'top')
console.log("\nTop Boundary:");
for (let i = left; i <= right; i++) {
  console.log(`matrix[${top}][${i}] = ${matrix[top][i]}`);
}

// Print left boundary (column at index 'left')
console.log("\nLeft Boundary:");

for (let i = top; i <= bottom; i++) {
  console.log(`matrix[${i}][${left}] = ${matrix[i][left]}`);
}
