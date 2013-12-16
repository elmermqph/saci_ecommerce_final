(function ($) {
	$(document).ready(function(){
		$('#edit-clear').click(function(){
			$('#edit-smac1').val("");
			$('#edit-smac2').val("");
			$('#edit-smac3').val("");
			$('#edit-smac4').val("");
			$('#edit-smac5').val("");
			$('#edit-smac6').val("");
			$('#edit-smac7').val("");
			$('#edit-smac8').val("");
			$('#edit-smac9').val("");
			$('#edit-smac10').val("");
			$('#edit-smac11').val("");
			$('#edit-smac12').val("");
			$('#edit-smac12').val("");
			$('#edit-smac13').val("");
			$('#edit-smac14').val("");
			$('#edit-smac15').val("");
			$('#edit-smac16').val("");
			return false;
		});
		
		$('div.error').attr('style','height: auto');
		$('div.error ul li').has('em').hide();
		
		/*$('#edit-current-pass, #edit-pass').keydown(function(event){
			if((event.keyCode == 50 && event.shiftKey === true) || event.keyCode == 8){
				return;
			}
			else{
				if(	(event.keyCode == 48 && event.shiftKey === true) || 
					(event.keyCode == 49 && event.shiftKey === true) || 
					((event.keyCode >= 51 && event.shiftKey === true && (event.keyCode <= 57 && event.shiftKey === true))) ||
					(event.keyCode == 107) || 
					(event.keyCode == 107 && event.shiftKey === true) || 
					(event.keyCode == 192 && event.shiftKey === true) ||
					(event.keyCode == 192)
				){
					event.preventDefault();
				}
			}
		});*/
	});
})(jQuery);