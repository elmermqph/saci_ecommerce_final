(function($){
	$(document).ready(function(){				
		setInterval(function(){
			var f_h = $(window).height() - $("#stwrapper").height();
			$("#stwrapper").css("top",f_h / 2 + "px");	
		},100);
	});
}(jQuery));