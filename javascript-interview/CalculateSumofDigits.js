function sumOfDigits(num) {
  let sum = 0;

  for (let temp = num; temp > 0; temp = Math.floor(temp / 10)) {
    sum += temp % 10;
  }

  return sum;
}

console.log(sumOfDigits(1234)); // 10
