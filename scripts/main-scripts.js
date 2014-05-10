$(document).ready(function(){

	$('.modalLink').modal({

		trigger: '.modalLink',

		olay:'div.overlay',

		modals:'div.modal',

		animationEffect: 'slidedown',

		animationSpeed: 400,

		moveModalSpeed: 'slow',

		background: '00c2ff',

		opacity: 0.8,

		openOnLoad: false,

		docClose: true,

		closeByEscape: true,

		moveOnScroll: true,

		resizeWindow: true,

		video:'http://player.vimeo.com/video/9641036?color=eb5a3d',

		close:'.closeBtn'

	});
});