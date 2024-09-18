function callBhaiya() {
  var arr = ["Babuji", "Kaleen Bhaiya", "munna Bhaiya", "bablu bhaiya"];
  console.log(arr);
}
callBhaiya();

//  how to
console.log("\n");

function call(position) {
  if (position < 0 || position > 3) {
    return null;
  }
  var arr = ["Babuji", "Kaleen Bhaiya", "munna Bhaiya", "bablu bhaiya"];
  return arr[position];
}

var res = call(1);

if (res == null) {
  console.log("invalid Bhaiya ji value");
} else {
  console.log(res);
}
