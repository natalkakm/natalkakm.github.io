$('body')
    .find('.par2')
    .text('Tekst zmieniony w metodzie find()')
    .css('color', 'red')

let par2 = $('.par2');

par2.each(function(index, biezacyParagraf){
    console.log(index, biezacyParagraf);
    if (index === 0){
        $(biezacyParagraf)
            .css('color', 'red')
            .text('Tekst zmieniony w metodzie each()');
    } else if (index === 1){
        $(biezacyParagraf)
            .css('color', 'blue')
            .text('Tekst zmieniony w metodzie each()');
    } else if (index === 2) {
        $(biezacyParagraf)
            .css('color', 'green')
            .text('Tekst zmieniony w metodzie each()');
    }
}
)

//JS in ES6
// [1, 2, 3].forEach(element, index) => {}
// lepiej pisać albo w js, albo w jquery