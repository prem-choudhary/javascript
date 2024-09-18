const str = "Prem Choudhary";
console.log(str[1]);
console.log(str.length);
console.log("spece is print", str[4]);
console.log("************************");
console.log(str);
for (let i = 0; i < str.length; i++) {
  console.log(str[i]);
}

//  we cerate a password is equal to 6 length

const password = "Khoon ka badala";
if (password.length > 6) {
  console.log("sing Up Successfull");
} else {
  console.log(
    "Your password is to short plz password char is great than or equal to 6  length"
  );
}

const collageName = "shree vivekanad collage.Jodhapur";
// for(let i = 0; i<collageName.length; i++){
// }
console.log(collageName.length);

console.log("- - - - - - - - -");

let s = "I am Prem Chaudhari";
let stringlength = s.length;
let space = 0;
if (stringlength > 1) {
  for (let i = 0; i < stringlength; i++) {
    if (s[i] == " ") {
      space++;
    }
  }
  words = space + 1;
  console.log(words ,"words is here in s variables ");
} else {
  console.log("words is 0 ");
}
console.log("!!!!!!!!!!!!1")

//conver lowercase string into uppercase string

let name = "i am prem choudhary ";
let lower = "abcdefghijklmnopqrstuvwxyz";
let upper = "ABCDEFGHIJLLMNOPQRSTUVWXYZ";
bag = "";
for (let i = 0; i < name.length; i++) {
  let char = name[i];
  if (char == " ") {
    bag = bag + " ";
  }
  for (let j = 0; j <= lower.length; j++) {
    if (char == lower[j]) {
      bag = bag + upper[j];
    }
  }
}
console.log(bag);

let str1 = ["Prem", "Bharta", "Kailash"];
let count = 0;

for (let i = 0; i < str1.length; i++) {
  var x = str1[i];
  for (let j = 0; j < x.length; j++) {
    count++;
  }
}
console.log(count);

const school = "government Senior Secondary School dudor. marwar junction";
console.log(school);
console.log(school.length);

for (let i = 0; i < school.length; i++) {
  console.log(school[i]);
}
