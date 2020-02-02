(function ($) {
  'use strict';

  // ScrollUp Active Code
  if ($.fn.scrollUp) {
    $.scrollUp({
      scrollSpeed: 1500,
      scrollText: '<i class="fa fa-angle-up" aria-hidden="true"></i>'
    });
  }

  // Video Active Code
  if ($.fn.magnificPopup) {
    $('.video--play--btn').magnificPopup({
      disableOn: 0,
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: true,
      fixedContentPos: false
    });
  }

  // Video Active Code
  if ($.fn.magnificPopup) {
    $('.video--play--btn').magnificPopup({
      disableOn: 0,
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: true,
      fixedContentPos: false
    });
  }

  // PreventDefault a Click
  $("a[href='#']").on('click', function ($) {
    $.preventDefault();
  });

  // wow Active Code
  if ($.fn.init) {
    new WOW().init();
  }

  // matchHeight Active Code
  if ($.fn.matchHeight) {
    $('.item').matchHeight();
  }

  var $window = $(window);

  // Preloader active code
  $window.on('load', function () {
    $('#preloader').fadeOut('slow', function () {
      $(this).remove();
    });
  });

})(jQuery);