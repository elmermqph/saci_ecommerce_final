(function($){
	$(document).ready(function(){
		var categorytitle = $('h1.title').html();
		if($('#block-views-appliance_inner_category-block').length){
						$('h1.title').css('display','none');
						$('#block-views-appliance_inner_category-block h2.block-title').html(categorytitle);
                        $('#block-views-appliance_inner_category-block .view-header .category-fetch').html(categorytitle);
                        $('#block-views-appliance_inner_category-block').fadeIn("slow");
		}else if(!$('.product_search_category').length){
			$('h1.title').css('display','none');
			$("#block-block-12 .count-item").html('<div class="no-result messages error">NO RESULT FOUND</div>');
			$("#block-block-12").fadeIn("slow");
		}else{
			$('h1.title').css('display','none');
						$('#block-block-12 .content .header-title').html(categorytitle);
                        var compare_check = $("#block-views-term_compare_access-block .views-field-field-switch-compare .field-content").html();
                        $(".block-compare-product .content .container-compare a.greenbutton").click(function(){
                                $(this).html("Checking...");
                                $(".block-compare-product .content").css("padding","0px 0px 0px 200px");
								$("#totalvalue-checkparameter").load('/flag-check-compare/'+$('#page-term-control').val()+' .view-clickcompare-check .view-header',
									function(response, status, xhr) {
										if(status=="success"){
											var valueitem =  $("#totalvalue-checkparameter .view-header").html();
											$("#totalitem-check").val($.trim(valueitem));
											if($("#totalitem-check").val()==0){
												$(".block-compare-product .content .container-compare a.greenbutton").html("Compare");
												$(".block-compare-product .content").css("padding","0px 0px 0px 219px");
												alert("Select item(s) to compare.");
												return false;
											}else if($("#totalitem-check").val()==1){
												$(".block-compare-product .content .container-compare a.greenbutton").html("Compare");
												$(".block-compare-product .content").css("padding","0px 0px 0px 219px");
												alert("Compare at least 2 or more");
												return false;
											}else{
												location.replace($(".block-compare-product .content .container-compare a.greenbutton").attr("href"));
												return true;
											}
										}
								});
								return false;
							});
                             $(".block-compare-product .content .container-compare").show();
                        $("#block-block-12 .count-item").html($(".product_search_category .view-header").html());
                        $("#block-block-12 .count-item .category-header-banner").html(categorytitle);
                        $('#block-block-12, #block-block-16, #block-block-19, #block-views-categories_product-block_1').fadeIn("slow");
		}
		$('#block-block-19 select.ordering-select-input').change(function() {
			var pathcheck =  $('#block-block-19 #page-path-control').val();
            var pathidterm =  $('#block-block-19 #page-term-control').val();
            var brandsterm = $("#block-block-19 #page-brand-control").val();
  var pricesterm = $("#block-block-19 #page-price-control").val();

 location.replace("/"+pathcheck+"/"+pathidterm+"?sort_by=sell_price&sort_order="+$(this).val()+brandsterm+pricesterm );
		});
        $(".view-id-bread_crumbs_taxonomy .views-field .field-content").each(
			function(){
				var linkbread = $(this).html();
                                if(linkbread!="")
				 $("#breadcrumbs .breadcrumb").append(" » "+linkbread);
			}
		);
	});
})(jQuery);