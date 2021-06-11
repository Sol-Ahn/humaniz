$(function () {
  ///////////////////////////IMAGE SLIDER/////////////////////////////
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

  ///////////////////////////MENU/////////////////////////////
  // home dropdown menu
  // user-nav
  let flag = false;
  $(".user-nav__sub").hide();
  $(".user-nav").on("mouseenter", function (e) {
    e.preventDefault();
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
  $(".menu-nav__sub").hide();
  $(".menu-nav").on("click", function (e) {
    e.preventDefault();
    $(".menu-nav__sub").toggle(300);
  });

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

  ///////////////////////////LINK/////////////////////////////
  $(".banner__event").on("click", function () {
    window.location.href = "/event.html";
  });

  $(".btn__about").on("click", function () {
    window.location.href = "/about.html";
  });

  $(".btn-logout").on("click", function () {
    alert("로그아웃 하셨습니다. 다음에 또 만나요!");
    window.location.href = "/";
  });

  $(".btn-subscribe").on("click", function () {
    window.location.href = "/subscribe.html";
  });

  $(".article__my-subscribe__btn").on("click", function () {
    window.location.href = "/subscribe.html";
  });
});
