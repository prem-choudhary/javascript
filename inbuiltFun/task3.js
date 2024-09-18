const products = ["MacBook", "iphone", "ipad", "MacBook"];
const price = [500000, 40000, 50000];

let data = [];
for (let i = 0; i < products.length; i++) {
  let obj = {};
  obj.name = products[i];
  obj.price = price[i];
  data.push(obj);
}
console.log(data);
