define(function(require) {
	require("../sea-modules/jquery.min.js");
	
	$(".search .btn").on('click',function() {
		var seaText = $(".search-text").val();
		var cachHref = $(this).attr("data-href");
		var cachUrl = $(this).attr("data-url");
		if(!!seaText) {
			var _href = cachHref.replace("funlee",seaText);
			window.open(_href,"_blank");
		} else {
			window.open(cachUrl,"_blank");
		}
	});
	function showImg() {
		var width = $(window).width();
		if(width > 768) {
			$(".popbox").show();
			$(".popbox-in").css({width: '270px',height: '370px', margin: '-185px 0px 0px -135px'});
		} else {
			$(".popbox").show();
			$(".popbox-in").css({width: '80%',height: 'auto', top:'20%',left:'10%'});
		}
	}
	$(".wechat").on("click",function() {
		$(".popbox img").attr("src","../images/weixin.jpg");
		showImg();
	})
	$(".qq").on("click",function() {
		$(".popbox img").attr("src","../images/qq.jpg");
		showImg();
	})
	$(".popbox-close").on("click",function() {
		$(".popbox").hide();
	})
})