function findMissingNumber(arr) {
  const n = arr.length + 1; // n is the expected length (including missing number)
  const expectedSum = (n * (n + 1)) / 2; // Sum of numbers from 1 to n
  const actualSum = arr.reduce((sum, num) => sum + num, 0);
  return expectedSum - actualSum;
}

// Example usage
console.log(findMissingNumber([1, 2, 4, 5, 6])); // Output: 3
