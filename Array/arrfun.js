// function addString(arr) {
//   var bag = "";
//   for (let i = 0; i < arr.length; i++) {
//     bag = bag + arr[i];
//   }
//   return bag;
// }
// var arr = ["Prem", " chaudhary"];
// console.log(addString(arr));

//  use char for - / spece

// function addArray(arr ,char) {
//   var bag = "";
//   for (let i = 0; i < arr.length; i++) {
//     bag = bag + arr[i] + char
//   }
//   return bag;
// }
// var arr = ["M", "-A", "-N"];
// const char = "-";
// console.log(addArray(arr , char));  // o/p >> M--A--N-

//   i don't print last element (-/ this )

function addArray(arr, char) {
  if(char== undefined){
    char = ","
  }
  var bag = "";
  for (let i = 0; i < arr.length - 1; i++) {
    bag = bag + arr[i] + char;
  }
  var last = arr.length - 1;
  bag = bag + arr[last];
  return bag;
}
var arr = ["M", "A", "N"];
const char = "-";
console.log(addArray(arr)); // o/p >> M-A-N
