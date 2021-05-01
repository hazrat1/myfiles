$(function worker() {

	$.ajaxSetup({
		cache: false,
		complete: function() {

			setTimeout(worker, 900000);
		}
	});
	var ajax_load = "<script src='../js/ads_player.js'>";


	$("#ad_view").html(ajax_load);


});
