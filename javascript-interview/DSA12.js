function oddsDouble(numbers) {
  const oddsArray = numbers.filter((num) => num % 2 !== 0); // Filter odd numbers
  const newArray = oddsArray.map((odd) => odd * 2); // Double each odd number
  return newArray;
}

const numbers2 = [9, 5, 7, 3, 6, 10, 13];
console.log(oddsDouble(numbers2)); // Output: [18, 10, 14, 6, 26]
