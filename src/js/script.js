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

});