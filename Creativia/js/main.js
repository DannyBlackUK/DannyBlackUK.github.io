jQuery(document).ready(function($) {
	
	//burger-menu
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

	//



//tab in second-screen

	$('.tab-content').hide();
	$('.tab-menu > a').click(function() {
  	

    var findArticle = $(this).next();
    var findWrapper = $(this).closest('.tab-menu');  
		$(this).css('color', 'red').css('font-weight', 'bold');
		$('.tab-menu a').not(this).css('color', 'black').css('font-weight', 'normal');

    if (findArticle.is(':visible')) {
      findArticle.slideUp('fast')
    }
    else {
      findWrapper.find('>article').slideUp('fast');
      findArticle.slideDown('fast');
    }

  });

});







//

	//slider in second-screen

//	













