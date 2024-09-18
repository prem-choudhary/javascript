/* 
//   1 . for loop <= n
    2.  for loop <= n2
   3. is prime --- prime ka addsion 
   4. is priem ka -- multipale

n1 n2
2 loops till n1:i n2:j
i+j is prime console


   
c
*/
// let N = 100
// let N2

// for (let num = 2; num <= N; num++) {
//     let isPrime = 0;

//     for (let i = 1; i <= num; i++) {
//       if (num % i == 0) {
//         isPrime++;
//       }
//     }

//     if (isPrime != 2) {
//       console.log(num, "it is prime number");
//     } else {
//       console.log(num, "not prime number");
//     }
//   }

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
