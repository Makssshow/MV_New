
jQuery(document).ready(function ($) {
  mobile();
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

  function mobile() {
    var h = 6;
    if (jQuery(window).width() <= 1140) {
      for (let i = h; i >= 0; i--) {
        var img = jQuery(".grid__item");
        jQuery(img[i]).css("display", "block");
      }
      if (jQuery(".grid__item").length <= 6) {
        jQuery(".button_mob").fadeOut(500);
      } else {
        jQuery(".button_mob").fadeIn(500);
      }
    }
    jQuery(".button_mob").click(function () {
      var portfol = jQuery(".grid__item");
      for (let a = h + 4; a >= h; a--) {
        jQuery(portfol[a]).css("display", "block");
      }
      h = h + 4;
      if (jQuery(".grid__item:visible").length >= portfol.length) {
        jQuery(".button_mob").css("display", "none");
      }
    });
  }
  


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
