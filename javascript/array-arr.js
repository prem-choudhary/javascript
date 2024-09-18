// // let marks = [99, 88, 77, 55, 45, 86, 100, 78, 65];

// // console.log(marks);
// // console.log(marks.length);

// // let heros = ["Rohit", "Virat", "Bhumra", "Pant", "Kuldeep"];
// // // console.log(heros)
// // console.log(
// //   `this is my real heros ${heros} and array length is  ${heros.length}`
// // );

// // console.log((marks[2] = 100));
// // console.log(marks);

// // let heros = ["Rohit", "Virat", "Bhumra", "Pant", "Kuldeep"];
// // for loop
// // for (let idx = 0; idx < heros.length; idx++) {
// //   console.log(heros[idx]);
// // }

// //  for - of loop

// // for (let el of heros) {
// //   console.log(el);
// // }

// //  for - in loop

// // for (let el in heros) { // print index of array
// //   console.log(el);
// // }
// // console.log(heros)

// // let citis = ["pali", "jalor", "marwar", "surat", "pune", "keral"];
// // // /for loop

// // for (let i = 0; i < citis.length; i++) {
// //   console.log(citis[i].toUpperCase());
// // }

// // practice Question
// /* given a array [] and find average marks of the entire class*/

// // let marks = [77, 45, 89, 33, 59, 66, 78];
// // let sum = 0;
// // for (let num of marks) {
// //   sum += num;
// // }
// // let avrg = sum / marks.length;
// // console.log(`this is entire class average = ${avrg}`);

// // for (let i = 0; i < marks.length; i++) {
// //   sum += i;
// // }
// // let avrg = sum / marks.length;
// // console.log(`this is avrg marsk ok entrie class = ${avrg}`);
// // for (let el of marks) {
// //   console.log(el);
// // // }

// // let price = [1000, 456, 300, 753];
// // let i = 0;
// //  for of loop
// // for (let val of price) {
// //   console.log(`value at index ${i} = ${val}`);
// //   let offer = val / 10;
// //   price[i] = price[i] - offer;
// //   console.log(`value after offer =${price[i]}`);
// //   i++;
// // }

// // console.log(price);

// // for loop

// // for (let i = 0; i < price.length; i++) {
// //   let offer = price[i] / 10;
// //   price[i] -= offer;
// // }
// // console.log(price);

// // let arr = [1, 45, 78, 65, 34, 100]; // ptint largest
// // for (let i = 0; i < arr.length; i++) {
// //   console.log(arr[i]);
// //   let largestArr = arr.filter( (la)=>{
// //     return la<5

// //   })
// // }
// // console.log(largestArr)

// // function largest(arr) {
// //   let i;

// //   let max = arr[0];

// //   for (i = 1; i < arr.length; i++) {
// //     if (arr[i] > max) max = arr[i];
// //   }

// //   return max;
// // }

// // let arr = [10];
// // console.log("Largest in given array is " + largest(arr));

// // let n = 4
// // let m = 8
// // if(4<8){
// //     console.log("lesser")
// // }

// /* if the salary is greater then  10000 then add 2000 bonus otherwise add bonus 1000.*/

// let salary = 10000;
// if ((salary) => 10000) {
//   console.log(
//     ` your salary is 10000 and add bonus is 2000 =  ${salary + 2000}`
//   );
// } else {
//   console.log(
//     `your salary in less then 10000 and add bonus 1000 =  ${salary + 1000}`
//   );
//  }

// // //  numbre prime or not

// // let isPrime = 12;
// // let c = 2;
// // // let isPrimeFlag = true;

// // while (c < isPrime) {
// //   if (isPrime % c === 0) {
// //     console.log(`${isPrime} number is not a prime `);
// //   }
// //   c++;
// // }

// // console.log(`${isPrime} is a prime number `);

// // let c = 221
// // if(c%2==0){
// //   console.log(`${c} is not odd number `)
// // } else(
// //   console.log(`${c} is odd number `)
// // )

let a = 4;
let b = 10;
let c = 20;

if (a > b && a > c) {
  console.log(`${a} greater then b and c`);
} else if (b > a && b > c) {
  console.log(`${b} greater then a and c`);
} else {
  console.log(`${c} greater then a and b`);
}

