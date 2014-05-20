$(document).ready(function(){

	/* default settings */
	$('.modalLink').venobox(); 

	$(".gallery-expand").click(function(){
      if($(this).hasClass('hide')) {
      	$(this).animate({height:400},1000).removeClass('hide');
      } else { 
        $(this).animate({height:230},1000).addClass('hide');
      }
    });

});

