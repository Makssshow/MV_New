$(document).ready(function () {
  $(".menu__button_wrap").click(function () {
    if ($(this).hasClass("close-button")) {
      closeNav();
    } else {
      if ($("body").hasClass("open-menu")) {
        closeMobile();
      }
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
      $(this).addClass("close-button");
    }
  });
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

  function closeNav() {
    $("body").removeClass("open-nav");
    ScrollTrigger.refresh();
    $(".list").css("display", "none");
    $(".menu__button_wrap").removeClass("close-button");
  }

  //mobile menu click
  $(".menu__button_mobile").click(function () {
    if ($("body").hasClass("open-menu")) {
      closeMobile();
    } else {
      openMobile();
    }
  });
  $(".nav__item a").click(function () {
    closeMobile()
  });

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
});
