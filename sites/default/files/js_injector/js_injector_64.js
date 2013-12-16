(function($){ 
$(document).ready(function(){
	$('#edit-name').bind("cut copy paste", function(e) {
		e.preventDefault();
	});
	$('#edit-name').attr('maxlength','100');
	$('#edit-name').keydown(function(event){
		if(
			(event.keyCode == 190 && event.shiftKey === false) ||
			(event.keyCode == 222 && event.shiftKey === false) ||
			(((event.keyCode >= 48 && event.shiftKey === false) && (event.keyCode <= 57 && event.shiftKey === false))) ||
			(event.keyCode >= 96 && event.keyCode <= 105) ||
			((event.keyCode == 109) || (event.keyCode == 189)) ||
			(event.keyCode >= 65 && event.keyCode <= 90) ||
			(event.keyCode == 8) ||
			(event.keyCode == 173) ||
			(event.keyCode == 9) ||
			(event.keyCode == 110) ||
			(event.keyCode == 32) ||
			(event.keyCode == 46)
		){
			return;
		}else{
			event.preventDefault(); 
		}
	});
});
})(jQuery);