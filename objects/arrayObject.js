const arr = ["A", "B", "C", "D", "A", "B", "C", "D", "A"];

let bag = {};

for (let i = 0; i < arr.length; i++) {
  let person = arr[i];
  bag[person] = "there";
}
console.log(bag);
