/*(function($){
$(document).ready(function(){
$(".ajax-cart-processed").ajaxStart(function(){
$(this).ajaxStop(function(){
$("#block-block-18 .content").load("/block-cart-page #content #block-system-main #node-88 .field-item.even");
	$("#block-block-5 .content .ajax-items-cart-update").load("/block-cart-check-total-cart .content .temp-total-cart",
		function(response, status, xhr) {
			if (status == "success") {
			
				var existingitems = $("#block-block-5 .content .check-cart-status").html();
				var updateitems = $("#block-block-5 .content  .ajax-items-cart-update .temp-total-cart").html();
				
				if(existingitems != updateitems){
					$("#block-block-5 .content .check-cart-status").html(updateitems);
				}
			}
		}
	);
	});
});               
$(".product_search_category .view-content td .views-field-ops .flag-compare").ajaxStop(function(){
	$(".product_search_category .view-content td .views-field-ops .flag-waiting a").click(function(){
		alert("Please wait, Loading....");
		return false;
	});
});
});
})(jQuery);*/;
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
}(jQuery));;
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
