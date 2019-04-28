'use strict';

let parSecond = document.querySelector("#parSecond");
console.log(parSecond);


// const klikAlert = () => {
//     alert("kliknieto div-a"); 
// }

//wywolanie funkcji w html: <div id="parSecond" onclick="klikAlert();"> (lepiej tak nie robić)
//drugi sposob uruchomienia funkcji
// parSecond.onclick = klikAlert;
//callback - funkcja, ktora nie uruchamia się od razu, tylko uruchamia się pod warunkiem


//eventlistener jest preferowany vv
// parSecond.addEventListener('mouseover', klikAlert);

//z funkcja anonimową
// parSecond.addEventListener('mouseover', () => {
//     alert('funkcja anonimowa')
// });

//nie da się usunąć eventów, które zostały zapisane z funkcją anonimową!

//usuwanie innych EventListenerów
// parSecond.removeEventListener('mouseover', klikAlert);


// const klikAlert = (e) => {
//     // e.preventDefault();
//     alert("kliknieto div");
//          console.log(e);
// }


// let link = document.querySelector('.link');
// console.log(link);
// link.addEventListener('click', klikAlert);


let parWParSecond = document.getElementById ("parWParSecond");
console.log(parWParSecond);


const klikDiv = (e) => {
    console.log("Kliknieto DIV");
}

const klikParagraf = (e) => {
    console.log("kliknieto paragraf");
}

parSecond.addEventListener("click", klikDiv);
parWParSecond.addEventListener("click", klikParagraf);

//jak są zag elem, to najpier uruchamia sie najglebszy, potem coraz szerzej

//moge wpisać w funkcji e.stopPropagation(); - wtedy reaguje tylko na klikniecie tekstu