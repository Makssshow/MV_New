$(document).ready(function () {
  var hoverMouse = function ($el) {
    $el.each(function () {
      var main = $(this);
      var $self = $(this).children(".button_3");
      var hover = false;

      var attachEventsListener = function () {
        $(window).on("mousemove", function (e) {
          // cursor
          var cursor = {
            x: e.clientX,
            y: e.clientY,
          };

          // size
          var width = main.outerWidth();
          var height = main.outerHeight();

          // position
          var offset = main.getBoundingClientRect();
          var elPos = {
            x: offset.left + width / 2,
            y: offset.top + height / 2,
          };

          // comparaison
          var x = cursor.x - elPos.x;
          var y = cursor.y - elPos.y;

          // mutex hover
          var mutHover = false;

          // anim
          if (x <= width * 0.5 && x >= width * -0.5) {
            if (y <= height * 0.5 && y >= height * -0.5) {
              mutHover = true;

              if (!hover) {
                hover = true;
              }
              onHover(x, y);
            }
            console.log(offset.top);
          }

          // reset
          if (!mutHover && hover) {
            onLeave();
            hover = false;
          }
        });
      };

      var onHover = function (x, y) {
        gsap.to($self, 0.4, {
          x: x * 0.3,
          y: y * 0.3,
          //scale: .9,
          //rotation: x * 0.05,
          ease: Power2.easeOut,
        });
      };
      var onLeave = function () {
        gsap.to($self, 0.7, {
          x: 0,
          y: 0,
          // scale: 1,
          // rotation: 0,
          ease: Elastic.easeOut.config(1.2, 0.4),
        });
      };
      attachEventsListener();
    });
  };

  hoverMouse($(".all"));
});
