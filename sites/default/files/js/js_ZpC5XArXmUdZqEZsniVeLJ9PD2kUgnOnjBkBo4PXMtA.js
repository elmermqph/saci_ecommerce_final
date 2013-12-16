(function($){
	$(document).ready(function(e) {
                var x_country = $("#edit-panes-billing-billing-country").val();
		var country_name = $("#edit-panes-billing-billing-country option[value='"+x_country+"']").text();
		$('<input type="text" class="classinput-txt" value="'+country_name+'" readonly="">').insertBefore("#edit-panes-billing-billing-country");

		// $('<input type="text" class="classinput-txt" value="Philippines" readonly="">').insertBefore("#edit-panes-billing-billing-country");
		var prov = $("#edit-panes-billing-billing-zone").val();
		var prov_text = $("#edit-panes-billing-billing-zone option[value='" + prov + "']").text();
		$('<input type="text" class="classinput-txt" value="'+prov_text+'" readonly="">').insertBefore("#edit-panes-billing-billing-zone");
		$("#edit-panes-billing-billing-country, #edit-panes-billing-billing-zone").css("display","none");

		checkout_add();
		$('#edit-panes-delivery-copy-address').live("click",function(){
			if(this.checked){
				$(this).addClass("checked");
			}else{
				$(this).removeClass("checked");
				$(this).addClass("boom");
			}
		});

		$("#edit-panes-quotes-quote-button").mousedown(function(){
			$("#edit-panes-quotes-quote-button").addClass("quote-button-click");
		});
		
		$("#edit-panes-delivery-delivery-postal-code").blur(function(){
			$(this).addClass("postalcode");
		});
		
		$('body').bind('ajaxSuccess', function(data, status, xhr) {
			if($(".boom").length > 0){
				checkout_add();
				$("#edit-panes-delivery-copy-address").removeClass("boom");
				// console.log($("#edit-panes-delivery-delivery-zone").val());
				
				var ajaxSuccess_delivery_cone = $("#edit-panes-delivery-delivery-zone").val();
				$.ajax({
					url: "/sandcart/ajax", 
					dataType:'json', 
					data: {
							"province": ajaxSuccess_delivery_cone,
							}, 
							success:function (data){
								//$("#delivery-city").addClass("xxxxx");
								$.each(data.province,function(index,val){
									$('#delivery-city').append('<option value="'+index+'" test="'+val+'">'+val+'</option>');
								})
								var ajaxSuccess_muni = $("#edit-panes-delivery-delivery-city").val();
								var def_val_muni = $("option[test='"+ajaxSuccess_muni+"']").attr("value");
								$("#delivery-city").val(def_val_muni);
								
								
								$.ajax({
									url: "/sandcart/ajax",
									dataType:'json',
									data: {
											"city": def_val_muni,
										},
										success:function (data){
											//$("#delivery-brgy").addClass("xxxxx");
											$.each(data.city,function(index,val){
												$('#delivery-brgy').append('<option value="'+val.tid+'" test="'+val.name+'">'+val.name+'</option>');
											})
											
											var ajaxSuccess_brgy = $("#edit-panes-delivery-delivery-street2").val();
											var def_val_brgy = $("option[test='"+ajaxSuccess_brgy+"']").attr("value");
											$("#delivery-brgy").val(def_val_brgy);
											
											//checkRate();
											//$("#delivery-brgy,#delivery-city").removeClass("xxxxx");
										}
								});
							}
				});
			}//endif
			else{
				checkRate2();
			}
			
			
//			else{
//				if($(".quote-button-click").length > 0){
//					checkRate();
//				}
//			}
			
		});
    });
	function checkRate2(){
		
		if($("#quote").length > 0){
			var rate = $.trim($("#quote").text());
			if(rate == "Delivery Rate: P0.00"){
				$("#quote").html("");
				$("#quote").html("<span class='del_label'>Delivery Rate: </span><span class='del_error' style='color: red; font-weight: bold;'>Out of Serviceable Area</span>");
				$("#quote").addClass("del_error");
			}
		}
	}
//	function checkRate(){
//		if($("#quote").length > 0){
//			var rate = $.trim($("#quote").text());
//			if(rate == "Delivery Rate: P0.00"){
//				ConfirmDialog("<a style='margin: -45px 0 0;' class='ui-dialog-titlebar-close ui-corner-all' href='#' role='button'><span class='ui-icon ui-icon-closethick'>close</span></a><div style='color:red;font-weight: bold; font-size: 1.1em; margin-top: 26px;'>Out of Serviceable Area<div>");
//				$("#edit-continue").addClass("xx");
//				$("#edit-continue").removeClass("test");
//			}else{
//				console.log('Not Match');
//				$("#edit-continue").addClass("test");
//				$("#edit-continue").removeClass("xx");
//			}
//		}
//	}
	
	$(".ui-icon-closethick").live("click",function(){
		$('.ui-dialog-content').dialog('close');
	});
	
	
//	$("#edit-continue").live("click",function(){
//		if($("#edit-continue").hasClass("test")){
//			return true;
//		}else{
//			return false;
//		}
//	});
	//<a class='ui-dialog-titlebar-close ui-corner-all' href='#' role='button'><span class='ui-icon ui-icon-closethick'>close</span></a>
	
	
	function ConfirmDialog(message){
		$('<div></div>').appendTo('body').html('<div><h6>'+message+'</h6></div>').dialog({
					modal: true, zIndex: 10000, autoOpen: true,
					width: 'auto', 
					resizable: false,
					raggable: false,
					height: 100,
					close: function (event, ui) {
						$(this).remove();
					}
				});
	};
	
	$("#edit-continue").live("click",function(){
		if($(".del_label").length > 0){
			return false;
		}else{
			return true;
		}
	});
	
	function checkout_add(){
$('<div style="margin-left: 131px;width:258px;">We currently don’t service the areas not found in the listing. Thank you.</div>').insertAfter('#edit-panes-delivery-delivery-city');
		$('<input type="text" class="classinput-txt" value="Philippines" readonly="readonly" style="background-color: silver;color: grey;">').insertBefore("#edit-panes-delivery-delivery-country");

		$("#edit-panes-delivery-delivery-country").css("display","none");
		
		
		$("#edit-panes-delivery-delivery-city, #edit-panes-delivery-delivery-street2").css("display","none");
		$('<select id="delivery-city"><option value="0">- Select -</option></select>').insertBefore('#edit-panes-delivery-delivery-city');
		$('<select id="delivery-brgy"><option value="0">- Select -</option></select>').insertBefore('#edit-panes-delivery-delivery-street2');
		
		$("#edit-panes-delivery-delivery-zone").change(function(){
			$("#delivery-city option,#delivery-brgy option").remove();
			$('#delivery-city,#delivery-brgy').append('<option value="0">- Select -</option>');
			$("#edit-panes-delivery-delivery-city").val('');
			$("#edit-panes-delivery-delivery-street2").val('');
			
			var delivery_zone = $(this).val();
			$.ajax({
				url: "/sandcart/ajax", 
				dataType:'json', 
				data: {
						"province": delivery_zone,
						}, 
						success:function (data){
							$.each(data.province,function(index,val){
								$('#delivery-city').append('<option value="'+val.tid+'" test="'+val.name+'">'+val.name+'</option>');
							})
						}
			});
		});
		
		$("#delivery-city").change(function(){
			$("#delivery-brgy option").remove();
			$('#delivery-brgy').append('<option value="0">- Select -</option>');
			var delivery_brgy = $(this).val();
			var city_name = $('#delivery-city option[value="'+delivery_brgy+'"]').attr('test');
			$("#edit-panes-delivery-delivery-city").val(city_name);
			$.ajax({
				url: "/sandcart/ajax", 
				dataType:'json', 
				data: {
						"city": delivery_brgy,
						}, 
						success:function (data){
							$.each(data.city,function(index,val){
								$('#delivery-brgy').append('<option value="'+val.tid+'" test="'+val.name+'">'+val.name+'</option>');
							})
						} 
			});
		});
		
		$('#delivery-brgy').change(function(){
			var delivery_brgy = $(this).val();
			var brgy_name = $('#delivery-brgy option[value="'+delivery_brgy+'"]').attr('test');
			$('#edit-panes-delivery-delivery-street2').val(brgy_name);
			
			$("#edit-panes-delivery-delivery-postal-code").trigger("blur");
		});
	}
})(jQuery);
