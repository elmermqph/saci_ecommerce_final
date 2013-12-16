(function ($) {
	$(document).ready(function(){
		$('#user-login-block-container #edit-name').keydown(function(event){
			if(
				(event.keyCode == 190 && event.shiftKey === false) ||
				(event.keyCode == 222 && event.shiftKey === false) ||
				(((event.keyCode >= 48 && event.shiftKey === false) && (event.keyCode <= 57 && event.shiftKey === false))) ||
				((event.keyCode == 109) || 
				(event.keyCode == 189)) ||
				(event.keyCode >= 65 && event.keyCode <= 90) ||
				(event.keyCode >= 96 && event.keyCode <= 105) ||
				(event.keyCode == 8) ||
				(event.keyCode == 9) ||
				(event.keyCode == 32) ||
				(event.keyCode == 110) ||
				(event.keyCode == 189 || event.keyCode == 173)
			){
				return;
			}else{
				event.preventDefault(); 
			}
		});
             
        $('#uc-cart-view-form .qty .form-type-uc-quantity input.form-text').live("keydown",function(event){
		if(((event.keyCode >= 48 && event.keyCode <= 57) && event.shiftKey == false) || ((event.keyCode >= 96 && event.keyCode <= 105) && event.shiftKey == false) || event.keyCode == 8)
			return true;
		else
			return false;
			  
	});
	
	
	if($("p#cart-form-pane").length>0 && $("p#cart-form-pane").html()=="There are no products in your shopping cart."){
		  $("p#cart-form-pane").html('<div class="messages error warning">There are no products in your shopping cart.</div>');
		  $("p#cart-form-pane").css("display","block");
	}
	
	if($("#pid-cart #user-login-block-container input.error").length > 0){
		$("body").append('<div id="tesst"></div>');
		var errorlist = $("#content-messages #content-messages-inner .error").html();
		ConfirmDialog(errorlist);
	}
	function ConfirmDialog(message){
		$('<div></div>').appendTo('body')
				.html('<div><h6>'+message+'</h6></div>')
				.dialog({
					modal: true, title: 'Error', zIndex: 10000, autoOpen: true,
					width: 'auto', resizable: false,
					buttons: {
						OK: function () {
							$(this).dialog("close");
						},
					},
					close: function (event, ui) {
						$(this).remove();
					}
				});
		};
	});
})(jQuery);