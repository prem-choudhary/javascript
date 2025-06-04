const target = { a: 2 };
const source = { b: 2, c: 3 };
// Using Object.assign to merge properties from source into target
const result = Object.assign(target, source);

console.log(result); // { a: 2, b: 2, c: 3 }
console.log(target);    
// { a: 2, b: 2, c: 3 }

