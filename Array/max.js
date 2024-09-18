//  prine largest of array

const marks = [28, 34, 30, 45, 48, 44, 50];
console.log(marks[0]);
let maxPad = -Infinity;

for (let i = 1; i < marks.length; i++) {
  if (marks[i] > maxPad) {
    maxPad = marks[i];
  }
}
console.log(maxPad);