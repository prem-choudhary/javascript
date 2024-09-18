const isPrime = (n) => {
  if (n === 0) return false;

  if (n % 2 === 0) return false;

  for (i = 3; i < n / 2; i++) {
    if (n % i === 0) return false;
  }

  return true;
};
console.log(isPrime());     

const n1 = 10;
const n2 = 20;
for (let i = 0; i < n1; i++) {
  for (let j = 1; j < n2; j++) {
    if (isPrime(i + j)) {
      console.log(`Addition of i:${i} and j:${j} is prime: ${i + j}`);
    }
  }
}
