$(function worker() {

	$.ajaxSetup({
		cache: false,
		complete: function() {

			setTimeout(worker, 120000);
		}
	});
	var ajax_load = "<script src='../js/ads/ads_fullscreen.js'>";


	$("#ads_view").html(ajax_load);


});
