(function ($) {

Drupal.behaviors.initModalFormsLogin = {
  attach: function (context, settings) {
    $("a[href*='/user/login'], a[href*='?q=user/login']", context).once('init-modal-forms-login', function () {
      this.href = this.href.replace(/user\/login/,'modal_forms/nojs/login');
    }).addClass('ctools-use-modal ctools-modal-modal-popup-small');
	
	$('#user-login #edit-name').bind("cut copy paste", function(e) {
		e.preventDefault();
	});
	
	$('#edit-name').attr('maxlength','100');
	
	$('#user-login #edit-name').keydown(function(event){
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
			(event.keyCode == 32)
		){
			return;
		}else{
			event.preventDefault(); 
		}
	});
	
	$('#user-pass #edit-name--2').keydown(function(event){
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
					(event.keyCode == 192) || 
					event.keyCode == 188 || 
					event.keyCode == 109 || 
					event.keyCode == 59 || 
					event.keyCode == 220 || 
					event.keyCode == 191 || 
					(event.keyCode == 190 && event.shiftKey === true) || 
					event.keyCode == 222 ||
					event.which == 221 ||
					event.which == 187 ||
					event.which == 219 || 
					event.which == 221 ||
					event.which == 186 ||
					event.which == 106 ||
					event.which == 111
				){
					event.preventDefault();
				}
			}
		});
	
	
  }
};



})(jQuery);
