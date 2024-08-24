// TASK 4
// If 3 inputs have to be taken from the user.
// Number 1 = first number
// Number 2 = second number.
// Operator =( +,- ,*, /)
// If operator + is  number 1 + number 2 
// If operator - is  number1-number2
// If operator * is  then Number1*Number2
// If operator / is 
//  number 1 / number2
// Otherwise print invalid input

var prompt = require("prompt-sync")();
let num1 = Number(prompt("Enter No 1 : "))
let num2 = Number(prompt("Enter No 2 : "));
let operator = prompt("Operator = ");

switch (operator) {
    case '+':
        console.log(num1+num2);
        break;
    case '-':
        console.log(num1-num2);
        break;
    case '*':
        console.log(num1*num2);
        break;
    case '/':
        console.log(num1/num2);
        break;
    default:
        console.log("Invalid Input");
        break;
}