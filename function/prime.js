// problem : check number is prime or not
//  no use function

let number = 13;
let factors = 0;

for (let i = 0; i <= number; i++) {
  if (number % i == 0) {
    factors++;
  }
}
if (factors == 2) {
  console.log(number, "prime");
} else {
  console.log(number, "not Prime");
}

//  using function  1st way to print prime number

function isPrime(number) {
  let factors = 0;

  for (let i = 0; i <= number; i++) {
    if (number % i == 0) {
      factors++;
    }
  }
  if (factors == 2) {
    console.log(number, "prime");
  } else {
    console.log(number, "not Prime");
  }
}

isPrime(19);

//  second way to print prime number using return
console.log("^^^^^^^^^^^^^^^^^^6");

function isPrimes(number) {
  let factors = 0;

  for (let i = 0; i <= number; i++) {
    if (number % i == 0) {
      factors++;
    }
  }
  if (factors == 2) {
    return true;
  } else {
    return false;
  }
}

const x = isPrimes(14);
if (x == true) {
  console.log(x, "Prime ");
} else {
  console.log(x, "Not Priem");
}

//  print 2 to 100 and check number is prime or not

console.log("=================");

function Prime(number) {
  let factors = 0;

  for (let i = 0; i <= number; i++) {
    if (number % i == 0) {
      factors++;
    }
  }
  if (factors == 2) {
    console.log(number, "prime");
  } else {
    console.log(number, "not Prime");
  }
}

for (let i = 2; i <= 98; i++) {
  Prime(i);
}

//  3th way to print prime number
//  print all prime number
console.log("*********************");

function isCheckPrime(number) {
  let factors = 0;

  for (let i = 0; i <= number; i++) {
    if (number % i == 0) {
      factors++;
    }
  }
  if (factors == 2) {
    return true;
  } else {
    return false;
  }
}

for (let i = 2; i <= 98; i++) {
  const y = isCheckPrime(i);
  if (y == true) {
    console.log(i, "Prime ");
  }
}

//  print all not Prime number

function isCheckPrime(number) {
  let factors = 0;

  for (let i = 0; i <= number; i++) {
    if (number % i == 0) {
      factors++;
    }
  }
  if (factors == 2) {
    return true;
  } else {
    return false;
  }
}

for (let i = 2; i <= 98; i++) {
  const y = isCheckPrime(i);
  if (y == false) {
    console.log(i, " not Prime ");
  }
}
