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
for (month = 1; month <= 12; month++) {
  var month_days;
  var month;

  switch (month) {
    case 1:
      console.log("January");
      break;
    case 2:
      console.log("February");
      break;
    case 3:
      console.log("March");
      break;
    case 4:
      console.log("April");
      break;
    case 5:
      console.log("May");
      break;
    case 6:
      console.log("June");
      break;
    case 7:
      console.log("July");
      break;
    case 8:
      console.log("August");
      break;
    case 9:
      console.log("September");
      break;
    case 10:
      console.log("October");
      break;
    case 11:
      console.log("November");
      break;
    case 12:
      console.log("December");
      break;
  }

  if (month == 2) {
    month_days = 28;
  } else if (month == 4 || month == 6 || month == 9 || month == 11) {
    month_days = 30;
  } else {
    month_days = 31;
  }

  for (j = 1; j <= month_days; j++) {
    console.log(j, "-", month);
  }
  console.log("\n ");
}

//  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
for (var i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(i + " FizzBuzz");
  } else if (i % 3 === 0) {
    console.log(i + " Fizz");
  } else if (i % 5 === 0) {
    console.log(i + " Buzz");

  } else {
    console.log(i);
  }
}



