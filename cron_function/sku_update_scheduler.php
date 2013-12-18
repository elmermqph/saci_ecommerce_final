<?php 
/*
	A package so you can call function in a module on a php file.
*/
include "bootstrap_setup.php";
/*
	you can this function under this file:<root>/sites/all/modules/uc_sm_appliance_customization/mms_generator/mms_generator.module
*/
$daybefore =  strtotime("now");
print cron_sku_update_check(date("Y-m-d",$daybefore));
?>