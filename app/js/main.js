$(function () {
  $(".intro__slider").slick({
    arrows: false,
    dots: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 7000,
    pauseOnFocus: false,
    pauseOnHover: false,
    draggable: false,
  });
  var $status = $(".tracks__count");
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
    prevArrow:
      '<button class="slick-prev slick-arrow" aria-label="Prev" type="button"><svg width="71" height="16" viewBox="0 0 71 16" xmlns="http://www.w3.org/2000/svg"><path d="M0.292892 7.29289C-0.0976334 7.68342 -0.0976334 8.31658 0.292892 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41422 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292892 7.29289ZM71 7L1 7V9L71 9V7Z" fill="url(#paint0_linear_98:28)"/><defs><linearGradient id="paint0_linear_98:28" x1="36" y1="8" x2="1" y2="8"gradientUnits="userSpaceOnUse"><stop stop-color="#518EAA"/><stop offset="1" stop-color="#5DDDC1"/></linearGradient></defs></svg></button>',
    nextArrow:
      '<button class="slick-next slick-arrow" aria-label="Next" type="button" style=""><svg width="71" height="16" viewBox="0 0 71 16" xmlns="http://www.w3.org/2000/svg"><path d="M70.7071 8.70711C71.0976 8.31658 71.0976 7.68342 70.7071 7.29289L64.3431 0.928932C63.9526 0.538408 63.3195 0.538408 62.9289 0.928932C62.5384 1.31946 62.5384 1.95262 62.9289 2.34315L68.5858 8L62.9289 13.6569C62.5384 14.0474 62.5384 14.6805 62.9289 15.0711C63.3195 15.4616 63.9526 15.4616 64.3431 15.0711L70.7071 8.70711ZM0 9L70 9V7L0 7L0 9Z" fill="url(#paint0_linear_98:0)"/><defs><linearGradient id="paint0_linear_98:0" x1="35" y1="8" x2="70" y2="8"gradientUnits="userSpaceOnUse"><stop stop-color="#518EAA"/><stop offset="1" stop-color="#5DDDC1"/></linearGradient></defs></svg></button>',
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
            '<button class="slick-prev slick-arrow" aria-label="Prev" type="button"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20px" height="40px" viewBox="0 0 20 40" version="1.1"><g><path fill="rgba(8,10,12,0.8)" d="M 2.476562 18.671875 L 13.101562 8.046875 C 13.835938 7.3125 15.023438 7.3125 15.75 8.046875 L 17.515625 9.8125 C 18.25 10.546875 18.25 11.734375 17.515625 12.460938 L 9.992188 20 L 17.523438 27.53125 C 18.257812 28.265625 18.257812 29.453125 17.523438 30.179688 L 15.757812 31.953125 C 15.023438 32.6875 13.835938 32.6875 13.109375 31.953125 L 2.484375 21.328125 C 1.742188 20.59375 1.742188 19.40625 2.476562 18.671875 Z M 2.476562 18.671875 "/></g></svg></button>',
          nextArrow:
            '<button class="slick-next slick-arrow" aria-label="Next" type="button" style=""><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20px" height="40px" viewBox="0 0 20 40" version="1.1"><g><path fill="rgba(8,10,12,0.8)" d="M 17.523438 21.328125 L 6.898438 31.953125 C 6.164062 32.6875 4.976562 32.6875 4.25 31.953125 L 2.484375 30.1875 C 1.75 29.453125 1.75 28.265625 2.484375 27.539062 L 10.015625 20.007812 L 2.484375 12.476562 C 1.75 11.742188 1.75 10.554688 2.484375 9.828125 L 4.242188 8.046875 C 4.976562 7.3125 6.164062 7.3125 6.890625 8.046875 L 17.515625 18.671875 C 18.257812 19.40625 18.257812 20.59375 17.523438 21.328125 Z M 17.523438 21.328125 "/></g></svg></button>',
        },
      },
    ],
  });
  VanillaTilt.init(document.querySelectorAll(".rooms__item"), {
    max: 3,
    glare: true,
    "max-glare": 0.23,
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

  var lastScroll = 0;
  const defaultOffset = 1000;
  const header = document.querySelector(".header");
  const menuBtn = document.querySelector(".menu__btn");

  const scrollPosition = () =>
    window.pageYOffset || document.documentElement.scrollTop;
  const screenWidth = window.screen.width;
  const screenHeight = window.screen.height;

  window.addEventListener("scroll", () => {
    if (screenWidth < 1366) {
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
