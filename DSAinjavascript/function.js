function userMassage(user = "sam") {
  if (!user) {
    console.log("please enter a username");
    return;
  }
  return `${user} just logged in `;
}
// console.log(userMassage("Prem"))
// console.log(userMassage()); // undefined

//

function addItemPrice(val1, val2, ...item) {
  return item;
}

// console.log(addItemPrice(10, 20, 30, 40, 50));

const userName = {
  username: "Prem Sirvi",
  prices: 199,
};

function handleObject(anyObject) {
  console.log(`User is ${anyObject.username} price is ${anyObject.price}`);
}
// handleObject(userName)
// console.log(handleObject(userName));
handleObject({
  username: "Kailash",
  price: 299,
});
const MyValue = [110, 120, 130, 140, 150];
function returnValue (getArray){
    return getArray[1] // 120

}
console.log(returnValue(MyValue)) // 120 will printed 