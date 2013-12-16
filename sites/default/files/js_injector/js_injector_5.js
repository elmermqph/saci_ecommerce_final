(function($){
	$(document).ready(function(){
		$(".product_search_category .views-field-uc-product-image .image").hover(
			function(){
				var idhover = $(this).attr("idhover");
				$(".imagelink-"+idhover).css("display","block");
			},function(){
				$(".quickview").css("display","none");
			}
		);
});
})(jQuery);