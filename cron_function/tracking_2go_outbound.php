<?php 
/*
	A package so you can call function in a module on a php file.
*/
include "bootstrap_setup.php";
/*
	you can this function under this file:<root>/sites/all/modules/uc_sm_appliance_customization/shipping_accomodation/ shipping_accomodation.module   
*/
excel_array_2go(date("Y-m-d",strtotime("-1 day")));
//
//print xend_to_excel(date("Y-m-d",$daybefore),TRUE,"jyc@mci.com.ph,rad@mci.com.ph,ecd@mci.com.ph"); 