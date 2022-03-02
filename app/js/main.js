$(function () {
  $(".intro__slider").slick({
    arrows: false,
    dots: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 5500,
    speed: 1000,
    pauseOnFocus: false,
    pauseOnHover: false,
    draggable: false,
  });

  let $status = $(".tracks__count");
  $(".tracks__slider").on(
    "init",
    function (event, slick, currentSlide, nextSlide) {
      $status.text("0" + (slick.currentSlide + 1) + "/" + slick.slideCount);
    }
  );
  $(".tracks__slider").slick({
    centerMode: true,
    slidesToShow: 3,
    variableWidth: true,
    initialSlide: 1,
    speed: 500,
    draggable: false,
    prevArrow:
      '<button class="slick-prev slick-arrow" aria-label="Prev" type="button"><svg width="71" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M.3 7.3a1 1 0 0 0 0 1.4l6.36 6.37a1 1 0 0 0 1.41-1.41L2.41 8l5.66-5.66A1 1 0 0 0 6.66.93L.29 7.29ZM71 7H1v2h70V7Z" fill="url(#paint0_linear_98:28)" /><defs><linearGradient id="paint0_linear_98:28" x1="36" y1="8" x2="1" y2="8" gradientUnits="userSpaceOnUse"><stop stop-color="#518EAA" /><stop offset="1" stop-color="#5DDDC1" /></linearGradient></defs></svg></button>',
    nextArrow:
      '<button class="slick-next slick-arrow" aria-label="Next" type="button" style=""><svg width="71" height="16"><path d="M70.7 8.7a1 1 0 0 0 0-1.4L64.35.92a1 1 0 1 0-1.41 1.41L68.59 8l-5.66 5.66a1 1 0 0 0 1.41 1.41l6.37-6.36ZM0 9h70V7H0v2Z" fill="url(#paint0_linear_98:0)" /><defs><linearGradient id="paint0_linear_98:0" x1="35" y1="8" x2="70" y2="8" gradientUnits="userSpaceOnUse"><stop stop-color="#518EAA" /><stop offset="1" stop-color="#5DDDC1" /></linearGradient></defs></svg></button>',
    responsive: [
      {
        breakpoint: 864,
        settings: {
          centerMode: false,
          variableWidth: false,
          slidesToShow: 1,
        },
      },
    ],
  });
  $(".tracks__slider").on(
    "afterChange",
    function (event, slick, currentSlide, nextSlide) {
      if (currentSlide + 1 < 10)
        $status.text("0" + (slick.currentSlide + 1) + "/" + slick.slideCount);
      else $status.text(slick.currentSlide + 1 + "/" + slick.slideCount);
    }
  );
  $(".slick-slide").on("click", function () {
    const index = $(this).attr("data-slick-index");
    $(".tracks__slider").slick("slickGoTo", index);
  });
  $(".reviews__slider").slick({
    arrows: false,
    dots: true,
    fade: true,
    speed: 500,
    responsive: [
      {
        breakpoint: 550,
        settings: {
          dots: false,
          arrows: true,
          prevArrow:
            '<button class="slick-prev slick-arrow" aria-label="Prev" type="button"><svg width="20" height="40"><path fill="rgba(8,10,12,0.8)" d="M2.48 18.67 13.1 8.05a1.87 1.87 0 0 1 2.65 0l1.77 1.76c.73.74.73 1.92 0 2.65L9.99 20l7.53 7.53c.74.74.74 1.92 0 2.65l-1.76 1.77c-.74.74-1.92.74-2.65 0L2.48 21.33a1.87 1.87 0 0 1 0-2.66Zm0 0"/></svg></button>',
          nextArrow:
            '<button class="slick-next slick-arrow" aria-label="Next" type="button" style=""><svg width="20" height="40"><path fill="rgba(8,10,12,0.8)" d="M17.52 21.33 6.9 31.95c-.74.74-1.92.74-2.65 0L2.48 30.2a1.87 1.87 0 0 1 0-2.65L10.02 20l-7.54-7.53a1.87 1.87 0 0 1 0-2.65l1.76-1.78a1.87 1.87 0 0 1 2.65 0l10.63 10.62c.74.74.74 1.92 0 2.66Zm0 0"/></svg></button>',
        },
      },
    ],
  });

  VanillaTilt.init(document.querySelectorAll(".rooms__item"), {
    max: 3,
    glare: true,
    "max-glare": 0.24,
    speed: 1000,
  });

  function toggleMenu() {
    $(".menu__list").toggleClass("menu__list--active");
    $(".menu__overlay").toggleClass("menu__overlay--active");
    $(".menu__btn").toggleClass("menu__btn--active");
    $(".menu__login").toggleClass("menu__login--active");
    $("body").toggleClass("hide-overflow");
  }

  $(".menu__btn").on("click", () => toggleMenu());
  $(".menu__overlay").on("click", () => toggleMenu());

  let lastScroll = 0;
  const header = document.querySelector(".header");

  const scrollPosition = () =>
    window.pageYOffset || document.documentElement.scrollTop;
  const screenWidth = window.screen.width;
  const screenHeight = window.screen.height;

  window.addEventListener("scroll", () => {
    if (screenWidth < 1025) {
      if (scrollPosition() > screenHeight)
        header.classList.add("header--fixed");
      else header.classList.remove("header--fixed");

      if (scrollPosition() > lastScroll || scrollPosition() < screenHeight)
        //scroll down
        header.classList.remove("header--pinned");
      else if (scrollPosition() < lastScroll)
        //scroll up
        header.classList.add("header--pinned");
    }
    lastScroll = scrollPosition();
  });
});
