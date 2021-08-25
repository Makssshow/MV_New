$(document).ready(function () {
  var hoverMouse = function (el) {
    var main = $(el);
    var v2 = $(el).children(".button_2");
    var v3 = $(el).children(".button_3");
    var v4 = $(el).children(".button_4");
    var vText = $(el).children(".button__title");
    var hover = false;

    var attachEventsListener = function (element) {
      $(window).on("mousemove", function (e) {
        var prime = document.querySelector(element);
        // cursor
        var cursor = {
          x: e.clientX,
          y: e.clientY,
        };
        // position
        var sizes = prime.getBoundingClientRect();
        // size
        var width = sizes.width;
        var height = sizes.height;
        var elPos = {
          x: sizes.left + width / 2,
          y: sizes.top + height / 2,
        };

        // comparaison
        var x = cursor.x - elPos.x;
        var y = cursor.y - elPos.y;

        // mutex hover
        var mutHover = false;
        // anim
        if (x <= (width + 4)/2 && x >= -(width + 4)/2) {
          if (y <= (height + 4)/2 && y >= -(height + 4)/2) {
            if (el == ".all") {
              $(".all h4").html("go");
            }
            mutHover = true;

            if (!hover) {
              hover = true;
            }
            onHover(x, y);
          }
        }

        // reset
        if (!mutHover && hover) {
          onLeave();
          hover = false;
          if (el == ".all") {
            $(".all h4").html("All<br/>projects");
          }
        }
      });
    };

    var onHover = function (x, y) {
      gsap.to(v2, {
        x: x * 0.1,
        y: y * 0.1,
        scale: 0.9,
        ease: Linear,
        duration: .3,
      });
      gsap.to(v3, {
        x: x * 0.2,
        y: y * 0.2,
        scale: 0.75,
        ease: Linear,
        duration: .3,
      });
      if (v4.length) {
        gsap.to(v4, {
          x: x * 0.4,
          y: y * 0.4,
          scale: 0.5,
          ease: Linear,
          duration: .3,
        });
      }
      if (el == ".all") {
        gsap.to(vText, {
          x: x * 0.4,
          y: y * 0.4,
          scale: 1.5,
          ease: Linear,
          duration: .3,
        });
      } else {
        gsap.to(vText, {
          x: x * 0.4,
          y: y * 0.4,
          scale: .6,
          ease: Linear,
          duration: .3,
        });
      }
    };
    var onLeave = function () {
      gsap.to(v2, 0.7, {
        x: 0,
        y: 0,
        scale: 1,
        ease: "none",
      });
      gsap.to(v3, 0.7, {
        x: 0,
        y: 0,
        scale: 1,
        ease: "none",
      });
      if (v4.length) {
        gsap.to(v4, 0.7, {
          x: 0,
          y: 0,
          scale: 1,
          ease: "none",
        });
      }
      gsap.to(vText, 0.7, {
        x: 0,
        y: 0,
        scale: 1,
        ease: "none",
      });
    };
    attachEventsListener(el);
  };

  hoverMouse(".all");
  hoverMouse(".more");
  hoverMouse(".projects");
});
