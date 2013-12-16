(function($){
	$(document).ready(function(){
		var content = '<input id="print-order" name="print" type="button" value="Print"><input id="home-order" name="home" type="button" value="Home">';
		$("#printbutton").append(content);
		
		$("#print-order").live("click",function(){
			var order_id = getURLParameter("order-id");
			window.open("/bdo/print/"+order_id,'_blank');
			console.log();
		});		
		
		$("#home-order").live("click",function(){
			window.location.href = '/home';
		});
	});
	
	function getURLParameter(name) {
		return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)','i').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null;
	}
})(jQuery)