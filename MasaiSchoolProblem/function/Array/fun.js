// function fevicol(arr, char) {
//   var bag = "";
//   for (var i = 0; i < arr.length; i++) {
//     bag = bag + arr[i] + char;

//     if (i != arr.length - 1) {
//       bag = arr[i] + char;
//     } else {
//       bag = bag + arr[i];
//     }
//   }

//   // if (i != arr.length - 1) {
//   //   bag = bag + arr[i] + char;
//   // } else {
//   //   bag = bag + arr[i];
//   // }

//   //   var last = arr.length - 1;
//   //   bag = bag + arr[last];
//   return bag;
// }
// var arr = ["M", "A", "N"];
// var char = "-";
// console.log(fevicol(arr, char));

function fevicol(arr, char) {
  var bag = "";

  for (var i = 0; i < arr.length; i++) {
    bag += arr[i];

    if (i != arr.length - 1) {
      bag += char;
    }
  }

  return bag;
}

var arr = ["m", "a", "n"];
var char = "-";
console.log(fevicol(arr, char)); // m-a-n
