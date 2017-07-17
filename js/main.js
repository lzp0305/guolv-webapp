// 首页轮播图
var indexswiper = new Swiper('.index-swiper',{
	pagination: '.index-pagination',
	loop: true,
	autoplay: 3000
});

// 详情页轮播图
var  detailswiper = new Swiper('.detail-swiper',{
	pagination: '.detail-pagination',
	loop: true,
	autoplay: 3000
});

// 手机横竖屏切换时候改变列表宽度
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

// 改变列表最后一个的下边框
$('.user-card .user-card-item:last-child').css('border-bottom', '0');



// 图片上传
function preview(file){
	var prevDiv = document.getElementById('preview');
	if (file.files && file.files[0]){
		var reader = new FileReader();
		reader.onload = function(evt){
			prevDiv.innerHTML = '<img src="' + evt.target.result + '" />';
		}
		reader.readAsDataURL(file.files[0]);
	} else {
		prevDiv.innerHTML = '<div class="img" style="filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale,src=\'' + file.value + '\'"></div>';
	}
}



