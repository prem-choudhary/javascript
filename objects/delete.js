//  how to delete object value

var bag = {
  name: "gannu",
  lab: "dudore lab",
  student: "rahul",
  age: 7,
  laptop: "asus vivoBook",
};
console.log(bag);

//  i delete a age
//  Ist way to delete the kay and value

delete bag["age"];
console.log(bag);

//  II sd way to delete the kay and value

delete bag.lab;
console.log(bag);

const obj = {
  name: "kaleen",
  marks: 89,
  gender: "both",
};

const x = "name";
const y = "marks";
console.log(obj[x]);
console.log(obj[y]);
