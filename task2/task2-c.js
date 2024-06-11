/** @format */

// 1. Write a JS code to print numbers from 1 to 10

for (let i = 1; i <= 10; i++) {
  console.log(i);
}
////////////////////////////////////////////////////////////////////////////////////////////////////////

/*2. Write a JS code to print Even numbers in arr :
   var arr = [13,23,12,45,22,48,66,100]
*/

let arr = [13, 23, 12, 45, 22, 48, 66, 100];

let even = [];
for (let num of arr) {
  if (num % 2 == 0) {
    even.push(num);
  }
}
console.log(even);
////////////////////////////////////////////////////////////////////////////////////////////////////////

/*3. Write a JS code to print a pattern using for loop
 */

let arr2 = [];
for (let i = 1; i <= 8; i++) {
  arr2.push(i);
  console.log(arr2);
}
////////////////////////////////////////////////////////////////////////////////////////////////////////

/* 
 Check if a string contains the letter “y”. Print “yes” if it does and “no” if it does not.
*/

let x = "don’t know why";

if (x.includes("k")) {
  console.log("yes");
} else {
  console.log("no");
}
