jQuery(document).ready(function ($) {
gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.defaults({
    scrub: 0.2,
  });




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
})
});