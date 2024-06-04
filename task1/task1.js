/** @format */

// Question 1 // create variable Calculate the value of zakat

let x = 250;
let zakat = x * 0.025;
console.log(zakat);

// Question 2 // Correct the syntax error

// [ 1,7  9  45, ] //the false array
console.log([1, 7, 9, 45]);
//add comma between the elements and delete the comma after 45

// ["Str" "alex","moh"  // the false array
console.log(["Str", "alex", "moh"]);
//add comma after str and add left square bracket in the end of array.

// 'the','fox' 'over' lazy, 'dog',  ]
console.log(["the", "fox", "over", "lazy", "dog"]);
//add right square bracket in the start of the array, add comma after "fox", add another
// comma after"over", convert lazy to string by add  and delete the comma in the end after "dog"

// Question 3 // What the index of "Banana","Tomato"?

var fruits = ["Tomato", "Banana", "Watermelon"];

console.log(fruits.indexOf("Banana")); // the index of Banana is 1
console.log(fruits.indexOf("Tomato")); // the index of Tomato is 0

//Question 4 // Create an array represents your:

//1- Favorite Food (2)

let food = ["Banana", "Kiwi"];
console.log(food);

//2- Favorite Sport (3)

const sport = ["football", "basketball", "MMA"];
console.log(sport);

//3- Favorite Movie (2)
let movies = ["The pianist", "Shutter Island"];
console.log(movies);

//Question 5 // Create a Variable to return the first element in an array

let data = ["Omar", "Almahammed", "26", "300"];
console.log(data[0]);

//Question 6 // Create a Variable to return the lastOfArray element in an array

data = ["Omar", "Almahammed", "26", "300"];
console.log(data[data.length - 1]);

//Question 7 // Using console make this array to be like this one (push, unshift, shift, pop), [1,3,4,6,8,9,10].

var array = [0, 5, 7, 9];

array.push(10);
array.shift();
array.shift();
array.shift();
array.unshift(1, 3, 4, 6, 8);
console.log(array);

//Question 8 // Using the console try to figure out what the thing thats (push, unshift, shift, pop) return to you.

var array2 = [5, 9, -7, 3.5];

array2.push(9); //We use push to add a spicific element to the end of array.
console.log(array2);

array2.unshift(-4); // We use unshift to add a spicific element to the beginning of array.
console.log(array2);

array2.shift(); // We use shift to remove the first element in array.
console.log(array2);

array2.pop(); // We use pop to remove the last element in array
console.log(array2);

//Question 9 // Write a JavaScript program to sort the items of an array.

var arr1 = [-3, 8, 7, 6, 5, -4, 3, 2, 1];

arr1.sort((a, b) => a - b);
console.log(arr1);

////////////////////////////////////////////////////////////////

// var sortedarr1 = "";
// for (let i = 0; i<arr1.length ; i++){
//     for (let j = i +1; j <arr1.length; j++){
//         if (arr1[j] < arr1[i] ){
//             const temp = arr1[i];
//             arr1[i] = arr1[j];
//             arr1[j] = temp;
//         }
//     }
//     sortedarr1 += arr1[i] + ", ";
// }

// console.log(sortedarr1);
