const target = { a: 2 };
const source = { b: 2, c: 3 };
// Using Object.assign to merge properties from source into target
const result = Object.assign(target, source);

console.log(result); // { a: 2, b: 2, c: 3 }
console.log(target);    
// { a: 2, b: 2, c: 3 }
// The target object is modified, and now it contains properties from both target and source
console.log(source);

