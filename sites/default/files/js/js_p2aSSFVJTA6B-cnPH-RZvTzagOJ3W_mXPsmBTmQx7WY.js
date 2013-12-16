(function($){
	$(document).ready(function(){
                if( $(".messages.error:contains('We have now only 0 units of the product')").length > 0){
                 
                    $(".messages.error:contains('We have now only 0 units of the product')").css("display","none");
                    var itemcheck =  $(".messages.error:contains('We have now only 0 units of the product')").html().replace("left in stock.", '').replace("We're sorry. We have now only 0 units of the product", '').replace("left in stock.", '').replace('<h2 class="element-invisible">Error message</h2>','');
                     $(".messages.error:contains('We have now only 0 units of the product')").html(" Oops sorry! But the last piece "+$.trim(itemcheck)+" has already been purchased by another customer a couple of minutes ago, kindly watch out for arrival of new stocks. Or you may email us for any requests.");
                    $(".messages.error:contains('Oops sorry! But the last piece')").css("display","block");
                }
		//$("#block-block-18 .content").load("/block-cart-page #content #block-system-main #node-88 .field-item.even");
                
		$('#block-block-4 .select-category').hover(
			function(){
				if(!$('#block-block-4 .select-category .taxonomy-menu').hasClass('open')){
					$('#block-block-4 .select-category .taxonomy-menu').slideDown('slow');
					$('#block-block-4 .select-category .taxonomy-menu').addClass('open');
				}
			},function(){
				$('#block-block-4 .select-category .taxonomy-menu').hide();
				$('#block-block-4 .select-category .taxonomy-menu').removeClass('open')
				
			}
		);
                $("#superfish-1 li a").each(function(){
                       $(this).attr("title","");
                });
        
        $("#breadcrumbs-inner .breadcrumb").each(function(){
            var stringhtml =   $(this).html().replace('&qout;','"');
            $(this).html(stringhtml);
        });

        $('#block-block-4 .searchtextbox').click(function(){
                         if($(this).val()=="Keyword Search"){
                                     $(this).attr("value","");
                         }
       });
		$('.taxonomy-menu li a').click(
			function(){
				var counterid = $(this).attr("counterview");
				var htmlvalue = $('.taxonomy-menu li a.option-link-'+counterid).html();
				$('.taxonomy-menu li').removeClass('selected');
				$('.taxonomy-menu li.option-'+counterid).addClass('selected');
				$('#block-block-4 .select-category a.search-taxonomy-selected').html(htmlvalue);
				$('.taxonomy-menu li a.option-link-'+counterid).html();
				$('#taxonomyvalue').val($(this).attr("optionvalue"));
				$('#block-block-4 .select-category .taxonomy-menu').hide();
				$('#block-block-4 .select-category .taxonomy-menu').removeClass('open')
			}
		);

		

		$("#block-block-4 #searchresult_category").click(function(){
			var categoryvalue = $("#block-block-4 #taxonomyvalue").val();
			var categorytext = $("#block-block-4 .searchtextbox").val();
			var titletext = "";
			if(categorytext == ""  || categorytext == "Keyword Search"){
                                      alert("Please fill up the keyword.");
                        } else{	
                          var titletext = "?field_model_value="+categorytext+"&title="+categorytext+"&body_value="+categorytext+"&field_tag_search_value="+categorytext;
			  if(categoryvalue == 1){
				location.replace("/all-products"+titletext);
			  }else{
				location.replace("/search-product/"+categoryvalue+titletext);
			 }
                        }
		});
               $('#block-block-4 .searchtextbox').keypress(function(event){
                   if(event.which == 13){
                               var categorytext = $(this).attr("value");
                               if(categorytext == ""  || categorytext == "Keyword Search"){
                                       alert("Please fill up the keyword.");
                               }else{
                                       var categoryvalue = $("#block-block-4 #taxonomyvalue").val();                                        
                                       var titletext = "?field_model_value="+categorytext+"&title="+categorytext+"&body_value="+categorytext+"&field_tag_search_value="+categorytext;
			               if(categoryvalue == 1){
				          location.replace("/all-products"+titletext);
                                       }else{
				          location.replace("/search-product/"+categoryvalue+titletext);
                               
			               }
                               }
                              return false;
                    }
                   
          });
	popupstyle("#block-superfish-1","ul#superfish-1");		  
        $("#block-superfish-1 .block-title").click(function(){location.replace("/all-products")});
	       $('#block-block-18 .inner').hover(
			function(){
					$("#block-block-18 .content").slideDown('fast');
                    $('#block-block-18 h2.block-title').addClass('hover-special');                       
			},function(){
					$("#block-block-18 .content").hide();
					$('#block-block-18  h2.block-title').removeClass('hover-special');
			}
		);
	});
	function popupstyle(id,container){
		$(id+' .inner').hover(
			function(){
					$(container).slideDown('fast');
					$(id+' h2.block-title').addClass('hover-special');
			},function(){
					$(container).hide();
					$(id+' h2.block-title').removeClass('hover-special');
			}
		);
	
	
	}
})(jQuery);;
