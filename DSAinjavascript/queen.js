function solveNQueens(n) {
  const board = Array.from({ length: n }, () => Array(n).fill("."));

  const isSafe = (board, row, col) => {
    for (let i = 0; i < row; i++) {
      if (board[i][col] === "Q") return false;
    }

    for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
      if (board[i][j] === "Q") return false;
    }

    for (let i = row, j = col; i >= 0 && j < n; i--, j++) {
      if (board[i][j] === "Q") return false;
    }

    return true;
  };

  const solve = (board, row) => {
    if (row === n) {
      printBoard(board);
      return true;
    }

    let hasSolution = false;

    for (let col = 0; col < n; col++) {
      if (isSafe(board, row, col)) {
        board[row][col] = "Q";

        if (solve(board, row + 1)) {
          hasSolution = true;
        }

        board[row][col] = ".";
      }
    }

    return hasSolution;
  };

  const printBoard = (board) => {
    for (let row of board) {
      console.log(row.join(" "));
    }
    console.log("\n");
  };

  if (!solve(board, 0)) {
    console.log("No solution exists");
  }
}

solveNQueens(4);
/*  first ans.
     . Q . .
     . . . Q
     Q . . .
     . . Q .

/*
    . . Q .
    Q . . .
    . . . Q
    . Q . .


*/
