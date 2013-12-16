<?php // print $header ?>
<?php // print $body ?>
<?php //print $footer;
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
$ammountvalue = 0;
$keyvalue = 1;


$arraytext = array();
//print_r($arrayvalue);
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

foreach ($arraytext as $value){
	 $ammountvalue += (int)$value[8];
	if($arrayelementvalue==497){
		$arrayelementvalue = 1;
		$arraymainvalue++;
	}else{
		$arrayelementvalue++;
	}
}
$strdatenow = (isset($_GET['created']['value']['date']))?strtotime($_GET['created']['value']['date']):strtotime(date("dmy"));
print "89/".date("ymd",$strdatenow)."/120000/423/1/1/1/ZZ////////////"."1/".date("ymd",$strdatenow)."/120000/423/1/".$arraymainvalue."/".($arrayelementvalue)."/CA/".$ammountvalue."///////////"."1/".date("ymd",$strdatenow)."/120000/423/1/".$arraymainvalue."/".($arrayelementvalue+1)."/ZZ////////////"."98/".date("ymd",$strdatenow)."/120000/423/1/".($arraymainvalue+1)."/1/ZZ/".$ammountvalue."///////////"."71/".date("ymd",$strdatenow)."/120000//1///CA/".$ammountvalue."///////////"."72/".date("ymd",$strdatenow)."/120000//1///CA/".$ammountvalue."///////////";
?>