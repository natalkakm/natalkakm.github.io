'use strict';

var mainHeader = document.getElementById('header'); //Przypisujemy naglowek strony do zmiennej

console.log(mainHeader);

console.log(mainHeader.innerHTML);
console.log(mainHeader.innerText);
console.log(mainHeader.outerHTML);

mainHeader.id = "nowe-id";

console.log(mainHeader.outerHTML);

mainHeader.setAttribute ("class", "Header");

mainHeader.className = 'nowa-klasa';

console.log(mainHeader.outerHTML);

let klasy = mainHeader.className;

console.log(klasy);

let zmienKolor = document.getElementById("toggle");

zmienKolor.addEventListener("click", () => {
    zmienKolor.classList.toggle("active");
});

zmienKolor.style.color = "red";
zmienKolor.style.backgroundColor = 'lime';