let birthYear = 2002;
let age = 2024 - 2002;
if (age >= 13 && age <= 19) {
  console.log("Teenger");
} else if (age >= 20 && age <= 22) {
  console.log("Twenties");
}


// print 1 to 100 all prime number   

for (var n = 2; n <= 100; n++) {
  var factors = 0;
  for (var i = 1; i <= n; i++) {
    if (n % i == 0) {
      factors++;
    }
  }
  if (factors <= 2) {
    console.log(n, "is prime number");
  }
}


 