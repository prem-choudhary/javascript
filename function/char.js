function checkSmallCase(char) {
  const lower = "abcdefghijklmnopqsrtuvwxyz";
  for (let i = 0; i < lower.length; i++) {
    if (char == lower[i]) {
      return true;
    }

    return false;
  }
}

const x = checkSmallCase("a");
  if (x === true) {
    3;
    console.log("Small Case");
  } else {
  console.log("Upper Case");
}
