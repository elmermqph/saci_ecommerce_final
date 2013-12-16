<?php 
include "bootstrap_setup.php";
//if(!isset($_GET['datesample']))
$daybefore =  strtotime("-1day");
//else
//$daybefore =  $_GET['datesample'];	
//$daybefore =  strtotime("2012-09-13");
$return = csa_compress_file_check(date("Y-m-d",$daybefore),"cron","smcron");
	if(isset($return['status']) and $return['status']=="Complete"){
		echo $return['path'];
	}else{
		echo $return['status'];
	}
 ?>