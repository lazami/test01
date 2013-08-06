$(document).ready(function() {
	$("#loginUsername").focus(function() {
		if ($(this).val() == 'Your Email') {
			$(this).val('');
		}
	});
	
	$("#loginUsername").blur(function() {
		if ($(this).val() == '') {
			$(this).val('Your Email');
		}
	});
});