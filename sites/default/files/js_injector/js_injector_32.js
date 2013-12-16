// JavaScript Document
/*(function($){
$(document).ready(function(){

                if($(".messages.error:contains('We have now only 0 units of the product')").length > 0){
                    if($("body").hasClass("page-cart-checkout")){
                         location.replace("/cart");
                     }
                }
               if($("#edit-panes-billing-billing-country").val()!=608){
                          $("#delivery-pane .form-item-panes-delivery-copy-address").css("display","none");
               }


		var windowheight = $(window).height();
		var windowwidth = $(window).width();
		var top = (windowheight-100)/2;
		var left = (windowwidth-400)/2;
		$('body').prepend('<div id="popupcontainerdisplay" class="popupcard" style="position: absolute;width: 100%;height: 100%;background: #000;z-index: 998;opacity:0.8;display:none;">&nbsp;</div><div class="bodyconfirmation popupcard" style="width:400px;text-align: center;height: 90px;padding:5px 0px;position: absolute;top: '+top+'px;left: '+left+'px;z-index: 999;background: white;display:none;"><span class="question">You have not entered a loyalty card. Proceed with checkout?</span><div>&nbsp;</div><span class="command" style="margin-top:10px;"><input type="button" class="result_yes" value="Yes" style="padding: 2px 10px;margin:5px 0px;" />&nbsp;<input type="button" class="result_no" value="No" style="padding: 2px 10px;margin:5px 0px;" /></span></div>');
	
	$('#uc-cart-checkout-form #edit-actions').prepend('<input type="button" id="dummy-edit-continue" value="Summary" class="form-submit">');
		var countryid = $("#country-hidden-main-value").val();
		var country = $("#edit-panes-billing-billing-country option[value='"+countryid+"']").text();
		$('#uc-cart-checkout-form #edit-actions #edit-continue').css("display","none");
		
		$(".form-item-panes-billing-billing-country").append('<input type="text" class="classinput-txt" value="'+country+'" />');
		$("#edit-panes-billing-billing-country option[value='"+countryid+"']").attr("selected",true);
		if($("#edit-panes-billing-billing-country").val()==608){
			$(".uc-cart-checkout-form .form-item-panes-delivery-copy-address").css({"display":"block","width":"383px"});
		}
		if($("#zone-hidden-main-value").val()>0){
			var province = $("#edit-panes-billing-billing-zone option[value='"+$("#zone-hidden-main-value").val()+"']").text();
			$("#edit-panes-billing-billing-zone option[value='"+$("#zone-hidden-main-value").val()+"']").attr("selected","selected")
		$(".form-item-panes-billing-billing-zone").append('<input type="text" class="classinput-txt" value="'+province+'"  />');
		}else{
			$(".form-item-panes-billing-billing-zone").append('<input type="text" class="classinput-txt" value="'+$("#zone-hid*den-main-value").val()+'"  />');
		}
		$("#uc-cart-checkout-form #billing-address-pane input").attr("readonly","readonly");
	checkout_fields_update();
	$("#edit-panes-delivery-copy-address").live("click",function(){
		if(!$(this).is(':checked')){
			var runcron = 0;
			$(this).ajaxStop(function(){
                if(runcron==0){
                    if($("#delivery-pane #delivery-address-pane .uc-store-address-field").html()!=""){
						checkout_fields_update();	
						runcron = 1;
					} 
				}
			});
		}
	});
	
	$("select#edit-panes-delivery-delivery-zone").live("change",function(){
		$("#edit-panes-delivery-delivery-city").attr("value","");
		check_municipality($(this).val());
	});
	$("#dummy-edit-continue").live('click',function(){

        if($("#edit-panes-delivery-copy-address").hasClass('progress-disabled')){
                alert("Processing on Delivery information is not done Please wait.");
                return false;
        }
		if(!$("#edit-panes-delivery-copy-address").is(':checked')){
			var noerrorstatus = true;
			var listingerror = '';
			if($.trim($("#edit-panes-delivery-delivery-first-name").val())==""){
				listingerror = listingerror+'<li>Please Enter Delivery Firstname</li>'
				noerrorstatus = false;
			}	
			if($.trim($("#edit-panes-delivery-delivery-last-name").val())==""){
				listingerror = listingerror+'<li>Please Enter Delivery Lastname</li>'
				noerrorstatus = false;
			}
			if($.trim($("#edit-panes-delivery-delivery-street1").val())==""){
				listingerror = listingerror+'<li>Please Enter Delivery Address</li>'
				noerrorstatus = false;
			}
			if($("#edit-panes-delivery-delivery-zone").val()==0){
				listingerror = listingerror+'<li>Please Select Delivery Province</li>'
				noerrorstatus = false;
			}
			if($("#edit-panes-delivery-delivery-city").val()==""){
				listingerror = listingerror+'<li>Please Select Delivery City/Municipality</li>'
				noerrorstatus = false;
			}
			if($.trim($("#edit-panes-delivery-delivery-phone").val())==""){
				listingerror = listingerror+'<li>Please Enter Delivery Mobile No</li>'
				noerrorstatus = false;
			}
            if(noerrorstatus==false){
				var htmlencode = '<div class="messages error"><ul>'+listingerror+'</ul></div>'
				if($("#block-system-main .gutter.inner .messages").length)
					$("#block-system-main .gutter.inner .messages").remove();
					$("#block-system-main #delivery-address-pane .uc-store-address-field").prepend(htmlencode);
					$('html, body').animate({scrollTop: $("#delivery-address-pane .uc-store-address-field").offset().top}, 500);

				$("#block-system-main .gutter.inner .messages").focus();
                                   
				$("body").scrollTop(0);				
				return false;
			}else if($("#edit-panes-rewardcard-test").val()==0){
				if($('#edit-panes-rewardcard-test option').length>1){
					$('html').css({"height":windowheight+"px","overflow":"hidden"});
					$('body').css({"height":"100%","overflow":"auto"});
					$(".popupcard").css("display","block");
					$('body,html').animate({scrollTop:0},'fast',function(){
					});
					$(" .popupcard .result_yes").click(function(){
						$("#edit-continue").click();
					//return true;
					});
					$(" .popupcard .result_no").click(function(){
						$('html, body').animate({scrollTop:0},'fast',function(){
						$('html, body').css({"height":windowheight+"px","overflow":"auto"});
						});
						
						$("#edit-panes-rewardcard-test").focus();
						$(".popupcard").css("display","none");
						return false;
					});
					return false;
				}else{
					$('html').css({"height":windowheight+"px","overflow":"hidden"});
					$('body').css({"height":"100%","overflow":"auto"});
					$(".popupcard").css("display","block");
					$('body,html').animate({scrollTop:0},'fast',function(){
					});
					$(" .popupcard .result_yes").click(function(){
						$("#edit-continue").click();
					//return true;
					});
					$(" .popupcard .result_no").click(function(){
						$('html, body').animate({scrollTop:0},'fast',function(){
						$('html, body').css({"height":windowheight+"px","overflow":"auto"});
						});
						
						$("#edit-panes-rewardcard-test").focus();
						$(".popupcard").css("display","none");
						return false;
					});
					return false;
					// $("#edit-continue").click();
				}
			}else
				$("#edit-continue").click();
		}else if($("#edit-panes-rewardcard-test").val()==0){
			if($('#edit-panes-rewardcard-test option').length>1){
					$('html').css({"height":windowheight+"px","overflow":"hidden"});
					$('body').css({"height":"100%","overflow":"auto"});
					$(".popupcard").css("display","block");
					$('body,html').animate({scrollTop:0},'fast',function(){
					});
				$(".popupcard .result_yes").click(function(){
					$("#edit-continue").click();
					//return true;
				});
				$(".popupcard  .result_no").click(function(){
					$('body').animate({scrollTop: 0}, 500).css({"height":"100%","overflow":"auto"});
					$("#edit-panes-rewardcard-test").focus();
					$(".popupcard").css("display","none");
					return false;
				});
				return false;
			}else{
				$('html').css({"height":windowheight+"px","overflow":"hidden"});
					$('body').css({"height":"100%","overflow":"auto"});
					$(".popupcard").css("display","block");
					$('body,html').animate({scrollTop:0},'fast',function(){
					});
					$(" .popupcard .result_yes").click(function(){
						$("#edit-continue").click();
					//return true;
					});
					$(" .popupcard .result_no").click(function(){
						$('html, body').animate({scrollTop:0},'fast',function(){
						$('html, body').css({"height":windowheight+"px","overflow":"auto"});
						});
						
						$("#edit-panes-rewardcard-test").focus();
						$(".popupcard").css("display","none");
						return false;
					});
					return false;
				// $("#edit-continue").click();
			}
		}else{
			$("#edit-continue").click();
		}
	});
	function checkout_fields_update(){
		if($("#delivery-address-pane .form-item-panes-delivery-delivery-street1 label").length>0 && $("#delivery-address-pane .form-item-panes-delivery-delivery-street1 label").html()=="Billing Address"){
			var samplechange = $("#delivery-address-pane .form-item-panes-delivery-delivery-street1 label").html().replace("Billing Address","Delivery Address");
			$("#delivery-address-pane .form-item-panes-delivery-delivery-street1 label").html(samplechange);
		}
 $("#edit-panes-delivery-delivery-last-name, #edit-panes-delivery-delivery-street1").attr("maxlength","100");
$("#edit-panes-delivery-delivery-postal-code").attr("maxlength","4")
		$(".form-item-panes-delivery-delivery-city").append('<span id="span-ajaxmenu"><select id="delivery-city" class="classinput-txt" ></select></span>');
		$("#edit-panes-delivery-delivery-country").css("display","none");
		$(".form-item-panes-delivery-delivery-country").append('<input type="text" class="classinput-txt" value="Philippines" readonly="readonly" style="background-color: silver;color: grey;" />');
		if($("select#edit-panes-delivery-delivery-zone").val()!=""){
			check_municipality($("select#edit-panes-delivery-delivery-zone").val());
		}
		return true;
	}
	function check_municipality(htmlvaluezone){
		$("#span-ajaxmenu").html('<span id="span-ajaxmenu"><select id="delivery-city" class="classinput-txt" disabled="disabled"><option value="">loading a city/municipality please wait</option></select></span>');
		$("#span-ajaxmenu").load("/municipality-locator?municipality="+htmlvaluezone+" #delivery-city",
		function(response, status, xhr) {
			if (status == "success") {
                              if($("select#delivery-city option").length==1 && $("#edit-panes-delivery-delivery-zone").val()!=0){
                                           alert("This province has no city/municipality yet");
                               }else{
                                     if($("#edit-panes-delivery-delivery-city").val()!=""){
					var existingcity = $("#edit-panes-delivery-delivery-city").attr("value");
					$('select#delivery-city option[value="'+existingcity+'"]').attr("selected","selected");
				     }
				     $('#delivery-city').removeAttr("disabled");
				     $("select#delivery-city").change(function(){
					var valueid = $(this).val()
					if(valueid!="- Select -")
						$("#edit-panes-delivery-delivery-city").val(valueid);
					else
						$("#edit-panes-delivery-delivery-city").attr("value","");
				    });
                               }
			       
				
			}
		}
		);
	}
});
})(jQuery);*/