let paragrafy = $('p');
// console.log(paragrafy.text());

// paragrafy.text('Nowy tekst paragrafu');


//to jest metoda innerhtml


//let paragrafyByHtml = $('p');
//console.log(paragrafyByHtml.html());

//paragrafyByHtml.html('<span>Treść znacznika span</span>');

let naglowek2 = $('#naglowek-2');
// naglowek2.prepend('prependujemy tresc | ');
// naglowek2.append(' | apendujemy tresc');


// naglowek2.before("beforujemy tresc");
// naglowek2.after('afterujemy tresc');

// naglowek2.empty();
// naglowek2.remove();

// naglowek2.replaceWith("<span> Span</span>"); //outerHTML in pure js

// paragrafy.css({
//     'background-color': 'green', 
//     'font-size': '2em', 
//     'color': 'yellow'});

let pierwszyParagraf = $('.par').eq(0); //konkretny element
console.log(pierwszyParagraf);

pierwszyParagraf.addClass('red');
pierwszyParagraf.removeClass('red');