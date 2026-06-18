function firstNonRepeatedChar(str) {
  const charCount = {};
  for (let char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }
  for (let char of str) {
    if (charCount[char] === 1) {
      return char;
    }
  }
  return null; // Return null if no non-repeated character is found
}

console.log(firstNonRepeatedChar("swiss")); // Output: "w"
console.log(firstNonRepeatedChar("aabb")); // Output: null
console.log(firstNonRepeatedChar("aabb")); // Output: null
