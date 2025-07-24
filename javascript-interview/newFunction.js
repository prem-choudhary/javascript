function foo() {
  let b = 1;
  function inner() {
    return b;
  }
  return inner;
}
let get_func_inner = foo();

console.log(get_func_inner());
console.log(get_func_inner());
console.log(get_func_inner());

(function () {
  var a = (b = 5);
})();
console.log(typeof a);
console.log(typeof b);

let e = 5;
let c = "5";

if (e == c) {
  console.log("Equal");
} else {
  console.log("Not Equal");
}

const car = {
  name: "Toyota",
  getName: function () {
    return this.name;
  },
};

const getCarName = car.getName;
console.log(getCarName()); // ???

function outer() {
  let x = 10;
  return function inner() {
    console.log(x);
  };
}
const closureFunc = outer();
closureFunc(); // prints 10
