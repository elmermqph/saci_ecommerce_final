<?php 
include "bootstrap_setup.php";
$return = outbound_mms_file(date("Y-m-d",strtotime("-1 day")),"cron");
if($return['status'] == false){
	echo $return['message'];
	}
?>