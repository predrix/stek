/* ============ navbar =============*/
let navbarHeight = $('nav').height();

$(window).scroll(function () {
		if ($(this).scrollTop() > $('header').height()) {
			$('nav').addClass('fixed-top');
            $('body').css({'padding-top': navbarHeight});
		} else {
			$('nav').removeClass('fixed-top');
            $('body').css({'padding-top': '0'});
		}
});
/* ============= smoth scroll =============*/
function scroll(e) {

    let href = $(this).attr('href');
    e.preventDefault();

    $('html, body').animate({
        scrollTop: $(href).offset().top
    }, 800);
    location.hash = href;
};

$('a[href^="#"]').click(scroll);

/* ============= scroller =================*/
const scroller = document.querySelector('.scroll');

function start() {
    setTimeout(() => {
        scroller.style.display = 'flex';
    }, 3000);
}
start();

$('.scroll').click(function () {
    $('#move').hide();
});

/* =========== navbar colapsse not moving content ==============*/




