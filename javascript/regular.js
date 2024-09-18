// const regex = "";
// const regex =/ ([A-Z])/g;

// const text = "preM is Very vEry Nice very niCe bOy verY";
// console.log(text.replace(regex));

let idx = document.getElementById("id1");
let sp1 = document.getElementById("sp1");
console.log(idx);
console.log(idx.matches(".class"));
console.log(idx.matches(" .box"));
console.log(sp1.closest("#sp1"));
console.log(idx.contains(sp1));
console.log(sp1.contains(sp1));
console.log(sp1.contains(idx));
