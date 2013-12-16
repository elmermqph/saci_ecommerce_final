(function($){ 
$(document).ready(function(){
	$("body").append('<div id="tesst"></div>');
	$(".cardno").live("click",function(){
		ConfirmDialog('Are you sure you want to delete '+$(this).text(), $(this));
	});
	
	function ConfirmDialog(message, th){
		
		$('<div></div>').appendTo('body')
						.html('<div><h6>'+message+'?</h6></div>')
						.dialog({
							modal: true, title: 'Delete Loyalty Card', zIndex: 10000, autoOpen: true,
							width: 'auto', resizable: false,
							buttons: {
								Yes: function () {
									var testing = th.html();
									testing = testing.replace(" ","x");
									$("#tesst").load("/delete-smac/"+testing,function(responseText, statusText, xhr){
										th.remove();
									});
									$(this).dialog("close");
								},
								No: function () {
									$(this).dialog("close");
								}
							},
							close: function (event, ui) {
								$(this).remove();
							}
						});
		};
	});
})(jQuery);