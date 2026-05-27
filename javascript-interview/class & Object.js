// const student = {
//   fullName: "Aaruhh !!",
//   marks: 94.4,
//   printMarks: function () {
//     console.log("Print the marks = ", this.marks);
//   },
// };


function makeUser(name, age) {
  return {
    name: name,
    age: age,
    // ...other properties
  };
}

let user = makeUser("John", 30);
alert(user.name); // John
alert(user.age); // John