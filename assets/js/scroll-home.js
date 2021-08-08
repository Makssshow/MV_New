jQuery(document).ready(function ($) {
  $(window).resize(function () {
    values();
  });

  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.defaults({
    scrub: 0.1,
  });

  fontSpy("Almarena", {
    glyphs: "\ue81a\ue82d\ue823",
    success: function () {
      values();
    },
  });

  var a =
    ($(window).height() - $(".header_wrap").height()) / 2 +
    $(".header_wrap").height();
  var header = $(".header_wrap").height();
  function values() {
    header = $(".header_wrap").height();
    a = ($(window).height() - header) / 2 + header;
    $(".cols__left_space, .cols__right_space").height(0);
    var portfHeight = $(".portfolio_wrap_3").height();
    $(".cols__left_space").height(
      portfHeight - $(".portfolio__left").height() * 1.05
    );
    $(".cols__right_space").height(
      portfHeight - $(".cols__right_sticky").height() * 1.05
    );
  }

  $(".all").hover(
    function () {
      $(".all h4").html("go");
    },
    function () {
      $(".all h4").html("All<br/>projects");
    }
  );

  //Stars animation
  gsap
    .timeline({
      yoyo: true,
      repeat: -1,
    })
    .to(".star, .art__star svg", {
      duration: 7,
      rotate: 360,
      ease: "power2.inOut",
    });

  //MENU
  gsap.to(".menu", {
    top: -2,
    scrollTrigger: {
      trigger: "html",
      start: "top top",
      end: () => "+=" + header,
      markers: false,
      scrub: true,
    },
    ease: Linear.easeNone,
  });

  ScrollTrigger.create({
    trigger: ".portfolio_wrap",
    start: "top 80%",
    endTrigger: "html",
    end: "bottom top",
    onEnter: () => {
      $("body").addClass("light-dark");
      $(".nav__item").removeClass("nav_active");
      $(".nav__item:nth-child(1)").addClass("nav_active");
    },
    onLeaveBack: () => {
      $("body").removeClass("light-dark");
      $(".nav__item").removeClass("nav_active");
    },
    markers: false,
  });

  gsap.utils.toArray(".portfolio__item").forEach((element) => {
    ScrollTrigger.create({
      trigger: element,
      start: () => "center +=" + a,
      end: () =>
        "bottom-=" + $(".portfolio__item:last-child").height() / 2 + " +=" + a,
      endTrigger: ".portfolio_wrap",
      pin: true,
      pinSpacing: false,
      onEnter: () => {
        $(element).addClass("portfolio_pinned");
      },
      onLeaveBack: () => {
        $(element).removeClass("portfolio_pinned");
      },
      markers: false,
    });
  });

  gsap.from(".art__title", {
    xPercent: -50,
    scrollTrigger: {
      trigger: ".art",
      start: "top bottom",
      end: () => "top +=" + header,
    },
    ease: Linear.easeNone,
  });

  ScrollTrigger.create({
    trigger: ".art",
    start: () => "top +=" + header,
    onEnter: () => {
      $("body").addClass("border-light");
      $(".nav__item").removeClass("nav_active");
      $(".nav__item:nth-child(2)").addClass("nav_active");
    },
    onLeaveBack: () => {
      $("body").removeClass("border-light");
      $(".nav__item").removeClass("nav_active");
      $(".nav__item:nth-child(1)").addClass("nav_active");
    },
    markers: false,
  });

  gsap.from(".who__title h2", {
    xPercent: -60,
    scrollTrigger: {
      trigger: ".who__title",
      start: "top bottom",
      end: () => "bottom +=" + header,
    },
    ease: Linear.easeNone,
  });
  ScrollTrigger.create({
    trigger: ".who",
    start: () => "top +=" + header,
    onEnter: () => {
      $(".nav__item").removeClass("nav_active");
      $(".nav__item:nth-child(3)").addClass("nav_active");
    },
    onLeaveBack: () => {
      $(".nav__item").removeClass("nav_active");
      $(".nav__item:nth-child(2)").addClass("nav_active");
    },
  });
  let who = gsap.timeline({
    scrollTrigger: {
      trigger: ".who__title",
      start: "bottom bottom",
      end: "bottom bottom",
      endTrigger: ".who",
      markers: false,
    },
    defaults: {
      ease: Linear.easeNone,
    },
  });

  who
    .from(".who__left_wrap", {
      yPercent: -100,
    })
    .from(
      ".who__right_wrap h3",
      {
        yPercent: 50,
      },
      0
    );

  ScrollTrigger.create({
    trigger: "footer",
    start: () => "top +=" + header,
    onEnter: () => {
      $(".nav__item").removeClass("nav_active");
      $(".nav__item:nth-child(4)").addClass("nav_active");
    },
    onLeaveBack: () => {
      $(".nav__item").removeClass("nav_active");
      $(".nav__item:nth-child(3)").addClass("nav_active");
    },
  });
});
