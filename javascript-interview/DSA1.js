function getUniqueValues(arr, key) {
  const values = arr.map((obj) => obj[key]);
  const unique = [...new Set(values)];
  return unique;
}

const users = [
  { name: "Alice", role: "admin" },
  { name: "Bob", role: "editor" },
  { name: "Charlie", role: "admin" },
  { name: "David", role: "viewer" },
];

console.log(getUniqueValues(users, "role"));
// Output: ["admin", "editor", "viewer"]
