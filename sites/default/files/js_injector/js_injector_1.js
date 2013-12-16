(function ($) {
	$(document).ready(function(){
		var blockheight = $('#block-views-general_info_product-block').height();
		var margin = parseInt(blockheight)+40;
		margin = margin.toString();
		$('#block-views-photo_main_product_info-block .widget_pager_bottom').css('margin-top',margin+'px');
		$(".product-main-information .view-product-information-details .views-field").each(function(i){
		if(i%2==0){
			$(this).addClass("even");
		}else{
			$(this).addClass("odd");
		}
		});
                $(".breadcrumb").html($(".breadcrumb").html().replace("&quot;",'"'));
		$("#block-block-12 .header-title").html("Product Information");
                  var selectorflag = $("#block-views-general_info_product-block .views-field-ops a");
	          if(selectorflag.hasClass("flag-action")==true){
                           var ajaxreference = selectorflag.attr("href");                           
                           $("#block-views-general_info_product-block .views-field-ops .field-content").load(ajaxreference+" #block-views-general_info_product-block .views-field-ops .field-content");
                  }
	});
})(jQuery);