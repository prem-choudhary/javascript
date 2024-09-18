const details = {
  name: "lalu yadav",
  age: 21,
  gender: "male",
  hobbies: "cricket",

  subjects: {
    maths: 78,
    english: 67,
    history: 89,
    biology: 77,
    science: 99,
  },

  address: {
    state: "rajasthan",
    city: "pali",
    village: "dudore",
    pincode: 306001,
  },
};

// console.log(details.name);
// console.log(details.hobbies);
// console.log(details.subjects.history);
// console.log(details.address.village);

// console.log(details);

//  using for in loop in js

const student = {
  name: "lalu",
  age: 21,
  gender: "Male",
  matha: 45,
  hindi: 55,
  english: 60,
  science: 70,
};

// for (let key in student) {
// //   console.log(key);
//   console.log(key, "---", student[key]);
// }

for (let key in student) {
  if (key == "hindi") {
    break;
  }
  console.log(key, ":", student[key]);
}

