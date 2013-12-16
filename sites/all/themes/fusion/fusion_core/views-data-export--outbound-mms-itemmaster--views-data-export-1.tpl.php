<?php // print $header ?>
<?php // print $body ?>
<?php //print $footer;
$startdate = strtotime(date($_GET['created']['value']['date']." H:i:s"));
$explode = explode("\n",$body);
$mainvalue = 1;
$keyvalue = 1;
foreach($explode as $value){
	if($value>0){
		$arrayvalue[$mainvalue][$keyvalue] = $value;
		$keyvalue++;
	}
	if($keyvalue== 12){
		$keyvalue = 1;
		$mainvalue++;
	}
	
	
	
}
$arraymainvalue = 2;
$arrayelementvalue = 1;
$keyvalue = 1;

$logvalue = 1;

$arraytext = array();
foreach ($arrayvalue as $value){
	if(isset($arraytext[$value[11]])){
		$totalqtyvalue = $arraytext[$value[11]][7]+(int)$value[7] ;
		$totalpricevalue = $arraytext[$value[11]][8]+(int)$value[8] ;
	}else{
		$totalqtyvalue = $value[7] ;
		$totalpricevalue = $value[8] ;
	}
	$arraytext[$value[11]] = array(1=>$value[1],2=>$value[2],3=>$value[3],4=>$value[4],5=>$value[5],6=>$value[6],7=>$totalqtyvalue,8=>$totalpricevalue,9=>$value[9],10=>$value[10]);
}
$totalcountrow=1;
$totalvalue=0;

foreach ($arraytext as $value){
	print $value[1]."/".$value[2]."/".$value[3]."/".$value[4]."/".$value[5]."/".$value[6]."/".$arraymainvalue."/".$arrayelementvalue."//".$value[7]."////////".$value[8]."///////".substr($value[9], 0, 12)."/".$value[10]."//////////////";
	
	$totalvalue+=(int)$value[8];
	
	if($arrayelementvalue==497){
		$arrayelementvalue = 1;
		$arraymainvalue++;
	}else{
		$arrayelementvalue++;
	}
	$totalcountrow++;
}
$enddate = strtotime(date($_GET['created']['value']['date']." H:i:s"));
if(isset($_GET['typecron_check'])){
	$filename = "S10370423.".date("mdy",strtotime($_GET['created']['value']['date'])).".zip";
	$result = db_query('SELECT transaction_batch_id FROM {z_report_logs} WHERE filename = :filename', array(':filename' => $filename));
	$arrainsertparams = 	array('filename' => $filename,'start_datetime' => $startdate,'end_datetime' => $enddate,'totalcount'=>($totalcountrow-1),'totalamount'=>number_format(($totalvalue/100),2,".",""),'batchamount'=>number_format(($totalvalue/100),2,".",""),'nooftrx'=>($totalcountrow-1),'totaltrxammount'=>number_format(($totalvalue/100),2,".",""),'notrxlines'=>($totalcountrow-1));
	if($result->rowCount()>0){
		$transid = $result->fetchObject();
		$nid = db_update('z_report_logs')->fields($arrainsertparams)->condition('transaction_batch_id',$transid->transaction_batch_id)->execute();
	}else {
		$nid = db_insert('z_report_logs')->fields($arrainsertparams)->execute();
	}
}
?>