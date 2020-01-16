$(window).scroll(function () {
		if ($(this).scrollTop() > $('header').height()) {
			$('nav').addClass('fixed-top');
            $('body').css({'padding-top': '80px'});
		} else {
			$('nav').removeClass('fixed-top');
            $('body').css({'padding-top': '0'});
		}
});

function scroll(e) {

    let href = $(this).attr('href');
    e.preventDefault();

    $('html, body').animate({
        scrollTop: $(href).offset().top
    }, 800);
    location.hash = href;
};

$('a[href^="#"]').click(scroll);

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


