const target = { a: 2 };
const source = { b: 2, c: 3 };
const result = Object.assign(target, source);
console.log(result); // { a: 2, b: 2, c: 3 }
console.log(target);
