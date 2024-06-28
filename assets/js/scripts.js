var $ = jQuery.noConflict();

/* Script on ready
------------------------------------------------------------------------------*/
$(() => {
	/* Do jQuery stuff when DOM is ready */
	//model close
	$('.model-close').click(function () {
		$('.modal').toggleClass('active');
	});

	//start back to top button 
	if ($('.mw-wrap').length) {
		var btn = $('.top-up');

		$(window).scroll(function () {
			if ($(window).scrollTop() > 300) {
				btn.addClass('show');
			} else {
				btn.removeClass('show');
			}
		});

		btn.on('click', function (e) {
			e.preventDefault();
			$('html, body').animate({ scrollTop: 0 }, '300');
		});

	}
	//end back to top button

	//start search menu 
	if ($('.mw-wrap').length) {
		$('.search-button').click(function () {
			$('.search-input').toggleClass('active');
		});
	}
	//end search menu

	if ($('.cs-wrap').length) {
		$('.cs-wrap').each(function (index, element) {
			var $slider = $(element);
			$slider.slick({
				slidesToShow: 4,
				dots: true,
				prevArrow: false,
				nextArrow: false,
				appendDots: $slider.closest('.cs-desc').find('.custom-dt'),
				rows: 1,
				responsive: [
					{
						breakpoint: 768,
						settings: {
							slidesToShow: 3
						}
					},
					{
						breakpoint: 521,
						settings: {
							slidesToShow: 2
						}
					}
				]
			});

			// next and prev button success stories for this specific slider
			$slider.closest('.cs-desc').find('.prev-btn').on('click', function () {
				$slider.slick("slickPrev");
			});

			$slider.closest('.cs-desc').find('.next-btn').on('click', function () {
				$slider.slick("slickNext");
			});
		});
	}

	//mordern workplace slider
	if ($('.mw-wrap').length) {
		$('.mw-wrap').slick({
			slidesToShow: 4,
			arrows: true,
			infinite: false,
			// adaptiveHeight: true,
			responsive: [
				{
					breakpoint: 1200,
					settings: {
						slidesToShow: 3
					}
				},
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 1
					}
				}
			]
		});
		// start modern workplace tabbing 

		$('.modern-workplace .tab-content:first-child').show();
		$('.modern-workplace .tab-content:first-child').addClass('active');
		$('.modern-workplace .mw-wrap-content:first-child').addClass('active');
		$('.modern-workplace .mw-wrap-content').click(function (e) {
			$(this).addClass('active').siblings('.modern-workplace .mw-wrap-content').removeClass('active');
			$(this).parents('.modern-workplace').find('.tab-content').removeClass('active');
			$(this).parents('.modern-workplace').find('.tab-content').hide();
			$(this).parents('.modern-workplace').find($(this).attr("data-target")).fadeIn().addClass('active');
		});

		// end modern workplace tabbing
	}

	//start testimonials section
	if ($('.t-wrap').length) {
		$('.t-wrap').each(function (index, element) {
			var $slider = $(element);
			$slider.slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				loops: true,
				dots: false,
				variableWidth: true,
				arrows: false,
				responsive: [
					{
						breakpoint: 991,
						settings: {
							slidesToShow: 1,
							variableWidth: false,
							slidesToScroll: 1,

						}
					}
				]
			});

			$slider.closest('.t-container').find('.prev-btn').on('click', function () {
				$slider.slick("slickPrev");
			});

			$slider.closest('.t-container').find('.next-btn').on('click', function () {
				$slider.slick("slickNext");
			});
		});
	}
	//end start testimonials section

	//start full width promo slider
	$('.fwp-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		arrows: false,
		asNavFor: '.fwp-image'
	});
	$('.fwp-image').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		asNavFor: '.fwp-slider',
		dots: false,
		arrows: false,
		centerMode: false,
		focusOnSelect: true,
		fade: true
	});
	//end full width promo slider


	//start contact-us section tabbing
	if ($('.contact-us').length) {
		$('.contact-us .cu-nav:first-child').show();
		$('.contact-us .cu-nav:first-child').addClass('active');
		$('.contact-us .cu-wrap-content:first-child').addClass('active');
		$('.contact-us .cu-tab-dropdown').html($('.contact-us .cu-wrap-container .cu-wrap-content:first-child').html());
		$('.contact-us .cu-wrap-content').click(function (e) {
			$(this).addClass('active').siblings('.contact-us .cu-wrap-content').removeClass('active');
			$(this).parents('.contact-us').find('.cu-nav').removeClass('active');
			$(this).parents('.contact-us').find('.cu-nav').hide();
			$(this).parents('.contact-us').find($(this).attr("data-target")).fadeIn().addClass('active');
			$(this).parents('.contact-us').find(".cu-tab-dropdown").html($(this).html());
		});


		$('.contact-us .cu-tab-dropdown').click(function () {
			$(this).next(".cu-wrap-container").find('.cu-wrap-container').stop().slideToggle();
			$(this).toggleClass("active");
		});
		if ($(window).width() < 767) {
			$('.contact-us .cu-wrap-container .cu-wrap-content').click(function () {
				$(this).parent().stop().slideUp();
				$('.contact-us .cu-tab-dropdown').removeClass('active');
				$('.contact-us .cu-tab-dropdown').html($(this).html());
			});
		}
	}
	//end contact us section tabbing

});

/* Script on load
------------------------------------------------------------------------------*/
window.onload = () => {
	/* Do jQuery stuff when DOM is fully loaded, including all frames, objects and images */
};

/* Script on scroll
------------------------------------------------------------------------------*/
window.onscroll = () => {
	/* Do jQuery stuff on Scroll */
};

/* Script on resize
------------------------------------------------------------------------------*/

window.onresize = (event) => {
	/* Do jQuery stuff on resize */
};

/* Script all functions
------------------------------------------------------------------------------*/