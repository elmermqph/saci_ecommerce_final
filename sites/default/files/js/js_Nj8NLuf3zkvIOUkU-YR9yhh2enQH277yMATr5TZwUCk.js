/*(function($){ 
	$(document).ready(function(){
		var lin = $('a.colorbox-load').addClass('init-colorbox-load-processed-processed');
		if(lin){
		}else{
			alert('false');
			$('a.colorbox-load').addClass('init-colorbox-load-processed-processed');
		}
	});
})(jQuery);*/

(function($){ 
	$(document).ready(function(){
		$('#uc-cart-view-form #edit-update').live("click", function(){
			$('a.colorbox-load').addClass('init-colorbox-load-processed-processed cboxElement');
		});
	});
})(jQuery);;
