$(function worker() {

	$.ajaxSetup({
		cache: false,
		complete: function() {

			setTimeout(worker, 600000);
		}
	});
	var ajax_load = "<script src='../js/ads.js'>";


	$("#ad_view").html(ajax_load);


});
