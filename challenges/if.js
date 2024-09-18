// baseLine1 baseline2

let score = 101;
let grade1;  // grade1 
if (score >= 90 && score <= 100) {
  grade = "A";
} else if (score >= 70 && score < 90) {
  grade = "A1";
} else if (score >= 60 && score < 70) {
  grade = "B";
} else if (score >= 50 && score < 60) {
  grade = "B1";
} else if (score >= 0 && score < 50) {
  grade = "fail";
}
console.log("student grade is accoding to score", grade);

let mark = 112;
let grade;
if (mark >= 101 && mark <= 150) {
  grade = "check your exam copy again";
} else if (mark >= 90 && mark <= 100) {
  grade = " A";
} else if (mark >= 70 && mark <= 90) {
  grade = "A1";
} else if (mark >= 60 && mark <= 70) {
  grade = "B";
} else if (mark >= 33 && mark <= 60) {
  grade = "B1";
} else {
  grade = "fail";
}
console.log(grade);
