const obj = {};
obj["name"] = "Akshay";
obj[42] = "Number key becomes string";
obj[{ a: 1 }] = "Object key? Actually '[object Object]'!";
console.log("Object: ", obj);

const map = new Map();
map.set("name", "Akshay");
map.set(42, "Number key stays number");
map.set({ a: 1 }, "Object as key works perfectly!");

console.log("Map: ", map);

console.log("Object length:", Object.keys(obj).length); // 3
console.log("Map size:", map.size); // 3

console.log(0.2 + 0.2 === 0.3);
