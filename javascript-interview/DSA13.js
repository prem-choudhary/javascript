function firstNonRepeatedChar(str) {
  const charCount = {};

  // Count frequency of each character
  for (let char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Find the first character with a count of 1
  for (let char of str) {
    if (charCount[char] === 1) {
      return char;
    }
  }

  return null; // Return null if no non-repeated character is found
}

// Example usage
console.log(firstNonRepeatedChar("swiss")); // Output: "w"
console.log(firstNonRepeatedChar("aabb")); // Output: null
console.log(firstNonRepeatedChar("aabb")); // Output: null
