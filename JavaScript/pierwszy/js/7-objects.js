'use strict';

/* let kaja = {
    imie: "Kaja",
    wzrost: 152,
    przedstawOsobe() {
        console.log(this.imie);
    }
}
// let krystian = {
//     imie: "Krystian",
//     wzrost: 180,
//     przedstawOsobe() {
//         console.log(this.imie);
//     }
// }

let monetaZL = {
    promien: 20,
    nominal: 100,
    waga: 50,
    material: "zloto"

}

console.log(monetaZL.material);
kaja.przedstawOsobe();

krystian.przedstawOsobe();
console.log(kaja.wzrost); */

class Osoba {
constructor(imie, nazwisko, wzrost, oczy) {
    this.imie = imie;
    this.nazwisko = nazwisko;
    this.wzrost = wzrost;
    this.oczy = oczy;
}

wyswietlInfo() {
    console.log ("Imię: " + this.imie + "\n" +
    "Nazwisko: " + this.nazwisko + "\n" +
    "Wzrost: " + this.wzrost + "\n" +
    "Oczy: " + this.oczy);
}
}
let krystian = new Osoba('Krystian', 'Dziopa', 180, "niebieskie");
let andrzej = new Osoba('Andrzej', 'Roczek', 175, "zielone");

andrzej.wzrost = 178;
andrzej.wyswietlInfo();
console.log(krystian, andrzej);