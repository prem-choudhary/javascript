const str = "masai";
let details = {};
for (let i = 0; i < str.length; i++) {
  let char = str[i];

  if (details[char] == undefined) {
    details[char] = 1;
  } else {
    var prev = details[char];
    details[char] = prev + 1;
  }
}
console.log(details);
