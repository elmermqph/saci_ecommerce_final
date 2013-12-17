<?php 
/*
	A package so you can call function in a module on a php file.
*/
include "bootstrap_setup.php";
/*
	you can this function under this file:<root>/sites/all/modules/uc_sm_appliance_customization/automation_process_file/automation_process_file.module  
*/
$return = outbound_mms_file(date("Y-m-d",strtotime("-1 day")),"cron");
if($return['status'] == false){
	echo $return['message'];
	}
?>