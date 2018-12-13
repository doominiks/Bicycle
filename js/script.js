let altIcon = $('.fa-sync-alt');
let plusIcon = $('.fa-search-plus')
let minusIcon = $('.fa-search-minus')
let imageBig = $('.features__image--big')
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

// Rotate, zoom in and out  Middle Bicycle

function removeZoom() {
    imageBig.elevateZoom({
        zoomType: false,
    });
}

altIcon.click(function () {
    removeZoom();

    imageBig.toggleClass('rotate')
});


plusIcon.on('click', function () {
    imageBig.elevateZoom({
        zoomType: "lens",
        lensShape: "round",
        lensSize: 220
    });

    imageBig.removeClass('rotate');
});


minusIcon.on('click', function () {
    removeZoom()
})