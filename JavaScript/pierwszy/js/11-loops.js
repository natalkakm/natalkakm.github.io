'use strict';


// Pętla for - najprostsza ever ( wyrazenie poczatkowe; wyrazenie warunkowe; wyrazenie modyfikujace)

for ( let i=10 ; i>0 ; i--) {
    console.log(i);

}

//Pętla forEach

let tablica = [ "Krystian", "Monika", "Danuta" ];

for (let i=0; i < tablica.length; ++i ) {
    console.log(tablica[i]);
}

const iteruj = ( element, index ) => {
    console.log( "Element z Indexem: " + index + " ma wartosc" + element);
}

tablica.forEach( (element, index) => {
    console.log( "Element z Indexem: " + index + " ma wartosci " + element);
} );

// Petla for in

let person = {
    name: 'Krystian',
    age: 35
}

for(let key in person) {
    console.log(person[key]);
}


// petla for of

let iterable = [10, 10, 30];

for (let value of iterable) {
    value += 1;
    console.log(value);
}

let it = 10;
while ( it < 10 ) {
    console.log(it);
    it++;
}

// petla do while

let iter = 20;
do {
    console.log(iter);
    iter++;
    console.log(iter);
} while ( iter < 10 )


// przeskakiwanie do kolejnej iteracji

for ( let b = 0; b<10; ++b ) {

    if ( b == 5 ) {
        continue;
    } else {
        console.log(b);
    }

    console.log("--");
}