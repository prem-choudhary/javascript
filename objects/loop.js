// const details = {
//   name: "kaleen chaudhary",
//   age: 22,
//   haircolor: "dark black",
//   city: "Pali",
//   hobbies: ["making guns", "cricket"],
// };

// for (var res in details) {
//   //   console.log(key);
//   //   console.log(details[res]);
//   console.log(res, "----", details[res]);
// }

const details = {
  name: "kaleen chaudhary",
  age: 46,
  haircolor: "dark black",
  city: "Pali",
  hobbies: ["making guns", "cricket"],
};

for (let key in details) {
  if (details[key] == 45) {
    console.log(key, "--------", details[key]);
  }
  else{
    console.log(key, "------- " ,details[key])
  }
}
