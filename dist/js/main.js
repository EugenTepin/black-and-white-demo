$(function () {
    $('.hamburger').on('click', function (e) {
        $(this).toggleClass('is-active');
        $('.menu__list').toggle();
    })
});