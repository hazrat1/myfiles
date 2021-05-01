$(function worker() {

	$.ajaxSetup({
		cache: false,
		complete: function() {

			setTimeout(worker, 120000);
		}
	});
	var ajax_load = "<script src='ads.js'>";


	$("#ad_view").html(ajax_load);


});
