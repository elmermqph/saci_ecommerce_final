(function($){
	$(document).ready(function(){
		$("#uc-cart-checkout-form #edit-cancel").hide();
		$("#uc-cart-checkout-form #edit-actions input.form-submit").attr("value","Summary");
		
		$("#edit-panes-delivery-delivery-street1").attr("maxlength","100");
		$(".form-item-panes-delivery-delivery-street1 label").html('<span class="form-required" title="This field is required.">*</span>Delivery Address');
	});
})(jQuery);