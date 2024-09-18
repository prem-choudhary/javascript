let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(arr.length);
for (let i = 0; i < arr.length; i++) {
  //   console.log(arr[i]);
}

// // Array
// const scores = [22, 54, 76, 92, 43, 33];
// let i = 0;

// for (let i = 0; i < scores.length; i++) {
//   console.log(scores[i]);
//   i++;
// }
// while (i < scores.length) {
//   console.log(scores[i]);
//   i++;
// }

// print 10 & -20 even number

for (let i = 10; i >= -20; i--) {
  if (i % 2 === 0){
     console.log(`numbre is even = ${i}`);
  } else (
    console.log(`number is odd ${i}`)
  )
}

//  print the number from 1 to 45
//  For multiples of 3 print “Fizz”
// For multiples of 5 print “Buzz”
// For multiples of 3 and 5 print “FizzBuzz”

for (i = 1; i <= 45; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("FzzBuzz 1");
  } else if (i % 3 == 0) {
    console.log("Fizz 2");
  } else if (i % 5 == 0) {
    console.log("Buzz 3");
  }
}

// print number of sum
let arrSum = [22, 23, 25, 27, 30];
let sum = 0;
for (i = 0; i < arrSum.length; i++) {
  sum = sum + arrSum[i];
}
console.log(`The arrSum is  = ${sum}`);

// nested for loop

// for (let i = 1; i <= 20; i+=5) {
//   for (let j = i; j <i+ 5; j++) {
//     console.log(j + " ");
//   }
//   console.log(" ")
// }

// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

// for (let i = 1; i <= 5; i++) {
//   for (let j = 1; j <= i; j++) {
//     console.log(j + " ");
//   }
//   console.log(" ");
// }

//  1
//  2 2
//  3 3 3
//  4 4 4 4
//  5 5 5 5 5

// for (let i = 1; i <= 5; i++) {
//   for (let j = 1; j <= i; j++) {
//     console.log(i + " * ");
//   }
//   console.log(" ");
// }

// 1
// 2 3
// 4 5 6
// 7 8 9 10

let count = 1;
for (let i = 1; i <= 4; i++) {
  for (let j = 1; j <= i; j++) {
    console.log(count + " ");
    count++;
  }
  console.log(" ");
}

//  5 5 5 5 5 
//  4 4 4 4 
//  3 3 3 
//  2 2
//  1

for (let i = 5 ; i>= 1 ; i--){
    for( j = 1 ; j<=i ; j++) {
        console.log( " * " + " ")
    }
    console.log( " stop ")
}


