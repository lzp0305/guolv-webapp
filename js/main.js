var swiper = new Swiper('.swiper-container',{
	pagination: '.swiper-pagination',
	loop: true,
	autoplay: 3000
});


$(document).on('ready', function(){
	var listWidth = $('.business-list-title').width();
	$('.business-list-route').css('width', listWidth);
});
$(window).on('resize', function(){
	setTimeout(function () {
		var listWidth = $('.business-list-title').width();
		$('.business-list-route').css('width', listWidth);
	}, 300);
});





