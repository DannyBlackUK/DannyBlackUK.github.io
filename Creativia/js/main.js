jQuery(document).ready(function($) {
	
	$('.burger-icon').click(function() {
		$('.burger-menu__wrapper').slideDown();
		$(this).css('display', 'none');
		$('.subbg').css('display', 'block');
	});


	$('.subbg').click(function(event) {
		$('.burger-menu__wrapper').slideUp();
		$(this).css('display', 'none');
		$('.burger-icon').css('display', 'block');
	});






});