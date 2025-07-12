function greet(name) {
  return `Hello, ${name}!`;
}

console.log(greet("Aaruu")); // Output: Hello, Alice!

let fruits = ["apple", "banana", "cherry"];
console.log(fruits[1]); // Output: banana

for (let i = 0; i < fruits.length; i++) {
  console.log(`Fruit at index ${i}: ${fruits[i]}`);
}

fruits.forEach((fruit, index) => {
  console.log(`(forEach) Fruit ${index}: ${fruit}`);
});

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(matrix[1][2]); // Output: 6

for (let row = 0; row < matrix.length; row++) {
  for (let col = 0; col < matrix[row].length; col++) {
    console.log(`Element at [${row}][${col}] = ${matrix[row][col]}`);
  }
}

function isEvenArray(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      result.push(arr[i]);
    }
  }
  return result;
}

console.log(isEvenArray([1, 2, 3, 4, 5, 6])); // Output: [2, 4, 6]

let person = {
  name: "Prem",
  age: 30,
  greet: function () {
    console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
  },
};

person.greet();
