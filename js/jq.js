$(document).ready(function() {
  $('.link').click(function() {
    $('.nav').slideToggle(500);
  });
    
    $(window).resize(function() {		
		if (  $(window).width() > 991 ) {			
			$('.nav').removeAttr('style');
		 }
	});
  });

