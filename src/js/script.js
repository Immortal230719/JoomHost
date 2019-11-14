$(document).ready(function() {
  //! navFixed fadeIn

  let windowWidth = window.innerWidth;

  $(window).scroll(function() {
    if ($(this).scrollTop() > 150 && windowWidth > 576) {
      $(".nav_fixed").css("display", "flex");
      $("nav_fixed").hide();
      $(".nav_fixed").fadeIn();
    } else {
      $(".nav_fixed").fadeOut();
    }
  });

  //! slider

  $(".slider__my").slick({
    infinite: true,
    slidesToShow: 2,
    arrows: false,
    variableWidth: true,
    slidesToScroll: 2,
    dotsClass: "my-dots",
    dots: true,
    speed: 1000,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true
        }
      }
    ]
  });

  $(".slider-card-visible").slick({
    infinite: true,
    slidesToShow: 1,
    arrows: false,
    variableWidth: true,
    slidesToScroll: 1,
    dotsClass: "my-dots",
    dots: true,
    speed: 1000,
    centerMode: true,
    adaptiveHeight: true
  });

  //! pageUp button

  $(window).scroll(function() {
    if ($(this).scrollTop() > 1000) {
      $(".page-up").fadeIn();
    } else {
      $(".page-up").fadeOut();
    }
  });

  $("a[href^=#up]").click(function() {
    const _href = $(this).attr("href");
    $("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
    return false;
  });

  new WOW().init();
});

window.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".nav"),
    menuItem = document.querySelectorAll(".menu_item"),
    hamburger = document.querySelector(".hamburger");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("hamburger_active");
    menu.classList.toggle("nav_active");
  });

  menuItem.forEach(item => {
    item.addEventListener("click", () => {
      hamburger.classList.toggle("hamburger_active");
      menu.classList.toggle("nav_active");
    });
  });
});
