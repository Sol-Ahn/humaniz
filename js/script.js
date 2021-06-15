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

  ///////////////////////////DROPDOWN/////////////////////////////
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

  ///////////////////////////ACCORDION////////////////////////////
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

  // list sidebar accordion
  const mainAcc = $(".list-nav__main-menu__link");
  const subAcc = $(".list-nav__sub-menu");
  subAcc.hide();
  mainAcc.on("click", function (e) {
    e.preventDefault();
    if ($(this).attr("class") !== "active") {
      subAcc.slideUp(500);
      $(this).next().stop().slideDown(500);
      mainAcc.removeClass("active");
      $(this).addClass("active");
    }
  });

  ///////////////////////////LINK/////////////////////////////
  $(".banner__event").on("click", function () {
    window.location.href = "/event.html";
  });

  $(".btn__about").on("click", function () {
    window.location.href = "/about.html";
  });

  $(".btn-logout, .user-nav__link--logout").on("click", function () {
    alert("로그아웃 되었습니다. 다음에 또 만나요!");
    window.location.href = "/";
  });

  $(".btn-subscribe").on("click", function () {
    window.location.href = "/subscribe.html";
  });

  $(".article__my-subscribe__btn").on("click", function () {
    window.location.href = "/subscribe.html";
  });

  ///////////////////////////TAB/////////////////////////////
  // mypage tab
  $(".section-user__user-nav__item").on("click", function (e) {
    e.preventDefault();
    const index = $(".section-user__user-nav__item").index($(this));
    $(".section-user__user-nav__item").removeClass("default-open");
    $("article").removeClass("active").addClass("hidden");
    $(".section-user__user-nav__item:eq(" + index + ")").addClass(
      "default-open"
    );
    $("article:eq(" + index + ")")
      .removeClass("hidden")
      .addClass("active");
  });

  // list sidebar tab
  $(".list-nav__main-menu__link").on("click", function (e) {
    e.preventDefault();
    const index = $(".list-nav__main-menu__link").index($(this));
    $(".list-nav__main-menu__link").removeClass("default-open");
    $("section").removeClass("active").addClass("hidden");
    $(".list-nav__main-menu__link:eq(" + index + ")").addClass("default-open");
    $("section:eq(" + index + ")")
      .removeClass("hidden")
      .addClass("active");
  });

  ///////////////////////////MODAL/////////////////////////////
  $(".modal-window").hide();
  $(".overlay").hide();

  $(".card__btn").on("click", function (e) {
    e.preventDefault();
    $(".modal-window").show();
    $(".overlay").show();
  });

  $(".btn--close, html").on("click", function () {
    $(".modal-window").hide();
    $(".overlay").hide();
  });

  $(".overlay").on("click", function () {
    $(".modal-window").hide();
    $(".overlay").hide();
  });

  $(document).on("keydown", function (e) {
    if (e.key === "Escape" && !$(".modal-window").hide()) {
      $(".modal-window").hide();
      $(".overlay").hide();
    }
  });
});
