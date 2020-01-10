/*
* Template Name: SoftLand
* Template URL: https://bootstrapmade.com/softland-bootstrap-app-landing-page-template/
* License: https://bootstrapmade.com/license/
*/

(function ($) {
	"use strict";

	// Back to top button
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			$('.back-to-top').fadeIn('slow');
		} else {
			$('.back-to-top').fadeOut('slow');
		}
	});
	$('.back-to-top').click(function () {
		$('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
		return false;
	});

	var siteMenuClone = function () {

		$('.js-clone-nav').each(function () {
			var $this = $(this);
			$this.clone().attr('class', 'site-nav-wrap').appendTo('.site-mobile-menu-body');
		});


		setTimeout(function () {

			var counter = 0;
			$('.site-mobile-menu .has-children').each(function () {
				var $this = $(this);

				$this.prepend('<span class="arrow-collapse collapsed">');

				$this.find('.arrow-collapse').attr({
					'data-toggle': 'collapse',
					'data-target': '#collapseItem' + counter,
				});

				$this.find('> ul').attr({
					'class': 'collapse',
					'id': 'collapseItem' + counter,
				});

				counter++;

			});

		}, 1000);

		$('body').on('click', '.arrow-collapse', function (e) {
			var $this = $(this);
			if ($this.closest('li').find('.collapse').hasClass('show')) {
				$this.removeClass('active');
			} else {
				$this.addClass('active');
			}
			e.preventDefault();

		});

		$(window).resize(function () {
			var $this = $(this),
				w = $this.width();

			if (w > 768) {
				if ($('body').hasClass('offcanvas-menu')) {
					$('body').removeClass('offcanvas-menu');
				}
			}
		})

		$('body').on('click', '.js-menu-toggle', function (e) {
			var $this = $(this);
			e.preventDefault();

			if ($('body').hasClass('offcanvas-menu')) {
				$('body').removeClass('offcanvas-menu');
				$('body').find('.js-menu-toggle').removeClass('active');
			} else {
				$('body').addClass('offcanvas-menu');
				$('body').find('.js-menu-toggle').addClass('active');
			}
		})

		// click outisde offcanvas
		$(document).mouseup(function (e) {
			var container = $(".site-mobile-menu");
			if (!container.is(e.target) && container.has(e.target).length === 0) {
				if ($('body').hasClass('offcanvas-menu')) {
					$('body').removeClass('offcanvas-menu');
					$('body').find('.js-menu-toggle').removeClass('active');
				}
			}
		});
	};
	siteMenuClone();

	var siteScroll = function () {

		$(window).scroll(function () {

			var st = $(this).scrollTop();

			if (st > 100) {
				$('.js-sticky-header').addClass('shrink');
			} else {
				$('.js-sticky-header').removeClass('shrink');
			}

		})

	};
	siteScroll();

	var siteSticky = function () {
		$(".js-sticky-header").sticky({ topSpacing: 0 });
	};
	siteSticky();

	var siteOwlCarousel = function () {
		$('.testimonial-carousel').owlCarousel({
			center: true,
			items: 1,
			loop: true,
			margin: 0,
			autoplay: true,
			smartSpeed: 1000,
		});
	};
	siteOwlCarousel();

	//---------------------------------------------
	//Nivo slider
	//---------------------------------------------
	$('#ensign-nivoslider').nivoSlider({
		effect: 'random',
		slices: 15,
		boxCols: 12,
		boxRows: 8,
		animSpeed: 500,
		pauseTime: 5000,
		startSlide: 0,
		directionNav: true,
		controlNavThumbs: false,
		pauseOnHover: true,
		manualAdvance: false,
	});

	/*---------------------
    Venobox
  --------------------- */
	var veno_box = $('.venobox');
	veno_box.venobox();

	/*----------------------------
   Parallax
  ------------------------------ */
	var well_lax = $('.wellcome-area');
	well_lax.parallax("50%", 0.4);
	var well_text = $('.wellcome-text');
	well_text.parallax("50%", 0.6);

	/*--------------------------
   collapse
  ---------------------------- */
	var panel_test = $('.panel-heading a');
	panel_test.on('click', function () {
		panel_test.removeClass('active');
		$(this).addClass('active');
	});

	/*----------------------------
   isotope active
  ------------------------------ */
	// portfolio start
	$(window).on("load", function () {
		var $container = $('.awesome-project-content');
		$container.isotope({
			filter: '*',
			animationOptions: {
				duration: 750,
				easing: 'linear',
				queue: false
			}
		});
		var pro_menu = $('.project-menu li a');
		pro_menu.on("click", function () {
			var pro_menu_active = $('.project-menu li a.active');
			pro_menu_active.removeClass('active');
			$(this).addClass('active');
			var selector = $(this).attr('data-filter');
			$container.isotope({
				filter: selector,
				animationOptions: {
					duration: 750,
					easing: 'linear',
					queue: false
				}
			});
			return false;
		});

	});
	//portfolio end


})(jQuery);

AOS.init({
	easing: 'ease',
	duration: 1000,
	once: true
});
