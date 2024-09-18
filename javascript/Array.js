// let marks = [88, 98, 87, 77, 36, 51, 99];
// console.log(marks);
// console.log(marks.length);

// let heros = ["thor", "hulk", "saktiman", "ironman", "loki"];
// console.log(heros);

// /* +*+*+*+*+*+*+*+* for loop *+*+*+*+*+*+*+*+*+**/
// heros.forEach( (hero)=>{
//   console.log(hero)

// })

// for (let idx = 0; idx < heros.length; idx++) {
//   console.log(heros[idx])
// }

//  ++*+*+*+*+*+*+**+* for of lopp *+*+***+**+*+*

// for (let hero of heros) {
//   console.log(hero);
// }

// let citis = ['pali', 'surat' , 'jaipur', ]
// for ( let city of citis) {
//     console.log(city.toUpperCase( ))

// }

let mrk = [88, 97, 65, 78, 100, 36];
let sum = 0;
for (let val of mrk) {
  sum += val;
}
let avg = sum / mrk.length;
console.log(`total number of mrk = ${avg}`);

// const name = [
//   "wes",
//   "kait",
//   "snickers",
//   "wes",
//   "kait",
//   "snickers",
//   "wes",
//   "kait",
//   "snickers",
//   "wes",
//   "kait",
//   "snickers",
//   "wes",
//   "kait",
//   "snickers",
//   "wes",
//   "kait",
//   "snickers",
// ];

// console.log(name[0]);
// console.log(name[name.length - 1]);

// const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// // const numberback = number.reverse();
// // console.log(numberback);
// // console.log(number)
// // const pizze = number.slice(2 ,4)
// // console.log(pizze)
// // console.log(number);

// const numreverse = [...number];
// numreverse.reverse();
// console.log(numreverse);
// console.log(number);

// const name = ["param", "janam", "karam"];
// // name.push("maran");
// name.unshift('poppy')
// console.log(...name,('maran'));

// const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(number)
// console.log(number.splice(3,2));
// console.log(number)

// let fruits = ["apple", "banana", "kivi", "orange"];
// Arra = fruits.push("aam"); // add one fruits from end lenght (orange)
// Arra = fruits.pop(); // remove last value (orange)
// Arra = fruits.shift(); // remove (apple) from the first
// Arra = fruits.unshift("greaps"); //  add greaps in apple value
// // Arra = fruits.pop();

// console.log(fruits);

// Array.of("kivi", "apple");

// const ary = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// Array.from({ary, length: 10 });

// createRange(3, 7342);
// const foodString = "hot dogs, hamburgers, sausages, corn";
// console.log(foodString.split(1,3));

// const food = ["pizze", "bargar", "fench"];
// const lastItem = toppings.pop();
// console.log(lastItem)

// let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, ]
// number.reverse()
// console.log(number)

// const feedback = [
//   { comment: "Love the burgs", rating: 4 },
//   { comment: "Horrible Service", rating: 2 },
//   { comment: "Smoothies are great, liked the burger too", rating: 5 },
//   { comment: "Ambiance needs work", rating: 3 },
//   { comment: "I DONT LIKE BURGERS", rating: 1 },
// ];

// const burgRating = rating.find();

//   const burgRating = feedback.find(rating => rating.comment.includes('burg'));
// console.log(rating);

// function add(a, b){
//   return a+b;
// }

// function divide(a, b) {
//   return a/b;
// }


// function calculate(x, y, operation) {
//   return operation(x, y);
// }


// console.log(calculate(10, 5, add));

// console.log(calculate(10, 5, divide));
