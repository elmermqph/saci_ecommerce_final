(function($){
	$(document).ready(function(){
		$("#block-menu-menu-about-us .nolink a").removeAttr("href");
		if($(".page-user-reset .messages").length > 0){
			$("body").removeClass("mess");
		}else{
			$("body").addClass("mess");
		}
	});
})(jQuery);;
