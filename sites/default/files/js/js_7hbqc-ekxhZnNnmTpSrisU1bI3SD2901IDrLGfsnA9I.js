(function($){
	$(document).ready(function(){
		$("#card-status").ajaxComplete(function(){
			if($("#card-status strong").html()){
				$(".smac-wrapper #edit-smac-wrapper .form-text").val("");
			}
		});
	});
}(jQuery));;
(function($){
	$(document).ready(function(){
   $("#edit-checkout--2").live("click",function(event){
     alert("You must login before you can proceed to checkout.  If you do not have an account yet, you should register now.");
     event.preventDefault();
   });
 });
	  
})(jQuery);;
