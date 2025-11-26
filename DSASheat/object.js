var student = {
  name: "Rohit",
  age: 37,
  gender: "Male",
  city: "Mumbai",
};
console.log(student);
// i print only name of student

console.log(student["name"]);
console.log(student["age"]);

console.log(student.age);
console.log(student.city);

student["age"] = 50;
console.log(student.age);
console.log(student);
