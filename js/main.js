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

$(window).scroll(function() {
	var show = $('.detail-tab').offset().top-$("body").scrollTop();
	var xctsTop = $('#xcts-card').offset().top-$("body").scrollTop();
	var jtxcTop = $('#jtxc-card').offset().top-$("body").scrollTop();
	var fysmTop = $('#fysm-card').offset().top-$("body").scrollTop();
	var zysxTop = $('#zysx-card').offset().top-$("body").scrollTop();
	console.log(zysxTop);
	if (show<=0) {
		$('.detail-tab2').css({
			'display': 'block'
		});
		$('.detail-tab').find('.tab-item-on').removeClass('tab-item-on');
		$('.detail-tab').find('.tab-item-a-on').removeClass('tab-item-a-on');
		$('.detail-tab').find('.tab-item:first-child').addClass('tab-item-on');
		$('.detail-tab').find('#anchor-xcts').addClass('tab-item-a-on');
	}else{
		$('.detail-tab2').css({
			'display': 'none'
		});
	}

	if (zysxTop<=230) {
		$('.detail-tab2').find('.tab-item-on').removeClass('tab-item-on');
		$('.detail-tab2').find('.tab-item-a-on').removeClass('tab-item-a-on');
		$('.detail-tab2').find('#anchor-zysx').addClass('tab-item-a-on');
		$('.detail-tab2').find('#anchor-zysx').parent().addClass('tab-item-on');
	} else if (fysmTop<=230) {
		$('.detail-tab2').find('.tab-item-on').removeClass('tab-item-on');
		$('.detail-tab2').find('.tab-item-a-on').removeClass('tab-item-a-on');
		$('.detail-tab2').find('#anchor-fysm').addClass('tab-item-a-on');
		$('.detail-tab2').find('#anchor-fysm').parent().addClass('tab-item-on');
	} else if (jtxcTop<=230) {
		$('.detail-tab2').find('.tab-item-on').removeClass('tab-item-on');
		$('.detail-tab2').find('.tab-item-a-on').removeClass('tab-item-a-on');
		$('.detail-tab2').find('#anchor-jtxc').addClass('tab-item-a-on');
		$('.detail-tab2').find('#anchor-jtxc').parent().addClass('tab-item-on');
	} else {
		$('.detail-tab2').find('.tab-item-on').removeClass('tab-item-on');
		$('.detail-tab2').find('.tab-item-a-on').removeClass('tab-item-a-on');
		$('.detail-tab2').find('#anchor-xcts').addClass('tab-item-a-on');
		$('.detail-tab2').find('#anchor-xcts').parent().addClass('tab-item-on');
	}
});


$(document).ready(function(){
	$('.tab-item').on('click', function(){
		$(this).prevAll('.tab-item-on').removeClass('tab-item-on');
		$(this).prevAll().find('a').removeClass('tab-item-a-on');
		$(this).nextAll('.tab-item-on').removeClass('tab-item-on');
		$(this).nextAll().find('a').removeClass('tab-item-a-on');
		$(this).addClass('tab-item-on');
		$(this).find('a').addClass('tab-item-a-on');
	})
});

