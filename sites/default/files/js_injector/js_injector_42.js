// Cart Checkout

(function($){ 
	$(document).ready(function(){
$("#uc-cart-checkout-form #edit-continue").live("click",function(){
			var inner_html = '';
			var condition = false;
			if($("#uc-cart-checkout-form #edit-panes-delivery-delivery-first-name").val()==""){
					inner_html = inner_html+'<li>Please Enter Firstname.</li>';
					condition = true
			}
			if($("#uc-cart-checkout-form #edit-panes-delivery-delivery-last-name").val()==""){
					inner_html = inner_html+'<li>Please Enter Lastname.</li>';
					condition = true
			}
			if($("#uc-cart-checkout-form #edit-panes-delivery-delivery-street1").val()==""){
					inner_html = inner_html+'<li>Please Enter Delivery Address.</li>';
					condition = true
			}
			
			if($("#uc-cart-checkout-form #edit-panes-delivery-delivery-zone").val()==""){
					inner_html = inner_html+'<li>Please Select Province.</li>';
					condition = true
			}
			if($("#uc-cart-checkout-form #edit-panes-delivery-delivery-city").val()==""){
					inner_html = inner_html+'<li>Please Select City/Municipality.</li>';
					condition = true
			}
			if($("#uc-cart-checkout-form #edit-panes-delivery-delivery-street2").val()==""){
					inner_html = inner_html+'<li>Please Select Barangay.</li>';
					condition = true
			}
			
			if($("#uc-cart-checkout-form #edit-panes-delivery-delivery-phone").val()==""){
					inner_html = inner_html+'<li>Please Enter Mobile No.</li>';
					condition = true
			}
			
			if(condition == true){
				if($("#uc-cart-checkout-form #delivery-pane .error").length>0)
					$("#uc-cart-checkout-form #delivery-pane .error").remove()
				$("#uc-cart-checkout-form #delivery-pane").prepend('<div class="error messages"><ul>'+inner_html+'</ul></div>');
				$(window).scrollTop($("#uc-cart-checkout-form #delivery-pane .error").offset().top);
				return false;
			}else{
				return true;	
			}
			return false;
		});
		$("#edit-panes-delivery-delivery-street1, #edit-panes-delivery-delivery-postal-code, #edit-panes-delivery-delivery-phone, #edit-panes-delivery-delivery-first-name, #edit-panes-delivery-delivery-last-name").live("focus",function(e){
			$('#edit-panes-delivery-delivery-street1, #edit-panes-delivery-delivery-postal-code, #edit-panes-delivery-delivery-phone, #edit-panes-delivery-delivery-first-name, #edit-panes-delivery-delivery-last-name').bind("cut copy paste", function(e) {
				e.preventDefault();
			});	
		});
		$("#edit-panes-delivery-delivery-street1, #edit-panes-delivery-delivery-postal-code, #edit-panes-delivery-delivery-phone, #edit-panes-delivery-delivery-first-name, #edit-panes-delivery-delivery-last-name").live("focus",function(e){
			$('#edit-panes-delivery-delivery-street1, #edit-panes-delivery-delivery-postal-code, #edit-panes-delivery-delivery-phone, #edit-panes-delivery-delivery-first-name, #edit-panes-delivery-delivery-last-name').bind("cut copy paste", function(e) {
				e.preventDefault();
			});	
		});
		
		$('#edit-panes-delivery-delivery-postal-code').attr('maxlength','4');
		$('#edit-panes-delivery-delivery-phone').attr('maxlength','11');
		$('#edit-panes-delivery-delivery-first-name, #edit-panes-delivery-delivery-last-name').attr('maxlength','100');
		
		$("#edit-panes-delivery-delivery-first-name").live("focus",function(e){
			$('#edit-panes-delivery-delivery-first-name, #edit-panes-delivery-delivery-last-name').attr('maxlength','100');
		});
		
		$('#edit-panes-delivery-delivery-phone').live("focus",function(){
			$('#edit-panes-delivery-delivery-phone').attr('maxlength','11');
		});
		$("#edit-panes-delivery-delivery-postal-code,#edit-panes-delivery-delivery-phone").live("keydown",function(event) {
			$('#edit-panes-delivery-delivery-postal-code').attr('maxlength','4');
			
			if ( event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 || event.keyCode == 13 || 
				(event.keyCode == 65 && event.ctrlKey === true) || 
				(event.keyCode >= 35 && event.keyCode <= 39)) {
					 return
			}
			else {
				if (event.shiftKey || (event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {
					event.preventDefault(); 
				}   
			}
		});
		
		$('#edit-panes-delivery-delivery-first-name, #edit-panes-delivery-delivery-last-name').live("keydown",function(event){
		
			if(
				(event.which >= 65 && event.which <= 90) ||
				event.which == 8 ||
				event.which == 32 ||
				event.which == 9
			){
				return;
			}else{
				event.preventDefault(); 
			}
		});
		$('#edit-panes-delivery-delivery-street1').live("keydown",function(event){
			if(
				event.keyCode == 192 ||
				(event.keyCode == 188 && event.shiftKey === true) ||
				(event.keyCode == 190 && event.shiftKey === true) ||
				(event.keyCode == 173 && event.shiftKey === true) ||
				((event.keyCode == 59) || (event.keyCode == 186)) ||
				(event.keyCode == 222) ||
				(event.keyCode == 220) ||
				(event.keyCode == 219) ||
				(event.keyCode == 221) ||
				(event.keyCode == 107) ||
				(event.keyCode == 191) ||
				(event.keyCode == 106) ||
				(event.keyCode == 111) ||
				(event.keyCode == 187) ||
				(event.keyCode == 61) ||
				((event.keyCode == 109 && event.shiftKey === true) || (event.keyCode == 189 && event.shiftKey === true)) ||
				((event.keyCode >= 48 && event.shiftKey === true && (event.keyCode <= 57 && event.shiftKey === true)))
			){
				event.preventDefault(); 
			}
		});
			
		$('#uc-cart-checkout-form #rewardcard-pane legend span').html('SM Advantage/Prestige/BDO Rewards card');
	});
})(jQuery);