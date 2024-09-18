const arr = [
  ["1", "2", "3"],
  ["4", "5", "6"],
  ["7", "8", "9"],
  ["10", "11", "12"],
];

const rows = arr.length;
const cols = arr[0].length;

let snake = "";
for (let r = 0; r <= rows - 1; r++) {
  if (r % 2 == 0) {
    for (let c = 0; c <= cols - 1; c++) {
      snake = snake + arr[r][c] + " ";
    }
  } else {
    for (let c = cols - 1; c >= 0; c--) {
      snake = snake + arr[r][c] + " ";
    }
  }
}

console.log(snake);
