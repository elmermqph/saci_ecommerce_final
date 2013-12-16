(function($){
$(document).ready(function(){
$(".node-type-product.page-node-edit  #block-system-main .gutter .content.clearfix, .page-node-add-product #block-system-main .gutter .content.clearfix").prepend('<p style="color: red;font-style: italic;text-align: left;">Fields with asterisk (*) are required</p>');
$(".page-taxonomy-term #block-system-main .content.clearfix").prepend('<p style="color: red;font-style: italic;text-align: left;display:block !important;">Fields with asterisk (*) are required</p>')
$('#taxonomy-form-term .form-item-name label').html("Category Name");
if($(".page-admin-store-customers-orders h1.page-title").html()=="Customer orders"){
$(".page-admin-store-customers-orders h1.page-title").html("Order History");

}
if($("title").html()=="Customer orders | SM Appliance Center"){
     $("title").html("Order History | SM Appliance Center");
}
if($(".page-admin-store-customers h1.page-title").html()=="Customers"){
$(".page-admin-store-customers h1.page-title").html("Member’s Profile");
}
$("#edit-weight #edit-weight-units option").css("display","none").removeAttr("selected");
$('#edit-weight #edit-weight-units option[value="kg"]').css("display","block").attr("selected","selected");
$("#edit-dimensions #edit-length-units option").css("display","none").removeAttr("selected");
$('#edit-dimensions #edit-length-units option[value="cm"]').css("display","block").attr("selected","selected");
});

})(jQuery);