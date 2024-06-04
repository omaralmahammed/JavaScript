/**
 * 1. Write a JavaScript program that returns rate as text
 * less than 50 return ==> Fail
 * equal or between 50 and 59 ===> E
 * equal or between 60 and 69 ===> D
 * equal or between 70 and 79 ===> C
 * equal or between 80 and 89 ===> B
 * equal or between 90 and 100 ===> A
 *
 * @format
 */
i = 59;
if (i >= 90) {
  console.log("A");
} else if (i >= 80) {
  console.log("B");
} else if (i >= 70) {
  console.log("C");
} else if (i >= 60) {
  console.log("D");
} else if (i >= 50) {
  console.log("E");
} else {
  console.log("Fail");
}
