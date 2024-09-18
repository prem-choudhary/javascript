const arr = [
  [1, 2, 3, 4],
  [(5, 6, 7, 8)],
  [(9, 10, 11, 12)],
  [(13, 14, 15, 16)],
];

let top = 0;
let bottom = arr.length - 1;
let left = 0;
let right = arr[0].length - 1;
let count = 0;
const n = arr.length;
const m = arr[0].length;

while (count < n * m) {
  for (let i = top; i <= bottom && count < n * m; i++) {
    console.log(arr[i][left]);
    count++;
  }
  left++;
  for (let i=left; right && count < n * m; i++) {
    console.log(arr[bottom][i]);
    count++;
  }
  bottom--;
  for (let i = bottom; i >= top && count < n * m; i--) {
    console.log(arr[i][right]);
    count++;
  }
  right--;
  for (let i = right; i >= left&& count < n * m; i--) {
    console.log(arr[top][i]);
    count++;
  }
  top++;
}
