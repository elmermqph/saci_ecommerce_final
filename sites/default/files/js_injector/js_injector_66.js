(function($){
$(document).ready(function(){
	var windowheight = $(window).height();
	var windowwidth = $(window).width();
	var loadertop = ((windowheight-30)/2)+'px';
	var loaderleft = ((windowwidth-30)/2)+'px';
	$("body").append('<div id="overlay-container" class="popup-behavior">&nbsp;</div><div id="popup-box-loader" class="popup-behavior" style="left:'+loaderleft+';top:'+loadertop+';"><img src="/sites/all/themes/fusion/sm_appliance/images/item-popup.gif"></div><div id="popup-box-container" class="popup-behavior"><div class="exit"><img src="/sites/all/themes/fusion/sm_appliance/images/close-popup-exit.png"></div><div class="content"></div></div>');
	$(".quickview").live("click",function(){
		$("body").css({'height':windowheight+"px",'width':windowwidth+"px","overflow":"hidden"});
		var idcheck = $(this).attr("hyperlinkid");
		$("#overlay-container").css({'display':"inline",'filter':"alpha(opacity=70)"});
		$("#popup-box-loader").fadeIn();
		$("#popup-box-container .content").load("/product-teaser-preview/"+idcheck+" .view-product-teaser-preview",
		function(response, status, xhr) {
			if (status == "success") {
				var containerheight = 307;
				var containerwidth = $("#popup-box-container .view-product-teaser-preview").width();
				var containertop = ((windowheight-containerheight)/2)+'px';
				var containerleft = ((windowwidth-containerwidth)/2)+'px';
				$("#popup-box-container").css({'top':containertop,'left':containerleft,'width':containerwidth+"px"/*,'height':containerheight+"%"*/});
				$("#popup-box-loader").hide();
				$("#popup-box-container").fadeIn("slow");
				$('.product-teaser-image').zoom();
			}
		});
	});
	$("#popup-box-container, #overlay-container, #popup-box-container .exit").live("click",function(){
		$(".popup-behavior").fadeOut("slow",function(){
			$("body").css({'height':"100%",'width':"100%","overflow":"auto"});
				$("#overlay-container").css({'display':"none"});
		});
	});
      	
$("#pid-cart #edit-checkout--2").live("click",function(){
		var price = $("#uc-cart-view-form .subtotal .uc-price").html().replace('<span class="x-sign">P</span>',"").replace(",","");
		if(parseFloat(price)> 200000.00){
			if($("#block-block-7 .content .limit-xend").length==0){
				$("#block-block-7 .content").append('<div class="messages error limit-xend">We only limit PHP 200,000.00 per transaction. Thank you.</div>');
$("#block-block-7 .content .limit-xend").css("display","block");
$("html,body").scrollTop(0);
			}else{
				$("#block-block-7 .content .limit-xend").css("display","block");
$("html,body").scrollTop(0);
			}
			return false;
		}else{
			return true;
		}
		
	});
});
})(jQuery);