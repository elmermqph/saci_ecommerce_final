(function($){
$(document).ready(function(){
//$("title").html("Product Catalogue | SM Appliance Center");


var windowheight = $(window).height();
var windowwidth = $(window).width();
var loadertop = ((windowheight-30)/2)+'px';
var loaderleft = ((windowwidth-30)/2)+'px';

$("body").append('<div id="overlay-container" class="popup-behavior">&nbsp;</div><div id="popup-box-loader" class="popup-behavior" style="left:'+loaderleft+';top:'+loadertop+';"><img src="/sites/all/themes/fusion/sm_appliance/images/item-popup.gif"></div><div id="popup-box-container" class="popup-behavior"><div class="exit"><img src="/sites/all/themes/fusion/sm_appliance/images/close-popup-exit.png"></div><div class="content"></div></div>');
$(".quickview").click(function(){
$("body").css({'height':windowheight+"px",'width':windowwidth+"px",'overflow':'hidden'});
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
$("#popup-box-container").css({'top':containertop,'left':containerleft,'width':containerwidth+"px"
});
$("#popup-box-loader").hide();
$("#popup-box-container").fadeIn("slow");
$('.product-teaser-image').zoom();
}
}
);
});


$("#popup-box-container, #overlay-container, #popup-box-container .exit").click(function(){
 $(".popup-behavior").fadeOut("slow",function(){
   $("body").css({'height':"100%",'width':"100%","overflow":"auto"});
   $("#overlay-container").css('display',"none");
 });
});

});
})(jQuery);