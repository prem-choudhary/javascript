const myIterable = {
  from: 1,
  to: 3,
  [Symbol.iterator]() {
    let current = this.from;
    const last = this.to;
    return {
      next() {
        if (current <= last) {
          return { done: false, value: current++ };
        } else {
          return { done: true };
        }
      },
    };
  },
};

for (const num of myIterable) {
  console.log(num); // 1, 2, 3
}

function divide(a, b) {
    try {
        if (b === 0) {
            throw new Error("Division by zero is not allowed.");
        }
        return a / b;
    } catch (error) {
        console.error("Caught an error:", error.message);
        return NaN;
    } finally {
        console.log("Division attempt finished.");
    }
}

console.log(divide(10, 2)); // 5, "Division attempt finished."
console.log(divide(10, 0)); // Caught an error: Division by zero is not allowed., NaN, "Division attempt finished."
