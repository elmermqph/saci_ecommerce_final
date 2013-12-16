// JavaScript Document
(function($){
	$(document).ready(function(){
		$(".order-review-table td.data-col").attr("colspan","2");
		$(".order-review-table tr.review-button-row td").prepend('<span style="display: block;text-align: left;padding: 0px 10px 10px 30px;"><input type="checkbox" id="valid-thru-check" /> I confirm that the information above are correct and that I accept the site&#39;s <a href="http://smappliance.com/terms-and-condition" target="_blank">Terms and Conditions</a> and that <br> the package recipient shall present the Sales Invoice upon delivery.</span><br /><span style="display: block;text-align: left;padding: 0px 10px 10px 30px;">Please do not click the  BACK button, while we are processing your order, thank you.</span>');
                $("#uc-cart-checkout-review-form #edit-back").live('click',function(){
			location.replace("/cart/checkout");
                        return false;
		});

		$("#uc-cart-checkout-review-form #edit-submit").live('click',function(e){
			if($('#valid-thru-check').attr('checked')){
				e.preventDefault(); 
				$.ajax({
        			url: '/verification/checkout',
					dataType: 'json',
        			success: function(response) {
						if(response.status == false){
							location.replace("/cart");
						}else{
						      $("#uc-cart-checkout-review-form").submit();
						}
					}
				});
			}else{
			    $(".ubercart-throbber").css("display","none");
				alert("Please confirm that the information you have entered is correct");
 $("#uc-cart-checkout-review-form #edit-back").removeAttr("disabled");
				return false;
			}
		});	
	});
})(jQuery);