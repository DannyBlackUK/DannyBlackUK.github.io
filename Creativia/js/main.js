jQuery(document).ready(function($) {
	
	$('.burger-icon').click(function() {
		$('.burger-menu__wrapper').slideToggle();
		$(this).toggleClass('active-burger-menu');
		$('.subbg').slideToggle();
	});

	$('.subbg').click(function(event) {
		$('.burger-menu__wrapper').slideUp();
		$(this).css('display', 'none');
		$('.burger-icon').toggleClass('active-burger-menu');
	});






});