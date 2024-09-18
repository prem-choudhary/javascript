// for (let i = 1; i <= 2; i++) {
//   for (let j = 1; j <= i; j++) {
//     console.log("Hello");
//   }
// //   console.log();
// }

// for (let i = 1; i <= 2; i++) {
//   for (let j = 1; j <= 4; j++) {
//     console.log("Hello ");
//   }
//   console.log("****** ");
// }

//  Print the below pattern

// for (let i = 1; i <= 5; i++) {
//   var bag = "";
//   for (let j = 1; j <= i; j++) {
//     bag = bag + j + " ";
//   }
//   console.log(bag);
// }
console.log(" - ------------- 1 -----------------")
for (let i = 5; i >= 1; i--) {
  let bag = "";
  for (let j = 1; j <= i; j++) {
    bag = bag + "* ";
  }
  console.log(bag);
  // console.log(typeof bag);
}

for (let i = 1; i <= 5; i++) {
  let bag = "";
  for (let j = 1; j <= 5; j++) {
    bag = bag + " " + "Hey";
  }
  console.log(bag);
}
console.log(" - ------------- 2 -----------------")

//  father exptcting 5 set
// 1 set 10 round
// assiment


for (let father = 1; father <= 5; father++) {
  console.log("set ... <=", father);
  console.log("--------------- set start ----------------------");
  for (let son = 1; son <= 10; son++) {
    console.log("Son has completed round", son);
  }
  console.log("----------set end ---------------");
}

console.log("+++++++++3+++++++++++++");

//   tree plantation each row 10 tree
for (let father = 1; father <= 10; father++) {
  let tree = "";
  // console.log(father);
  console.log(" tree 🌳 plantation ", father);
  for (let son = 1; son <= 10; son++) {
    tree = tree + " 🌳 " + son;
  }
  console.log(" field", father, tree);
}

console.log("=========== 4 ==========");

//

for (let father = 1; father <= 10; father++) {
  let tree = "";
  for (let son = 1; son <= father; son++) {
    // tree = tree + " 🌳 " ;
    tree = tree + son + " ";
  }
  console.log(tree, father);
}

console.log(" - ------------- 5 -----------------")
//

for (let father = 10; father >= 1; father--) {
  let tree = "";
  for (let son = 1; son <= father; son++) {
    // tree = tree + " 🌳 " ;
    tree = tree + "🌳 ";
  }
  console.log(tree, father);
}
console.log(" - ------------- 6 -----------------")

//  printcdicrement star ( ***** )

for (let i = 5; i >= 1; i--) {
  let count = "";
  for (let j = 1; j <= i; j++) {
    count = count + j + " ";
  }
  console.log(count);
}

//  pyramid shap
console.log("⛰⛰⛰⛰⛰⛰⛰⛰⛰⛰⛰ 7 ⛰⛰⛰⛰⛰⛰⛰⛰⛰⛰");

for (let father = 1; father <= 5; father++) {
  let tree = "";
  for (let son = 1; son <= father; son++) {
    // tree = tree + " 🌳 " ;
    tree = tree + son + " ";
  }
  console.log(tree, father);
}

for (let i = 4; i >= 1; i--) {
  let count = "";
  for (let j = 1; j <= i; j++) {
    count = count + j + " ";
  }
  console.log(count, i);
}
console.log(" - ------------- 8 -----------------")

// console.log("⛰ ⛰ ⛰ ⛰ ⛰ ⛰ ⛰  ⛰ ")

for (let i = 1; i <= 5; i++) {
  let bag = "";
  for (let j = 1; j <= 5; j++) {
    bag = bag + j + " ";
  }
  console.log(bag);
}
console.log(" - ------------- 9 -----------------")


let O = 1;
while (O <= 10) {
  son = 1;
  let bag = "";
  while (son <= 10) {
    bag = bag + "* ";
    son++;
  }
  console.log(bag);
  O++;
}

//  what is i value and j value
console.log(" - ------------- 10 -----------------")


for (let i = 1; i <= 10; i++) {
  console.log("------Loop Is Start ------");
  for (let j = 1; j <= 10; j++) {
    if (j > i) {
      continue; // cant't change
      // break
    }

    console.log("i is ", i, "j is ", j);
  }
  console.log("------ Loop is end  ------\n");
}

console.log(" - ------------- 11 -----------------")


for (let i = 1; i <= 5; i++) {
  let bag = "";
  for (let j = 1; j <= i; j++) {
    bag = bag + "*";
  }
  console.log(bag);
  let bag1 = "";
  for (let p = 1; p <= i; p++) {
    bag1 = bag1 + "$";
  }

  console.log(bag1);
}
console.log(" - ------------- 12-----------------")

/* month is change when month days is over
  month is fan = day is 31
  month is fab = day is 28
  .
  . 
  .
  .
  .
  .
  month is dec = day is 31
  year 2024 to fab ra 28 day 
  */
// for (let month = 1; month <= 12; month++) {
//   let days = 31;
//   if (month == 2) {
//     days = 28;
//   } else if (month == 4 || month == 6 || month == 9 || month == 11) {
//     days = 30;
//   }
//   switch (month) {
//     case 1:
//       console.log("fan");
//       break;
//     case 2:
//       console.log("fab");
//       break;
//     case 3:
//       console.log("march");
//       break;
//     case 4:
//       console.log("ap");
//       break;
//     case 5:
//       console.log("may");
//       break;
//     case 6:
//       console.log("june");
//       break;
//     case 7:
//       console.log("jul");
//       break;
//     case 8:
//       console.log("ags");
//       break;
//     case 9:
//       console.log("sep");
//       break;
//     case 10:
//       console.log("oct");
//       break;
//     case 11:
//       console.log("nov");
//       break;
//     case 12:
//       console.log("dec");
//       break;

//     default:
//       break;
//   }
//   for (let day = 1; day <= days; day++) {
//     console.log("month is =", month, " days is = ", day);
//     // console.log(" -------------");
//     // console.log("day is =", day, " month is = ", month);
//   }
//   console.log(" -------------");
// }

//  print Box pattern

// for (let father = 1; father <= 10; father++) {
//   let bag = "";
//   for (let son = 1; son <= 10; son++) {
//     if (father == 1 || father == 10) {
//       bag = bag + "+";
//     } else {
//       if (son == 1 || son == 10) {
//         bag = bag + "+";
//       } else {
//         bag = bag + " ";
//       }
//     }
//     bag = bag + " ";
//   }
//   console.log(bag);
// }

for(let O=1; O<=5; O++)
  {
    var bag = "";
    for(var son=1; son<=10; son++)
    {
      bag = bag + " *";
    }
    console.log("Field",O,bag);
  }
