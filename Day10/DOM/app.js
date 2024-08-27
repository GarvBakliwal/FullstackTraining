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
// const list = document.getElementsByClassName('special');
// console.log(list);


// document.querySelector
// const list2 = document.querySelector('.special');
// console.log(list2);


// document.querySelectorAll
// const list3 = document.querySelectorAll('.special');
// console.log(list3.forEach((Element)=>{
//     console.log(Element.innerHTML);
// }));

// HTML Collection RETURN by getElementByTagName and getElemenyByClassName AND NODELIST RETURN BY querySelectorAll method

// READING TEXT FROM ELEMENTS
// innerText textContent innerHTML properties available on element

// textContent 
// text content gives the text as it is without applying css or calculations
// console.log(heading.textContent);
// heading.textContent = 'dom';

// innertext always preverse the CSS
// heading.innerText = 'dom2';
// heading.innerHTML = `<span>Hello</span>`;
// console.log(document.body.textContent);
// console.log(document.body.innerText);

// const container = document.querySelector('#container');
// container.innerHTML = `<h2>Services</h2>`;


// reading the href and src attributes of the anchor and img 

// const a = document.querySelector('#address');
// console.log(a);
// a.href = "www.x.com";
// console.log(a);

// const img = document.querySelector('#bear-photo');
// img.src = '/Users/garv/Desktop/College/Programming/Web Development/CSS/pokeball.png';


// NOTE changing style using JS
// console.log(heading.style);
// heading.style.color = 'green';
// heading.style.fontSize = '30px';
// heading.style.textDecoration = 'underline';

// Changing attributes using JS
// const input = document.querySelector('#bear');
// input.setAttribute('placeholder','enter your name');

// console.log(input.getAttribute('placeholder'));


// Creating new elements using JS

// first you have to create a new element 
// const h1 = document.createElement('h1');
// console.log(h1);
// second you have to add content to it 
// h1.innerText = 'GARV';
// third you have to decide where to place it
// container.append(h1);

// EVENTS
// const btn = document.querySelector('#btn');

// btn.addEventListener('click',()=>{
//     const p = document.createElement('p');
//     p.innerText= `Salaam Garvit Bhaijan`;
//     console.log(p);
//     document.body.prepend(p);
    // document.body.append(p);
// })

// APPEND add elements to the last of the body
// PREPEND add elements to the beginning of the body

// document.addEventListener('keydown',(event)=>{
//         // console.log(event);
//     if (event.key==='1') {
//         document.body.style.backgroundColor='blue';
//     }
//     else if(event.key==='2'){
//         document.body.style.backgroundColor='red';
//     }
//     else if(event.key==='3'){
//         document.body.style.backgroundColor='green';
//     }
// })


// submit event
const form = document.querySelector('#form');
const bear = document.getElementById('bear');
const password = document.getElementById('pass');
const text = document.getElementById('name');
const range = document.getElementById('rangeinput');
form.addEventListener('submit',(event)=>{
    // to prevent the default behaviour of the form in which it automatically refresh the page when we try to submit the form
    event.preventDefault();
    console.log(form);
    console.log(bear.value);
    console.log(password.value);
    console.log(range.value);
    console.log(text.value);
})