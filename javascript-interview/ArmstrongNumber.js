function isArmstrong(num) {
  let original = num;
  let count = 0;
  for (let temp = num; temp > 0; temp = Math.floor(temp / 10)) {
    count++;
  }
  let sum = 0;
  for (let temp = num; temp > 0; temp = Math.floor(temp / 10)) {
    let digit = temp % 10;
    let power = 1;

    for (let i = 0; i < count; i++) {
      power *= digit;
    }
    sum += power;
  }
  return sum === original;
}
console.log(isArmstrong(153)); // true
console.log(isArmstrong(123)); // false
