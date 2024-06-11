/** @format */

//   1. Write a JavaScript program that accept two integers and
//   display the larger.Go to the editor

function bigger(a, b) {
  if (a > b) {
    result = `the number ${a} is bigger than the number ${b}`;
    return result;
  } else {
    result = `the number ${b} is bigger than the number ${a}`;
    return result;
  }
}

console.log(bigger(-1, 8));

////////////////////////////////////////////////////////////////////////////////////////////////////////

/* 2. Write a JavaScript conditional statement to find the sign
 of product of three numbers. Display an alert box with the 
 specified sign. Go to the editor 
Sample numbers : 3, -7, 2 
Output : The sign is - */

num1 = [3, -3, 7];

// for (let i = 0; i < 3; i++) {
//   if (num1[i] > 0) {
//     alert(`the sign of this number is +`);
//   } else {
//     alert(`the sign of this number is -`);
//   }
// }
////////////////////////////////////////////////////////////////////////////////////////////////////////

/* 3. Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result. Go to the editor 
Sample numbers : 0, -1, 4 
Output : 4, 0, -1 */

arr1 = [2, -5, 9];

// let sortedarr1 = "";
// for (let i = 0; i < arr1.length; i++) {
//   for (let j = i + 1; j < arr1.length; j++) {
//     if (arr1[j] > arr1[i]) {
//       const temp = arr1[i];
//       arr1[i] = arr1[j];
//       arr1[j] = temp;
//     }
//   }
//   sortedarr1 += arr1[i] + ", ";
// }

// console.log(alert(sortedarr1));

////////////////////////////////////////////////////////////////////////////////////////////////////////

/*4. Write a JavaScript conditional statement to find the largest of five numbers. 
Display an alert box to show the result. Go to the editor 
Sample numbers : -5, -2, -6, 0, -1 
Output : 0 */

let arr4 = [-5, 6, -6, 0, -1];
let maxx = arr4[0];
for (let i = 0; i < arr4.length; i++) {
  if (maxx < arr4[i]) {
    maxx = arr4[i];
  }
}
alert(maxx);

////////////////////////////////////////////////////////////////////////////////////////////////////////

/* 5.Write the if statement to display "Hello World" if x is greater than y, otherwise alert "Goodbye".*/

// x = 3;
// y = 5;
// if (x > y) {
//   alert("Hello World");
// } else {
//   alert("Goodbye");
// }
