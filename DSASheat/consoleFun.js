//  This all are a javascript Function to print some value to terminal
console.log("Hello"); // Hello
console.warn("Hello from JavaScript");
console.error("failed to fatching to data from to API");
console.info("this is information ");
const arr = [
  { name: "prem", age: 20, gander: "male" },
  { name: "Aarti", age: 18, gander: "female" },
];
console.table(arr);

console.time("API Fetch ");
setTimeout(() => {
  console.timeEnd("API Fetch ");
}, 2000);

// alert("Critical error occurred! ");

console.group("User Details 口");
console.log("Name: Alice");
console.log("Age: 25");
console.log("Role: Admin");
console.groupEnd();

//  const element = document.querySelector("#app");
//  console.dir(element);
