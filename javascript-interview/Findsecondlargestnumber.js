let arr = [10, 20, 5, 40, 30];
let max = arr[0];
let secondMax = -Infinity;  
for (let i = 1; i < arr.length; i++) {
  if (arr[i] > max) {
    secondMax = max; 
    max = arr[i]; 
  } else if (arr[i] > secondMax && arr[i] < max) {
    secondMax = arr[i]; 
  } 
}
console.log(secondMax); // 30