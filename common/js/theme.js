// Avoid `console` errors in browsers that lack a console.
(function() {
  var method;
  var noop = function() {};
  var methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd', 'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'];
  var length = methods.length;
  var console = (window.console = window.console || {});

  while (length--) {
    method = methods[length];

    // Only stub undefined methods.
    if (!console[method]) {
      console[method] = noop;
    }
  }
})();

// Place any jQuery/helper plugins in here.
// replace mobile image
(function($) {
  var spW = 839; // set mobile size
  var wW = $(window).width();
  var isMobile = wW <= spW;
  $('.img-res').each(function(index, element) {
    if (isMobile) {
      $(element).attr('src', $(element).data('sp'));
    } else {
      $(element).attr('src', $(element).data('pc'));
    }
  });

  var observer = lozad('.lozad');
  observer.observe();
})(jQuery);

// menu
(function($) {
  'use strict';
  var $btnMenu = $('.js-menu');
  var $nav = $btnMenu.next('.js-nav');
  var $window = $(window);
  $btnMenu.click(function() {
    $(this).toggleClass('closed');
    $nav.toggleClass('opened');
  });
  $window.scroll(function(e) {
    var scrollTop = $(e.target).scrollTop();
    if (scrollTop > $btnMenu.height()) {
      $btnMenu.addClass('menu-scrolled');
    } else {
      $btnMenu.removeClass('menu-scrolled');
    }
  });
})(jQuery);
