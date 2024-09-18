// //  print N number of sum is number is even and less then or = to N

// let n = 100;
// let sum = 0;

// for (let i = 1; i <= n; i++) {
//   if (i % 2 === 0) {
//     sum = sum + i;
//   }
// }
// console.log(`the sum of all even number is ${sum}`);

// //  print N number of sum is number is odd and less then or = to N

let num = 100;
let add = 0;

for (let i = 1; i <= num; i++) {
  // console.log(i);
  if (i % 2 === 0) {
    add = add + i;
  }
}
console.log(`the sum of all even number is ${add}`);
// console.log("-------------------------------------")

// // division task

// let N = 500;
// console.log("N is " + N);

// let x = Math.floor(32 / N);
// console.log("32/ N is " + 32 / N);
// console.log("x is " + x);
// if (N == 0) {
//   console.log(-1);
// } else if (x == 0) {
//   console.log("Too Low");
// } else {
//   console.log(x);
// }

// let N = 7;
// for (let i = 1; i <= N; i++) {
//   console.log("i is = " + i);
//   if (i % 5 == 0 && i % 7 == 0) {
//     console.log("Masai School");
//   } else if (i % 7 == 0) {
//     console.log("school");
//   } else if (i % 5 == 0) {
//     console.log("masai");
//   } else {
//     console.log("Hurray !");
//   }
// }

//  print 0 to 15 odd and even number

// for (let i = 0; i <= 15; i++) {
//   if (i === 0) {
//     console.log(i + "  is even number ");
//   } else if (i % 2 == 0) {
//     console.log(i + "  is even number");
//   } else {
//     console.log(i + "  is odd number ");
//   }
// }

let student = [
  ["prem", 80],
  ["mak", 90],
  ["isha", 80],
  ["papu", 98],
  ["havish", 77],
];
Avgmarks = 0;
for (let i = 0; i < student.length; i++) {
  Avgmarks += student[i][1];
  var avgs = (Avgmarks / student.length);
}
console.log("Avgmarks grade is " +( Avgmarks) / student.length);

if (avgs < 60) {
  console.log("grade = F");
} else if (avgs < 70) {
  console.log("grade = D");
} else if (avgs < 80) {
  console.log("grade = C");
} else if (avgs < 90) {
  console.log("grade = B");
} else if (avgs <= 100) {
  console.log("grade = A");
}
