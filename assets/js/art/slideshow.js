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

  setTimeout(() => {
    let slidsehow = new Swiper(".slideshow", {
      slidesPerView: 1,
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }, 0);
});
