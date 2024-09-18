const marks = [28, 34, 30, 45, 48, 44, 50, 100, -500];
// console.log(marks[0]);
let maxPad = -Infinity;

for (let i = 1; i < marks.length; i++) {
  if (marks[i] > maxPad) {
    maxPad = marks[i];
  }
}
console.log(maxPad);
