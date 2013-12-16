(function($){
    $(document).ready(function(){
		//$("#edit-telephone, #edit-acc-dateob,#edit-acc-tin,#edit-add-postalcode,#edit-mobile").keydown(function(event) {
			$("#edit-telephone,#edit-acc-tin,#edit-add-postalcode,#edit-mobile").keydown(function(event) {
			if ( event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 || event.keyCode == 13 || 
				(event.keyCode == 65 && event.ctrlKey === true) || 
				(event.keyCode >= 35 && event.keyCode <= 39)) {
					 return;
			}
			else {
				if (event.shiftKey || (event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {
					event.preventDefault(); 
				}   
			}
		});
		
		$('#edit-pass-pass1, #edit-pass-pass2').attr('maxlength','15');
		$('#edit-pass-pass1, #edit-pass-pass2').attr('minlength','6');
    });
})(jQuery);