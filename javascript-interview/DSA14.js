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
