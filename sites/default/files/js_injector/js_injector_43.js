(function($){
	$(document).ready(function(){
		$("#user-reset-red-cart-submit").attr("value","LOGIN HERE");
		if(getUrlVars()["reset"] == "1"){    
			$("#content-messages-inner .status").html("You have just used your one-time login link. Please change your password.");
		}
                $("#content-messages-inner .status").css("display","block");
	});
	function getUrlVars() {
		var vars = {};
		var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
			vars[key] = value;
		});
		return vars;
	}
}(jQuery));