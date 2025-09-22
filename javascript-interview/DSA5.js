console.log("123");
let numbers = [1, 2, 3, 4];

// Map - create a new array by modifying elements

let doubled = numbers.map((num) => num * 2); // [2, 4, 6, 8]

// Filter - create a new array with specific condition
let evens = numbers.filter((num) => num % 2 === 0); // [2, 4]

// Reduce - reduce array to single value
let sum = numbers.reduce((total, num) => total + num, 0); // 10

let fruits = ["apple", "banana", "mango"];

// for loop
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// for...of
for (let fruit of fruits) {
  console.log(fruit);
}

// forEach
fruits.forEach((fruit) => console.log(fruit));
