const arr = ["A", "B", "C", "D", "A", "B", "C", "A"];
// output "A B C D "
const store = [];
let res = false;

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < store.length; j++) {
    if (arr[i] == store[j]) {
      res = true;
      break;
    }
  }
  if (res == false) {
    store.push(arr[i]);
  } else {
    res = false;
  }
}
console.log(store);
