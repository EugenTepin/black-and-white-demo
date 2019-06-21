$(function () {
    $('.hamburger').on('click', function (e) {
        $(this).toggleClass('is-active');
        $('.menu__list').toggle();
    });

    $('.slider').slick({
        adaptiveHeight: true,
        autoplay: true,
        fade: true,
        mobileFirst: true,
        arrows: false
    });
});