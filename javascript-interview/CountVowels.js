let str = "hello world";
let count = 0;

for (let ch of str) {
  if ("aeiou".includes(ch)) {
    count++;
  }
}

console.log(count);
