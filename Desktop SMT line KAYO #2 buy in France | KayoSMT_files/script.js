jQuery(document).ready(function($) {

	var owl2 = $('.recent-bl .body');
	if ( owl2.find('.for').length > 3 || window.outerWidth < 650) {
		owl2.addClass('owl-carousel');
		owl2.owlCarousel({
			margin: 0,
			loop: false,
			nav: true,
			items: 3,
			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 2
				},
				1000: {
					items: 3
				}
			}
		});
	}
});