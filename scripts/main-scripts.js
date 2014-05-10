$(document).ready(function(){

	$('.modalLink').modal({

		trigger: '.modalLink',

		olay:'div.overlay',

		modals:'div.modal',

		animationEffect: 'fadeIn',

		animationSpeed: 400,

		moveModalSpeed: 'slow',

		background: '212121',

		opacity: 0.8,

		openOnLoad: false,

		docClose: true,

		closeByEscape: true,

		moveOnScroll: false,

		resizeWindow: true,

		video:'http://player.vimeo.com/video/9641036?color=eb5a3d',

		close:'.closeBtn',

		videoClass: 'video'

	});
});


$(".gallery-expand").click(function(){
  $(this).animate({
    height: "460px"
  }, 3000 );
});

