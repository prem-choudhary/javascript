let str1 = ["Prem", "Bharta", "Kailash"];
let count = 0;
for (let i = 0; i < str1.length; i++) {
  let x = str1[i];
  for (let j = 0; j < x.length; j++) {
    count++;
  }
}
console.log(count); 
console.log("^^^^^^^^^^^^^");
const arr = ["Premchoudhary", "NotBook"];
let add = 0;
for (let i = 0; i < arr.length; i++) {
  let v = arr[i];
  for (let j = 0; j < v.length; j++) {
    add++;
  }
}
console.log(add);
console.log("_______________");
const collageName = ["prem", "Bharat", "Kailash"];    // output is 17  
let sum = 0;
for (let i = 0; i < collageName.length; i++) {
  sum = sum + collageName[i].length;
}
console.log(sum);