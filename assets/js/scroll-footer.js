
  function animation() {
    if (jQuery(window).width() > 650) {
      gsap.from(".footer__title h2", {
        xPercent: -30,
        scrollTrigger: {
          trigger: ".footer__title",
          start: "top bottom",
          end: "top +=" + jQuery("header").height(),
          ease: Linear.easeNone,
        },
      });
    } else {
      gsap.from(".footer__title h2", {
        xPercent: -30,
        scrollTrigger: {
          trigger: ".footer__title",
          start: "top bottom",
          end: "bottom bottom",
          endTrigger: "html",
          markers: false,
          ease: Linear.easeNone,
        },
      });
    }
    let footer = gsap.timeline({
      scrollTrigger: {
        trigger: ".mail .cols__right",
        start: "70% bottom",
        end: "bottom bottom",
        markers: false,
      },
      defaults: {
        ease: Linear.easeNone,
      },
    });

    footer
      .from(".behance a", {
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
  }

