'use strict';

let imiona = ['Monika', 'Krystian', 'Łukasz'];

imiona[3] = 'Tania'; //tak to działa bo indeksujemy od zera
imiona[2] = 'Ela';

imiona.push('Gerald'); //wskakuje na koniec

console.log(imiona);

imiona.pop() //usuwa ostatni element

console.log(imiona.unshift('Robert')); //dodaje na początku tablicy

console.log(imiona.shift()); //usuwa pierwszy element

console.log(imiona.length); //długość tablicy

let imionaStr = imiona.join(); //domyslny separator to ",", mozemy tez go zdefiniowac w nawiasach (";")
console.log(imionaStr);

imiona.reverse(); //podaje odwrotną kolejność
console.log(imiona);

imiona.unshift('Zenek');

imiona.sort(); //sortuje
console.log(imiona);

imiona.push('Kaja');