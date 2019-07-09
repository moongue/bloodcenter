function menuLogic() {
    $('.icon-burger').click(function () {
        $(this).toggleClass('active');
        $('.changed-text').toggleClass('change');
        $('.header .dropdown').toggleClass('show');
    })
}

function search() {
    $('.search').click(function () {
        $('.wrap-search').toggleClass('active')
    })
}

function slider() {
    $('.news-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 1000,
        arrows: false,
        draggable: false,
        centerMode: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    $('.dots-news').slick({
        slidesToShow: 1,
        arrows: true,
        prevArrow: '.prev-arrow-news',
        nextArrow: '.next-arrow-news',
        asNavFor: '.news-slider',
        focusOnSelect: true,
        draggable: false
    })
}

function toggleVideo() {

    $('.wrap-btn').click(function () {

        if ($(".video").get(0).paused) {
            $(".video").get(0).play();

        } else {
            $(".video").get(0).pause();
        }
    });
}

function chooseServices() {
    $('div.choose-popup').on('click', '.col-12:not(.show)', function () {
        $(this)
            .addClass('show').siblings().removeClass('show')
            .closest('body').find('div.popup-services').removeClass('show').eq($(this).index()).addClass('show');
        $('.shadow-overlay').fadeToggle(300);
        $('.shadow-overlay, .popup-services .close').click(function () {
            $('.shadow-overlay').fadeOut(300);
            $('.popup-services').removeClass('show');
            $('.col-12').removeClass('show');
        });
    });
}

$(window).on('load', function () {
    menuLogic();
    search();
    slider();
    toggleVideo();
    chooseServices();
});