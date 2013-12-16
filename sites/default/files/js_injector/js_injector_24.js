(function($){
	$(document).ready(function(){
 $("#uc-cart-view-form .form-type-uc-quantity .form-text").live("blur",function(){
                        index_item = $(this).attr("id").replace('edit-items-', '').replace('-qty', '');	
			var items = {qty: $(this).val(),index:index_item}
			$.ajax({
        			url: '/stock/checker',type: 'post',
        			dataType: 'json',
        			data: items,
        			success: function(response) {
						if(response.status==false){
							var stock_messages_notif = 'Only '+response.item_qty+' piece(s) available on <span style="font-weight:bold;">'+response.item_name+'</span>.';
							if($("#block-block-7 .messages.error.warning ul").length>0){
								if($("#block-block-7 .messages.error.warning ul li.stock_notification").length>0){
									$("#block-block-7 .messages.error.warning ul li.stock_notification").remove();
								}
								$("#block-block-7 .messages.error.warning ul").append('<li class="stock_notification">'+stock_messages_notif+'</li>');
							}else{
								$("#block-block-7 .content.clearfix").append('<div class="messages error warning"><h2 class="element-invisible">Error Messages</h2><ul><li class="stock_notification">'+stock_messages_notif+'</li></ul></div>');
							}
						}
					}
			});
		});
            	$("td.remove").append("<input type='button' value='Remove' class='remove-item-link'>");
		//$("td.qty .form-item input").each(function(){
		//	var qty_value = $(this).val();
		//	$("<div class='qty-seccond-text'><input class='qty-seccond-text-input' value='" + qty_value + "'></div>").insertAfter($(this));
		//});
		$(".remove-item-link").live("click",function(){
   
			var answer = confirm ("Are you sure you want to delete this item?")
			if (answer){
				$(this).prev().click();
                             $("#block-block-18 h2.title").addClass("flag-waiting");
				$("#block-block-18 .content").load("/block-cart-page #content #block-system-main #node-88 .field-item.even", function(response, status, xhr) {
					if (status == "success") {
					   $("#block-block-18 h2.title").removeClass("flag-waiting");
					   	$("#block-block-5 .content .ajax-items-cart-update").load("/block-cart-check-total-cart .content .temp-total-cart",
						function(response, status, xhr) {
							if (status == "success") {
								var existingitems = $("#block-block-5 .content .check-cart-status").html();
								var updateitems = $("#block-block-5 .content  .ajax-items-cart-update .temp-total-cart").html();
								if(existingitems != updateitems){
									$("#block-block-5 .content .check-cart-status").html(updateitems);
								}
							}
						}
						);
parent.window.location.href = "/cart";
					}
				});
			}
		});

	  jQuery.fn.contentChange = function(callback){
		var elms = jQuery(this);
		elms.each(
		  function(i){
			var elm = jQuery(this);
			elm.data("lastContents", elm.html());
			window.watchContentChange = window.watchContentChange ? window.watchContentChange : [];
			window.watchContentChange.push({"element": elm, "callback": callback});
		  }
		)
		return elms;
	  }
	  setInterval(function(){
		if(window.watchContentChange){
		  for( i in window.watchContentChange){
			if(window.watchContentChange[i].element.data("lastContents") != window.watchContentChange[i].element.html()){
			  window.watchContentChange[i].callback.apply(window.watchContentChange[i].element);
			  window.watchContentChange[i].element.data("lastContents", window.watchContentChange[i].element.html())
			};
		  }
		}
	  },500);


	  $("#block-system-main").contentChange(function(){  
		//alert("test");
		$("td.remove .remove-item-link").remove();
		$("td.remove").append("<input type='button' value='Remove' class='remove-item-link'>");
	  });
	  
	 /* $(".qty-seccond-text-input").keypress(function(e){
		if(e.which == 13){
			var answer2 = confirm ("Are you sure you want to delete this item2?");
			if (answer2 == true){
				alert("true");
			}
		}
	  });*/
	  $("#subtotal-title").html("Sub-total:");
	});
})(jQuery);