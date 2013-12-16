(function($){
	$(document).ready(function(){
		$("<span class='invi-date'>" + $("#edit-acc-dateob").val() + "</span>").insertAfter("#edit-acc-dateob");
		$(".invi-date").css("display","none");
		$(".ui-state-default").live("click",function(){
			$(".invi-date").html($("#edit-acc-dateob").val());
		});
		$("#edit-acc-dateob").blur(function(){
			var a =  $("#edit-acc-dateob").val();
			var a_1 = a.substring(2,3);
			var a_2 = a.substring(5,6);
			var myDate = new Date();
			myDate.setDate(myDate.getDate() - 1);
			myDate = Date.parse(myDate);
				
			if(a_1 != "-" || a_2 != "-"){
				$("#edit-acc-dateob").val($(".invi-date").html());
			}else{
				a = a.replace(/-/g,'/');
				if(Date.parse(a) > myDate || !isDate(a)){
					$("#edit-acc-dateob").val($(".invi-date").html());
				}
			}
		});
		
	function isDate(txtDate)
		{
		  var currVal = txtDate;
		  if(currVal == '')
			return false;
		  
		  //Declare Regex  
		  var rxDatePattern = /^(\d{1,2})(\/|-)(\d{1,2})(\/|-)(\d{4})$/; 
		  var dtArray = currVal.match(rxDatePattern); // is format OK?

		  if (dtArray == null)
			 return false;
		 
		  //Checks for mm/dd/yyyy format.
		  dtMonth = dtArray[1];
		  dtDay= dtArray[3];
		  dtYear = dtArray[5];

		  if (dtMonth < 1 || dtMonth > 12)
			  return false;
		  else if (dtDay < 1 || dtDay> 31)
			  return false;
		  else if ((dtMonth==4 || dtMonth==6 || dtMonth==9 || dtMonth==11) && dtDay ==31)
			  return false;
		  else if (dtMonth == 2)
		  {
			 var isleap = (dtYear % 4 == 0 && (dtYear % 100 != 0 || dtYear % 400 == 0));
			 if (dtDay> 29 || (dtDay ==29 && !isleap))
				  return false;
		  }
		  return true;
		}
	});
}(jQuery));