jQuery(document).ready(function ($) {
    gsap.from(".footer__title h2", {
        xPercent: -30,
        scrollTrigger: {
            trigger: ".footer__title",
            start: "top bottom",
            end: "top +=" + $("header").height(),
        }
    });
    let footer = gsap.timeline({
        scrollTrigger: {
            trigger: ".mail .cols__right",
            start: "70% bottom",
            end: "bottom bottom",
            markers: false
        },
        defaults: {
            ease: Linear.easeNone,
          }
    });

    footer.from(".behance a", {
        yPercent: 102,
    })
    .from(".dribble a", {
        yPercent: 102,
    })
    .from(".instagram a", {
        yPercent: 102,
    });


    gsap.from(".autro h3", {
        xPercent: -30,
        scrollTrigger: {
          trigger: ".autro",
          start: "top bottom",
          end: "bottom bottom",
        },
        ease: Linear.easeNone,
      });
});