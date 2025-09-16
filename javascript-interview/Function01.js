function reverseMyWay(array) {
  var output = [];
  for (var i = array.length - 1; i > -1; i--) {
    output.push(array[i]);
  }
  return output;
}
function reverseTheirWay(array) {
  var output = [];
  while (array.length) {
    output.push(array.pop());
  }
  return output;
}
function JustDoIt() {
  console.log("their way starts");

  var startOf = new Date().getTime();
  for (var p = 0; p < 10000; p++) {
    console.log(reverseTheirWay([7, 6, 5, 4, 3, 2, 1]));
  }
  var endOf = new Date().getTime();

  console.log("ran for " + (endOf - startOf) + " ms");
  console.log("their way ends");
}

function JustDoIMyWay() {
  console.log("my way starts");
  var startOf = new Date().getTime();
  for (var p = 0; p < 10000; p++) {
    console.log(reverseMyWay([7, 6, 5, 4, 3, 2, 1]));
  }
  var endOf = new Date().getTime();
  console.log("ran for " + (endOf - startOf) + " ms");
  console.log("my way ends");
}
JustDoIt();
JustDoIMyWay();
