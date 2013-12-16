(function($){
	$(document).ready(function(){
		$("#edit-submit").click(function(){
			var err_msg = "";
			$("#content-messages").remove();
			if($("#edit-lastname").val() == ""){
				err_msg = err_msg + "<li>Last Name field is required.</li>";
			}
			if($("#edit-firstname").val() == ""){
				err_msg = err_msg + "<li>First Name field is required.</li>";
			}
			if($("#edit-bill-address").val() == ""){
				err_msg = err_msg + "<li>Address field is required.</li>";
			}
			if($("#edit-mobile").val() == ""){
				err_msg = err_msg + "<li>Mobile No. field is required.</li>";
			}
			if($("#edit-name").val() == ""){
				err_msg = err_msg + "<li>Username field is required.</li>";
			}
			if($("#edit-mail").val() == ""){
				err_msg = err_msg + "<li>E-mail address field is required.</li>";
			}else{
				var emailRegex = new RegExp(/^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$/i);
				var valid = emailRegex.test($("#edit-mail").val());
				if (!valid) {
					err_msg = err_msg + "<li>Invalid e-mail address.</li>";
				}
			}
			if($("#edit-pass-pass1").val() == ""){
				err_msg = err_msg + "<li>Password field is required.</li>";
			}
			if($("#edit-pass-pass2").val() == ""){
				err_msg = err_msg + "<li>Confirm password field is required.</li>";
			}
			if($("#edit-pass-pass1").val() != $("#edit-pass-pass2").val()){
				err_msg = err_msg + "<li>Password and Confirm password not match.</li>";
			}
			if($("#edit-dateob").val() == ""){
				err_msg = err_msg + "<li>Date of Birth field is required.</li>";
			}
			if(err_msg != ""){
				err_msg = "<div id='content-messages' class='content-messages block'><div id='content-messages-inner' class='content-messages-inner gutter'><div class='messages error'><h2 class='element-invisible'>Error message</h2> <ul>" + err_msg + " </ul></div></div></div>";
				$(err_msg).insertAfter("#custom-region-wrapper");
				$("html,body").animate({scrollTop:0},"slow");
				return false;
			}
		});
	});
}(jQuery));