//  check is number is even or odd
//  1st way

function checkEvenOdd(n) {
  if (n % 2 === 0) {
    console.log(n, "number is Even");
  } else {
    console.log(n, "Number is odd ");
  }
}

checkEvenOdd(12);
checkEvenOdd(11);
checkEvenOdd(17);
checkEvenOdd(29);

//  second way is
console.log("--------------");

function isOdd(x) {
  if (x % 2 == 0) {
    return "even";
  } else {
    return "odd";
  }
}

var res = isOdd(16);
if (res == "even") {
  console.log(res, "number is even ");
} else {
  console.log(res, "Number is odd ");
}
console.log("-----------###########");

function isEven(x) {
  if (x % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

var res = isEven(16);
if (res == true) {
  console.log(res, "number is even ");
} else {
  console.log(res, "Number is odd ");
}
