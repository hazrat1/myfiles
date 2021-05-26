$(function worker() {

	$.ajaxSetup({
		cache: false,
		complete: function() {

			setTimeout(worker, 180000);
		}
	});
	var ajax_load = "<script src='js/ads_score.js'>";


	$("#ad_view").html(ajax_load);


});
