/*(function($){
$(document).ready(function(){
$(".ajax-cart-processed").ajaxStart(function(){
$(this).ajaxStop(function(){
$("#block-block-18 .content").load("/block-cart-page #content #block-system-main #node-88 .field-item.even");
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
	});
});               
$(".product_search_category .view-content td .views-field-ops .flag-compare").ajaxStop(function(){
	$(".product_search_category .view-content td .views-field-ops .flag-waiting a").click(function(){
		alert("Please wait, Loading....");
		return false;
	});
});
});
})(jQuery);*/;
// JavaScript Document
// Spindev
// account details

(function ($) {
	$(document).ready(function(){
$("#-edit-account-form #edit-acc-active-3").parent(this).attr("style","display:none;");

		$('#edit-acc-firstname, #edit-acc-lastname').keydown(function(event){
			if(
				(event.keyCode >= 65 && event.keyCode <= 90) ||
				event.keyCode == 8 ||
				event.keyCode == 32 ||
				event.keyCode == 9 ||
				(event.keyCode == 46) ||
				((event.keyCode >= 37) && (event.keyCode <= 40))
			){
				return;
			}else{
				event.preventDefault(); 
			}
		});
		
		$("#edit-acc-tin, #edit-mobile, #edit-telephone, #edit-faxno").live("keydown",function(event) {
			if ( event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 || event.keyCode == 13 || 
				(event.keyCode == 65 && event.ctrlKey === true) || 
				(event.keyCode >= 35 && event.keyCode <= 39)) {
					 return;
			}
			else {
				if (event.shiftKey || (event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {
					event.preventDefault(); 
				}   
			}
		});
		
		
		
                        $('#edit-uname').keydown(function(event){
				var key = event.keyCode;
				if(
					(key == 190 && event.shiftKey === false) || 
					(key == 222 && event.shiftKey === false) ||
					(((key >= 48 && event.shiftKey === false) && (key <= 57 && event.shiftKey === false))) ||
					(key >= 96 && key <= 105) ||
					((key == 109) || (key == 189) || (key == 173)) ||
					(key >= 65 && key <= 90) ||
					(key == 8) ||
					(key == 32) ||
					(key == 9) ||
					(key == 110) ||
					(key == 46) ||
					((key >= 37) && (key <= 40))
				){
					return true;
				}else{
					event.preventDefault(); 
				}
			});
		
		
		
		$("input.smac-field").live("keydown",function(event) {
			if ( event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 || event.keyCode == 13 || 
				(event.keyCode == 65 && event.ctrlKey === true) || 
				(event.keyCode >= 35 && event.keyCode <= 39)) {
					 return;
			}
			else {
				if (event.shiftKey || (event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {
					event.preventDefault(); 
				}   
			}
		});
		
		$('#edit-smac1').keyup(function () {
			if($("#edit-smac1").val() != ''){
				$("#edit-smac2").focus();
			};
		});
		$('#edit-smac2').keyup(function () {
			if($("#edit-smac2").val() != ''){
				$("#edit-smac3").focus();
			};
		});
		$('#edit-smac3').keyup(function () {
			if($("#edit-smac3").val() != ''){
				$("#edit-smac4").focus();
			};
		});
		$('#edit-smac4').keyup(function () {
			if($("#edit-smac4").val() != ''){
				$("#edit-smac5").focus();
			};
		});
		$('#edit-smac5').keyup(function () {
			if($("#edit-smac5").val() != ''){
				$("#edit-smac6").focus();
			};
		});
		$('#edit-smac6').keyup(function () {
			if($("#edit-smac6").val() != ''){
				$("#edit-smac7").focus();
			};
		});
		$('#edit-smac7').keyup(function () {
			if($("#edit-smac7").val() != ''){
				$("#edit-smac8").focus();
			};
		});
		$('#edit-smac8').keyup(function () {
			if($("#edit-smac8").val() != ''){
				$("#edit-smac9").focus();
			};
		});
		$('#edit-smac9').keyup(function () {
			if($("#edit-smac9").val() != ''){
				$("#edit-smac10").focus();
			};
		});
		$('#edit-smac10').keyup(function () {
			if($("#edit-smac10").val() != ''){
				$("#edit-smac11").focus();
			};
		});
		$('#edit-smac11').keyup(function () {
			if($("#edit-smac11").val() != ''){
				$("#edit-smac12").focus();
			};
		});
		$('#edit-smac12').keyup(function () {
			if($("#edit-smac12").val() != ''){
				$("#edit-smac13").focus();
			};
		});
		$('#edit-smac13').keyup(function () {
			if($("#edit-smac13").val() != ''){
				$("#edit-smac14").focus();
			};
		});
		$('#edit-smac14').keyup(function () {
			if($("#edit-smac14").val() != ''){
				$("#edit-smac15").focus();
			};
		});
		$('#edit-smac15').keyup(function () {
			if($("#edit-smac15").val() != ''){
				$("#edit-smac16").focus();
			};
		});
		$('#edit-smac16').keyup(function () {
			if($("#edit-smac16").val() != ''){
				$("#edit-validate-card").focus();
				$("#edit-validate-card").click();
				$('input.smac-field').val("");
				$('#content-messages').attr('style','display: none;');
			};
		});
		
		$("#edit-validate-card").click(function(){
			$('input.smac-field').val("");
			$('#content-messages').attr('style','display: none;');
		});
		
		$('input.smac-field, #edit-smac8').focus(function(){
			this.select();
		});
		
		$("#edit-pass-pass1, #edit-pass-pass2").removeAttr('maxlength');
		$('#edit-pass-pass1, #edit-pass-pass2').attr('maxlength','15');


		/*$('#edit-pass, #edit-current-pass').keydown(function(event){
			if((event.keyCode == 50 && event.shiftKey === true) || event.keyCode == 8 || event.which == 9){
				return;
			}
			else{
				if(	(event.keyCode == 48 && event.shiftKey === true) || 
					(event.keyCode == 49 && event.shiftKey === true) || 
					((event.keyCode >= 51 && event.shiftKey === true && (event.keyCode <= 57 && event.shiftKey === true))) ||
					(event.keyCode == 107) || 
					(event.keyCode == 107 && event.shiftKey === true) || 
					(event.keyCode == 192 && event.shiftKey === true) ||
					(event.keyCode == 192)
				){
					event.preventDefault();
				}
			}
		});*/
		
		$('#edit-add-street, #textfields .form-item-city').keydown(function(event){
			if(
				event.keyCode == 192 ||
				(event.keyCode == 188 && event.shiftKey === true) ||
				(event.keyCode == 190 && event.shiftKey === true) ||
				((event.keyCode == 59) || (event.keyCode == 186)) ||
				(event.keyCode == 222) ||
				(event.keyCode == 220) ||
				(event.keyCode == 219) ||
				(event.keyCode == 221) ||
				(event.keyCode == 107) ||
				(event.keyCode == 191) ||
				(event.keyCode == 61 || event.keyCode == 187) ||
				(event.keyCode == 107 || event.keyCode == 187) ||
				((event.keyCode == 173) && (event.shiftKey === true)) ||
				((event.keyCode == 189) && (event.shiftKey === true)) ||
				((event.keyCode == 109 && event.shiftKey === true) || (event.keyCode == 189 && event.shiftKey === true)) ||
				(((event.keyCode >= 48 && event.shiftKey === true) && (event.keyCode <= 57 && event.shiftKey === true))) ||
				event.which == 106 ||
				event.which == 111
			){
				event.preventDefault(); 
			}
		});
		
		var currentYear = (new Date).getFullYear();
		var NewYearRange = "1900:" + currentYear;
		
		$(".pickadate").datepicker({	
			dateFormat: "yy-mm-dd", 
			autoSize: true,
			changeMonth: true,
			changeYear: true,
			yearRange: NewYearRange,
			maxDate: "-1d"
		});
		
		$('#edit-clear').click(function(){
			$('#edit-smac1').val("");
			$('#edit-smac2').val("");
			$('#edit-smac3').val("");
			$('#edit-smac4').val("");
			$('#edit-smac5').val("");
			$('#edit-smac6').val("");
			$('#edit-smac7').val("");
			$('#edit-smac8').val("");
			$('#edit-smac9').val("");
			$('#edit-smac10').val("");
			$('#edit-smac11').val("");
			$('#edit-smac12').val("");
			$('#edit-smac12').val("");
			$('#edit-smac13').val("");
			$('#edit-smac14').val("");
			$('#edit-smac15').val("");
			$('#edit-smac16').val("");
			return false;
		});

		$("#card-status1").ajaxComplete(function(){
			if($("#card-status strong").html()){
				$(".smac-wrapper #edit-smac-wrapper .form-text").val("");
			}
		});
		
		$("#edit-telephone,#edit-acc-tin,#edit-add-postalcode,#edit-mobile").keydown(function(event) {
			if ( event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 || event.keyCode == 13 || 
				(event.keyCode == 65 && event.ctrlKey === true) || 
				(event.keyCode >= 35 && event.keyCode <= 39)) {
					 return;
			}
			else {
				if (event.shiftKey || (event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {
					event.preventDefault(); 
				}   
			}
		});
		
		$("#edit-acc-dateob").keypress(function(e) {
            return false;
        });
		
		$(".form-item-other-brgy").css("display","none");
		$("#edit-brgy").change(function(){
			console.log($(this).val());
			
			if($(this).val() == 'other'){
				$(".form-item-other-brgy").slideDown("slow");
			}else{
				$(".form-item-other-brgy").slideUp("slow");
			}
		});
		
		
		$("#-edit-address-details-form #edit-submit").live("click",function(){
			var other_brgy = $("#edit-other-brgy").val();
			if($("#edit-brgy").val() == 'other'){
				if(other_brgy == ''){
					$("#content-messages").remove();
					var error_field = '<div id="content-messages" class="content-messages block"><div id="content-messages-inner" class="content-messages-inner gutter"><div class="messages error"><h2 class="element-invisible">Error message</h2>Other Barangay field is required.</div></div></div>';
					$(error_field).insertBefore("#content");
					return false;
				}
			}
		});
	});
})(jQuery);;
(function($){
	$(document).ready(function(){
		$("#block-menu-menu-about-us .nolink a").removeAttr("href");
		if($(".page-user-reset .messages").length > 0){
			$("body").removeClass("mess");
		}else{
			$("body").addClass("mess");
		}
	});
})(jQuery);;
