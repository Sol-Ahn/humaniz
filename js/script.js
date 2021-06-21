$(function () {
	///////////////////////////IMAGE SLIDER/////////////////////////////
	// main slider
	$(".main-slider .slider").slick({
		dots: true,
		infinite: true,
		speed: 200,
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
	$(".paragraph").hide();
	$(".agreement__box__checkbox").on("click", function () {
		if (!$(this).children(".paragraph").hasClass("active")) {
			$(".paragraph").slideUp(500);
			$(this).children(".paragraph").slideDown(500);
			$(".paragraph").removeClass("active");
			$(this).children(".paragraph").addClass("active");
		}
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
	$(".header__box__logo").on("click", function (e) {
		e.preventDefault();
		window.location.href = "/index.html";
	});

	$(".login__box__logo").on("click", function (e) {
		e.preventDefault();
		window.location.href = "/index.html";
	});

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

	$(".btn-subscribe").on("click", function (e) {
		e.preventDefault();
		window.location.href = "/subscribe.html";
	});

	$(".article__my-subscribe__btn").on("click", function () {
		window.location.href = "/subscribe.html";
	});

	$(".menu-nav__sub__link").on("click", function () {
		window.location.href = "/list.html";
	});

	$(".contents__box").on("click", function () {
		window.location.href = "/detail.html";
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

	$(".card__btn").on("click", function (e) {
		e.preventDefault();
		$(".modal-window").removeClass("hidden");
		$(".overlay").removeClass("hidden");
	});

	$(".btn-close").on("click", function () {
		$(".modal-window").addClass("hidden");
		$(".overlay").addClass("hidden");
	});

	$(".overlay").on("click", function () {
		$(".modal-window").addClass("hidden");
		$(".overlay").addClass("hidden");
	});

	$(".modal-window__box__btn--mypage").on("click", function (e) {
		e.preventDefault();
		window.location.href = "/mypage.html";
	});

	$(document).on("keydown", function (e) {
		if (e.key === "Escape" && !$(".modal-window").hasClass("hidden")) {
			$(".modal-window").addClass("hidden");
			$(".overlay").addClass("hidden");
		}
	});

	///////////////////////////SEARCH BAR/////////////////////////////
	// autocomplete
	const availableKeywords = [
		"동양철학",
		"서양철학",
		"고전",
		"문학",
		"교양인문학",
		"출근길",
		"짧은",
		"쉬운",
		"역사",
		"컨텐츠",
		"구독",
		"멤버십",
		"이벤트",
		"쿠폰",
	];
	$(".search__input").autocomplete({
		source: availableKeywords,
	});

	///////////////////////////FLOATING BAR/////////////////////////////
	const curPosition = $(".floating-bar").css("top");
	$(window).scroll(function () {
		const position = $(window).scrollTop();
		$(".floating-bar")
			.stop()
			.animate({ top: position + curPosition + "px" }, 1000);
	});

	///////////////////////////EVENTCODE/////////////////////////////
	$(".event-code__btn--default").on("click", function (e) {
		e.preventDefault();
		$(".event-code__input").val("AA1-B2BB-CC3").css({ "text-align": "center" });
		$(this)
			.css({
				"background-color": "#f6f6f6",
				color: "#ec652b",
			})
			.removeClass("event-code__btn--default")
			.addClass("event-code__btn--share")
			.html("친구에게 공유하기");
		$(".event-code__btn--share").on("click", function () {
			$(this)
				.next()
				.append("<p>추천인 코드가 성공적으로 공유되었습니다.</p>")
				.css({ color: "#ec652b", "font-size": "16px" });
		});
	});
	//////////////////////////DYNAMIC LOADING////////////////////////
	// about page section-content
	const [...allSection] = $(".main__about > .section-content");
	const sectionLoad = new IntersectionObserver(function (entries, observer) {
		entries.forEach((entry) => {
			if (!entry.isIntersecting) return;
			entry.target.classList.add("animate__animated", "animate__fadeInUp");
			observer.unobserve(entry.target);
		});
	});

	allSection.forEach((section) =>
		sectionLoad.observe(section, {
			root: null,
			threshould: 0.15,
		})
	);

	// detail page article
	const [...allArticle] = $(".article__contents-detail");
	const articleLoad = new IntersectionObserver(function (entries, observer) {
		entries.forEach((entry) => {
			console.log(entry);
			if (!entry.isIntersecting) return;
			entry.target.classList.add("animate__animated", "animate__fadeInUp");
			observer.unobserve(entry.target);
		});
	});

	allArticle.forEach((article) =>
		articleLoad.observe(article, {
			root: null,
			threshould: 0.1,
		})
	);

	//////////////////////////ANIMATION////////////////////////
	// about page section-feature
	const features = $(".section-features")[0];
	const [...featureIcons] = $(".section-features__icon");
	$(window).on("scroll", function () {
		if (!features) return;
		let featureSecPos = features.getBoundingClientRect().top;
		if (featureSecPos < 0) {
			featureIcons.forEach((icon) => {
				icon.style.animation = "scale 2s 1s infinite";
			});
		}
	});

	// subscribe page hero
	$(".main__subscribe .section-hero__box__img").addClass(
		"animate__animated animate__flash"
	);

	const cards = $(".section-content__container__cards")[0];
	$(window).on("scroll", function () {
		if (!cards) return;
		let cardsPos = cards.getBoundingClientRect().top;
		if (cardsPos < 0) {
			$(".card--2").addClass("animate__animated animate__pulse");
		}
	});
});
