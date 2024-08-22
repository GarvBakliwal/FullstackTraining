// Template String
// const firstName = "Garv"
// const lastName = "Bakliwal"
// const fullDeatails = `My name is ${firstName} ${lastName}`
// console.log(fullDeatails);

// ternary operator
// let age = 20
// const a = age > 18 ? 'You are Above 18' : 'You are Below 18';
// console.log(a);

// console.log(window);

// function declaration
// myDetails(firstName,lastName);
// function myDetails(firstName, lastName) {
// const fullDeatails = `My name is ${firstName} ${lastName}`
// console.log(fullDeatails);
// }

// function expression
// const sum = function (a, b) {
//     return a + b;
// }
// console.log(sum);


// arrow function
// single line arrow function
// const subs = (a,b) => b-a ;
// multi Line arrow function
// const multiply = (a,b) => {
//     return a*b;
// }

// USE STRICT MODE
// 'use strict'
// age = 20;
// console.log(age);

// TYPES OF CONSOLE 
// console.error("This is an Error");
// console.warn("this is an warning");
// console.time('timeStamp');
// console.log("Hello");
// console.timeEnd('timeStamp');

// NON PRIMITIVE DATATYPES
// const fruits = ['mango', 'papaya', 'grapes', 'guava', 'orange'];
// console.log(fruits[0]);
// console.log(fruits[fruits.length - 1]);

// PUSH METHOD
// REVIEW - ADD AN ELEMENT TO THE END OF THE ARRAY
// REVIEW - ALWAYS RETURNS THE LENGHT OF NEW ARRAY
// const pushOutput = fruits.push('Blueberry');
// console.log(pushOutput);
// console.log(fruits);

// POP METHOD
// REVIEW - REMOVES AN ELEMENT FROM THE END OF THE ARRAY
// REVIEW - ALWAYS RETURNS THE DELETED ELEMENT
// fruits.pop();
// console.log(fruits.pop());
// console.log(fruits);

//NOTE 3 UNSHIFT METHOD 
//REVIEW used to add element to the starting of the array
//REVIEW ALWAYS RETURNS THE LENGTH OF NEW ARRAY 
//REVIEW IT MUTATES THE ORIGINAL ARRAY

// const unshiftOutput = fruits.unshift('pomengranate') ;

// console.log(unshiftOutput);
// console.log(fruits);

//NOTE SHIFT METHOD 
//REVIEW - Remove the element from the start of the array
// const shiftOutput = fruits.shift();
// console.log(shiftOutput);
// console.log(fruits);

//NOTE INCLUDES METHOD 
//REVIEW - Check element is exists in an array , returns true or false ;
// const includesOutput = fruits.includes('blueberry');
// console.log(includesOutput)

//NOTE ----------- OBJECTS -----------
// key:value
// const myDetails = {
//     firstName : 'ritesh' ,
//     age : 2024-1997 ,
//     'two hundred' : 200

// }
// console.log(myDetails.two hunderd)
// console.log(myDetails['two hundred'])
// console.log(myDetails) ;
//update a keyvalue in the object
//NOTE DOT NOTATION 
// myDetails.firstName = 'abc' ;
// console.log(myDetails) ;

//NOTE to add a new property ;
// myDetails.friend = 'xyz';
// console.log(myDetails)


//DOT NOTATION ;
// console.log(myDetails.firstName);
// console.log(myDetails.friend);


//Bracket notation 
// let a ='age'
// console.log(myDetails['firstName'])
// console.log(myDetails[a])

// INPUT FROM TERMINAL 
// const ps = require("prompt-sync");
// const prompt = ps();
// let name = prompt("Enter : ");
// console.log(`hello ${name}`);