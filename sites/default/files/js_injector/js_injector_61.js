(function($){
$(document).ready(function(){
$("#report_sku_checker .model").click(function(){
if($(this).attr("value")=="-- Input SKU # --")
     $(this).attr("value","");
});
$("#report_sku_checker .submit").click(function(){
var model = $("#report_sku_checker .model").attr("value");
location.replace("/reports-generator?model="+model+"#view_sku_blocks");
});
});
})(jQuery);