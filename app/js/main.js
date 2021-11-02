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
  });
  VanillaTilt.init(document.querySelectorAll(".rooms__item"), {
    max: 3,
    glare: true,
    "max-glare": 0.23,
    speed: 1000,
  });
});
