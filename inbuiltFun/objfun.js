const details = {
  name: "KL Rahul",
  age: 32,
  print: function (x, y, z) {
    console.log("my name is ", x);
    console.log("my age is ", y);
    console.log("my hobbies is ", z);
  },
};
details.print("Rohit", 20, "cricket");

console.log("...........................")
// console.log(details.print("Rohit", 20, "cricket"));

const obj = {
  name: "lalit",
  age: 23,
  family: function () {
    console.log("My name is ", this.name);
    console.log("My age is ", this.age);
  },
};

obj.family();
