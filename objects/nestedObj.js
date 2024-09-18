const data = {
  name: "Prem sirvi",
  age: 22,
  gender: "male",
  address: {
    state: "Rajasthan",
    city: "Pali",
    pinCode: 36001,
  },
};

// console.log(data.name);
// console.log(data.gender);
// console.log(data.age);
// console.log(data.address); // full address print
// console.log(data.address.pinCode);

//  b. notation
console.log(data);
console.log(data["address"]["state"]);
