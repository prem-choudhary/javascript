//  check is odd or not
// let isOdd = 10;
// if (isOdd % 2 === 0) {
//   console.log(`${isOdd} is Not Odd numbre `);
// } else {
//   console.log("Numbre is odd ");
// }

//  check numbre is prime or not

// let isPrime = 11;
// let c = 2;
// while (c < isPrime) {
//   if (isPrime % c === 0) {
//     console.log(`${isPrime} number is not a prime `);
//   }
//   c++;
// }
// console.log(`${isPrime} is a prime number `);

let isPrime = 11;
let c = 2;
let isPrimeFlag = true;

while (c < isPrime) {
  if (isPrime % c === 0) {
    console.log(`${isPrime} number is not a prime `);
    isPrimeFlag = false;
    break;
  }
  c++;
}

if (isPrimeFlag) {
  console.log(`${isPrime} is a prime number `);
}


// let start = 2
// let end  = 20

// for (let i = start; i <= end; i++) {
//   let flag = 0;

 
//   for (let j = 2; j < i; j++) {
//       if (i % j == 0) {
//           flag = 1;
//           break;
//       }
//   }

  
//   if (i > 1 && flag == 0) {
//       console.log(i);
//   }
// }