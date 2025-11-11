var name = "Marwar";
console.log(name.length); // 6

console.log(name[0]);
console.log(name[1]);
console.log(name[2]);
console.log(name[3]);
console.log(name[4]);
console.log(name[5]);
console.log(name[6]);

//  problem number two
var schoolName = "Boys and girls School";
// console.log(schoolName.length)
if (schoolName.length < 10) {
  console.log("School name should be equal to 20 or more than");
} else {
  console.log("School name is right");
}

var longName = "Ram Radha krishna mohan pyare chalo mere sath khelo holi";
for (var i = 1; i < longName.length; i++) {
  console.log(longName[i]);
}

//  same thing with array

console.log("__^____^_____^____");
var someName = ["m", "a", "s", "a", "i"];
for (var i = 0; i < someName.length; i++) {
  console.log(someName[i]);
}

//  problem with string and array

var name1 = ["R", "a", "m"];
name1[0] = "P";
console.log(name1);
//  but if i change in string

var name2 = "Praveen";
name2[0] = "T";
console.log(name2);

//  how to update a string  so what can do

var drum1 = "Masai";
var drum2 = [];

for (var i = 0; i < drum1.length; i++) {
  var x = drum1[i];
  drum2.push(x);
}
// now i'm change a array

drum2[2] = "t"
console.log(drum2);

console.log("^^^^^^^_________---------______----")

//  but my output is not like i wont so what can i do

var jhola = "";

for (var i = 0; i < drum2.length; i++) {
  jhola = jhola + drum2[i];
}
console.log(jhola);
