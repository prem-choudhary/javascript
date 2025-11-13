var studentName = ["Amit", "Rajesh", "Kailash", "Aalok"];
var count = 0;

for (var i = 0; i < studentName.length; i++) {
  var x = studentName[i];

  for (var k = 0; k < x.length; k++) {
    if (x[k] == "A" || x[k] == "a") {
      count++;
      break;
    }
  }
}

console.log(count);
