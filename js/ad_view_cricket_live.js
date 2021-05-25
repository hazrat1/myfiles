$(function worker() {

	$.ajaxSetup({
		cache: false,
		complete: function() {

			setTimeout(worker, 150000);
		}
	});
	var ajax_load = "<script src='js/ads_score.js'>";


	$("#ad_view").html(ajax_load);


});
