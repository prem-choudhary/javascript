// [a,b,c,d]
// [E ,F, G, H]
// [I , J , K , L ]

// output is like this 
/*
[d,c,b,a]
[h.g.f.e]
[l.k.j.i]



*/


const arr = [
    ["A","B","C","D"],
    ["E","F","G","H"],
    ["I","J","K","L"],
    ["M","N","O","P"],
    ["Q","R","S","T"],
    ["U","V","W","X"]
]

const rows = arr.length
const cols = arr[0].length

for (let i = 0; i <=rows-1; i++) {
  let output = "";
  for (let j = cols-1; j >= 0; j--)  {
    output = output + arr[i][j] + " ";
  }
  console.log(output);
}
