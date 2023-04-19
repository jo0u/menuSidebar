$(document).ready(function() {
	$('nav a').on('click', function(e) {
		e.preventDefault();
		var pageUrl = $(this).data('page');
		$.ajax({
			url: pageUrl,
			type: 'GET',
			success: function(data) {
				$('#content').html(data);
			}
		});
	});
});
