(function($){
	$(document).ready(function(){
		
                $('#block-block-6 select.ordering-select-input').change(function() {
                      var pathcheck =  $('#block-block-6 #page-path-control').val();
                      var pathidterm =  $('#block-block-6 #page-term-control').val();
                      var brandsterm = $("#block-block-6 #page-brand-control").val();
var pricesterm = $("#block-block-6 #page-price-control").val();

 location.replace("/"+pathcheck+"/"+pathidterm+"?sort_by=sell_price&sort_order="+$(this).val()+brandsterm+pricesterm );
		});
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
                var htmltitle = $("#block-views-08c08d82a166ff61c5cdcd294ecbf1a6 .view-content .views-field-name span").html();
                $("#block-block-12 .header-title").html(htmltitle);
                $("#block-block-12 .count-item .category-header-banner").html(htmltitle);
                $(".view-id-bread_crumbs_taxonomy .views-field .field-content").each(
			function(){
				var linkbread = $(this).html();
                                if(linkbread!="")
				 $("#breadcrumbs .breadcrumb").append(" » "+linkbread);
			}
		);
	});
})(jQuery);