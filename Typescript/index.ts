// NOTE Array
// let arr = ['garv','bakliwal'];
// arr.push(3); //ERROR 
// arr.push('abc');

// let mixedArray = ['garv',3];
// mixedArray.push('bakliwal',7);
// mixedArray.push(true);      //ERROR 

// NOTE Object 
// let myDetails = {
//     name: "Garv",
//     age: 20,
// }
// myDetails.address = 'rajasthan' // Error

// myDetails.age='21'; 

// Explicit Types 
// let productName: string;
// productName = "Samsung";


// NOTE Union Types

// let productCount : string|number;
// productCount = "ten";
// productCount=10;
// console.log(productCount);
// productCount=true; //Error

// NOTE 
// let companies : string[]=['meta','amazon',2] //error

// Union Types in Arrays 
// let mixedCompanies : (string|number)[]=['one',1,true] //error

// Object 
// let car : {
//     brand : string,
//     modelYear:number,
//     color:string
// }
// car = {
//     brand:'Hyundai',
//     modelYear:2023,
//     color:'red',
// }

// // NOTE Functions 
// // First Variation
// let fullName :Function;
// fullName = (firstName : string,lastName:string):string=>{
//     return firstName+lastName
// }

// function signatures VARIATION 2
// let add : (a:number,b:number)=>number;

//NOTE Union Types in Functions
// let productCount : (a:string,b:string|number)=>void

// productCount = (a,b)=>{
//     console.log(`Product Name : ${a} \nAvailable in Stock : ${b}`);
// }

// productCount('Shirt',15);


// TYPE Aliases
// we can create a variable for storing 
// type stringBol = string|boolean;
// let isJsFun : stringBol;
// isJsFun='Garv';
// isJsFun=true;
// isJsFun=1;      //Error


// NOTE INTERFACE
// interface cartItem {
//     cartItems:string[],
//     totalPrice:number,
//     totalQuantity:number
// }

// const initialState : cartItem = {
//     cartItems:['shirt'],
//     totalPrice:1000,
//     totalQuantity:10
// }
// console.log(initialState);