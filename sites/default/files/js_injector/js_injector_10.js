(function($){
	$(document).ready(function(){
		if($(".view-price-view-content").html()=="" || !$(".view-price-view-content").length){
			$("#price-filter").css("display","none");
		}else{
			$(".view-id-price_view_content .views-row span").each(function(){
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
					
					var termpath = $("#block-block-16  .filter-term-control").val();
					var orderingcheck = $("#block-block-16 .ordering-select").val();
					brandingcheck = "";
					pricerange = "";
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
					if($("#block-block-16 .check-branding").val()!=0){
							temp = $("#block-block-16 .check-branding").val().split("-");
							for (a in temp ) {
							    if(temp[a]!=""){
									brandingcheck = brandingcheck+"&field_brands_tid[]="+temp[a];
								}
							}
					}
					if(pricerange!=""){
						
					}else{
						alert("Please Select Price Range");
					}
			});
			
		}
		if($("#block-block-12 .count-item .no-result").length){
				//$("#block-block-16").css("display","none");
                                if($.trim($("#block-block-12 .header-title").html())==""){
                                   $("#block-block-12 .content").css({"background":"none","border":"none"});
                                }
                                if($("#block-block-16").css("display")=="none"){ 
                                         $("#block-block-12 .count-item .no-result").css({
                                                   "left":"0",
                                                   "top":"0",
                                                   "width":"876px"
                                          });
                                           $("#block-block-12").css("min-height","170px;");
                                }
                                $("#block-views-home_product_appliance-block_3").css("display","none");
				$("#block-block-6").css("display","none")
		}
                $("#breadcrumbs .breadcrumb a").each(function(){
                       var htmlcheck = $(this).html().replace("&amp;","&");
                        $(this).html(htmlcheck);
                });
		category_appending("brand");
		
		$("#block-block-16 .button-submit").click(function(){
			var termpath = $("#block-block-16  .filter-term-control").val();
			var orderingcheck = $("#block-block-16 .ordering-select").val();
			brandingcheck = "";
			pricerange = "";
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
			});
			location.replace("/categories-product/"+termpath+"?sort_by=sell_price&sort_order="+orderingcheck+brandingcheck+pricerange)
		});
	});
	function category_appending(name){
		if($(".view-"+name+"-view-content").html()=="" || !$(".view-"+name+"-view-content").length){
			$("#"+name+"-filter").css("display","none");
		}else{
			$(".view-"+name+"-view-content .view-content ul.views-summary li").each(function(){
					var parentselect = $(this);
					var elementid = $("a",parentselect).html();
					var firstposition = $(this).html().indexOf("(");
					var lastposition = $(this).html().indexOf(")");
					var totalnumber =  $(this).html().substr((firstposition),4)
					var lastposition = totalnumber.indexOf(")");
					var numberset = totalnumber.substr(1,(lastposition-1))
					$("a",parentselect).addClass('ordering-category-number-'+elementid);
					$("a",parentselect).attr('numberoflist',numberset);
					
			});
            $(".view-"+name+"-view-content  .view-content .item-list").append('<div class="ordering-container"><ul class="ordering-list"></ul></div>');
			$(".view-"+name+"-view-content .view-footer .view .view-content .views-field .field-content span").each(function(){
					var parentselect = $(this);
					var classnamecheck = $(this).attr('class');
					var idcheck = classnamecheck.replace("term-","");
					$(this).attr("itemid",idcheck);
					if($(".view-"+name+"-view-content .view-content ul.views-summary li a").hasClass("ordering-category-number-"+idcheck)){
						var numberoflist = $(".view-"+name+"-view-content .view-content ul.views-summary li a.ordering-category-number-"+idcheck).attr("numberoflist");
						 $(".view-"+name+"-view-content .view-content .item-list .ordering-container ul.ordering-list").append('<li><a href="/">'+idcheck+'</a>('+numberoflist+')</li>');
					}
			});
			$(".view-id-brand_view_content").append('<div class="outputlisting-content"><ul class="mainlisting"></ul></div>');
			$(".view-id-brand_view_content .view-content .views-field.views-field-tid span").each(function(){
					var branid = $(this).html();
				if($(".view-id-brand_view_content .outputlisting-content .mainlisting .brandingcheck-"+branid).length){
						var totalnumber = $(".view-id-brand_view_content .outputlisting-content .mainlisting .brandingcheck-"+branid+" .counting-check").html();
						totalnumber++;
						$(".view-id-brand_view_content .outputlisting-content .mainlisting .brandingcheck-"+branid+" .counting-check").html(totalnumber);
						
					}else{
					    var brandname = $(".view-id-brand_view_content .view-footer .view-content .field-content span.term-"+branid).html();
						appentelement = '<li class="brandingcheck-'+branid+'"><span class="branding-label">'+brandname+'<sup> (<span class="counting-check">1</span>)</sup></span><input type="checkbox" class="element-checkbox termfetch-'+branid+'" value="'+branid+'" /></li>';
						$(".view-id-brand_view_content .outputlisting-content .mainlisting").append(appentelement);
					}
			});
			
$(".view-id-brand_view_content .view-footer .view-content .field-content span").each(function(){
					var classname = $(this).attr('class').replace("term-","");
					if($(".view-id-brand_view_content .outputlisting-content .mainlisting .brandingcheck-"+classname).length){
						if(!$("#"+name+"-filter .listing-container .brandingcheck-"+classname).length){
							var htmlelement = $(".view-id-brand_view_content .outputlisting-content .mainlisting .brandingcheck-"+classname).html();
							$("#"+name+"-filter .listing-container").append('<li class="brandingcheck-'+classname+'">'+htmlelement+'</li>');
						}
					}
			});

			$("#block-block-16 #"+name+"-filter .button-submit").click(
				function(){
					var termpath = $("#block-block-16  .filter-term-control").val();
					var orderingcheck = $("#block-block-16 .ordering-select").val();
					totalvalue = "";
					$('#'+name+'-filter .listing-container li .element-checkbox').each(
						function(){
							if($(this).attr("checked")==true){
								totalvalue = totalvalue+"&field_brands_tid[]="+$(this).val();
							}
						}
					);
					location.replace("/categories-product/"+termpath+"?sort_by=sell_price&sort_order="+orderingcheck+totalvalue);
				}
			);
		}
	}
})(jQuery);