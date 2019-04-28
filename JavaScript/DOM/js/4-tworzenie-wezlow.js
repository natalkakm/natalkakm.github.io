'use strict';

let btn = document.createElement('button');
console.log(btn);
let txtBtn = document.createTextNode("Kliknij mnie!");
console.log(txtBtn);
let classBtn = document.createAttribute("class");
classBtn.value = 'btn';
console.log(classBtn);

btn.appendChild(txtBtn);
btn.setAttributeNode(classBtn);
btn.setAttribute('onclick', 'btnClick();');

document.body.appendChild(btn);

btn.removeAttribute("onclick");
btn.removeAttribute("class");

document.body.removeChild(btn);