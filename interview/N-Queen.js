function solveNQueens(n) {
  const results = [];
  const board = Array.from({ length: n }, () => Array(n).fill("."));

  const isSafe = (row, col) => {
    // Check column
    for (let i = 0; i < row; i++) {
      if (board[i][col] === "Q") return false;
    }
    // Check diagonal left-up
    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
      if (board[i][j] === "Q") return false;
    }
    // Check diagonal right-up
    for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
      if (board[i][j] === "Q") return false;
    }
    return true;
  };

  const placeQueens = (row) => {
    if (row === n) {
      results.push(board.map((row) => row.join("")));
      return;
    }
    for (let col = 0; col < n; col++) {
      if (isSafe(row, col)) {
        board[row][col] = "Q";
        placeQueens(row + 1);
        board[row][col] = ".";
      }
    }
  };

  placeQueens(0);
  return results;
}

// Example usage
const n = 4; // Change N here
const solutions = solveNQueens(n);
console.log(`Total solutions for ${n}-Queens: ${solutions.length}`);
console.log(solutions);
