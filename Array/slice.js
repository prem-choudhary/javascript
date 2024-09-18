const arr = ["a", "b", "c", "d", "e"];
// console.log(arr.slice(1, 3));
var x = arr.slice(1, 3);
console.log(x); // o/p >> is "b" , "c"

// ex2

const str = ["prem", "kailash", "Bharat", "Rakesh", "Ravi", "mukesh", "Pawan"];

var res = str.slice(0, 3);
console.log(res);
//   o/p > is "prem","kailash","Bharat"

// var array = [
//   "Vinod",
//   "a",
//   "Rita",
//   "Hitesh",
//   "Motibhai",
//   "Bhuraji",
//   "a",
//   "Fuliben",
// ];

// function slicec(array, M, P) {
//   console.log(P);

//   if (P == undefined) {
//     var P = array.length;
//   }
//   if (M == undefined) {
//     M = 0;
//   }
//   // console.log(P);
//   var s = [];
//   var bag = "";

//   for (var i = M; i < P; i++) {
//     s.push(array[i]);
//     // console.log(array[i])
//   }
//   console.log(s);
//   //console.log(bag);
// }

// slicec(array);

var s = "prembhai";

function substring(string, S, E) {
  if (E == undefined) {
    E = string.length;
  }
  var bag = "";

  for (i = S; i < E; i++) {
    bag = bag + string[i];
  }
  console.log(bag);
}

substring(S, 2);
