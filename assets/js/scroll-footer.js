jQuery(document).ready(function ($) {
    gsap.from(".footer__title h2", {
        xPercent: -50,
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
});