function findDuplicates(arr) {
  const seen = {};
  const duplicates = [];
  

  for (let num of arr) {
    if (seen[num]) {
      if (seen[num] === 1) {
        duplicates.push(num);
      }
      seen[num]++;
    } else {
      seen[num] = 1;
    }
  }

  return duplicates;
}

// Example usage
console.log(findDuplicates([1, 2, 3, 4, 5, 6, 7, 7, 8, 6, 10])); // Output: [7, 6]
console.log(findDuplicates([11, 12, 13, 14, 15, 16, 17, 17, 18, 19, 20])); // Output: [7, 6]
console.log(findDuplicates([21, 22, 23, 24, 25, 26, 27, 27, 28, 29, 30])); // Output: [7, 6]
