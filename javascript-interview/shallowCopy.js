const obj = { a: 1, b: { c: 2 } };
const shallow = { ...obj };
shallow.b.c = 99;
console.log(obj.b.c); // 99 (shared reference)

const deep = JSON.parse(JSON.stringify(obj)); // deep copy
