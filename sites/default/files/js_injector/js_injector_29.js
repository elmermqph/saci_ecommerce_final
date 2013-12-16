(function($){
	$(document).ready(function(){
		$("#card-status").ajaxComplete(function(){
			if($("#card-status strong").html()){
				$(".smac-wrapper #edit-smac-wrapper .form-text").val("");
			}
		});
	});
}(jQuery));