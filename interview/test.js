var a;
console.log(typeof a); // undefined

var a = "prem";
console.log(typeof a); // staring

var x = null;
console.log(typeof x); // object

var v = undefined;
console.log(typeof v); // undefined

var p = { a: 10, b: 5 };
console.log(typeof p); // object

var n = 20;
console.log(typeof n); // number

// //  object

const myObj = {
  name: "prem",
  age: 22,
  email: "prem_choudhary01@gmail.com",
};

console.log(myObj.name); // prem
console.log(myObj.age); // 22
console.log(myObj.email); // "prem_choudhary01@gmail.com"

console.log(myObj["name"]);
console.log(myObj["age"]);
console.log(myObj["email"]);

console.log(myObj);

// string

var string = "Welcome to this Javascript Guide!";

var reverseEntireSentence = reverseBySeparator(string, "");
console.log(reverseEntireSentence);

function doSomething() {
  x = 33;
  console.log(x);
  var x = 34;
}
doSomething();

var x = 10;

function doSomething() {
  console.log(x); // 10
  var x = 12;

  function doNotSomething() {
    // var x = 12
    console.log(x); // 12
    var x = 13;
  }
  doNotSomething();
}
doSomething();

//  print all even number from 1 to 10

function doSomething() {
  for (let i = 0; i <= x; i++) {
    if (i % 2 == 0) {
      console.log("even number is ", i);
    }
  }
  doSomething();

  var x = 10;
  for (let i = 0; i <= x; i++)
    if (i % 2 == 0) {
      console.log("even number is ", i);
    }
}
