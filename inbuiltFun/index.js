const amazon = [
  { name: "speaker", Price: 5400, rating: 4 },
  { name: "cooker", Price: 2300, rating: 3 },
  { name: "leptop", Price: 100, rating: 4 },
  { name: "macBook", Price: 100000, rating: 4 },
  { name: "iped", Price: 100000, rating: 4 },
  { name: "leptop", Price: 340000, rating: 2 },
];

for (let i = 0; i < amazon.length; i++) {
  //   console.log(amazon[i].name, amazon[i].Price, amazon[i].rating);
  //   console.log(amazon);
  if (amazon[i].Price <= 10000) {
    // console.log(amazon[i]);
  }
}

//  task 2ns is print all rating is >=3

const employee = [
  { name: "Rahul", LPA: 3.5, rating: 2 },
  { name: "Mayur Chaudhary", LPA: 16, rating: 5 },
  { name: "Vinod", LPA: 10, rating: 4 },
  { name: "Champakbhai chaudhary", LPA: 25, rating: 7 },
  { name: "Dinesh", LPA: 34, rating: 6.7 },
];

for (let i = 0; i < employee.length; i++) {
  if (employee[i].rating >= 3) {
    // console.log(employee[i]);
  }
}

//  Task 3  :   price in between 5000 nad 15000 (including both)

const product = [
  { name: "iPhone", price: 90000, rating: 5 },
  { name: "vivoBook", price: 38000, rating: 3 },
  { name: "macBook", price: 14000, rating: 4 },
  { name: "DEL", price: 10000, rating: 1 },
  { name: "tree", price: 100, rating: 2 },
  { name: "fan", price: 800, rating: 3 },
];

for (let i = 0; i < product.length; i++) {
  if (product[i].price >= 5000 && product[i].price <= 15000) {
    // console.log(product[i]);
  }
}

const store = [
  { name: "prem chaudhary", age: 22 },
  { name: "kaleen Bhaiya", age: 44 },
  { name: "Munna Bhaiya", age: 26 },
];

for (let i = 0; i < store.length; i++) {
  if (i == 0 || i == 2) {
    console.log(store[i]);
  }
}
