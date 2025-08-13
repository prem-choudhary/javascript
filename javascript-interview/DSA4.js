function sumNested(arr) {
  let total = 0;

  for (let item of arr) {
    if (Array.isArray(item)) {
      // Recursive call for nested arrays
      total += sumNested(item);
    } else if (typeof item === "number") {
      // Add only numbers
      total += item;
    }
  }

  return total;
}

// Test cases
// console.log(sumNested([1, [2, 3], [4, [5]]))); // 15
console.log(
  sumNested([
    [1, 2],
    [3, [4, 5]],
  ])
); // 15
console.log(sumNested([[1], [2]])); // 3

// First-order function (does not accept or return another function)
const firstOrderFunc = () => console.log("Hello, I am a first-order function");

// Higher-order function (accepts a function as an argument)
const higherOrder = (callback) => callback();

// Passing the first-order function to the higher-order function
higherOrder(firstOrderFunc);


console.log([] + {})