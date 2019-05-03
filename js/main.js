
$(document).ready(function(){
 

	$('section.second-screen__tap').click(function (){
		$('section.second-screen__tap').hide(800),
		$('section.second-screen__road').css("width","100%"),
		$('section.second-screen__road h4, span').css("font-size","100px"),
		$('section.second-screen__road h4').css("margin-left","230px"),
		$('img.movedron').css("display","block").animate({left:"-5000"}, 7000).hide(2000)
	});


	$('a.test').click(function() {
			$('div.form').fadeIn().css("display", "flex");
	});


	$('a.form__close').click(function() {
		$('div.form').fadeOut().css("display", "flex");
	});


	$('a[href*="#"]').on("click", function(e){
	var anchor = $(this);
	$('html, body').stop().animate({
	scrollTop: $(anchor.attr('href')).offset().top
	}, 700);
	e.preventDefault();
	return false;
	});


}); 