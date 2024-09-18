// write a function and print araay of sum 

function sumOfAraay(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}

function findArray(arr) {
  if (arr.length == 0) {
    return 0;
  }
  const sum = sumOfAraay(arr);
  const avg = sum / arr.length;
  return avg;
}

const arr = [1, 5, 7, 8, 10];
const res = findArray(arr);
console.log("avg is", res);
