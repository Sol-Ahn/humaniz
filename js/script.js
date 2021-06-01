$(function () {
  // slick slider
  $(".slider").slick({
    dots: true,
    infinite: true,
    speed: 300,
    fade: true,
    cssEase: "linear",
    autoplay: true,
  });

  // home dropdown menu
  let flag = false;
  $(".user-nav__sub").hide();
  $(".user-nav").on("mouseenter", function () {
    if (flag) return;
    $(".user-nav__sub").slideDown(500, function () {
      flag = !flag;
    });
  });

  $(".user-nav__sub").on("mouseleave", function () {
    if (!flag) return;
    $(".user-nav__sub").slideUp(500, function () {
      flag = !flag;
    });
  });

  $(".user-nav, html").on("click", function () {
    if (!flag) return;
    $(".user-nav__sub").slideUp(500, function () {
      flag = !flag;
    });
  });

  // $("body").waypoint(
  //   function (direction) {
  //     if (direction === "down") {
  //       $(".header").addClass("sticky");
  //     } else {
  //       $(".header").removeClass("sticky");
  //     }
  //   },
  //   { offset: "50px" }
  // );
});
