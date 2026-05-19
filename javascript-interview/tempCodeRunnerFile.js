function isEvenArray(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      result.push(arr[i]);
    }
  }
  return result;
}
console.log(isEvenArray([1, 2, 3, 4, 5, 6])); // Output: [2, 4, 6]