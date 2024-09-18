function modifyStr(str) {
  let bag = "";

    for (let i = 0; i < str.length; i++) {
        if (str[i] == " ") {
        bag = bag + "--";
        } else {
        bag = bag + str[i];
        }
    }

  console.log(bag);
}

modifyStr("Masai School");
