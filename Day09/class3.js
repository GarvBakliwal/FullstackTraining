// NOTE ----------OBJECTS----------
//  KEY : VALUE
// NOTE this keyword in the case of the object it always point to the object in which it is used


// NOTE  --Remaining arrays methods ;
// const arr = [1, 2, 3, 4, 5, 6];
// console.log(arr);

// SLICE (startIndex,endIndex) to extract a part of array ;
// NOTE always get number of elements = lastIndex - startIndex

// let slicedOutput = arr.slice(1,4);
// console.log(slicedOutput);
// slicedOutput = arr.slice(1,4);
// console.log(slicedOutput);
// slicedOutput = arr.slice(-1);
// console.log(slicedOutput);
// console.log(arr);

// SPLICE(index,deleteCount,newElement) add,remove elements ;
// NOTE always modify the original array
// const splicedOutput = arr.splice(2,2,7);
// console.log(splicedOutput);
// console.log(arr);

// NOTE - forEach(HIGHER ORDER METHOD)
// NOTE callback function
// NOTE the method which accepts a callback function is called a higher order method
// NOTE arrow()=>{};
// NOTE function(){};
// const forEachOutput = arr.forEach((element) => {
//     console.log(element * 2);
// });
// console.log(forEachOutput);

// MAP (HIGHER ORDER METHOD)
// NOTE used to perform some transformation on the array always accept a callback and always return a new array which is the result of transformation we applied in the callback ;
// const mappedOutput = arr.map((el) => {
//     return el * 3;
// })
// console.log(mappedOutput);

// NOTE FILTER (HIGHER ORDER METHOD)
// const filterOutput = arr.filter((element)=>{
//     return element>2;
// })
// console.log(filterOutput);
// console.log(arr);

// NOTE FIND METHOD (HIGHER ORDER METHOD)
// returns first element which met the condition
// const findOutput  = arr.find((el)=>{
//     return el>3;
// })
// console.log(findOutput);

// NOTE REVERSE

// NOTE SORT 
// const sortedOutput = arr.sort((a,b)=>{
//     return b-a;
// })
// console.log(sortedOutput);

// EVERY (HIGHER ORDER METHOD)
// const everyOutput = arr.every((el)=>{
//     return el>2;
// })
// console.log(everyOutput);

// REDUCE METHOD ;
// used to reduce the array in to a single value ;

// const reduceOutput = arr.reduce((accumulator,el)=>{
//     return accumulator+el;
// },0)
// console.log(reduceOutput);
// const items = [{
//     name: 'tshirt',quantity : 2, price : 500
// },{
//     name: 'mobile',quantity : 2, price : 50000
// }]
// const reducedPrice = items.reduce((accumulator,item)=>{
//     return accumulator+(item.quantity *item.price);
// },0)
// console.log(reducedPrice);

// const country = {
//     name: 'India',
//     capital: 'New Delhi'
// }

// Object.keys()
// const objectKeys = Object.keys(country);
// console.log(objectKeys);
// objectKeys.forEach((key)=>{
//     console.log(`${key} => ${country[key]}`);
// })
// SHORT-HAND
// Object.keys(country).forEach((key)=>{
//     console.log(`${key} => ${country[key]}`);
// })

// Object.values()
// const objectValues = Object.values(country);
// console.log(objectValues);

// Object.assign(target , source);
// const country2 = {
//     language : 'hindi'
// }

// Object.assign(country,country2);
// console.log(country);

// NOTE Object.freeze
// NOTE when you use object.freeze new properties cannot be added and existing properties cannot be modified ;
// Object.freeze(country);
// country.name = 'us';
// console.log(country);

// Destructuring ES6 FEATURE ;
const pro = ['tv', 'mobile', 'shirt'];
// const tv = pro[0];                   BETA MALE MOVE 
// console.log(tv);
const [tv, mobile, shirt] = pro;         // CHAD
console.log(tv, mobile, shirt);
