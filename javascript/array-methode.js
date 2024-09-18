//  push methode

// let foodItem = ["tomato", "potato", "litchi", "apple"];
// console.log(foodItem);
// foodItem.push("bananachips", "aaluchips", "chilichip");
// console.log(foodItem);

// console.log(foodItem.toString());
// let number = [7, 8, 9, 4, 5, 6, 1, 2, 3]
// console.log(number.toString())
// console.log(number)

// let deletedItem = foodItem.pop();
// console.log(foodItem);
// console.log("deleted", deletedItem);

// concat methode in Array

// let heros = ["skatiman", "thor", "halk"];
// let dcHero = ["batman", "kalki"];
// let addHero = heros.concat(dcHero);
// console.log(addHero);

//  slice methode in Array

// let heros = ["skatiman", "thor", "halk", "Ramji", "bhoolebaba"];
// console.log(heros);
// console.log(heros.slice(1));
// console.log(heros);

// // let hero = heros.unshift("Ram");
// // console.log(hero);
// //  splice methode in Array
// let arr = [1, 2, 3, 4, 5, 6, 7];
// arr.splice(2, 2, 45, 18);
// console.log(arr);

//  practice Qustion

// let Companies = ["Bloobery", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
// // Companies.shift();
// // console.log(Companies);
// // Companies.splice(2, 1, "ola"); // uber remove and ola place
// // console.log(Companies);
// Companies.push("Amazon"); // push in last of array
// console.log(Companies);

// const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];

// const result = words.filter((word) => word.length > 6);

// console.log(result);




//  find prime number 

const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function isPrime(num) {
  for (let i = 2; num > i; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}

console.log(array.filter(isPrime));

