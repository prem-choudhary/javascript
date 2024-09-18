var array = ["Prem", "Kailash", "Bharat"];
// console.log(arr);
// var v=arr.join();
// console.log(v);
function joints(array, char) {
  if (char == undefined) {
    char = ",";
  }
  var jhola = "";

  for (i = 0; i < array.length - 1; i++) {
    jhola = jhola + array[i] + char;
  }
  var last = array[array.length - 1];
  jhola = jhola + last;
  console.log(jhola);
}
var char = " ";

joints(array, char);
