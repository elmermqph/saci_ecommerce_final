// Registration

(function($){ 
	$(document).ready(function(){
		
		$('#edit-firstname, #edit-lastname').keydown(function(event){
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
		
		
		$('#edit-bill-address, input#edit-city').keydown(function(event){
			if(
				event.keyCode == 192 ||
				(event.keyCode == 188 && event.shiftKey === true) ||
				(event.keyCode == 190 && event.shiftKey === true) ||
				((event.keyCode == 59) || (event.keyCode == 186)) ||
				((event.keyCode == 173) && (event.shiftKey === true)) ||
				((event.keyCode == 189) && (event.shiftKey === true)) ||
				(event.keyCode == 222) ||
				(event.keyCode == 220) ||
				(event.keyCode == 219) ||
				(event.keyCode == 221) ||
				(event.keyCode == 107 || event.keyCode == 187) ||
				(event.keyCode == 61) ||
				(event.keyCode == 191) ||
				((event.keyCode == 109 && event.shiftKey === true) || (event.keyCode == 189 && event.shiftKey === true)) ||
				(((event.keyCode >= 48 && event.shiftKey === true) && (event.keyCode <= 57 && event.shiftKey === true))) ||
				event.which == 106 ||
				event.which == 111 ||
				event.which == 9
			){
				event.preventDefault(); 
			}
		});
		
		$('#edit-name').keydown(function(event){
			if(
				(event.keyCode == 190 && event.shiftKey === false) ||
				(event.keyCode == 222 && event.shiftKey === false) ||
				(((event.keyCode >= 48 && event.shiftKey === false) && (event.keyCode <= 57 && event.shiftKey === false))) ||
				((event.keyCode == 109) || (event.keyCode == 189) || (event.which == 173)) ||
				(event.keyCode >= 65 && event.keyCode <= 90) ||
				(event.keyCode >= 96 && event.keyCode <= 105) ||
				(event.keyCode == 8) ||
				(event.keyCode == 32) ||
				(event.which == 9) || 
				(event.which == 110) ||
				(event.keyCode == 46) ||
				((event.keyCode >= 37) && (event.keyCode <= 40))
			){
				return;
			}else{
				event.preventDefault(); 
			}
		});
		
		
		$('#edit-name, #edit-mail').bind("cut copy paste", function(e) {
			e.preventDefault();
		});
		
		$("input.smac-field, input#edit-postalcode, input#edit-tax-tin, #edit-smac1,#edit-smac2,#edit-smac3,#edit-smac4,#edit-smac5,#edit-smac6,#edit-smac7,#edit-smac8,#edit-smac9,#edit-smac10,#edit-smac11,#edit-smac12,#edit-smac13,#edit-smac14,#edit-smac15,#edit-smac16").live("keydown",function(event) {
			if ( event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 || event.keyCode == 13 || 
				(event.keyCode == 65 && event.ctrlKey === true) || 
				(event.keyCode >= 35 && event.keyCode <= 39)) {
					 return
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
				$("#edit-validate-card").click();
				var cardval = $('#edit-smac1').val()+$('#edit-smac2').val()+$('#edit-smac3').val()+$('#edit-smac4').val()+$('#edit-smac5').val()+$('#edit-smac6').val()+$('#edit-smac7').val()+$('#edit-smac8').val()+$('#edit-smac9').val()+$('#edit-smac10').val()+$('#edit-smac11').val()+$('#edit-smac12').val()+$('#edit-smac13').val()+$('#edit-smac14').val()+$('#edit-smac15').val()+$('#edit-smac16').val();
				
				$("#edit-hidden-smac").val(cardval);
			};
		});
		
		
		
		$('input.smac-field').focus(function(){
			this.select();
		});
		
		$('#edit-mail, #edit-name').attr('maxlength','100');
		$('#edit-pass-pass1, #edit-pass-pass2').attr('maxlength','15');
		$('#edit-mail, #edit-name').attr('maxlength','100');
		
		
		$("#edit-clear").click(function(){
			$("#edit-smac1").val("");
			$("#edit-smac2").val("");
			$("#edit-smac3").val("");
			$("#edit-smac4").val("");
			$("#edit-smac5").val("");
			$("#edit-smac6").val("");
			$("#edit-smac7").val("");
			$("#edit-smac8").val("");
			$("#edit-smac9").val(""); 
			$("#edit-smac10").val("");
			$("#edit-smac11").val("");
			$("#edit-smac12").val("");
			$("#edit-smac13").val("");
			$("#edit-smac14").val("");
			$("#edit-smac15").val("");
			$("#edit-smac16").val("");
			return false;
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
	});
})(jQuery);