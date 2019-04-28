'use strict';

let perFirst = document.getElementById('parFirst');
console.log(parFirst);

var linki = document.getElementsByClassName('superlink');
console.log(linki);

var linkiPoTagu = document.getElementsByTagName('a');
var divPoID = document.querySelector('#parSecond');


var pierwszyLinkPoSelektorze = document.querySelector('.superlink');
console.log(pierwszyLinkPoSelektorze);

var linkiPoSelektorze = document.querySelectorAll('.superlink');
console.log(linkiPoSelektorze);

linkiPoSelektorze.forEach( (link, i) => {
    console.log(link.outerHTML);
});
