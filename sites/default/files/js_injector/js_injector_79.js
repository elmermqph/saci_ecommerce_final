(function($){
	$(document).ready(function(){
		$(".node-type-product #edit-shippable").attr("checked","checked");
		$(".node-type-product #edit-save-continue , .node-type-product #edit-submit").click(function(){
			var error = false;
			var errorchecker = false;
			var errormsg = "";
			var formweight = $(".node-type-product .form-item-weight .form-text");
			var formlength = $(".node-type-product .form-item-dim-length .form-text");
			var formwidth = $(".node-type-product .form-item-dim-width .form-text");
			var formheight = $(".node-type-product .form-item-dim-height .form-text");

			if(formweight.attr("value") == "" || formweight.attr("value") == 0){
				if($("#edit-weight .error-checked").length>0){
					$("#edit-weight .error-checked").css("display","block");
				}else{
					$("#edit-weight").append('<span class="error-checked" style="color: red;padding: 25px 0px;float: left;">Weight is required</span>');
				}
				error = true;
			}else{
                                if($("#edit-weight .error-checked").length>0){
					$("#edit-weight .error-checked").css("display","none");
				}
                        }

			if(formlength.attr("value") == "" || formlength.attr("value") == 0){
				errormsg = errormsg+'<span class="error-checked length" style="color: red;">Length is required</span><br />';
				errorchecker = true
			}

			if(formwidth.attr("value") == "" || formwidth.attr("value") == 0){
				errormsg = errormsg+'<span class="error-checked width" style="color: red;">Width is required</span><br />';
				errorchecker = true
			}

			if(formheight.attr("value") == "" || formheight.attr("value") == 0){
				errormsg = errormsg+'<span class="error-checked length" style="color: red;">Height is required</span><br />';
				errorchecker = true
			}

			if(errorchecker = true && errormsg !=""){
				if($("#edit-dimensions .error-container").length>0){
					$("#edit-dimensions .error-container").html(errormsg);
$("#edit-dimensions .error-container").css("display","block");
				}else{
					$("#edit-dimensions").append('<span class="error-container" style="float:left;">'+errormsg+'</span>');
				}
				error = true;
			}else{
                                if($("#edit-dimensions .error-container").length>0){
					$("#edit-dimensions .error-container").css("display","none");
				}
                        }
			
			if(error == true)
				return false;
			else if(error == false)	
				return true;
		});
$(".page-node-add-product #edit-save-continue , .page-node-add-product #edit-submit").click(function(){
var error = false;
			var errorchecker = false;
			var errormsg = "";
			var formweight = $(".page-node-add-product .form-item-weight .form-text");
			var formlength = $(".page-node-add-product .form-item-dim-length .form-text");
			var formwidth = $(".page-node-add-product .form-item-dim-width .form-text");
			var formheight = $(".page-node-add-product .form-item-dim-height .form-text");

			if(formweight.attr("value") == "" || formweight.attr("value") == 0){
				if($("#edit-weight .error-checked").length>0){
					$("#edit-weight .error-checked").css("display","block");
				}else{
					$("#edit-weight").append('<span class="error-checked" style="color: red;padding: 25px 0px;float: left;">Weight is required</span>');
				}
				error = true;
			}else{
if($("#edit-weight .error-checked").length>0){
					$("#edit-weight .error-checked").css("display","none");
				}
                        }

			if(formlength.attr("value") == "" || formlength.attr("value") == 0){
				errormsg = errormsg+'<span class="error-checked length" style="color: red;">Length is required</span><br />';
				errorchecker = true
			}

			if(formwidth.attr("value") == "" || formwidth.attr("value") == 0){
				errormsg = errormsg+'<span class="error-checked width" style="color: red;">Width is required</span><br />';
				errorchecker = true
			}

			if(formheight.attr("value") == "" || formheight.attr("value") == 0){
				errormsg = errormsg+'<span class="error-checked length" style="color: red;">Height is required</span><br />';
				errorchecker = true
			}

			if(errorchecker = true && errormsg !=""){
				if($("#edit-dimensions .error-container").length>0){
					$("#edit-dimensions .error-container").html(errormsg);
$("#edit-dimensions .error-container").css("display","block");
				}else{
					$("#edit-dimensions").append('<span class="error-container" style="float:left;">'+errormsg+'</span>');
				}
				error = true;
			}else{
if($("#edit-dimensions .error-container").length>0){
					$("#edit-dimensions .error-container").css("display","none");
				}
}
			
			if(error == true)
				return false;
			else if(error == false)	
				return true;
});
	});
})(jQuery);