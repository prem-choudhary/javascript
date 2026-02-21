function isPrime(number) {
  if (number <= 1) return false; // 0 and 1 are not prime numbers
  if (number === 2) return true; // 2 is the only even prime number
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false; // If divisible by any number other than 1 and itself
    }
  }
  return true; // If no divisors found, it's prime
}
// Example Usage
console.log(isPrime(2)); // true
console.log(isPrime(4)); // false
console.log(isPrime(17)); // true
console.log(isPrime(1)); // false
console.log("Hello Prem Choudhary")
function primesInRange(start, end) {
  let primes = [];
  for (let i = start; i <= end; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }
  return primes;
}
// Example Usage
console.log(primesInRange(1, 20)); 
// Output: [2, 3, 5, 7, 11, 13, 17, 19]

