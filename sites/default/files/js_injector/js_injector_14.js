(function($){
$(document).ready(function(){
		var url = document.URL;
        if(url.indexOf("?")>0)
			$("#block-block-12 .header-title").html("Products Search");
        else
			$("#block-block-12 .header-title").html("All Products");
          $(".view-search-price-view-content .views-row span").each(function(){
					var parametercheck = $(this).html();
					var ranges = parametercheck.split('-');
					if(ranges[0] == "Below"){
						textlabel = ranges[1]+" and "+ranges[0];
					}else if(ranges[1] == "Above"){
						textlabel = ranges[0]+" and "+ranges[1];
					}else{
                                                 textlabel = parametercheck.replace("-"," - ");
					}
					value = '<li><span>'+textlabel+'</span><input type="checkbox" class="element-checkbox check-'+ranges[0].replace(",","")+'-'+ranges[1].replace(",","")+'" valuelow="'+ranges[0].replace(",","")+'" valuehigh="'+ranges[1].replace(",","")+'" /></li>';
					$("#price-filter .listing-container").append(value);
			});
		$('#price-filter .listing-container li input').click(function(){
			if($(this).is(':checked')){
                                $('#price-filter .listing-container li input').attr("checked",false);
                                $(this).attr("checked",true);
			}else{
				$('#price-filter .listing-container li input').attr("checked",false);
			}
				
		});
          $("#price-filter .button-submit").click(function(){
					var orderingcheck = $("#block-block-20 .ordering-select").val();
					brandingcheck = "";
					pricerange = "";
					var searchtext = $("#block-block-20 .filter-search-control").val();
                    if(searchtext==""){
							var titletext = "";
                    }else{
                            var titletext = "&field_model_value="+searchtext+"&title="+searchtext+"&body_value="+searchtext+"&field_tag_search_value="+searchtext;
                     }
					$('#price-filter .listing-container li input').each(
						function(){
							if($(this).attr("checked")==true){
								if($(this).attr("valuelow")=="Below"){
									pricerange="&sell_price_op=<%3D&sell_price%5Bvalue%5D="+$(this).attr("valuehigh");
								}else if($(this).attr("valuehigh")=="Above"){
									pricerange="&sell_price_op=>%3D&sell_price%5Bvalue%5D="+$(this).attr("valuelow");
								}else{
									pricerange="&sell_price_op=between&sell_price%5Bmin%5D="+$(this).attr("valuelow")+"&sell_price%5Bmax%5D="+$(this).attr("valuehigh");
								}
							}
						}
					);
					if($("#block-block-20 .check-branding").val()!=0){
							temp = $("#block-block-20 .check-branding").val().split("-");
							for (a in temp ) {
							    if(temp[a]!=""){
									brandingcheck = brandingcheck+"&field_brands_tid[]="+temp[a];
								}
							}
					}
					if(pricerange!=""){
						location.replace("/all-products?sort_by=sell_price&sort_order="+orderingcheck+titletext+brandingcheck+pricerange)
					}else{
						alert("Please Select Price Range")
					}
			});
           if($(".view-id-categories_product .view-header .has-result").length){
                      $("#block-block-12 .count-item").html($(".view-id-categories_product .view-header .has-result").html());
			}else {
				   $("#block-block-12 .count-item").html($(".view-id-categories_product .view-header").html());
				   $("#block-block-20").css("display","none");
          }
          category_appending("brand");
		 $("#block-block-20 .button-submit").click(function(){
				var orderingcheck = $("#block-block-20 .ordering-select").val();
				brandingcheck = "";
				pricerange = "";
				var searchtext = $("#block-block-20 .filter-search-control").val();
                if(searchtext==""){
					var titletext = "";
                }else{
                    var titletext = "&field_model_value="+searchtext+"&title="+searchtext+"&body_value="+searchtext+"&field_tag_search_value="+searchtext;
                }
				$('#price-filter .listing-container li input').each(
					function(){
						if($(this).attr("checked")==true){
							if($(this).attr("valuelow")=="Below"){
								pricerange="&sell_price_op=<%3D&sell_price%5Bvalue%5D="+$(this).attr("valuehigh");
							}else if($(this).attr("valuehigh")=="Above"){
								pricerange="&sell_price_op=>%3D&sell_price%5Bvalue%5D="+$(this).attr("valuelow");
							}else{
								pricerange="&sell_price_op=between&sell_price%5Bmin%5D="+$(this).attr("valuelow")+"&sell_price%5Bmax%5D="+$(this).attr("valuehigh");
							}
						}
					}
				);
				$('#brand-filter .listing-container li .element-checkbox').each(
					function(){
						if($(this).attr("checked")==true){
							brandingcheck = brandingcheck+"&field_brands_tid[]="+$(this).val();
						}
					}
				);
				location.replace("/all-products?sort_by=sell_price&sort_order="+orderingcheck+titletext+brandingcheck+pricerange)
		});
});
function category_appending(name){
		if($(".view-brands-search-by-keyword .view-content").html()=="" || !$(".view-brands-search-by-keyword .view-content").length){
			$("#"+name+"-filter").css("display","none");
		}else{
			$(".view-id-brands_search_by_keyword").append('<div class="outputlisting-content"><ul class="mainlisting"></ul></div>');
			$(".view-brands-search-by-keyword .view-content .views-field span").each(function(){
					var branid = $(this).html();
					if($(".view-id-brands_search_by_keyword .outputlisting-content .mainlisting .brandingcheck-"+branid).length){
						var totalnumber = $(".view-id-brands_search_by_keyword .outputlisting-content .mainlisting .brandingcheck-"+branid+" .counting-check").html();
						totalnumber++;
						$(".view-id-brands_search_by_keyword .outputlisting-content .mainlisting .brandingcheck-"+branid+" .counting-check").html(totalnumber);
						
					}else{
					    var brandname = $(".view-brands-search-by-keyword .view-footer .view-content .field-content span.term-"+branid).html();
						appentelement = '<li class="brandingcheck-'+branid+'"><span class="branding-label">'+brandname+'<sup> (<span class="counting-check">1</span>)</sup></span><input type="checkbox" class="element-checkbox" value="'+branid+'"/></li>';
						$(".view-id-brands_search_by_keyword .outputlisting-content .mainlisting").append(appentelement);
					}
			});
			$(".view-brands-search-by-keyword .view-footer .view-content .field-content span").each(function(){
					var classname = $(this).attr('class').replace("term-","");
					if($(".view-id-brands_search_by_keyword .outputlisting-content .mainlisting .brandingcheck-"+classname).length){
						if(!$("#"+name+"-filter .listing-container .brandingcheck-"+classname).length){
							var htmlelement = $(".view-id-brands_search_by_keyword .outputlisting-content .mainlisting .brandingcheck-"+classname).html();
							$("#"+name+"-filter .listing-container").append('<li class="brandingcheck-'+classname+'">'+htmlelement+'</li>');
						}
					}
			});
            $("#block-block-20").fadeIn("slow");
            $("#block-block-12").fadeIn("slow");
			$("#block-block-20 #"+name+"-filter .button-submit").click(
				function(){
					var termpath = $("#block-block-20  .filter-term-control").val();
					var orderingcheck = $("#block-block-20 .ordering-select").val();
					var searchtext = $("#block-block-20 .filter-search-control").val();
                        if(searchtext==""){
							var titletext = "";
                        }else{
                            var titletext = "?field_model_value="+searchtext+"&title="+searchtext+"&body_value="+searchtext+"&field_tag_search_value="+searchtext;
                        }
					totalvalue = "";
					if(searchtext!=""){
						totalvalue = "field_model_value="+searchtext+"&title="+searchtext+"&body_value="+searchtext+"&field_tag_search_value="+searchtext;
					}
					$('#'+name+'-filter .listing-container li .element-checkbox').each(
						function(){
							if($(this).attr("checked")==true){
								totalvalue = totalvalue+"&field_brands_tid[]="+$(this).val();
							}
						}
					);
					location.replace("/all-products?"+totalvalue);
				}
			);
		}
	}
})(jQuery);