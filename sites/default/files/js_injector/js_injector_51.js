(function($){
$(document).ready(function(){
$("#views-exposed-form-sku-update-check-page .form-item-model .form-text").attr("value","-- Input SKU # --");
$("#views-exposed-form-sku-update-check-page .form-item-model .form-text").click(function(){
if($(this).attr("value") == "-- Input SKU # --")
$(this).attr("value","");
})
$("#views-exposed-form-sku-update-check-page .views-submit-button #edit-submit-sku-update-check").attr("value","Submit")
.css({
"margin-top": "0",
"padding": "5px 4px"
});
});
})(jQuery);