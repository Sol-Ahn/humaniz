$(function () {
  // main slider
  $(".main-slider .slider").slick({
    dots: true,
    infinite: true,
    speed: 300,
    fade: true,
    cssEase: "linear",
    autoplay: true,
  });

  // recommend slider
  $(".recommend-slider .slider").slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
  });

  // home dropdown menu
  // user-nav
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

  // menu-nav
  $(".menu-nav__sub").hide(300);
  $(".menu-nav").on("click", function () {
    $(".menu-nav__sub").toggle(300);
  });

  // $(".menu-nav, html").on("click", function () {
  //   $(".menu-nav__sub").hide(0);
  // });

  // agreement accordion

  $(".paragraph").not(".paragraph.active").hide();
  $(".agreement__box__checkbox").on("click", function () {
    $(this).addClass("select");
    $(".agreement__box__checkbox").not(this).removeClass("select");
    $(".paragraph").removeClass("active");
    $($(this)).children(".paragraph").addClass("active");
    $(".paragraph")
      .not(".paragraph.active")
      .stop()
      .slideUp(500, function () {
        $(".paragraph.active").stop().slideDown(500);
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
