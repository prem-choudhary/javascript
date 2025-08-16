function isPalindrome(str) {
  // Convert to lowercase and remove non-alphanumeric characters
  str = str.toLowerCase().replace(/[^a-z0-9]/g, "");

  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

// Example usage
console.log(isPalindrome("A man, a plan, a canal: Panama")); // Should output: true
console.log(isPalindrome("race a car")); // Should output: false
console.log("Prem")
