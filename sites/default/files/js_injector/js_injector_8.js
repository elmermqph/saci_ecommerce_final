(function($){
	$(document).ready(function(){
		$(".product_compare li .views-field-php").each(function(){
			var parent = $(this);
			$(".field-content .views-field",parent).each(function(i){
				if(i%2==0){
					$(this).addClass("even");
				}else{
					$(this).addClass("odd");
				}
			});
		});
		$("#block-views-e23b2bc3ffd058fb8adf6b8c1df154cf .views-field").each(function(i){
				if(i%2==0){
					$(this).addClass("even");
				}else{
					$(this).addClass("odd");
				}
			
		});
		$(".product_compare .views-field-uc-product-image .image").hover(
					function(){
						var idhover = $(this).attr("idhover");
						$(".imagelink-"+idhover).css("display","block");
					},function(){
						$(".quickview").css("display","none");
					}
		);
                   $(".view-id-bread_crumbs_taxonomy .views-field .field-content").each(
			function(){
				var linkbread = $(this).html();
                                if(linkbread!="")
				 $("#breadcrumbs .breadcrumb").append(" » "+linkbread);
			}
		);
                $("#block-block-12 .header-title").html("Product Comparison");
                $("#block-block-12 .count-item").html($(".product_compare .view-header").html());
                $(".product_compare .views-field-ops a").html("Remove");
                 var compare_check = $("#block-views-term_compare_access-block_1 .views-field-field-switch-compare .field-content").html();
                 if(compare_check=="No"){
                       $(".view-id-product_attributes_fetch_label .attachment .view-product-attributes-fetch-label .views-field").each(function(){
                               $(this).css("display","none");
                      });
                      $(".view-product-attributes-fetch .attachment .view-product-attributes-fetch .views-field").each(function(){
                               $(this).css("display","none");
                      });
                 }
                
	});
})(jQuery);