let altIcon = $('.fa-sync-alt');
let plusIcon = $('.fa-search-plus')
let minusIcon = $('.fa-search-minus')
let imageLeft = $('.intro__image--left')

// Toggle Menu
$('.burger').on('click', function () {
    $('.burger__icon, .main-nav').toggleClass('off');
})


// Fade in Left Bicycle
if ($(window).width() > 980) {
    $(window).scroll(function () {
        let scroll = $(window).scrollTop();

        if (scroll >= 1000) {
            imageLeft.css({
                'animation-name': 'fade_in_left',
                'opacity': '1'
            })
        }
    })
} else {
    imageLeft.css({
        'opacity': '1'
    })
}


/* Slider made by Mamun khandaker */
$(function () {

    var liCount = $('.slider li').length;
    var ulWidth = (liCount * 100);
    var liWidth = (100 / liCount);
    var leftIncrement = (ulWidth / liCount);


    $('.slider').height($('.slider li img').height());


    $('.slider img').on('load', function () {
        $('.loader').fadeOut();
        $('.slider').height($(this).height());
    })

    $(window).resize(function () {
        $('.slider').css('height', $('.slider li img').height());
    });

    $('.slider ul').css('width', ulWidth + '%');
    $('.slider li').css('width', liWidth + '%');

    $('.slider').append(function () {
        $(this).append('<div class="navigator"></div>');
        $(this).prepend('<span class="prev">Prev</span><span class="next">Next</span>');
        $(this).find('li').each(function () {
            $('.navigator').append('<span></span>');
        });
    });

    $('.slider').css('height', $('.slider li img').height());

    $('.navigator span:first-child').addClass('active');


    if (liCount > 2) {
        $('.slider ul').css('margin-left', -leftIncrement + '%');
        $('.slider ul li:last-child').prependTo('.slider ul');
    } else if (liCount == 1) {
        $('.slider span').css('display', 'none');
        $('.autoPlay').css('display', 'none');
    } else if (liCount == 2) {
        $('.slider .prev').css('display', 'none');
    }

    function moveLeft() {
        $('.slider ul').animate({
            left: -leftIncrement + '%'
        }, 500, function () {
            $('.slider ul li:first-child').appendTo('.slider ul');
            $('.slider ul').css('left', '');

            if ($('.navigator span').hasClass('active')) {

                if ($('.navigator span.active').is(':last-child')) {
                    $('span.active').removeClass('active');
                    $('.navigator span:first-child').addClass('active');
                } else {
                    $('span.active').next().addClass('active');
                    $('span.active').prev().removeClass('active');
                }
            }
        });
    }


    function moveRight() {
        $('.slider ul').animate({
            left: leftIncrement + '%'
        }, 500, function () {
            $('.slider ul li:last-child').prependTo('.slider ul');
            $('.slider ul').css('left', '');

            if ($('.navigator span').hasClass('active')) {

                if ($('.navigator span.active').is(':first-child')) {
                    $('span.active').removeClass('active');
                    $('.navigator span:last-child').addClass('active');
                } else {
                    $('span.active').prev().addClass('active');
                    $('span.active').next().removeClass('active');
                }
            }
        });
    }

    if (liCount > 1) {
        invertalValue = setInterval(function () {
            moveLeft();
        }, 5000);
    }

    $('.prev').click(function () {
        moveRight();
    });

    $('.next').click(function () {
        moveLeft();
    });

});