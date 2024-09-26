//  Write a JavaScript program to find the maximum number in an array. 



function findMaxNumber(arr){
    return Math.max(...arr)
}
console.log(findMaxNumber([1, 5, 48, 64, 55, 100, 4456, 111111]))


//  add two sum number

const addTwoNumber = (a ,b) => {
 return a + b
}
console.log(addTwoNumber(2 ,5))

// . Write a JavaScript function to check if a given string is a palindrome (reads the same forwards and backwards). 

// const isPalindrome  = (str) => {
//     return str === str.split("").reverse().join(""); 
// }
// const result = isPalindrome("aba")
// console.log(result)

//  Write a JavaScript program to reverse a given string.

// const reverseString = (str) => str.split(”).reverse().join(”); 


    const reverseString = (str) => str.split("").reverse().join(""); 

