var animals = ["ping", "cat", "Dodo", "ping", "dog"];
// var x = animals.lastIndexOf("ping")
console.log(animals.lastIndexOf("Dodo", 1));
console.log(animals.lastIndexOf("cow", 0));
// console.log(x)
// console.log(animals.lastIndexOf("cow"))
// console.log(animals)

var foods = ["dal", "sabji", "roti", "dal"];
var firstIndex = foods.lastIndexOf("dal");
var lastIndex = foods.indexOf("roti");

console.log(firstIndex); // 3
console.log(lastIndex); //   2
console.log(foods.lastIndexOf("karela")); // -1  element can be found in the array, or -1 if it is not present.
