// JavaScript Document
(function($){
	$(document).ready(function(){
		$(".page-admin-structure-types-manage-product-dependencies #conditional-fields-dependency-add-form-node-product .form-item-dependee select option[value='16']").attr('selected','selected');
		$(".page-admin-structure-dependencies-edit #conditional-fields-dependency-edit-form #edit-values-set option[value='3']").attr('selected','selected');
                $(".page-admin-structure-dependencies-edit #conditional-fields-dependency-edit-form fieldset#edit-value").css('display','none');
                $(".page-admin-structure-dependencies-edit #conditional-fields-dependency-edit-form .form-type-textarea.form-item-values").css('display','block');
	});
})(jQuery);