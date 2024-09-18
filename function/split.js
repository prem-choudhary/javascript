function mySplit(str) {
  var output = [];
  var bag = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] != " ") {
      bag = bag + str[i];
    } else {
      if (bag != "") {
        output.push(bag);
      }
      bag = "";
    }
  }
  return output;
}
var str = "The quick      brown fox ";
console.log(mySplit(str));
