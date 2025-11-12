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

var studentName = ["Amit", "Rajesh", "Kailash", "Aalok"];
var bag = "";

for (var i = 0; i < studentName.length; i++) {
  if (studentName[0] == "A") {
    bag = bag + studentName[i];
    console.log(bag);
  } else {
    console.log("bag is empty");
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
