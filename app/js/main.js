$(function() {

  $('.header__slider').slick({
    infinite: true,
    fade: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 10000,
    dots: true,
    customPaging: function(slider, i) {
      return '<div class="header__dots" id=' + i + "></div>";
    },
  });

  $('.minib__slider').slick({
    infinite: true,
    fade: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
    customPaging: function(slider, i) {
      return '<div class="minib__dots" id=' + i + "></div>";
    },
  });

  $('.portfolio__slider').slick({
    infinite: true,
    fade: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
    prevArrow: '<div class="prev"></div>',
    nextArrow: '<div class="next"></div>',
    customPaging: function(slider, i) {
      return '<div class="portfolio__dots" id=' + i + "></div>";
    },
  });

  //Паралакс
  $(window).resize(function() {
    width = $(window).width();
    if (width >= 991) {
      if ($('.parallaxie').length !== 0) {
        $('.parallaxie').parallaxie({
          speed: 0.4,
          size: "auto",
        });
      }
    }
  });


  //Работа гамбургер меню
  var Menu = {

    el: {
      ham: $('.burger'),
      link: $('.nav-mobile__elem'),
      check: $('.nav-mobile'),
      circle: $('.header__circle')
    },

    init: function() {
      Menu.bindUIactions();
    },

    bindUIactions: function() {
      Menu.el.link
        .on(
          'click',
          function(event) {
            Menu.activateMenu(event);

          }
        ),
        Menu.el.ham
        .on(
          'click',
          function(event) {
            Menu.activateMenu(event);
            event.preventDefault();
          }
        )
    },

    activateMenu: function() {
      Menu.el.check.toggleClass('nav-mobile-active');
      Menu.el.circle.toggleClass('header__circle-active');
    }
  };

  Menu.init();

  //Работа скролла
  var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 500,
    easing: 'easeInOutCubic'
  });

  //Работа wow animate
  var wow = new WOW({
    offset: 200,
    mobile: false,
  });
  wow.init();

  var wowMini = new WOW({
    mobile: false,
    boxClass: 'wow-mini',
  });
  wowMini.init();

});
