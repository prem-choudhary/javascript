var studentDetails = {
  name: "Kaleen Bhaiya",
  age: 22,
  gander: "male",
  city: "surat",
  hobbies: "codind",
};

console.log(studentDetails);
console.log(studentDetails.name);
console.log(studentDetails["age"]);

// update object

studentDetails.age = 23;
console.log(studentDetails);
studentDetails.hobbies = "cricket";
console.log(studentDetails);
