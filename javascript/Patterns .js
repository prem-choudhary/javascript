/*
// Patterns

1
2 2
3 3 3
4 4 4 4
5 5 5 5 5
6 6 6 6 6 6
7 7 7 7 7 7 7
8 8 8 8 8 8 8 8
9 9 9 9 9 9 9 9 9
10 10 10 10 10 10 10 10 10 10 */

for (let i = 1; i <= 10; i++) {
  for (let j = 1; j <= i; j++) {
    document.write(i + " ");
  }
  document.write("<br>");
}
// Patterns

/*
1
1 2
1 2 3
1 2 3 4
1 2 3 4 5

*/

for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= i; j++) {
    document.write(j + " ");
  }
  document.write("<br>");
}

// Patterns


/*
1
2 3
4 5 6
7 8 9 10
*/


let count = 1;
for (let i = 1; i <= 4; i++) {
  for (let j = 1; j <= i; j++) {
    document.write(count + " ");
    count++;
  }
  document.write("<br>");
}
