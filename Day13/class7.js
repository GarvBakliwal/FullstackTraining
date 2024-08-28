// Asynchronous JS 
// console.log(window);
// console.log('Hello');

// setTimeout
// 
// setTimeout(()=>{
//     console.log("Garv Bakliwal");

// },2000);
// console.log('Hi');

// setInterval


// callbacks 
// function test(callback) {
//     setTimeout(() => {
//         const data = 'hello';
//         callback(data);
//     }, 3000)
// }
// function greet(data)
// {
//     console.log(data);
// }

// test((data) => {
//     console.log(data);
// });

// test = higher order function which accepts callback as a params
// greet = callback function which are passing in the parameter of higher order function


// function step1(callback){
//     setTimeout(()=>{
//         callback();
//         console.log('step 1 completed');
//     },1000)
// }
// function step2(callback){
//     setTimeout(() => {
//         callback();
//         console.log('step 2 completed');
//     }, 1000);
// }
// function step3(callback){
//     setTimeout(() => {
//         callback();
//         console.log('step 3 completed');
//     }, 1000);
// }
// function step4(){
//     setTimeout(() => {
//         console.log('step 4 completed');
//     }, 1000);
// }
// step1(()=>{
//     step2(()=>{
//         step3(()=>{
//             step4();
//         })
//     })
// });


// PROMISES
// it is a javascript object which is just like placeholder for the result of the asynchronous operations like fetching data from the api's

// promises are always return by functions

// creating promise
// const willYouPassInExam = new Promise((resolve,reject)=>{
//     // resolve('pass')
//     reject('fail')
// })
// console.log(willYouPassInExam);

// function fetchData(){
//     return new Promise((resolve,reject)=>{
//         const data = 'Hello we are learning Promises'
//         if (Math.random()>.5) {
//             resolve(data)
//         } else {
//             reject('this is rejected')
//         }
//     })
// }
// console.log(fetchData());

// in case promise is fulfullied we have to use .then() method 
// in case promise is rejected we have to use .catch() method 

// fetchData().then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// }).finally(()=>{
//     console.log('this will run always either your promise fulfilled or rejected');
// })

// 
// 

// console.log(fetch('https://restcountries.com/v3.1/all').then((res)=>{
//     // console.log(res.json());
//     return res.json()
// }).then((data)=>{
//     data.forEach(element => {
//         const h1 = document.createElement('h1');
//         const flags = document.createElement('img');
//         flags.src = element.flags.svg;
//         flags.style.height = "200px";
//         h1.innerText = element.name.common;
//         document.body.append(h1);
//         document.body.append(flags);

//     });
//  }));
// console.log(fetch('https://randomuser.me/api/').then((res)=>{
//     // console.log(res.json());
//     return res.json()
// }).then((data)=>{
//     data.forEach(element => {
//         const h1 = document.createElement('h1');
//         const flags = document.createElement('img');
//         flags.src = element.flags.svg;
//         flags.style.height = "200px";
//         h1.innerText = element.name;
//         document.body.append(h1);
//         document.body.append(flags);
//     });
// }));

// async await
// in case of async await we have to first create a function and make it asynchronous using "async" keyword after that we have to using "await" keyword on front of every function or methods which returns a promise to wait till the promise resolves.

// ERROR HANDLING in the async await can be done by using try and catch block…

// ERROR HANDLING in async await
// if we get any error in the try block code , try block directly throw the error to the catch block where we can handle it…

// async function fetchCountry() {
//     try {
//         const res = await fetch('https://restcountries.com/v3.1/all');

//         // throw new Error('Country not found');

//         console.log(res);
//         const data = await res.json()
//         console.log(data);

//     } catch (error) {
//         console.log(error);
//     }
// }
// fetchCountry();

// in case arrow function
// const fetchUser = async() => {

// }

// -----SCOPES------

// GLOBAL
// const a = 4;
// let b = 5;
// var c = 6;

// BLOCK
// if (true) {
//     const d = 7;
//     let e = 8;
//     var f = 9;
//     console.log(a, b, c);
// }
// console.log(f);
// NOTE Function
// function print() {
//     const firstName = 'Garv';
//     var lastName = 'Bakliwal';
//     let clgName = 'Techno';
// }
// print();
// console.log(firstName,lastName,clgName);

// lexical scoping and scope chaining ;

// function f1(){
//     const greet = 'Hello';
//     function f2(){
//         console.log(greet);
//         function f3(){
//             console.log(greet);
//         }
//         f3();
//     }
//     f2();
// }
// f1();


// closures
// closures remembers the variables 
// function greeting(){
//     const msg = 'hello how are you';
//     return function(){
//         console.log(msg);
//     }
// }
// const fn = greeting();
// fn();