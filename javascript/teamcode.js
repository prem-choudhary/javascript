// create a function
// array persons of objects
// filter each person with age more then 40
// map each person return fullname in object,
// foreach to count person with age more then 50
// remove space from firstname, lastname, fullname
/*
person:{
    age:50
    firstName: "a",
    lastName: "b",
    fullname: "a b",
    job1:10
    job2:20

} 
    */

// const student = [{ fName: "prem" }, { lastName: "choudhary" }];
// // const cool = (fName , lastName)
// student.forEach((student) => {
//     const fullName = `${student.fName} ${student.lastName}`;
//     console.log(fullName);
//   });

const getFullName = (firstName = "", lastName = "") => {
  if (firstName && typeof firstName !== "string") {
    firstName = "";
  }
  if (lastName && typeof lastName !== "string") {
    lastName = "";
  }
  let add = `${firstName?.trim() ?? "unknown"} ${
    lastName?.trim() ?? "unknown"
  }`;
  console.log(add);
  return add;
};

const filterPersons = (persons=[], age) =>
  persons.filter(({ age: a }) => a >= age).map((person) => {
    const nm = getFullName(person.firstName,person.lastName)
    return {
        ...person,
        fullName: nm,
    }
  })

let persons = [
  { firstName: "prem ", lastName: "chaudhary ", age: 22 },
  { firstName: " rahul", lastName: " chaudhary", age: 41 },
  { firstName: " mak", lastName: "chaudhary", age: 25 },
  { firstName: " papu", lastName: "chaudhary", age: 70 },
].map((person)=>{
    let firstName="";
    if (person.firstName && typeof person.firstName === "string") {
        firstName = person.firstName.trim();
      }
    let lastName="";
    if (person.lastName && typeof person.lastName === "string") {
        lastName = person.lastName.trim();
    }
    return {
        age: person.age,
        firstName: firstName,
        lastName: lastName,
    }
});

// const filterPersonBy40 = filterPersons(persons, 40);
const filterPersonBy25 = filterPersons(persons, 25);

// console.log(filterPersonBy40);
console.log(filterPersonBy25);

// const username = persons.filter((person) => {
//     const personAge = person.age;
//     return personAge > 40;
//   });

// const username = persons.filter(({ age: personAge }) => {
//   return personAge > 40;
// });
// console.log(Array.isArray(username) ? "Array" : "Object"); //  { firstName: "rahul", lastName: "chaudhary", age: 41 },
//{ firstName: "papu", lastName: "chaudhary", age: 70 },

// const users = [
//   { firstName: "prem", lastName: "chauddhary" },
//   { firstName: "rahul", lastName: "choadhary" },
//   { firstName: "mak", lastName: "choadhary" },
// ];

// const fullNames = users.map((add) => `${add.firstName} ${add.lastName}`);

// console.log(fullNames);

/*
spread
rest
destructuring : alias
*/

// spread
// const defaultArray = [1, 2, 3, 4];
// const a2 = [...defaultArray, 5, 6, 7];

// const obj1 = {
//   a: 1,
//   b: 2,
//   c: 3,
// };

// const obj2 ={
//     ...obj1,
//     d:4
// }

//rest

const func = (...p) => {
  // console.log(p.reduce((prev,cur, i)=>{
  //     return prev + cur;
  // }, 0))
};

func(1, 2, 3, 4, 5, 6, 7, 8);
