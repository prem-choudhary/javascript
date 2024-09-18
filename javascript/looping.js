// const fruits = ["apple", "banana", "kivi", "mango", "grapes"];
// // console.log(fruits)

// const filter1 = fruits.forEach((el) => {
//   // console.log(el)
//   return el;
// });

// console.log(filter1)

// console.log(filter1);
// const res1 = fruits.slice(1,4)
// console.log(res1)

// const res = fruits.splice(1, 3 ,"");

// console.log(res, fruits);

// const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNum = [];
// myNum.forEach((num) => {
//   if (num >  4) {
//     // console.log(myNum)
//     newNum.push(num);
//   }
// });
// // const newNum = myNum.filter((num) => {
// //     return   num > 4;
// // }
// // )

// console.log(newNum);

const books = [
  { tatle: "book one", genre: "Fiction", publish: "1981", edition: "2004" },
  {
    tatle: "book two",
    genre: " Non - Fiction",
    publish: "1992",
    edition: "2008",
  },
  { tatle: "book three", genre: "History", publish: "1999", edition: "2007" },
  {
    tatle: "book Four",
    genre: " Non - Fiction",
    publish: "1989",
    edition: "2010",
  },
  { tatle: "book five", genre: "science", publish: "2009", edition: "20014" },
  { tatle: "book six", genre: "Fiction", publish: "1987", edition: "2010" },
  { tatle: "book seven", genre: "History", publish: "1986", edition: "1996" },
  { tatle: "book eigth", genre: "science", publish: "2011", edition: "2016" },
  {
    tatle: "book nine",
    genre: "Non - Fiction",
    publish: "1981",
    edition: "2089",
  },
];

const userbook = books.filter((bk) => {
  // return bk.genre === "History"
  // return bk.tatle === "book five"
  // return bk.edition > "2002"
  return bk.publish >= 1995 && bk.genre === "History";
});
// console.log(userbook);

const myNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNum = myNumber.map((num) => num + 10);
// const newNums = myNumber.push( (num) => num - length )

const newNum = myNumber
                .map((num) => num * 10)
                .map( (num) => num + 1)
                .filter( (num) => num >= 40   )

                console.log(newNum);;
   
