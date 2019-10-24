$(document).ready(function () {

    //! navFixed fadeIn

    $(window).scroll(function () {
        if ($(this).scrollTop() > 150) {
            $('.nav_fixed').css("display", "flex");
            $('nav_fixed').hide();
            $('.nav_fixed').fadeIn();
        } else {
            $('.nav_fixed').fadeOut();
        }
    });

    //! slider

    $('.slider__my').slick({
        infinite: true,
        slidesToShow: 2,
        arrows: false,
        variableWidth: true,
        slidesToScroll: 2,
        dotsClass: 'my-dots',
        dots: true,
        speed: 1000
      });

});