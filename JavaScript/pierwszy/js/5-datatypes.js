'use strict';

let wyplata = 5000;
let premia = 2500;
let calkowitaWyplata;

calkowitaWyplata = wyplata + premia;

console.log(calkowitaWyplata);
console.log(typeof calkowitaWyplata);

// string
let wyplataS = "5000";
let premiaS = "2500";
let calkowitaWyplataStr;

calkowitaWyplataStr = wyplataS + premiaS;

console.log(calkowitaWyplataStr);
console.log(typeof calkowitaWyplataStr);


let czyJestSmog;
czyJestSmog = true;

if (czyJestSmog) {
    console.log("Jest Smog");
} else {
    console.log("Nie ma smogu");
}

let niezdefiniowanaZmienna; //zmienia bez przypisanej wartosci
let nullowaZmienna = null; //stosujemy jak chcemy wyczyscic jakas zmienna

console.log(niezdefiniowanaZmienna *2); 
console.log(nullowaZmienna *2);

let nazwisko = "nazwisko";
let imieStudenta = `Michał ${nazwisko}`; //znaki specjalne poprzedzamy \ zeby nie było błędu
console.log(imieStudenta)