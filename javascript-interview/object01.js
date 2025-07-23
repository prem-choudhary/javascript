let vehicle = {
  wheels: "4",
  fuelType: "Gasoline",
  color: "Green",
};
console.log(vehicle);
let carProps = {
  type: {
    value: "Volkswagen",
  },
  model: {
    value: "Golf",
  },
};

var car = Object.create(vehicle, carProps);
console.log(car);
console.log(vehicle);

function Person(name) {
  this.name = name;
  this.age = 21;
}
var object = new Person("Sudheer");
console.log(Person)
console.log(object)

console.info("Data science and Arts")