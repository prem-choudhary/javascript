var product = {
  Mobile: ["samsung galaxy a34 5g "],
  price: [34000],
  addision: 2023,
  storPlace: "surat Punagam",
  decount: 20,
};

//  add item in object so how to add

product["leptop"] = ["makBook", "asus makBook"];
console.log(product);

product.leptop = ["VivoBook", "del"];
console.log(product);

var arr = product["price"];
arr.push(500000);

console.log(product);

product.Mobile.push("apple 14 proMax");
console.log(product);
