const isOdd = (n) => {
  return n % 2 === 0 ? false : true;
};

//  print odd number 1 to 10
let number = 20;
for (let i = 1; i <= number; i++) {
  if (isOdd(i)) {
    console.log(`odd:${i}`);
  } else {
    console.log(`even:${i}`);
  }
}

// Object. {}
//  print even number 1 to 10
// let  = 1

// for (let i = 1; i <= 10; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }

//  loop of sum 1 to 5
// loop of sum 1 to n

// let num = 0;
// let n = 10;
// for (let i = 0; i <= n; i++) {
//   num = num + i;
// }

// console.log(`sum : = `, num, res);
