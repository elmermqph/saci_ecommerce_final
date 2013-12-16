(function($){
    $(document).ready(function(){
		$("#edit-addmore").click(function(){
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
		
		$("#edit-mobile").keydown(function(event) {
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
    });
})(jQuery);