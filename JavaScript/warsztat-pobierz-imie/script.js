'use strict';

let submit = document.querySelector("#formularz");

console.log(submit);

const wysylanieFormularza = (e) => {
    e.preventDefault();
    let imie = document.querySelector("[name='fname']");

    console.log(imie.value);
    let nazwisko = document.querySelector("[name='lname']");

    console.log(nazwisko.value);
}

submit.addEventListener('click', wysylanieFormularza);