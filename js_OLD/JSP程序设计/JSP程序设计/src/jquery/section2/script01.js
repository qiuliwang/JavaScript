$(document).ready(function() {
	$("#bodyText").hide();

	$("#textToggle").toggle(
		function() {
			$("#bodyText").show(3000);
			$("#bodyText").effect("highlight", {}, 2000);
		},
		function() {
			$("#bodyText").hide();
		}
	);
});
