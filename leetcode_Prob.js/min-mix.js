// const arr = [1, 45, 78, 99, 100, 400, 800, 9]; // 1 ,,, 100,,

// console.log(Math.max(...arr));
// console.log(Math.min(...arr));
// let filterdArr = arr.filter((el) => {
//   return el > 99;
// });
// console.log(filterdArr);..

// let maxVal = arr[0];
// let minVal = arr[0];

// for (const el of arr) {
//   if (el > maxVal) {
//     maxVal = el;
//   }
//   if (el < minVal) {
//     minVal = el;
//   }
// }

// console.log(minVal)
// console.log(maxVal)

//  print pirme number 1 to 20
//  is prime number

const isPrime = (n) => {
  if (n < 2) return `${n} is not a prime`;

  if (n % 2 === 0) {
    return `${n}  is not a prime number`;
  }

  let count = 0;
  for (let i = 3; i < n / 2; i += 2) {
    console.log(i);
    count++;
    if (n % i === 0) {
      return `${n}  is not a prime number ${count}`;
    }
  }
  return `${n} is prime number, ${count}`;
};
console.log(isPrime(11));

const primeNumber = () => {};

let number = [1, 45, 787, 654, 888, 100];
const output = number.reduce((prev, carval) => {
  return prev > carval ? prev : carval;
  //   return prev > carval ? prev : carval;
});

console.log(output); // 888
// console.log(output); // 1

let score = [88, 78, 99, 96, 95, 41, 57, 91];

let topperScore = score.filter((val) => {
  return val > 90;
});

console.log(topperScore);
