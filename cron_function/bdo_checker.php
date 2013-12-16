<?php 
include "bootstrap_setup.php";

bdo_checker(date("mdY",strtotime("-1 day")));

print xend_to_excel(date("Y-m-d",$daybefore),TRUE,"jyc@mci.com.ph,rad@mci.com.ph,ecd@mci.com.ph"); 