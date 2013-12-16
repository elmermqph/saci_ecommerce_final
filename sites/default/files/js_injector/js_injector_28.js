(function($){
	$(document).ready(function(){
		$("#uc-cart-checkout-form .cart-review tbody tr").each(function(){
			if($(this).attr("class") !== "subtotal even"){
				var s = $(this).find("td").first().html();
				$(this).find("td").first().html(s.slice(0,-1));
			}
		});
		$("#block-system-main .order-pane-table tbody tr").each(function(){
			var s_1 = $(this).find("td").first().html();
			$(this).find("td").first().html(s_1.slice(0,-1));
		});
	});
}(jQuery));