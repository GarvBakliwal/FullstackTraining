// 1
// const translateButton = document.querySelector('#b1');
// const latinPara = document.querySelector('#p1');

// translateButton.onclick = function () {
//     latinPara.textContent = 'The company itself is a very successful company. Was he born to us in the most important times? Him by our services, or by the inventor of those who praise Him. Because the less things happen, the less things happen.';
// }


// 2
// const colorChangingBox = document.getElementById('box');
// colorChangingBox.onmouseover = function () {
//     colorChangingBox.style.backgroundColor = 'lightblue';
// }
// colorChangingBox.onmouseout = function () {
//     colorChangingBox.style.backgroundColor = '';
// }
// colorChangingBox.addEventListener('mouseover',()=> {
//     colorChangingBox.style.backgroundColor = 'lightblue';
// })

// colorChangingBox.addEventListener('mouseout',()=> {
//     colorChangingBox.style.backgroundColor = '';
// })


// 3
// const unList = document.getElementById('ulList');
// const addElementBtn = document.getElementById('addElementBtn');
// let count=0;

// addElementBtn.onclick = function (){
//     count++;
//     const newListItem = document.createElement('li');
//     newListItem.setAttribute('id',`listItem${count}`);
//     newListItem.appendChild(document.createTextNode(`Element ${count}`));
//     unList.appendChild(newListItem);
// }


// 4
// const removeElementsBtn = document.getElementById('removeElementsBtn');
// removeElementsBtn.onclick = function (){
//     ListItem = document.getElementById(`listItem${count}`);
//     unList.removeChild(ListItem);
//     count--;
// }


// 5
// const inputForm = document.getElementById('inputForm');
// const inputName = document.getElementById('inputName');
// const inputEmail = document.getElementById('inputEmail');
// const submitBtn = document.getElementById('submitBtn');

// inputForm.addEventListener('submit',(event)=> {
//     event.preventDefault();
//     inputForm.style.display = "none";
//     const greetings = document.createElement('p');
//     greetings.innerText = `Thank you for submitting, ${inputName.value}`
//     document.body.append(greetings);
// })