jQuery(document).ready(function ($) {
  $(".swiper-button-next, .swiper-button-prev").html(
    '<svg width="36" height="32" viewBox="0 0 36 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.5715 0L16.7143 3.99997L25.7144 13.3333H0V18.6666H25.7143L16.7143 28L20.5715 32L36 16L20.5715 0Z" fill="#ffffff"/><path d="M20.5715 0L16.7143 3.99997L25.7144 13.3333H0V18.6666H25.7143L16.7143 28L20.5715 32L36 16L20.5715 0Z" fill="#07B8BE"/></svg>'
  );

  $(".grid__item").each(function (i) {
    let image = $(this).find("img").attr("src"),
      size = $(this).find("h4").html(),
      title = $(this).find("h2").html(),
      type = $(this).find("h3").html();

    $(".slideshow__js").append(
      '<div class="swiper-slide"><div class="slideshow__item"><div class="slideshow__image"><img src="' +
        image +
        '" alt="slideshow"></div><div class="slideshow_wrap"><div class="slideshow__size">' +
        size +
        '</div><div class="slideshow__title">' +
        title +
        '</div><div class="slideshow__type">' +
        type +
        "</div></div></div></div>"
    );
  });

  let slidsehow = new Swiper(".slideshow", {
    slidesPerView: 1,
    loop: true,
    shortSwipes: false,
    spaceBetween: 50,
    longSwipesRatio: .1,
    longSwipesMs: 50,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  const swiper = document.querySelector(".slideshow").swiper;

  //OPEN SLIDESHOW
  $(".grid__item").click(function () {
    var index = $(".grid__item").index(this);

    swiper.slideTo(index + 1, 0, false);

    $(".slideshow_wrapper").addClass("open");

    let image = $(".grid__item").eq(index).find("img");
    let item = document.querySelectorAll(".grid__item")[index].getBoundingClientRect();
    let position = document.querySelector(".swiper-slide-active img:first-child").getBoundingClientRect();
    $(image).clone().appendTo(".swiper-slide-active .slideshow__image");

    gsap.fromTo(".swiper-slide-active img:last-child", {
      width: item.width,
      height: item.height,
      left: item.left,
      top: item.top,
    }, {
        width: position.width,
        height: position.height,
        left: position.left,
        top: position.top,  
        duration: 1,
        onComplete: () => {
            $(".animation img:last-child").remove();
            $(".animation").removeClass("animation");
        }
    });


    $(".swiper-slide-active").addClass("animation");

  });

  //CLOSE SLIDESHOW
  $(".slideshow__button").click(function () {
    $(".slideshow_wrapper").removeClass("open");
  });
});
