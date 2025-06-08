// function binaryMatrix(N, M, matrix) {
//   for (var i = 0; i < N; i++) {
//     var jhola = "";
//     for (var j = 0; j < M; j++) {
//       if (matrix[i][j] == 1) {
//         matrix[i][j] = 1;
//       } else {
//         matrix[i][j] = 0;
//       }
//       jhola = jhola + matrix[i][j] + " ";
//     }
//     console.log(jhola);
//   }
// }

function binaryMatrix(N, M, matrix) {
  // Validate input
  if (
    !matrix ||
    matrix.length !== N ||
    matrix.some((row) => row.length !== M)
  ) {
    console.log("Invalid matrix dimensions");
    return;
  }

  // Process each row
  for (let i = 0; i < N; i++) {
    let rowString = "";
    for (let j = 0; j < M; j++) {
      // Convert to binary (1 if value is 1, else 0)
      matrix[i][j] = matrix[i][j] === 1 ? 1 : 0;
      // Add element to string, with space only between elements
      rowString += matrix[i][j] + (j < M - 1 ? " " : "");
    }
    console.log(rowString); 
    
  }
}
