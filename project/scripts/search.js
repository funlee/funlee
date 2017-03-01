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
	})
})