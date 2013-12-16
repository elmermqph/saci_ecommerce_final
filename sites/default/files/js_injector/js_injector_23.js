(function($){
$(document).ready(function(){
addingtotal('.view-id-order_productlist .total_vat_ex','.view-id-order_productlist .vat_sales_label')
addingtotal('.view-id-order_productlist .vat_sales','.view-id-order_productlist .vat_amt_label')
addingtotal('.view-id-order_productlist .vat_amt','.view-id-order_productlist .views-field-created-label')

});
function addingtotal (addtool,labelpaste){
	var totalvatex = 0.00;
	$(addtool+' .amount-format').each(function(){
	totalvatex = parseFloat(totalvatex) + parseFloat($(this).html());
	});
	$(labelpaste).html('<span class="prefix">P</span>'+addCommas(totalvatex.toFixed(2)));
}
})(jQuery);

function addCommas(nStr)
{
	nStr += '';
	x = nStr.split('.');
	x1 = x[0];
	x2 = x.length > 1 ? '.' + x[1] : '';
	var rgx = /(\d+)(\d{3})/;
	while (rgx.test(x1)) {
		x1 = x1.replace(rgx, '$1' + ',' + '$2');
	}
	return x1 + x2;
}