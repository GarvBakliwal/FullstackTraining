// TASK 2

// If user input is giving a number greater than 0 then it should be printed = number is positive 
// And if the number is less than 0 then print = number is negative and if the number is equal to 0 then print = number is zero

const ps = require("prompt-sync");
const prompt = ps();
let number = prompt("Enter Number : ");
if (number=>0) {
    console.log("Number is positive");
} else {
    console.log("Number is negative");
}

// If user age is greater than  18 then print = you are eligible for vote
// If user age is less than 18  then print = you are not eligible for vote
// Otherwise print invalid input


let age = Number(prompt("Enter your Age : "));

if (age < 18) {
    console.log("You are not eligible for vote");
} 
else if (age >= 18) {
    console.log("You are eligible for vote");
}
else {
    console.log("Invalid input");
}

