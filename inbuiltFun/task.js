const rectangle = {
  length: 30,
  breadth: 40,

  area: function () {
    const x = this.length * this.breadth;
    // console.log("Area", x);
    return x;
  },
  perimeter: function () {
    const y = 2 * (this.length + this.breadth);
    // console.log("perimeter", y);
    return y;
  },
};

console.log("Area is ", rectangle.area());
console.log("perimeter is ", rectangle.perimeter());

// rectangle.area();
// rectangle.peimeter();
//  i chenge the value of length and breadth

// console.log("---///-------------///////////")

// rectangle.length = 200
// rectangle.breadth = 300

// rectangle.area();
// rectangle.peimeter();
