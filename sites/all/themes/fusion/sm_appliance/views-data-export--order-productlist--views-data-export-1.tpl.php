<?php 
$addvalue = array(12=>0.00,13=>0.00,15=>"");
//,,15=>0.00
$explode  = explode("\r\n",$body);
foreach ($explode as $rowkey => $rowelement):
	$counter = 1;
	$columnelement = explode(",",$rowelement);
	if($columnelement[0]=='"D"'){
		foreach($columnelement as $keycolumn => $columnvalue):
			if($counter== 3){
				$sessionstart[$keycolumn] = "086204000";
			}if($counter>=12 and $counter<=13){
				$addvalue[$counter] += str_replace('"',"",$columnvalue);
				$sessionstart[$keycolumn] = $columnvalue;
			}else if($counter==15){
				$addvalue[$counter] = str_replace('"',"",$columnvalue);
				$sessionstart[$keycolumn] = $columnvalue;
			}else if($counter <= 17){
				$datesetless = $columnvalue;
				$sessionstart[$keycolumn] = $columnvalue;
			}
			$counter++;
		endforeach;
		$valueperrow[$rowkey] = implode(",",$sessionstart);
	}
endforeach ;


$val[0] = 1;
$headerarray = array("H","S","TIN","STAR APPIANCE CENTER INC.","","","","SM APPLIANCE CENTER","SM Megamall Building Corner EDSA  Brgy Wack-Wack ","VAT EXEMPT SALES","0","0",$addvalue[12],$addvalue[13],"RDO No.116",$addvalue[15],"12");	
//,"000-086-204-000",$datesetless,
print implode(",",$headerarray)."\r\n"; 
print implode("\r\n",$valueperrow); 

?>