let arr = [1, 2, 2, 3, 3, 3];
let freq = {};
for (let num of arr) {
  freq[num] = (freq[num] || 0) + 1;
}
console.log(freq);
// {1:1, 2:2, 3:3}

const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);

console.log(doubled); // [2, 4, 6, 8, 10]


