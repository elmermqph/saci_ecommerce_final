(function($){
	$(document).ready(function(){
        $("#quicktabs-tabpage-admin_dashboard-2 .view-sm-dashboard-sales .feed-icon a, .page-admin-store-reports-sales-dashboard-sales-report .feed-icon a").html("Download CSV");

$("#quicktabs-tabpage-admin_dashboard-2 #edit-created-min-wrapper .form-item-filter-date-min label, .page-admin-store-reports-sales-dashboard-sales-report #edit-created-min-wrapper .form-item-filter-date-min label").html("FROM");
$("#quicktabs-tabpage-admin_dashboard-2 #edit-created-max-wrapper .form-item-filter-date-max label, .page-admin-store-reports-sales-dashboard-sales-report #edit-created-max-wrapper .form-item-filter-date-max label").html("TO");

		$('#quicktabs-tabpage-admin_dashboard-1 .pager a').each(function(){
			var hrefcheck = $(this).attr("href");
			if(hrefcheck.indexOf("qt-admin_dashboard=")=="-1"){
				$(this).attr("href",hrefcheck+"&qt-admin_dashboard=1#qt-admin_dashboard");
			}else{
				if(hrefcheck.indexOf("qt-admin_dashboard=2")!="-1"){
					newstring = hrefcheck.replace("qt-admin_dashboard=2","qt-admin_dashboard=1")
					$(this).attr("href",newstring);
				}	
			}
		});
		$("#quicktabs-tabpage-admin_dashboard-1 .view-id-uc_orders .view-content table.views-table tbody tr td.views-field-order-id a").each(function(){
			$(this).attr("target","_blank");
		});
		$('#quicktabs-tabpage-admin_dashboard-2 .pager a').each(function(){
			var hrefcheck = $(this).attr("href");
			if(hrefcheck.indexOf("qt-admin_dashboard=")=="-1"){
				$(this).attr("href",hrefcheck+"&qt-admin_dashboard=2#qt-admin_dashboard");
			}else{
				if(hrefcheck.indexOf("qt-admin_dashboard=1")!="-1"){
					newstring = hrefcheck.replace("qt-admin_dashboard=1","qt-admin_dashboard=2")
					$(this).attr("href",newstring);
				}	
			}
		});
                $("#sku_checker .model").click(function(){
                    if($(this).attr("value") == "-- Input SKU # --")
                         $(this).attr("value","");
                });
                $("#sku_checker .model").css("padding","2px 5px");
                $("#sku_checker .submit").css({"margin-top": "0","padding": "3px 5px"});
                $("#sku_checker .submit").click(function(){
                        var model = $("#sku_checker .model").attr("value");
                            if( model  == "-- Input SKU # --")
                                  alert("Invalid SKU Number");
                            else 
                                  location.replace("/admin-dashboards?model="+model+"&qt-admin_dashboard=0#view_sku_blocks");
                });
			
				
				$(".page-admin-store-orders-view #views-exposed-form-uc-orders-admin-page #edit-submit-uc-orders").click(function(){
					submit_search_checklocation(3);
					return false;
				});
                $(".page-admin-store-reports-sales-dashboard-sales-report #views-exposed-form-sm-dashboard-sales-page #edit-submit-sm-dashboard-sales").click(function(){
					submit_search_checklocation(4);
					return false;
				});      

	                         $("#quicktabs-tabpage-admin_dashboard-1 .view-filters .form-submit").click(function(){
					submit_search_checklocation(1);
					return false;
				});
				$("#quicktabs-tabpage-admin_dashboard-2 .view-filters .form-submit").click(function(){
					submit_search_checklocation(2);
					return false;
				});
                                       
                                $(".page-admin-store-reports-sales-dashboard-sales-report #views-exposed-form-sm-dashboard-sales-page #edit-reset").click(function(){
					location.replace("/admin/store/reports/sales/dashboard/sales-report");
				});      
                                $("#pid-admin-dashboards #quicktabs-tabpage-admin_dashboard-2 #edit-reset").click(function(){
					location.replace("/admin-dashboards?qt-admin_dashboard=2#qt-admin_dashboard");
				});  
$("#views-exposed-form-uc-orders-admin-page .views-exposed-form .views-exposed-widgets").append('<p style="font-style:italic;clear:both;font-size:10px;">if you want to search order id please include "orderid-" (e.g orderid-1234).</p>');
$("#views-exposed-form-members-profile-page #edit-submit-members-profile").click(function(){
			var main_url = '/dashboard/member_profile';
			var search_value = $("#views-exposed-form-members-profile-page input#edit-field-first-name-value").val();
			if(search_value.indexOf("@")<0){
				location.replace(main_url+"?field_first_name_value="+search_value);
			}else{
				location.replace(main_url+"?mail="+search_value);	
			}
			return false;
		});
$("#views-exposed-form-uc-orders-admin-page .views-exposed-form .views-exposed-widgets").append('<p style="font-style:italic;clear:both;font-size:10px;">if you want to search order id please include "orderid-" (e.g orderid-1234).</p>');
	});
	function submit_search_checklocation(tabnumber){
		var intRegex = /^\d+$/;
		if(tabnumber==1){
			selectorname = 'form-item-filter-by';
		}else{
			selectorname = 'form-item-sales-report-filter-by';
		}
		var mainvalue = $("#quicktabs-tabpage-admin_dashboard-"+tabnumber+" .view-filters  ."+selectorname+" input").attr("value");
		if(tabnumber==1){
			if($.trim(mainvalue.indexOf("423-")) >= 0){
				var path = "/admin-dashboards?contact_sales_invoice_number="+mainvalue+"&qt-admin_dashboard="+tabnumber+"#qt-admin_dashboard";
			}else if($.trim(mainvalue.indexOf("orderid-")) >= 0){
				var orderid = mainvalue.replace("orderid-","");
				var path = "/admin-dashboards?general_order_id="+orderid+"&qt-admin_dashboard="+tabnumber+"#qt-admin_dashboard";
			}else{
				if(isNumber(mainvalue)){
					var filterpath = ""; 
				}else{
					var filterpath = "filter_by="+mainvalue+"&billing_last_name="+mainvalue+"&";
				}
				var path = "/admin-dashboards?"+filterpath+"authorized_no="+mainvalue+"&receipt_no="+mainvalue+"&trans_no="+mainvalue+"&tracking_number="+mainvalue+"&qt-admin_dashboard="+tabnumber+"#qt-admin_dashboard";
			}
			
		}else if(tabnumber==3){
		    var mainvalue = $("#views-exposed-form-uc-orders-admin-page input#edit-filter-by").attr("value");
			if($.trim(mainvalue.indexOf("423-")) >= 0){
				var path = "/admin/store/orders/view?contact_sales_invoice_number="+mainvalue+"&qt-admin_dashboard="+tabnumber+"#qt-admin_dashboard";
			}else if($.trim(mainvalue.indexOf("orderid-")) >= 0){
				var orderid = mainvalue.replace("orderid-","");
				var path = "/admin/store/orders/view?general_order_id="+orderid;
			}else{
				if(isNumber(mainvalue)){
					var filterpath = ""; 
				}else{
					var filterpath = "filter_by="+mainvalue+"&billing_last_name="+mainvalue+"&";
				}
				var path = "/admin/store/orders/view?"+filterpath+"authorized_no="+mainvalue+"&receipt_no="+mainvalue+"&trans_no="+mainvalue+"&tracking_number="+mainvalue;
			}
			
		}else if(tabnumber==4){
			var mainvalue = $("#views-exposed-form-sm-dashboard-sales-page .form-item-sales-report-filter-by input").attr("value");
		    var mindate = $("#views-exposed-form-sm-dashboard-sales-page  .form-item-filter-date-min-date input").attr("value");
			var maxdate = $("#views-exposed-form-sm-dashboard-sales-page  .form-item-filter-date-max-date input").attr("value");
			if($("#views-exposed-form-sm-dashboard-sales-page  .form-item-items-per-page #edit-items-per-page").val() == "undefined"){
				var pagenumber = "10";
			}else{
				var pagenumber = $("#views-exposed-form-sm-dashboard-sales-page  .form-item-items-per-page #edit-items-per-page").val();
			}
			
			if($.trim(mainvalue.indexOf("423-")) >= 0){
				var path = "/admin/store/reports/sales/dashboard/sales-report?sales_invoice_number="+mainvalue+"&filter_date%5Bmin%5D%5Bdate%5D="+mindate+"&filter_date%5Bmax%5D%5Bdate%5D="+maxdate+"&items_per_page="+pagenumber;
			}else{
				if(isNumber(mainvalue)){
					var filterpath = ""; 
				}else{
					var filterpath = "sales_report_filter_by="+mainvalue+"&sales_report_billing_last_name="+mainvalue+"&";
				}
				var path = "/admin/store/reports/sales/dashboard/sales-report?"+filterpath+"sales_report_tracking_number="+mainvalue+"&filter_date%5Bmin%5D%5Bdate%5D="+mindate+"&filter_date%5Bmax%5D%5Bdate%5D="+maxdate+"&items_per_page="+pagenumber;
			}
		}else{
			var mindate = $("#quicktabs-tabpage-admin_dashboard-"+tabnumber+" .view-filters  .form-item-filter-date-min-date input").attr("value");
			var maxdate = $("#quicktabs-tabpage-admin_dashboard-"+tabnumber+" .view-filters  .form-item-filter-date-max-date input").attr("value");
			var pagenumber = $("#quicktabs-tabpage-admin_dashboard-"+tabnumber+" .view-filters  #edit-items-per-page").val();
			if($.trim(mainvalue.indexOf("423-")) >= 0){
				var path = "/admin-dashboards?sales_invoice_number="+mainvalue+"&filter_date%5Bmin%5D%5Bdate%5D="+mindate+"&filter_date%5Bmax%5D%5Bdate%5D="+maxdate+"&items_per_page="+pagenumber+"&qt-admin_dashboard="+tabnumber+"#qt-admin_dashboard";
			}else{
				if(isNumber(mainvalue)){
					var filterpath = ""; 
				}else{
					var filterpath = "sales_report_filter_by="+mainvalue+"&sales_report_billing_last_name="+mainvalue+"&";
				}
				var path = "/admin-dashboards?"+filterpath+"sales_report_tracking_number="+mainvalue+"&filter_date%5Bmin%5D%5Bdate%5D="+mindate+"&filter_date%5Bmax%5D%5Bdate%5D="+maxdate+"&items_per_page="+pagenumber+"&qt-admin_dashboard="+tabnumber+"#qt-admin_dashboard";
			}
		}
		location.replace(path);
	}
	function isNumber (o) {
       return ! isNaN (o-0);
    }
})(jQuery);