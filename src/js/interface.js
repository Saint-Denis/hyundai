  function makeMobileImgSlider() {
      var $windowWidth = $(window).width();
      $(".main-banner__visual-area").each(function() {
          if ($windowWidth <= 740) {
              $(this).css({ "background-image": "url('" + $(this).attr("data-media-mobile") + "')" });
          } else {
              $(this).css({ "background-image": "url('" + $(this).attr("data-media-pc") + "')" });
          }
      });
  };

  function addResponsiveClasses() {
      var $windowHeight = $(window).height(),
          $windowWidth = $(window).width();

      if ($windowWidth <= 992) {
          $('body').removeClass('pc').addClass('mobile');
          if ($('body').hasClass('mobile')) {
              $('.top-nav__item').removeClass('active');
              $('.top-nav__list').css('height', $(window).height() - 55);
          };
      } else {
          $('body').removeClass('mobile').addClass('pc');
          $('.top-nav__list').css('height', 'auto');

      }
  }



  function dot() {
      if ($('body').hasClass('mobile')) {
          $('.news-area_item-title').dotdotdot({
              height: 90
          });
      };
  }



  $(document).ready(function() {
      flexibility(document.documentElement);



      //SELECT
      (function() {
          $('.page-select').styler();
      }());

      //ARROW TOP
      (function() {
          var $button = $('.arrow-top');
          $(window).scroll(function() {
              var $scroll = $(window).scrollTop();
              if ($scroll > $(document).height() - $(window).height() - $(".page-footer").height()) {
                  $button.addClass("stop").css("top", $(document).height() - $(".page-footer").height() - 175);
              } else {
                  $button.removeClass("stop").css("top", "auto")
              };

              if ($scroll == 0) {
                  $button.hide(0)
              } else {
                  $button.show(0)
              };

          });

          if ($(window).scrollTop() == 0) {
              $button.hide(0);
          } else {
              $button.show(0);
          };

          $button.bind("click", function() {
              $("body,html").animate({ scrollTop: 0 }, 300)
          });

      }());

      //PAGE FORM
      (function() {
          if ($('input[data-label="input-data"]').length) {
              //Datapicker
              $('input[data-label="input-data"]').datepicker({
                      inline: true,
                      changeYear: false,
                      changeMonth: false
                  },
                  $.datepicker.regional['ru']
              );


              jQuery(function($) {
                  $.datepicker.regional['ru'] = {
                      closeText: 'Закрыть',
                      prevText: '&#x3c;Пред',
                      nextText: 'След&#x3e;',
                      currentText: 'Сегодня',
                      monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
                          'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
                      ],
                      monthNamesShort: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
                          'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
                      ],
                      dayNames: ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'],
                      dayNamesShort: ['вск', 'пнд', 'втр', 'срд', 'чтв', 'птн', 'сбт'],
                      dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
                      weekHeader: 'Нед',
                      dateFormat: 'dd.mm.yy',
                      firstDay: 1,
                      isRTL: false,
                      showMonthAfterYear: false,
                      yearSuffix: ''
                  };
                  $.datepicker.setDefaults($.datepicker.regional['ru']);
              });
          } //End off if

      }());

      //FIXED HEADER
      (function() {
          var $navPos,
              $winPos;

          function refreshVar() {
              $navPos = $('.page-header').offset().top;
          }

          refreshVar();

          $(window).on('resize', refreshVar);

          $(window).on('scroll', function() {
              if ($('body').hasClass('mobile')) {
                  $winPos = $(this).scrollTop();

                  if ($winPos > $navPos) {
                      $('.page-header').addClass('fixed');
                  } else {
                      $('.page-header').removeClass('fixed');
                  };

              };
          });
      }());


      //SLIDERS
      (function() {
          if ($('.main-banner__slider').length > 0) {
              $('.main-banner__slider').slick({
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                  autoplay: true,
                  autoplaySpeed: 3000,
                  arrows: true,
                  dots: true,
                  responsive: [{
                      breakpoint: 740,
                      settings: {
                          arrows: false
                      }
                  }]
              })


              $('.slick-dots').append('<li class="slick-controls__btn"></li>');

              $('.slick-controls__btn').on('click', function() {

                  if (!$(this).hasClass('play')) {
                      $(this).addClass('play');
                      $('.main-banner__slider').slick('slickPause');
                  } else {
                      $(this).removeClass('play');
                      $('.main-banner__slider').slick('slickPlay');
                  };

              });
          };


          if ($('.news-slider__wrap').length > 0) {

              $('.news-slider__wrap').slick({
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                  autoplay: true,
                  autoplaySpeed: 5000,
                  fade: true,
                  cssEase: 'linear',
                  arrows: true,
                  dots: true,
                  responsive: [{
                      breakpoint: 992,
                      settings: {
                          arrows: false
                      }
                  }]
              })
          };

          if ($('.news-list--slider').length > 0) {
              $('.news-list--slider').slick({
                  slidesToShow: 4,
                  slidesToScroll: 1,
                  infinite: true,
                  arrows: true,
                  dots: true,
                  responsive: [{
                      breakpoint: 992,
                      settings: {
                          slidesToShow: 2
                      }
                  }, {
                      breakpoint: 740,
                      settings: {
                          slidesToShow: 1,
                          arrows: false
                      }
                  }]
              })

              $('.news-item--white .news-item__title').dotdotdot({
                  height: 60
              })
          };


          if ($('.news-area').length > 0) {
              $('.news-area').slick({
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                  autoplay: true,
                  arrows: true,
                  dots: true,
                  responsive: [{
                      breakpoint: 740,
                      settings: {
                          arrows: false
                      }
                  }]
              })
          };


          if ($('.auto-slider').length > 0) {
              $('.auto-slider').slick({
                  slidesToShow: 5,
                  slidesToScroll: 1,
                  infinite: false,
                  arrows: true,
                  dots: true,
                  responsive: [{
                      breakpoint: 992,
                      settings: {
                          slidesToShow: 3
                      }
                  }, {
                      breakpoint: 740,
                      settings: {
                          slidesToShow: 2,
                          arrows: false
                      }
                  }, {
                      breakpoint: 480,
                      settings: {
                          slidesToShow: 1,
                          arrows: false
                      }
                  }]
              })

              $('.auto-slider').lightGallery({
                  selector: '.auto-slider__item'
              });
          };


      }());


      //NEWS-TABS
      (function() {
          function makeNewsList() {
              var $controls = $('.news-room__controls');

              $('.news-room__mobile-toggle').on('click', function() {
                  if ($('body').hasClass('mobile')) {
                      if (!$controls.hasClass('active')) {
                          $controls.add($(this)).addClass('active');
                          $('.news-room__controls-link').on('click', function() {
                              var $this = $(this),
                                  $thisText = $this.text(),
                                  $thisControls = $this.closest('.news-room__controls'),
                                  $anotherContorls = $thisControls.find('.news-room__controls-item'),
                                  $controlItem = $this.closest('.news-room__controls-item');

                              $anotherContorls.removeClass('active');
                              $controlItem.addClass('active');
                              setTimeout(function() {
                                  $controls.removeClass('active');
                                  $('.news-room__mobile-toggle').text($thisText);
                                  $('.news-room__mobile-toggle').removeClass('active');
                              }, 350);

                          });
                      } else {
                          $controls.add($(this)).removeClass('active');
                      };
                  }

              });
          };

          makeNewsList();
      }());


      //PAGE-ACCORDION
      (function() {
          $('.page-accordion__trigger').on('click', function(e) {
              e.preventDefault();

              var $this = $(this),
                  $item = $this.closest('.page-accordion__item'),
                  $list = $this.closest('.page-accordion__list'),
                  $items = $list.find('.page-accordion__item'),
                  $content = $item.find('.page-accordion__inner'),
                  $otherContent = $list.find('.page-accordion__inner'),
                  $duration = 300;

              if (!$item.hasClass('active')) {
                  $items.removeClass('active');
                  $item.addClass('active');

                  $otherContent.stop(true, true).slideUp($duration);
                  $content.stop(true, true).slideDown($duration);
              } else {
                  $content.stop(true, true).slideUp($duration);
                  $item.stop(true, true).removeClass('active');

              }
          });
      }());

      //SHARING POPUP
      (function() {
          var $popup = $('.popup--js'),
              $overlay = $('.overlay');

          $('.sharing a').on('click', function(e) {
              e.preventDefault();
              if (!$popup.hasClass('open')) {
                  $popup.add($overlay).addClass('open');
              }
          });

          $('.popup__close').on('click', function() {
              $popup.add($overlay).removeClass('open');
          });

      }());


      //EMAIL POPUP
      (function() {
          var $popup = $('.popup--email'),
              $overlay = $('.overlay');

          $('.tool__link').on('click', function(e) {
              e.preventDefault();
              if (!$popup.hasClass('open')) {
                  $popup.add($overlay).addClass('open');
              }
          });

          $('.popup__close').on('click', function() {
              $popup.add($overlay).removeClass('open');
          });

      }());


      //SUBNAV, ALL MENU TABS, SEARCH AREA, BURGER-MENU
      (function() {
          var $overlay = $('.overlay'),
              $topNav = $('.top-nav'),
              $serchArea = $('.search-area'),
              $searchBg = $('.search-area__bg'),
              $searchForm = $('.search-area__form'),
              $reset = $('.search-area__reset'),
              $input = $('#search-area'),
              $areaClose = $('.search-area__close'),
              $pageHeader = $('.page-header'),
              $footerPanel = $('.footer-panel'),
              $contact = $('.footer-panel__contact'),
              $sharing = $('.footer-panel__share'),
              $upUrrow = $('.footer-panel__top'),
              $contactPanel = $('.contact-panel'),
              $sharingPanel = $('.sharing-panel'),
              $nav = $('.top-nav__list'),
              $line = $('<li class="sliding-line"></li>').appendTo($nav),
              $lineWidth,
              $liPos;



          $pageHeader.prepend('<div class="js-wrap"></div>');

          function refreshSlidingLine($activeLi) {
              $lineWidth = $activeLi.width();
              $liPos = $activeLi.offset().left;
          };


          function lineSet() {
              $line.animate({
                  'left': $liPos,
                  'width': $lineWidth
              }, 200)
          };

          $line.animate({
              'width': $('.top-nav__item.active').width()
          }, 200);


          $('.top-nav__item').each(function() {
              $(this).removeClass('on');
              if ($(this).hasClass('active')) {
                  refreshSlidingLine($('.top-nav__item.active'));
                  lineSet();
              }
          });

          //SUBNAV (FIRST LEVEL)
          $('.top-nav__link').on("click", function(e) {

              var $this = $(this),
                  $menu = $(".top-nav__list"),
                  $menuItem = $this.closest('.top-nav__item'),
                  $menuList = $this.closest('.top-nav__list'),
                  $menuItems = $menuList.find('.top-nav__item'),
                  $subNav = $menuItem.find('.subnav'),
                  $otherSubnav = $menuList.find('.subnav');


              if (!$this.closest('.top-nav__item').hasClass('no-sub')) {
                  e.preventDefault();
                  if ($('body').hasClass('pc')) {
                      if (!$menuItem.hasClass('on')) {
                          $('.js-wrap').css({
                              'min-height': $subNav.height()
                          });
                          $('.main-banner .slick-arrow').css('z-index', '0');

                          var $timeOut = setTimeout(function() {
                              $menuItems.stop(true, true).removeClass('on');
                              $menuItem.stop(true, true).addClass('on');
                              $otherSubnav.stop(true, true).removeClass('active');
                              $subNav.stop(true, true).addClass('active');
                              refreshSlidingLine($menuItem);
                              lineSet();
                          }, 250)
                      } else {
                          clearTimeout($timeOut);
                          $subNav.stop(true, true).removeClass('active');
                          $menuItem.stop(true, true).removeClass('on');
                          $('.js-wrap').css({
                              'min-height': 0
                          });
                          $('.main-banner .slick-arrow').css('z-index', '5');
                      }

                      $("body").on("click", ".subnav__close", function(e) {
                          e.preventDefault();
                          $subNav.stop(true, true).removeClass('active');
                          $menuItem.stop(true, true).removeClass('on');

                          $('.js-wrap').css({
                              'min-height': 0
                          });
                          $('.main-banner .slick-arrow').css('z-index', '5');
                          if ($menuItem.hasClass('active')) {
                              refreshSlidingLine($('.top-nav__item.active'));
                              lineSet();
                          }


                      });
                  } else if ($('body').hasClass('mobile')) {

                      if (!$menuItem.hasClass('active')) {
                          $menuItems.removeClass('active');
                          $menuItem.addClass('active');
                          $otherSubnav.stop(true, true).slideUp(300);
                          $subNav.stop(true, true).slideDown(300);
                      } else {
                          $subNav.stop(true, true).slideUp(300);
                          $menuItem.removeClass('active');
                      };
                  }
              } else {

                  refreshSlidingLine($menuItem);
                  lineSet();
              }

          });

          //OPEN ANOTHER SECTION IN SUBMENU
          $('.subnav__link').on('click', function(e) {
              var $this = $(this),
                  $subItem = $this.closest('.subnav__item'),
                  $sublist = $this.closest('ul#first-list'),
                  $subItems = $sublist.find('.subnav__item'),
                  $thisSubnav = $subItem.find('>.subnav__list'),
                  $anotherSubnav = $subItems.find('>.subnav__list');

              if ($('body').hasClass('pc')) {
                  if ($subItem.data('level')) {
                      e.preventDefault();
                      if ($subItem.data('level') == 'lv2') {
                          if (!$thisSubnav.hasClass('active')) {
                              $anotherSubnav.removeClass('active').hide();
                              $subItems.removeClass('active');
                              $subItem.addClass('active');
                              $thisSubnav.addClass('active').show();
                          } else {
                              $subItem.removeClass('active');
                              $thisSubnav.removeClass('active').hide();
                          }
                      } else {
                          if (!$thisSubnav.hasClass('active')) {
                              $subItems.removeClass('active');
                              $subItem.addClass('active');
                              $thisSubnav.addClass('active').show();
                          } else {
                              $subItem.removeClass('active');
                              $thisSubnav.removeClass('active').hide();
                          }
                      }
                  };
              } else if ($('body').hasClass('mobile')) {
                  if ($subItem.data('level') == 'lv2') {
                      e.preventDefault();
                      if (!$subItem.hasClass('active')) {
                          $subItems.removeClass('active');
                          $subItem.addClass('active');
                          $anotherSubnav.stop(true, true).slideUp(300);
                          $thisSubnav.stop(true, true).slideDown(300);
                      } else {
                          $thisSubnav.stop(true, true).slideUp(300);
                          $subItem.stop(true, true).removeClass('active');
                      }
                  }
              }

          });




          //TABS IN CARS MODELS
          $('.models-tab__controls-item:not(.models-tab__controls-item--all) .models-tab__controls-link').on('click', function(e) {
              e.preventDefault();
              var $activeTab = $(this).closest('.models-tab__controls-item'),
                  $contentItem = $('.models-tab__item'),
                  $activeTabPosition = $activeTab.attr('rel');
              $('.js-wrap').css({
                  'min-height': $contentItem.filter('#' + $activeTabPosition).height() + 55
              });
              setTimeout(function() {
                  $contentItem.filter('#' + $activeTabPosition)
                      .add($activeTab)
                      .addClass('active')
                      .siblings()
                      .removeClass('active');
              }, 200);
          });

          //ACCORDION ON CARS MODELS (MOBILE)
          $('.models-tab__heading').click(function() {
              var $this = $(this),
                  $activeItem = $this.closest('.models-tab__item'),
                  $list = $this.closest('.models-tab__list'),
                  $anotherItems = $list.find('.models-tab__item'),
                  $content = $activeItem.find('.models-tab__content'),
                  $otherContent = $list.find('.models-tab__content'),
                  $duration = 400;

              if (!$activeItem.hasClass('active')) {
                  $anotherItems.removeClass('active');
                  $activeItem.addClass('active');

                  $otherContent.stop(true, true).slideUp($duration);
                  $content.stop(true, true).slideDown($duration);
              } else {
                  $content.stop(true, true).slideUp($duration);
                  $activeItem.stop(true, true).removeClass('active');
              }
          });


          //SEARCH-AREA
          $(".search-link").on("click", function() {
              if (!$serchArea.hasClass('open')) {
                  if ($('.subnav').hasClass('active')) {
                      $('.subnav').removeClass('active');
                      $('.js-wrap').css({
                          'min-height': 0
                      })
                      $serchArea.addClass('open');
                      setTimeout(function() {
                          $searchForm.addClass('show');
                      }, 500);

                      $input.on('input', function() {
                          if (!$(this).val() == '') {
                              $reset.addClass('show');
                          } else {
                              $reset.removeClass('show');
                          }
                      });
                  } else {
                      $serchArea.addClass('open');
                      setTimeout(function() {
                          $searchForm.addClass('show');
                      }, 500);

                      $input.on('input', function() {
                          if (!$(this).val() == '') {
                              $reset.addClass('show');
                          } else {
                              $reset.removeClass('show');
                          }
                      });
                  }
              } else {
                  $searchForm.removeClass('show');
                  setTimeout(function() {
                      $serchArea.removeClass('open');
                  }, 300);
              };

              $areaClose.on('click', function(e) {
                  e.preventDefault();
                  $searchForm.removeClass('show');
                  setTimeout(function() {
                      $serchArea.removeClass('open');
                  }, 300);

              });
          });

          //MENU
          $('.burger-menu').on('click', function() {
              var $this = $(this);

              if (!$this.hasClass('open')) {
                  $this.addClass('open');
                  $topNav.addClass('active');
                  $overlay.addClass('open');
                  $searchForm.removeClass('show');
                  $footerPanel.removeClass('show');
                  setTimeout(function() {
                      $serchArea.removeClass('open');
                  }, 500);
              } else {
                  $this.removeClass('open');
                  $topNav.removeClass('active');
                  $overlay.removeClass('open');
              }
          });

          //FOOTER MENU
          $contact.on('click', function(e) {
              e.preventDefault();
              $contactPanel.toggleClass('show');
              $overlay.toggleClass('open');
          });

          $sharing.on('click', function(e) {
              e.preventDefault();
              $sharingPanel.toggleClass('show');
              $overlay.toggleClass('open');
          });


          $upUrrow.on('click', function(e) {
              e.preventDefault();
              $('html, body').animate({
                  scrollTop: 0
              }, 1000)
          });


          var $previousScroll = 0;

          $(window).on('scroll', function() {
              var $this = $(this),
                  $currentScroll = $this.scrollTop();

              if ($topNav.hasClass('active')) {
                  $footerPanel.removeClass('show');
              } else {
                  if ($currentScroll > $previousScroll) {

                      $footerPanel.removeClass('show');
                  } else if ($currentScroll < $previousScroll) {
                      $footerPanel.addClass('show');
                  };

                  if ($currentScroll + $this.height() > $(document).height() - 100) {
                      $footerPanel.addClass('show');
                  };
              };

              $previousScroll = $currentScroll;

          });

      }());

  }); //End of document ready



  $(window).on('resize load', function() {
      makeMobileImgSlider();
      addResponsiveClasses();
      dot();
  });



  // links pages
  $('body').append(
      '<div style="position: fixed; z-index: 1005; bottom: 0; right: 0; background: #fff; border: solid 1px #828286; width: 250px;"> \
     <a href="javascript:void(0);" style="float: right;background:#ccc; color:#000; padding: 5px 10px; text-decoration: none; font-size: 16px" onclick="$(this).parent().hide()">Close X</a> \
 <style> \
     #pages li { margin: 5px 0; } \
 </style> \
 <ol id="pages"> \
     <li><a href="text.html">Текстовая</a></li> \
     <li><a href="news-list.html">Список новостей</a></li> \
     <li><a href="news-detail.html">Детальная новостей</a></li> \
     <li><a href="form.html">Форма</a></li> \
     <li><a href="index.html">Главная</a></li> \
     <li><a href="auto-list.html">Список авто</a></li> \
     <li><a href="auto.html">Авто</a></li> \
 </ol> \
</div>');
