"use strict";

$(function () {
  $('[data-toggle="tooltip"]').tooltip();
  $('[data-toggle="popover"]').popover(); // AOS.init();

  $('.header-search-switch').on('click', function (e) {
    e.preventDefault();

    if (!$('.header-search-container').hasClass('active')) {
      $('.header-search-container').addClass('active');
      $('.header-search-container [name="search"]').trigger('focus');
    } else {
      $('.header-search-container').removeClass('active');
    }
  });
  $('body').on('click', function (e) {
    if (!$(e.target).closest('.header-search-container').length && !$(e.target).closest('.header-search-switch').length) {
      $('.header-search-container').removeClass('active');
    }
  });
  $('.header-cart-switch').on('click', function (e) {
    e.preventDefault();

    if (!$('.header-cart-container').hasClass('active')) {
      $('.header-cart-container').addClass('active');
    } else {
      $('.header-cart-container').removeClass('active');
    }
  });
  $('.header-cart-close').on('click', function (e) {
    e.preventDefault();
    $('.header-cart-container').removeClass('active');
  });
  $('body').on('click', function (e) {
    if (!$(e.target).closest('.header-cart-container').length && !$(e.target).closest('.header-cart-switch').length) {
      $('.header-cart-container').removeClass('active');
    }
  });
  $('.header-menu-switch').on('click', function (e) {
    e.preventDefault();

    if (!$('.header-menu-container').hasClass('active')) {
      $('.header-menu-container').addClass('active');
    } else {
      $('.header-menu-container').removeClass('active');
    }
  });
  $('body').on('click', function (e) {
    if (!$(e.target).closest('.header-menu-container').length && !$(e.target).closest('.header-menu-switch').length) {
      $('.header-menu-container').removeClass('active');
    }
  });
  $('.header-submenu-2-switch').on('click', function (e) {
    e.preventDefault();
    var mainSubmenu = $(this).closest('.header-submenu');
    var submenu2li = $(this).closest('li');
    var submenu2 = submenu2li.find('.header-submenu-2');

    if (!submenu2.hasClass('active')) {
      submenu2.addClass('active');
      mainSubmenu.children('li').hide();
      submenu2li.show();
    } else {
      submenu2.removeClass('active');
      submenu2li.hide();
      mainSubmenu.children('li').show();
    }
  });
  $('.header-submenu-2-close').on('click', function (e) {
    e.preventDefault();
    var mainSubmenu = $(this).closest('.header-submenu');
    var submenu2 = $(this).closest('.header-submenu-2');
    submenu2.removeClass('active');
    mainSubmenu.children('li').show();
  });
  $('.shop-filter-switch').on('click', function (e) {
    e.preventDefault();
    var shopFilter = $(this).closest('.shop-filter');
    var shopFilterOptions = shopFilter.find('.shop-filter-options');

    if (!shopFilterOptions.hasClass('active')) {
      $('.shop-filter-options').removeClass('active');
      shopFilterOptions.addClass('active');
    } else {
      shopFilterOptions.removeClass('active');
    }
  });
  $('body').on('click', function (e) {
    if (!$(e.target).closest('.shop-filter').length) {
      $('.shop-filter-options').removeClass('active');
    }
  }); // var Scrollbar = window.Scrollbar;
  // Scrollbar.init(document.querySelector('.products-scroll'), {});

  if ($('.products-swiper').length) {
    var productsSwiper = new Swiper('.products-swiper', {
      slidesPerView: 2,
      spaceBetween: 20,
      autoplay: {
        delay: 3000
      },
      breakpoints: {
        480: {
          slidesPerView: 3,
          spaceBetween: 20
        },
        720: {
          slidesPerView: 3,
          spaceBetween: 20
        },
        960: {
          slidesPerView: 4,
          spaceBetween: 20
        }
      }
    });
  }

  if ($('.news-swiper').length) {
    var newsSwiper = new Swiper('.news-swiper', {
      slidesPerView: 2,
      spaceBetween: 20,
      autoplay: {
        delay: 3000
      },
      breakpoints: {
        480: {
          slidesPerView: 3,
          spaceBetween: 20
        },
        720: {
          slidesPerView: 3,
          spaceBetween: 20
        },
        960: {
          slidesPerView: 4,
          spaceBetween: 20
        }
      }
    });
  }

  if ($('.product-images-swiper').length) {
    var productImagesSwiper = new Swiper('.product-images-swiper', {
      autoplay: {
        delay: 3000
      },
      direction: 'vertical',
      pagination: {
        el: '.product-images-swiper-pagination',
        clickable: true,
        renderBullet: function renderBullet(index, className) {
          return '<span class="' + className + '">0' + (index + 1) + '</span>';
        }
      }
    });
  } // let homeSlider = $('.home-slider');
  // if (homeSlider.length) {
  //   homeSlider.slick({
  //     arrows: false,
  //     dots: true,
  //     autoplay: true
  //   });
  // }
  // let newsSlider = $('.news-slider');
  // if (newsSlider.length) {
  //   newsSlider.slick({
  //     prevArrow: $('.news-slider-arrow-prev'),
  //     nextArrow: $('.news-slider-arrow-next'),
  //     slidesToShow: 3,
  //     // infinite: false,
  //     autoplay: true,
  //     responsive: [{
  //         breakpoint: 1020,
  //         settings: {
  //           slidesToShow: 3
  //         }
  //       },
  //       {
  //         breakpoint: 720,
  //         settings: {
  //           slidesToShow: 2
  //         }
  //       },
  //       {
  //         breakpoint: 540,
  //         settings: {
  //           slidesToShow: 2
  //         }
  //       },
  //       {
  //         breakpoint: 360,
  //         settings: {
  //           slidesToShow: 1
  //         }
  //       }
  //     ]
  //   });
  // }
  // counter up
  // let counterElementsFirst = document.querySelector('.counter');
  // if (counterElementsFirst) {
  //   let counterUp = window.counterUp['default'];
  //   let counterElements = document.querySelectorAll('.counter')
  //   // console.log(counterElementsFirst);
  //   new Waypoint({
  //     element: counterElementsFirst,
  //     handler: function () {
  //       for (let el of counterElements) {
  //         counterUp(el)
  //         el.classList.remove('invisible');
  //       }
  //       this.destroy()
  //     },
  //     offset: 'bottom-in-view',
  //   })
  // }


  $('.more-btn').on('click', function (e) {
    e.preventDefault();
    var id;
    id = $(this).attr('href');

    if (!id) {
      id = $(this).data('target');
    }

    var container = $(id);

    if (container.length) {
      $(this).toggleClass('more-btn-active');
      container.toggleClass('more-container-active');
    }
  });
  $(window).on('scroll', function () {//
  }); // on scroll

  $(window).on('resize', function () {//
  }); // on resize
}); // ready end

$(window).on('load', function () {// AOS.init();
});

function isScrolledIntoView(elem) {
  var docViewTop = $(window).scrollTop();
  var docViewBottom = docViewTop + $(window).height();
  var elemTop = $(elem).offset().top;
  var elemBottom = elemTop + $(elem).height();
  return elemBottom <= docViewBottom && elemTop >= docViewTop;
}