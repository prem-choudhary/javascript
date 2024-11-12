
// function in javascript 

const calculator = {
    add: function(a, b) {
      return a + b;
    },
    subtract: function(a, b) {
      return a - b;
    }
  };
  
  console.log(calculator.add(5, 3));       // Output: 8
  console.log(calculator.subtract(5, 3));  // Output: 2
  
  // // Function Declaration
function greet1(name) {
  return `Hello, ${name}`;
}

// Function Call
console.log(greet1('How to get a job :::::::')); // Output: Hello, how to get a job ::::::

// Function Expression
const greet = function(name) {
  return `Hello, ${name}!`;
};

console.log(greet('HR !!!!!!!!!!!!!!!!!!')); // Output: Hello, HR !!!!!!!!!!!!!!!


// Arrow Function
const hello = (name) => {
  return `Hello, ${name}!`;
};

// If the function body contains only a single return statement, you can omit the curly braces and the return keyword
const greet2 = (name) => `Hello, ${name}!`;

console.log(greet2('prem')); // Output: Hello, prem!
