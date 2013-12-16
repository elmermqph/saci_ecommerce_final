(function($){
	$(document).ready(function(){
		/*$('#edit-submitted-name').keyup(function(event) {
			if ($('#edit-submitted-name').val().match(/[^a-zA-Z ]/g)) {
				this.value = this.value.replace(/[^a-zA-Z ]/g, '');
			}
		});*/

		$('#edit-submitted-name, #edit-submitted-email-1, #edit-submitted-message').bind("cut copy paste", function(e) {
			e.preventDefault();
		});
		
		$('#edit-submitted-name').keydown(function(event){
			if(
				(event.keyCode >= 65 && event.keyCode <= 90) ||
				event.keyCode == 8 ||
				event.keyCode == 32 ||
				event.keyCode == 9 ||
				(event.keyCode == 46) ||
				((event.keyCode >= 37) && (event.keyCode <= 40))
			){
				return;
			}else{
				event.preventDefault(); 
			}
		});
		
		
		$('#edit-submitted-name').attr("maxlength","100");
		
		$("#edit-submitted-name").blur(function(){
			$(".name-message").remove();
			$("#edit-submitted-name").removeClass("invalid-1");
			if($("#edit-submitted-name").val() != ""){
				if($("#edit-submitted-name").val().length > 100){
					$("#webform-component-name").append("<span class='name-message'>Max length is 100</span>");
					$("#edit-submitted-name").addClass("invalid-1");
				}
				else if($("#edit-submitted-name").val().length < 5){
					$("#webform-component-name").append("<span class='name-message'>Min length is 5</span>");
					$("#edit-submitted-name").addClass("invalid-1");
				}
			}
		});
		
		$("#edit-submitted-email-1").blur(function(){
			$(".email-message").remove();
			$("#edit-submitted-email-1").removeClass("invalid-1");
			if($("#edit-submitted-email-1").val() != ""){
				emailAddress = $(this).val();
				var emailRegex = new RegExp(/^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$/i);
				var valid = emailRegex.test(emailAddress);
				if (!valid) {
					$("#webform-component-email-1").append("<span class='email-message'>Invalid email</span>");
					$("#edit-submitted-email-1").addClass("invalid-1");
				}
			}
			if($("#edit-submitted-email-1").val().length > 100){
					$("#webform-component-email-1").append("<span class='email-message'>Max length is 100</span>");
					$("#edit-submitted-email-1").addClass("invalid-1");
			}
		});
		

		$("#edit-submit").click(function(){
			$(".name-message").remove();
			$("#edit-submitted-name").removeClass("invalid-1");
			$(".email-message").remove();
			$("#edit-submitted-email-1").removeClass("invalid-1");
			var boo1 = false;
			if($("#edit-submitted-name").val()==""){
				$("#edit-submitted-name").addClass("invalid-1");
				$("#webform-component-name").append("<span class='name-message'>Please type your name</span>");
				boo1 = true;
			}else{
				$("#edit-submitted-name").removeClass("invalid-1");
			}
			if($("#edit-submitted-email-1").val()==""){
				$("#edit-submitted-email-1").addClass("invalid-1");
				$("#webform-component-email-1").append("<span class='name-message'>Please type your email</span>");
				boo1 = true;
			}else{
				$("#edit-submitted-email-1").removeClass("invalid-1");
			}
			if($("#edit-submitted-name").val().length > 100){
				$("#webform-component-name").append("<span class='name-message'>Max length is 100</span>");
				$("#edit-submitted-name").addClass("invalid-1");
				boo1 = true;
			}
			else if($("#edit-submitted-name").val().length < 5 && $("#edit-submitted-name").val()!=""){
				$("#webform-component-name").append("<span class='name-message'>Min length is 5</span>");
				$("#edit-submitted-name").addClass("invalid-1");
				boo1 = true;
			}
			emailAddress = $("#edit-submitted-email-1").val();
			var emailRegex = new RegExp(/^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$/i);
			var valid = emailRegex.test(emailAddress);
			if (!valid && $("#edit-submitted-email-1").val() != "") {
				$("#webform-component-email-1").append("<span class='email-message'>Invalid email</span>");
				$("#edit-submitted-email-1").addClass("invalid-1");
				boo1 = true;
			}
			
			if(boo1 == true){
				return false;
			}
		});
		
	});
}(jQuery));