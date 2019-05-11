let naglowek1 = $('#naglowek-1');

naglowek1.click(function() {
    $(this).css({
        'background-color': 'yellow',
        'text-decoraion': 'underline'

    });
});

naglowek1.on({
    'dblclick':function(){
        $(this).css('background-color', 'green');
    },
    'mouseenter': function() {
        $(this).css({
            'font-size': '3em',
            'transition': 'all .4s'
        })
    },
    'mouseleave': function(){
        $(this).css('font-size', 'inherit');
    }   
}
)