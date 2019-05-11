// $('#naglowek-1').hide('slow').show('slow');

// $('p').hide('slow').show('slow');


// $('#naglowek-2').fadeOut('slow').fadeIn('slow');
// $('#naglowek-2').slideUp('slow').slideDown('slow');

// Animacje w CSS są lepsze, bo szybciej się ładują

function przesunNaSrodek() {
$('#naglowek-1').animate({
    'margin-left': '500px',
    'font-size': '4em'
}, 3000, przesunwLewo);

}

function przesunwLewo(){
    $('#naglowek-1').delay(1000).animate({
        'margin-left': '0',
        'font-size': '1em'
    }, 3000, przesunNaSrodek);
}

przesunNaSrodek()

//w jquery zeby zmieniac kolor w animacjach trzeba pobrac dodatkową bibliotekę
