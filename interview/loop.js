function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

// Example usage
console.log(reverseString("hello")); // Output: "olleh"
console.log(reverseString('function')) // Output:  noitcnuf
console.log(reverseString('merp')) // output : prem
