(function($){
	$(document).ready(function(e) {
		brgy_effect()
        $('body').bind('ajaxSuccess', function(data, status, xhr) {
			brgy_effect()
		});
    });
	function brgy_effect(){
		$("#edit-brgy").change(function(){
			if($(this).val() == 'other'){
				$("#user-register-form .form-item-other-brgy").slideDown();
			}else{
				$("#user-register-form .form-item-other-brgy").slideUp();
			}
		});
	}
})(jQuery)