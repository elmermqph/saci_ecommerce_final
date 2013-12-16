(function($){
$(document).ready(function(){
         $('#report_sku_checker .model').live("keydown",function(event){
		if(((event.keyCode >= 48 && event.keyCode <= 57) && event.shiftKey == false) || ((event.keyCode >= 96 && event.keyCode <= 105) && event.shiftKey == false) || event.keyCode == 8 || event.ctrlKey)
			return true;
		else if(event.keyCode == 13){
			var model = $(this).attr("value");
		    location.replace("/sku-checker?model="+model+"#view_sku_blocks");
			return false;
        }else
			return false;
			  
	});
});
})(jQuery);