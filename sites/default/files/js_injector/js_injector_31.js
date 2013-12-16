(function($){
	$(document).ready(function(){
               /*
                var d_now = new Date();
		d_now.setDate(d_now.getDate()+10);
		//var d = d_now.getDate();
		//var m = d_now.getMonth() + 1;
		//var y = d_now.getFullYear();
		d_now = $.format.date(d_now, "MMMM dd, yyyy");
		//$("<id='custom-xend-text'>" + m + "/" + d+ "/" + y + "</div>").insertBefore("#quotes-pane legend");
               Estimated delivery date: " + d_now + "
              */
		$("<div id='custom-xend-text'>Upon issuance of Sales Invoice via email, please expect orders to be delivered:<br /><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Within 7 working days for Metro Manila destinations <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Within 10 working days for Provincial destinations</div>").insertAfter("#quotes-pane legend");
		
	});
}(jQuery));