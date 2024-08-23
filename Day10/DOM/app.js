// DOCUMENT OBJECT MODEL (DOM)
// console.log(document);

// SELECT THE ELEMENT
// document.getElementById
// const heading = document.getElementById('heading');
// console.log(heading);
// console.dir(heading);


// document.getElementsByTagName
// always returns htmlCollection which looks like an array but it is not an array
// const para = document.getElementsByTagName('p');
// console.log(para);
// console.log(para[0]);

// TASK - convert the html collection 'para' into array then loop it
// console.log([...para]);
// console.log([...para].forEach((el)=>{
//     console.log(el.innerText); 
// }));

// document.getElementsByClassName
const list = document.getElementsByClassName('special');
console.log(list);


// document.querySelector
// document.querySelectorAll
