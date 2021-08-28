$(document).ready(function () {
  if ($(window).width() <= 650) {
    $(".nav").appendTo("header");
  }

  $(".list__title").hover(
    function () {
      $(this).addClass("hover");
      $(".list").addClass("hovered");
    },
    function () {
      $(this).removeClass("hover");
      $(".list").removeClass("hovered");
    }
  );

  function openNav() {
    if ($(".menu__button_wrap").hasClass("close-button")) {
      closeNav();
    } else {
      $("body").addClass("open-nav");
      gsap.to(".menu", {
        top: -2,
        duration: 0.7,
      });
      $(".list").css("display", "block");
      if ($(window).width() <= 650) {
        //SWIPER
        var swiper = new Swiper(".list__container", {
          slidesPerView: "auto",
          spaceBetween: 0,
          direction: "vertical",
          mousewheel: true,
          freeMode: true,
        });
      } else {
        //SWIPER
        var swiper = new Swiper(".list__container", {
          slidesPerView: "auto",
          spaceBetween: 0,
          mousewheel: true,
          freeMode: true,
        });
      }
      $(".menu__button_wrap").addClass("close-button");
    }
  }
  function closeNav() {
    $("body").removeClass("open-nav");
    ScrollTrigger.refresh();
    $(".list").css("display", "none");
    $(".menu__button_wrap").removeClass("close-button");
    $(".menu__button_mobile").html("menu");
  }

  function openMobile() {
    if ($("body").hasClass("open-nav")) {
      closeNav();
    }
    gsap.to(".menu", {
      top: -2,
      duration: 0.7,
    });
    $("body").addClass("open-menu");
    $(".menu__button_mobile").html("close");
  }
  function closeMobile() {
    $("body").removeClass("open-menu");
    $(".menu__button_mobile").html("menu");
    ScrollTrigger.refresh();
  }

  //mobile menu click
  $(".menu__button_mobile").click(function () {
    if (!$("body").hasClass("open-menu") && !$("body").hasClass("open-nav")) {
      openMobile();
    } else if ($("body").hasClass("open-menu")){
      closeMobile();
    } else if ($("body").hasClass("open-nav")) {
      closeNav();
    }
  });

  if ($(window).width() > 650) {
    $(".menu__button_wrap").click(function () {
      openNav();
    });
    $(".nav__item a").click(function () {
      closeMobile();
    });
  } else {
    $(".nav__item:not(first-child) a").click(function () {
      closeMobile();
    });
    $(".nav__item:first-child a").click(function (event) {
      noLink(event);
      $(".menu__button_mobile").html("close");
    });
  }

  function noLink(events) {
    events.preventDefault();
    openNav();
  }
});
