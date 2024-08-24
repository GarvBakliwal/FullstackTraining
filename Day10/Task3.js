// TASK 3
// I have to take input from the user. If the remainder is zero after giving the user number Modules 2 then print = number is even otherwise Print number is odd
const ps = require("prompt-sync");
const prompt = ps();

let num = Number(prompt("Enter : "));

if (num%2) {
    console.log("Number is Odd");
}
else {
    console.log("Number is Even");
}
