(function($){
$(document).ready(function(){
clear_content("#colorbox #cboxClose");
clear_content("#cboxOverlay");
});
function clear_content(id){
         $(id).click(function(){clear_content()
                $("#colorbox").each(function(){
			if($(this).css("display")=="block"){
				$(this).remove();
			}
		});
		$("#cboxOverlay").each(function(){
			if($(this).css("display")=="block"){
				$(this).remove();
			}
		});
       });
}
})(jQuery);
