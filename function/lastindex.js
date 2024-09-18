const names = ["Prem", "Kailash", "Bharat", "Papa", "Mummy", "Kailash"];

function lastindex(names, comment, N) {
  var ans = 0;
  if (N == undefined) {
    var N = names.length;
  }
  //console.log(N);
  var count = N - 1;
  for (i = N - 1; i >= 0; i--) {
    if (names[i] == comment) {
      ans++;
      console.log(count);
      break;
    }

    count--;
  }
  if (ans == 0) {
    console.log(-1);
  }
}
//var comment=name[2];
lastindex(names, "Kailash", 7);
