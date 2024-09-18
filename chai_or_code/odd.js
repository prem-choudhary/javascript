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


  