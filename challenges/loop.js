var weight = 70;
var height = 1.75;
var bmi = weight / (height * height);
// console.log(bmi)
var category;

if (bmi < 18.5) {
  category = "Underweight";
} else if (bmi < 24.9) {
  category = "Normal weight";
} else if (bmi < 29.9) {
  category = "Overweight";
} else {
  category = "Obese";
}
console.log("BMI: " + bmi.toFixed(2));
console.log("Category: " + category);

console.log("\n");
var secretNumber = 7;
var guess = 7;
if (guess === secretNumber) {
  console.log("Congratulations! You guessed the correct number.");
} else if (guess < secretNumber) {
  console.log("Try a higher number.");
} else {
  console.log("Try a lower number.");
}

let num = 0;
if (num > 0) {
  console.log("positive");
} else {
  console.log("number is negative");
}

// Ticket Pricing
// Write a program that calculates the ticket price based on age with the following conditions: age below 12 pay a ticket price of //   5,  age below 18 pay a ticket price of 10, age below 60 pay a ticket price of 20, age over 60 play a ticket price of 15.

let age = 69;
let ticketPrice;

  if (age < 12) {
    ticketPrice = 5;
  } else if (age >= 12 && age < 18) {
    ticketPrice = 10;
  } else if (age >= 18 && age < 60) {
    ticketPrice = 20;
  } else {
  ticketPrice = 15;
  }
  console.log("ticket price is = " + ticketPrice);

for(let i = 1;i<=6; i++){
    let bag = "";
    for(let j = 1; j<=i; j++){
      bag = bag +" "+ "*"
    };
    console.log(bag , i)
  
  };