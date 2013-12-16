(function($){
	$(document).ready(function(){
   $("#edit-checkout--2").live("click",function(event){
     alert("You must login before you can proceed to checkout.  If you do not have an account yet, you should register now.");
     event.preventDefault();
   });
 });
	  
})(jQuery);;
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
