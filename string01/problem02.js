var name1 = "Masai";
var jhola = "";

for (var i = 0; i < name1.length; i++) {
  if (i == 2) {
    jhola = jhola + "t";
  } else {
    jhola = jhola + name1[i];
  }
}
console.log(jhola);

var studentName = ["Amit", "Rjesh", "Kailash", "Aalok"];
var bag = 0;

for (var i = 0; i < studentName.length; i++) {
  var x = studentName[i];
  if (x[0] == "A") {
    // continue
    bag++;
  }
}
console.log(bag);

let pizza = new Promise((resolve, reject) => {
  let ovenReady = true;
  if (ovenReady) resolve("Pizza is ready! 🍕");
  else reject("Oven broke down 💀");
});

pizza
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
