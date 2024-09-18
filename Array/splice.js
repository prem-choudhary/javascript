var element = ["cat", "dog", "rat", "lion"];
console.log(element.splice(0));

const str = ["prem", "kailash", "Bharat", "Rakesh", "Ravi", "mukesh", "Pawan"];

var res = str.slice(1, 3);
console.log("res value is", res);

console.log(" original string is ", str); // o/p >>  ["prem", "kailash", "Bharat", "Rakesh", "Ravi", "mukesh", "Pawan"];
//  asli arr is not chenge
//  but v can use splice   function

var fruitsName = ["Apple", "Kivi", "Banana", "Grapes"];
var res = fruitsName.splice(2);
console.log("result is ", res);
console.log("original is ", fruitsName); // use splice methode

//  toUpperCase function in string

var sentence = "i feel bad today and my body is week know";
console.log(sentence.toUpperCase());

//  toLowerCase function in string

var sentenceInLower = "I FEEL VARY WELL FOR TODAYS AND HAPPY ALSO";
console.log(sentenceInLower.toLowerCase());

// indexOf

var paragrap = "what happend in this case and what is the name of string ";

var searchElement = "name";

var indexOfFrist = paragrap.indexOf(searchElement);
console.log(indexOfFrist);

var bread = "apple samsang mi oppo vivo mtrola macBook";
var search = "oppo";
var lastIndexOf = bread.lastIndexOf(search);
console.log(lastIndexOf);

//  split methode in js < string >

const strs = "The quick brown fox jumps over the lazy dog.";

const words = strs.split(" ");
console.log(words[3]);

const char = "prem chaudhary , monu , dosti , Kailash";
const chars = char.split(" ");
console.log(char[8]);

const names = "The quick brown fox   ";
const namesCopy = names.split(" ");
console.log(namesCopy);

const result = "The quick brown fox";
console.log(typeof namesCopy) // object 


