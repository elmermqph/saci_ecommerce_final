(function($){
$(document).ready(function(){
$("#product-node-form #edit-body-und-0-value").attr("maxlength","140");
$("#product-node-form #edit-field-model-und-0-value, #product-node-form #edit-title").attr("maxlength","35");
$("#product-node-form .product-field .form-item-sell-price .description").html("Customer Purchase Price (VAT Inclusive)");
$("#product-node-form .product-field .form-item-list-price .description").html("The listed MSRP (Vat Inclusive)");
});
})(jQuery);