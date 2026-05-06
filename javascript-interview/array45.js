// // let l = [1, 2, 3, 4];
// // for (let v of l){
// //     l.pop()
// // }
// // console.log(l)




// //  arrow function and function declaration are different in terms of hoisting.
// // arrowFun()
// let arrowFun =() => {
//     console.log("Hello Arrow function")
// }
// arrowFun()
// fun() // it should be working because of function hoisting
// function fun(){
//     console.log("Hello function")
// }
// // output is Hello function


// var a = 10
// var a =20
// console.log(a) // 20

// let b = 10
// b = 10
// console.log(b) // SyntaxError: Identifier 'b' has already been declared
// const c  = 10

// {
//     var a = 45
// }
// console.log(a)
// {
//     let d = 10
// }
// // console.log(d)
const userInput = prompt("Enter a name:");
let revString = "";
for (let i = userInput.length - 1; i >= 0; i--) {
  revString += userInput[i];
}
console.log(revString);