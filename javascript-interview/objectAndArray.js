let student = {
  name: "Rahul",
  marks: [80, 75, 90],
  average: function () {
    let sum = this.marks.reduce((a, b) => a + b, 0);
    return sum / this.marks.length;
  },
};

console.log(`${student.name}'s Average: ${student.average()}`); 
