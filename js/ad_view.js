$(function worker() {

	$.ajaxSetup({
		cache: false,
		complete: function() {

			setTimeout(worker, 1800000);
		}
	});
	var ajax_load = "<script src='../js/ads.js'>";


	$("#ad_view").html(ajax_load);


});
