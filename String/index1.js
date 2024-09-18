const str = "Masai school";
for (let i = 0; i < str.length; i++) {
  console.log(str[i]);
}

console.log("^^^^____^^^^____");
//  cerate a array and array is simipler to strings
const arr = ["M", "a", "s", "a", "i", "S", "c", "h", "o", "o", "l"];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

//  array and String difference
//  this is array
let num = ["p", "r", "e", "m"];
num[0] = "A";
console.log(num);

//  this is string
let nickName = "Pruu";
nickName[0] = "A";
console.log(nickName);// no chenge

// how to update the string ???
let drum = "Masai";
let drum1 = [];
for (let i = 0; i < drum.length; i++) {
  let x = drum[i];
  console.log(x);
  drum1.push(x);
}
drum1[2] = "T";
console.log(drum1);

let bag = "";
for (let i = 0; i < drum1.length; i++) {
  bag = bag + drum1[i];
}
console.log(bag);

let web = "government Senior Secondary School dudor. marwar junction";
let web1 = [];

for (let i = 0; i < web.length; i++) {
  let a = web[i];
  console.log(a);
  web1.push(a);
}
web1[0] = "@";
console.log(web1);

let jhola = "";
for (let i = 0; i < web1.length; i++) {
  jhola = jhola + web1[i];
}
console.log(jhola);



