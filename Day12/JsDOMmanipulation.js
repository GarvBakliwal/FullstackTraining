// 1
const translateButton = document.querySelector('#b1');
const latinPara = document.querySelector('#p1');

translateButton.onclick = function () {
    latinPara.textContent = 'The company itself is a very successful company. Was he born to us in the most important times? Him by our services, or by the inventor of those who praise Him. Because the less things happen, the less things happen.';
}


// 2
const colorChangingBox = document.getElementById('box');
colorChangingBox.onmouseover = function () {
    colorChangingBox.style.backgroundColor = 'lightblue';
}
colorChangingBox.onmouseout = function () {
    colorChangingBox.style.backgroundColor = '';
}
// colorChangingBox.addEventListener('mouseover',()=> {
//     colorChangingBox.style.backgroundColor = 'lightblue';
// })

// colorChangingBox.addEventListener('mouseout',()=> {
//     colorChangingBox.style.backgroundColor = '';
// })


// 3
const unList = document.getElementById('unList');
const addElementBtn = document.getElementById('addElementBtn');