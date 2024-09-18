const details = {
  data: [],
  addStudent: function (name1, maths1, science1, english1) {
    const obj = {};
    obj.name = name1;
    obj.maths = maths1;
    obj.science = science1;
    obj.english = english1;

    this.data.push(obj);
    // console.log(this.data);
  },
};

details.addStudent("shubham", 10, 20, 30);
details.addStudent("Rohit", 30, 30, 30);
details.addStudent("leazy", 10, 20, 20);
console.log(details.data);
