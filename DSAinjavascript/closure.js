// function myfun(){
//     let a = 4
//     return a * a
// }

// console.log(myfun())

// let a = 4
// function myFun(){
//     return a * a
// }

// console.log(myFun())
// myFun()
// function myFun(){
//     a = 4
// }

function selectionSort(arr) {
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
 
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      let temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }

  return arr;
}

let array = [5, 4, 1, 3, 0, 7, 8, 9];
console.log(selectionSort(array));
