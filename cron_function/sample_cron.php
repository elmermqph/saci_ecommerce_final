<?php 
	include "bootstrap_setup.php";
	$filepath = $_SERVER['DOCUMENT_ROOT']."/"."outbound/xend/";
    //$to = "e.quilala@spinweb.ph,elmermartin.quilala@gmail.com,ecd@mci.com.ph";
	$to = "e.quilala@spinweb.ph,ecd@mci.com.ph,elcyn.cubillan@gmail.com";
	$my_file = "Book1.xls";
	$my_path = $filepath;
	$my_name = "STAR APPLIANCE CENTER INC.";
	$my_mail = "no-reply@smappliance.com";
	$my_subject = "Xend Packing list from: ";
	$my_message = "Automated send packinglist \r\r Thanks.";
	$return = mail_attachment($my_file, $my_path, $to, $my_mail, $my_name, $my_subject, $my_message);