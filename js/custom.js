$(function () {


	$(".customer_warp").slick({
		autoplay: true,
		dots: true,
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [{
			breakpoint: 769,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
			},
			breakpoint: 578,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			}
		}, ]
	});

	//counter up
	$(".count").counterUp({
		delay: 10000,
		time: 1000000,
	});



});