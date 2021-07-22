jQuery(document).ready(function ($) {
  $(window).resize(function () {
    values();
  });
  values();
  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.defaults({
    scrub: 0.1,
  });

  function values() {
    $(".cols__left_space, .cols__right_space").height(0);
    var portfHeight = $(".portfolio").height();
    $(".cols__left_space").height(portfHeight - $(".cols__left h2").height());
    $(".cols__right_space").height(
      portfHeight - $(".cols__right_sticky").height()
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

  gsap.to(".menu", {
    top: -2,
    scrollTrigger: {
      trigger: "html",
      start: "top top",
      end: "+=" + $("header").height(),
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

  var a = ($(window).height() - 195) / 2 + 195;
  gsap.utils.toArray(".portfolio__item").forEach((element) => {
    ScrollTrigger.create({
      trigger: element,
      start: "center +=" + a,
      end:
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
      end: "top +=" + $("header").height(),
    },
    ease: Linear.easeNone,
  });
  ScrollTrigger.create({
    trigger: ".art",
    start: "top +=" + $("header").height(),
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
  });

  gsap.from(".who__title h2", {
    xPercent: -60,
    scrollTrigger: {
      trigger: ".who__title",
      start: "top bottom",
      end: "bottom +=" + $("header").height(),
    },
    ease: Linear.easeNone,
  });
  let who = gsap.timeline({
    scrollTrigger: {
      trigger: ".who__title",
      start: "bottom bottom",
      end: "top top",
      endTrigger: ".who",
      markers: true
    },
    defaults: {
      ease: Linear.easeNone,
    }
  });

  who.from(".who__left_wrap", {
    yPercent: -100
  });
});
