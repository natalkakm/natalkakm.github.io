'use strict';

let kontoLukasza = 1000000;

const zrobZakupy = (zaIle) =>{
    let kontoNatalii = 2000000;
    let ileZostaloNaKoncie = kontoNatalii - zaIle;
    return ileZostaloNaKoncie;
}

console.log(kontoLukasza)

console.log(zrobZakupy(500000));