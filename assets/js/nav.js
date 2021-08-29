jQuery(document).ready(function (jQuery) {
  if (jQuery(window).width() <= 650) {
    jQuery(".nav").appendTo("header");
  }

  jQuery(".list__title").hover(
    function () {
      jQuery(this).addClass("hover");
      jQuery(".list").addClass("hovered");
    },
    function () {
      jQuery(this).removeClass("hover");
      jQuery(".list").removeClass("hovered");
    }
  );

  //mobile menu click
  jQuery(".menu__button_mobile").click(function () {
    if (!jQuery("body").hasClass("open-menu") && !jQuery("body").hasClass("open-nav")) {
      openMobile();
    } else if (jQuery("body").hasClass("open-menu")) {
      closeMobile();
    } else if (jQuery("body").hasClass("open-nav")) {
      closeNav();
    }
  });

  if (jQuery(window).width() > 650) {
    jQuery(".menu__button_wrap").click(function () {
      openNav();
    });
    jQuery(".nav__item a").click(function () {
      closeNav();
    });
  } else {
    jQuery(".nav__item:not(first-child) a").click(function () {
      closeMobile();
    });
    jQuery(".nav__item:first-child a").click(function (event) {
      noLink(event);
      jQuery(".menu__button_mobile").html("close");
    });
  }
});

function openNav() {
  if (jQuery(".menu__button_wrap").hasClass("close-button")) {
    closeNav();
  } else {
    jQuery("body").addClass("open-nav");
    gsap.to(".menu", {
      top: -2,
      duration: 0.7,
    });
    jQuery(".list").css("display", "block");
    if (jQuery(window).width() <= 650) {
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
    jQuery(".menu__button_wrap").addClass("close-button");
  }
}
function closeNav() {
  jQuery("body").removeClass("open-nav");
  ScrollTrigger.refresh();
  jQuery(".list").css("display", "none");
  jQuery(".menu__button_wrap").removeClass("close-button");
  jQuery(".menu__button_mobile").html("menu");
}

function openMobile() {
  if (jQuery("body").hasClass("open-nav")) {
    closeNav();
  }
  gsap.to(".menu", {
    top: -2,
    duration: 0.7,
  });
  jQuery("body").addClass("open-menu");
  jQuery(".menu__button_mobile").html("close");
}
function closeMobile() {
  jQuery("body").removeClass("open-menu");
  jQuery(".menu__button_mobile").html("menu");
  ScrollTrigger.refresh();
}

function noLink(events) {
  events.preventDefault();
  openNav();
}
