$(function(){
	
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

});