jQuery(document).ready(function ($) {
  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.defaults({
    scrub: 0.2,
  });
  $()

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
    toggleClass: { targets: "body", className: "light-dark" },
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
      markers: true,
    });
  });
});
