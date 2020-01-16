let type = '*';

$('.food').css({display:'block'});
$('.food').filter(':not(.' + type + ')').css({display:'none'})

$('.filter-wrapper').on('click', 'a', function(e) {
    let $el = $(e.currentTarget);
    let filter = $el.data('filter');
    let selector = ':not(' + filter +')';

    $('.iso-box').css({display:'block'});
    $('.iso-box').filter(selector).css({display:'none'});

});

let filter = $el.data('filter');//$el.attr('data-filter');
