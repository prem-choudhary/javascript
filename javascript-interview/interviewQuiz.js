// function isPalindrome(num) {
//   let original = num;
//   let reversed = 0;

//   for (let temp = num; temp > 0; temp = Math.floor(temp / 10)) {
//     let digit = temp % 10;
//     reversed = reversed * 10 + digit;
//   }

//   return original === reversed;
// }

// console.log(isPalindrome(121)); 
// console.log(isPalindrome(123)); 


const isPalindrome = (num) => {
  let original = num;
  let reversed = 0;

  for (let temp = num; temp > 0; temp = Math.floor(temp / 10)) {
    let digit = temp % 10;
    reversed = reversed * 10 + digit;
  }

  return original === reversed;
};

console.log(isPalindrome(121));  // true
console.log(isPalindrome(123));  // false
