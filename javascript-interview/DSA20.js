function isBalanced(str) {
  const stack = [];
  const pairs = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  for (let char of str) {
    if (pairs[char]) {
      stack.push(char); // Push opening bracket
    } else if (char === ")" || char === "}" || char === "]") {
      if (stack.length === 0 || pairs[stack.pop()] !== char) {
        return false; // Mismatch or empty stack
      }
    }
  }

  return stack.length === 0; // True if stack is empty (all brackets matched)
}

// Example usage
console.log(isBalanced("({[]})")); // Output: true
console.log(isBalanced("([)]")); // Output: false
console.log(isBalanced("((()))")); // Output: true
