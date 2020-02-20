(function ($) {
  'use strict';
  var isMobile = $(window).width() <= 839;
  var $window = $(window);

  // visual slider
  (function () {
    var $visualSlider = $('.js-visual-slide');
    var $thumbSlider = $('.js-thumb-slide');
    var $thumbSliderItem = $thumbSlider.find('.thumb-item');
    var $thumbPrevArrow = $thumbSlider.find('.thumb-prev-arrow');
    var $thumbNextArrow = $thumbSlider.find('.thumb-next-arrow');

    $visualSlider.slick({
      arrows: false,
      autoplay: true,
      autoplaySpeed: 2000,
    });

    $thumbSliderItem.eq(0).addClass('active');
    $visualSlider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
      $thumbSliderItem.removeClass('active');
      $thumbSliderItem.eq(nextSlide).addClass('active');
    });

    $thumbSliderItem.click(function () {
      var currentIndex = $(this).data('index');
      $visualSlider.slick('slickGoTo', Number(currentIndex));
      $visualSlider.slick('slickPlay');
    });

    $thumbPrevArrow.click(function () {
      $visualSlider.slick('slickPrev');
    });

    $thumbNextArrow.click(function () {
      $visualSlider.slick('slickNext');
    });
  })();

  // visual banner
  (function () {
    var $visualBannerLink = $('.js-visual-banner-link');
    $visualBannerLink.click(function () {
      var target = $(this).data('href');
      $('html, body').animate(
        {
          scrollTop: $('.js-' + target).offset().top,
        },
        200
      );
    });
  })();

  // tvcm section
  (function () {
    var $tvcm = $('.js-tvcm-video');
    function hoverVideo() {
      if (!isMobile) {
        $(this)
          .get(0)
          .play();
      }
    }
    function hideVideo() {
      if (!isMobile) {
        $(this)
          .get(0)
          .pause();
      }
    }
    $tvcm.hover(hoverVideo, hideVideo);
  })();

  // tvcm modal
  (function () {
    var $btnTVCM = $('.js-tvcm-button');
    var $modalTVCM = $('.js-tvcm-modal');
    var $btnClosedTVCM = $('.js-tvcm-close-button');
    $btnTVCM.click(function () {
      var $currentBtn = $(this);
      var $video = $currentBtn.siblings('.js-tvcm-video');
      if (isMobile) {
        $video.get(0).play();
      } else {
        $modalTVCM.addClass('opened');
        if ($modalTVCM.hasClass('opened')) {
          var poster = $video.attr('poster');
          var src = $video.find('source').attr('src');
          var $newVideo = '<video id="js-tvcm-modal-video" class="tvcm-video js-tvcm-modal-video" poster="' + poster + '"><source src="' + src + '" type="video/mp4"></source></video><div class="tvcm-button js-tvcm-modal-button trans hide"></div>';
          $modalTVCM.find('.tvcm-modal-content').append($newVideo);
          $('.js-tvcm-modal-video')
            .get(0)
            .play();
        }
      }
    });

    $(document).on('click', '.js-tvcm-modal-video', function () {
      $(this)
        .siblings('.js-tvcm-modal-button')
        .removeClass('hide');
      $('.js-tvcm-modal-video')
        .get(0)
        .pause();
    });

    $btnClosedTVCM.click(function () {
      $modalTVCM.removeClass('opened');
      $('.js-tvcm-modal-button').remove();
      $('.js-tvcm-modal-video').remove();
    });
    $(document).on('click', '.js-tvcm-modal-button', function () {
      $(this)
        .siblings('.js-tvcm-modal-video')
        .get(0)
        .play();
      $(this).addClass('hide');
    });
  })();

  // memory scroll
  (function () {
    var $memoryBlock = $('.js-memory');
    var memoryBlockHeight = 0;
    var $memoryWrapper = $('.js-memory-wrapper');
    var $banner = $('.js-memory-visual');
    var $btnPrevScroll = $('.js-memory-button-prev');
    var $btnNextScroll = $('.js-memory-button-next');
    var bannerWidth = $banner.width();
    var scrollStep = $window.width() / 6;
    var scrollTopMemoryBlock = 0;

    $window.scroll(function () {
      var scrollTop = $window.scrollTop();
      scrollTopMemoryBlock = $memoryBlock.offset().top;
      var scrollLeftBanner = scrollTop - scrollTopMemoryBlock;
      var memoryWrapperHeight = $memoryWrapper.outerHeight();

      if (!memoryBlockHeight) {
        memoryBlockHeight = bannerWidth + $memoryWrapper.outerHeight() - $window.width();
        $memoryBlock.height(memoryBlockHeight);
      }

      if (scrollTop >= scrollTopMemoryBlock && scrollTop <= scrollTopMemoryBlock + memoryBlockHeight) {
        if (scrollLeftBanner <= 0) {
          $btnPrevScroll.addClass('disabled');
          $btnNextScroll.removeClass('disabled');
        }
        if (scrollLeftBanner + $window.width() <= bannerWidth) {
          $memoryBlock.removeClass('bottom-position').addClass('top-position');
          $banner.css('transform', 'translateX(' + -scrollLeftBanner + 'px)');
          $memoryWrapper.removeAttr('style');
        } else if (scrollTop >= scrollTopMemoryBlock + memoryBlockHeight - $memoryWrapper.outerHeight()) {
          $memoryBlock.addClass('bottom-position').removeClass('top-position');
          $memoryWrapper.css('top', memoryBlockHeight - memoryWrapperHeight);
          $btnPrevScroll.removeClass('disabled');
          $btnNextScroll.addClass('disabled');
        }
      } else {
        if (scrollTop < scrollTopMemoryBlock) {
          $btnPrevScroll.addClass('disabled');
          $btnNextScroll.removeClass('disabled');
        }
        if (scrollTop > scrollTopMemoryBlock + $memoryBlock.height()) {
          $btnNextScroll.addClass('disabled');
          $btnPrevScroll.removeClass('disabled');
          $banner.css('transform', 'translateX(' + (-bannerWidth + $window.width()) + 'px)');
        }
        $memoryBlock.removeClass('top-position');
      }
    })
      ;
    $btnPrevScroll.click(function () {
      if (!$(this).hasClass('disabled')) {
        var top = $window.scrollTop();
        $window.scrollTop(top - scrollStep);
      }
    });
    $btnNextScroll.click(function () {
      if (!$(this).hasClass('disabled')) {
        var top = $window.scrollTop();
        $window.scrollTop(top + scrollStep);
      }
    });
  })();

  // outdoor
  (function () {
    var $outdoorSlider = $('.js-outdoot-slide');
    var $outdoorThumb = $('.js-outdoor-thumb');
    var $outdoorThumbItem = $outdoorThumb.find('.outdoor-thumb-item');

    $outdoorThumbItem.eq(0).addClass('active');
    $outdoorSlider.slick({
      arrows: true,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 839,
          settings: {
            arrows: false,
          },
        },
      ],
    });

    $outdoorSlider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
      $outdoorThumbItem.removeClass('active');
      $outdoorThumbItem.eq(nextSlide).addClass('active');
    });

    $outdoorThumbItem.click(function () {
      var currentIndex = $(this).data('index');
      $outdoorSlider.slick('slickGoTo', Number(currentIndex));
      $outdoorSlider.slick('slickPlay');
    });
  })();
})(jQuery);
