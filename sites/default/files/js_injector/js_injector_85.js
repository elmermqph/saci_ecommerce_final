(function($){
	$(document).ready(function(){
		auto_filled_view_generate();
		$("#views-ajax-body").ajaxStop(function() {
			auto_filled_view_generate();
		});
	});
	function auto_filled_view_generate(){
		$("#views-ui-config-item-form fieldset#edit-options-empty-field-behavior").removeClass("collapsed");
		$("#views-ui-config-item-form fieldset#edit-options-empty-field-behavior class").css("display","block");
		$("#views-ui-config-item-form .form-item-options-empty textarea#edit-options-empty").html("-");
		$("#views-ui-config-item-form .form-item-options-hide-alter-empty #edit-options-hide-alter-empty").attr("checked",false);
	}
})(jQuery);