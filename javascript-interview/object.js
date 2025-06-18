const obj = { a: 1, b: 2, c: 3 };
// Object.keys() returns an array of the object's own enumerable property names
console.log(Object.keys(obj));
// Object.values() returns an array of the object's own enumerable property values
console.log(Object.values(obj));
console.log(Object.entries(obj));
// Object.entries() returns an array of the object's own enumerable property [key, value] pairs
const entries = Object.entries(obj);
console.log("Brake")

// Object.fromEntries() transforms a list of key-value pairs into an object
const newObj = Object.fromEntries(entries);


