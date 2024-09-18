const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const myTotal = myNum.reduce(function (acc, currval) {
    console.log(`acc: ${acc} and currval: ${currval}`);
  return acc + currval;
}, 0);
console.log(myTotal);

//   const Total = myNum.reduce( ( acc , currval) => acc+currval , 0)
//   console.log(Total)

const shoppingCart = [
  {
    itemName: "javascript course",
    price: 2999,
  },
  {
    itemName: "python course",
    price: 999,
  },
  {
    itemName: "mobile dev course",
    price: 5999,
  },
  {
    itemName: "data science course",
    price: 12999,
  },
];

const priceToPay = shoppingCart.reduce((acc, el) => acc + el.price, 0);
console.log(priceToPay);

// const newNum = shoppingCart.map((num) => num + 0);
// console.log(newNum);
// console.clear();

// const faces = ["😃", "🤠", "🤡", "🤑", "😵", "🌞", "🐶", "😺"];
// // const toys = faces.map(addArms);
// // console.log(toys);
// function addArms(face) {
//   return `👋${face} 👋`;
// }
// const toys = faces.map(addArms);
// console.log(toys);
