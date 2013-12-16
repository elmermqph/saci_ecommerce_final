<?php 
include "bootstrap_setup.php";
$daybefore =  strtotime("now");
print cron_sku_update_check(date("Y-m-d",$daybefore));
?>