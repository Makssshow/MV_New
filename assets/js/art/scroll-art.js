jQuery(document).ready(function ($) {
  $(window).resize(function () {
    values();
  });
  fontSpy("Almarena", {
    glyphs: "\ue81a\ue82d\ue823",
    success: function () {
      values();
    },
  });

  console.log(
    "%cMade by Maks Ray. E-mail: maksray@gmail.com",
    "color:#000; background: #07B8BE; font-size: 28px; padding: 5px 10px;"
  );

  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.defaults({
    scrub: 0.1,
  });

  var a =
    ($(window).height() - $(".header_wrap").height()) / 2 +
    $(".header_wrap").height();
  var header = $(".header_wrap").height();
  function values() {
    header = $(".header_wrap").height();
    a = ($(window).height() - header) / 2 + header;
    $(".cols__left_space").height(0);
    var cols_l = $(".cols__left").height();
    $(".cols__left_space").height(
      cols_l - $(".cols__left_wrap").height() * 1.05
    );
  }
  
      //Stars animation
      gsap
      .timeline({
        yoyo: true,
        repeat: -1,
      })
      .to(".star svg, .art__star svg", {
        duration: 7,
        rotate: 360,
        ease: "power2.inOut",
      });

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
      trigger: ".art .center",
      start: "10% top",
      end: "top bottom",
      endTrigger: "footer",
      markers: false,
      onEnter: () => {
          $("body").removeClass("border-light");
      },
      onLeave: () => {
          $("body").addClass("border-light");
      },
      onEnterBack: () => {
        $("body").removeClass("border-light");
      },
      onLeaveBack: () => {
        $("body").addClass("border-light");
      }
  })


  animation();
});
