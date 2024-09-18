const eCommerce = {
  product: [" earphone", "headphone", "earpods"],
  quantity: [4, 3, 2],
  price: [700, 800, 1000],

  totalPrice: function () {
    const x = this.quantity * this.price + this.product;
    // console.log(x);
    return x;
  },
};

console.log(eCommerce.totalPrice());

//  i fail in this  problem

const e_commerce = {
  products: ["earphone", "headphone", "earpods"],
  quantity: [4, 3, 2],
  price: [700, 800, 1000],

  total_price: function () {
    let sum = 0;
    for (let i = 0; i < this.quantity.length; i++) {
      sum = sum + this.quantity[i] * this.price[i];
    }
    console.log("Total Price is", sum);
  },
};

e_commerce.total_price();
