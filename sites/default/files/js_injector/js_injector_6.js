(function($){
	$(document).ready(function(){
               
               autoformat("item-titlenameonly","views-field-field-image-category");
		autoformat("itemtable-fulldetails","views-field-uc-product-image");
                autoformat("blue-banner","views-field-uc-product-image");  
                
		$(".view-categories-product .views-field-uc-product-image .image").each(function(){
			var defaultheight = $(this).css("height").replace("px", "");
			var defaultwidth = $(this).css("width").replace("px", "");
			var parent = $(this);
			var width = $("img",parent).attr("width");
			var height = $("img",parent).attr("height");
                        if(height==0 && width==0){
				width = 160;
				height = 160;	
			}
			$(".images-absolute",parent).css({
						'height':height+'px',
						'width':width+'px',
						'top':((defaultheight-height)/2)+'px',
						'left':((defaultwidth-width)/2)+'px',
						'position':'absolute'
			});
		});
	});
	
	function autoformat(classname,elementclass){
		if($("."+classname).length){
		    var defaultheight = $("."+classname+" .view-content ."+elementclass).css("height").replace("px", "");
			var defaultwidth = $("."+classname+" .view-content ."+elementclass).css("width").replace("px", "");
			$("."+classname+" .view-content ."+elementclass).each(
				function(){
					var parent = $(this);
					var height = $("img",parent).attr("height");
					var width = $("img",parent).attr("width");
if(height==0 && width==0){
				width = 160;
				height = 160;	
			}
					$(".field-content",parent).css({
						'height':height+'px',
						'width':width+'px',
						'top':((defaultheight-height)/2)+'px',
						'left':((defaultwidth-width)/2)+'px',
						'position':'absolute'
					});
				}
			);
		}
	}
})(jQuery);