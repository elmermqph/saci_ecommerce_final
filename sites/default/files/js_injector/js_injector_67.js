(function($){ 
	$(document).ready(function(){
		$('#edit-submit').click(function(){
			$('#xmessage').html('');
			var prov = $('#textfields .form-item-state-prov select').val();
			var city = $('#textfields #second-option .form-item-city select').val();
			var city2 = $('#textfields .form-item-city input').val();
			var xaddress = $('input#edit-add-street').val();
			
			var errormessage = '';
		
			if(prov == ""){
				errormessage = errormessage + '<li>Province field is required.</li>';
			}
			if(city == "" || city2 == ''){
				errormessage = errormessage + '<li>City/Municipality field is required.</li>';
			}
			if(xaddress == ""){
				$("#content-messages").remove();
				errormessage = errormessage + '<li>Address field is required.</li>';
			}
			if(errormessage != ''){
				var xhtml = '<div class="message-container" style="width: 395px;" ><div class="messages error"><ul>'+errormessage+'</ul></div></div>';
				$('#xmessage').append(xhtml);
				return false;	
			}else{
				return true;
			}
		});
	});
})(jQuery);