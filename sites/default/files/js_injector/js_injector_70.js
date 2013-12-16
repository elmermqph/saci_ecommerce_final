(function($){
	$(document).ready(function(){
		$("#edit-model").keydown(function(e){
			return key_function_checker(e,"1");
		});
		$(" #edit-sell-price, #edit-weight--2, #edit-dim-length , #edit-dim-width, #edit-dim-height").keydown(function(e){
			return key_function_checker(e,"2");
		});
		$(".node-type-product .vertical-tabs .vertical-tab-button").eq(1).css("display","none").end()
		.eq(2).css("display","none").end()
		.eq(3).css("display","none").end();
		$("#edit-preview").css("display","none");
	});
	function key_function_checker(event,checker){
		if(event.shiftKey){
			return false;
		}
		if(
			event.keyCode > 95 && event.keyCode < 106 || 
			event.keyCode > 47 && event.keyCode < 58 || 
			event.keyCode == 190 || event.keyCode == 110 ||
			event.keyCode ==8
		){
			if((event.keyCode == 190 || event.keyCode == 110) && checker == "1")
				return false;
			else
				return true;
		}else{
			return false;
		}
	}
})(jQuery);