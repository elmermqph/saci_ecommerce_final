<?php

$arrayamount = array('vatable_sales'=>0.00,'vat_amt'=>0.00);
	$view = views_get_view('order_productlist');  
	$view->set_display('page_2');
	$view->exposed_input['created']['value']['date'] = $_GET['created']['value']['date'];
	$view->render();
	$array = $view->result;
	$countrow = 0;
	foreach ($array as $value):
		$object = db_query("SELECT vat_amt,vatable_sale FROM checkout_vat_inc WHERE order_id = :oid",array(':oid' => $value->order_id));
                $record = $object->fetchAssoc(); 
		if($object->rowCount()>0)
		      $countrow++;	
		$arrayamount['vatable_sales'] += $record['vatable_sale']; 
        $arrayamount['vat_amt'] += $record['vat_amt'];         
	endforeach;	
	
$querytax  = db_query("SELECT rate FROM uc_taxes ORDER BY id ASC LIMIT 1");
$recordtax = $querytax->fetchObject();	
$explode = explode("\n",$body);
$mainvalue = 1;
$keyvalue = 1;

foreach($explode as $value){
	if($value!="[]" and $value!="" and strpos($value,"-")===false){
		$arrayvalue[$mainvalue][$keyvalue] = $value;
		$keyvalue++;
	}
	if($keyvalue== 13){
		$keyvalue = 1;
		
		$mainvalue++;
	}
}
$totalvalue = array(9=>0,10=>0);
foreach($arrayvalue as $mainkey => $mainvalue):
	foreach($mainvalue as $key=>$value):
		if($key==9 or $key==10)
			$totalvalue[$key] += (int)$value;
		else if($key==12)
			$datecheck = $value;
		if($key==3  and $value == 0)
			$valuefetch[$mainkey][$key] = "";
		else if($key==9 or $key==10)
			$valuefetch[$mainkey][$key] = number_format($value,2,".","");
		else	
			$valuefetch[$mainkey][$key] = $value;
	endforeach;
endforeach;
//print_r($valuefetch);
$fetchhead = array("H","S","000086204","STAR APPLIANCE CENTER INC.","","","","SM APPLIANCE CENTER","SM Megamall Building Corner EDSA  Brgy Wack-Wack","Mandaluyong City","0","0",number_format($arrayamount['vatable_sales'],2,".",""),number_format($arrayamount['vat_amt'],2,".",""),'116',$datecheck,($recordtax->rate*100));
print implode(",",$fetchhead).",\n";
foreach($valuefetch as $value):
	foreach($value as $key => $subvalue){
		if($key==4)
		print $subvalue.",,,,";
		else
		print $subvalue.",";
	}
	print ",,\n";
	//print implode(",",)."";
endforeach;
?>