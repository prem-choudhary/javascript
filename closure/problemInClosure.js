function outerFunction() {
  let count = 0;
  return function innerFunction() {
    count++;
    return count;
  };
}

const increment = outerFunction();
console.log(increment()); // Outputs: 1
console.log(increment());
