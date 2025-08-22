function minInsertions(str) {
  const n = str.length;
  const dp = Array(n)
    .fill()
    .map(() => Array(n).fill(0));

  // Fill dp table for substrings of increasing length
  for (let len = 2; len <= n; len++) {
    for (let start = 0; start <= n - len; start++) {
      let end = start + len - 1;
      if (str[start] === str[end]) {
        dp[start][end] = dp[start + 1][end - 1];
      } else {
        dp[start][end] = Math.min(dp[start + 1][end], dp[start][end - 1]) + 1;
      }
    }
  }

  return dp[0][n - 1];
}


// Example usage
console.log(minInsertions("zzazz")); // Output: 0 (already a palindrome)
console.log(minInsertions("mbadm")); // Output: 2 (e.g., insert 'b' and 'd' to get "mbdadm")
