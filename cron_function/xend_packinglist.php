<?php 
include "bootstrap_setup.php";
$daybefore =  strtotime("-1day");
//$daybefore =  strtotime("2013-06-24");
print saci_transmital_pdf(date("Y-m-d",$daybefore),TRUE);
//
//print xend_to_excel(date("Y-m-d",$daybefore),TRUE,"jyc@mci.com.ph,rad@mci.com.ph,ecd@mci.com.ph"); 

