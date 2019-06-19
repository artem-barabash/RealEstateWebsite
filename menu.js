$(document).ready(function() {
	$('.menuToggle').on('click', function(){
		('.menu__list').slideToggle(300, function() {
			if( $(this).css('display') === "none"){
				$(this).removeAttrr('style');
			}
		});
	});
});