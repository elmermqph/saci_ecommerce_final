<?php
if(isset($_GET['date_to']) and isset($_GET['date_from']) ){
	$dateto = strtotime($_GET['date_to']." 23:59:59");
	$datefrom = strtotime($_GET['date_from']." 00:00:00");	
	$sql = "SELECT * FROM z_report_logs WHERE (start_datetime BETWEEN :from AND :to) AND (status_logs = 1)";
        $array = array(":from"=>$datefrom,":to"=>$dateto);
}
else{
	$dateto = "";
	$datefrom = "";	
	$sql = "SELECT * FROM z_report_logs";
	$array=array();
}
$result = db_query($sql,$array);

foreach ($result as $key => $record):
if($key == 0)
	$startdate = $record->start_datetime;
else if(($result->rowCount()-1) == $key)
	$endofdate = $record->end_datetime;
endforeach;
?>

<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  </head>
  <body>
    <table border="1">
	<thead>
		<tr>
			<th colspan="10" style="text-align:center;"><h2 class="printtitle" style="font-size: 14px;">STAR APPLIANCE CENTER, INC.</h2></th>
		</tr>
		<tr>
			<th colspan="10" style="text-align:center;"><h2 class="printtitle" style="font-size: 16px;">OUTBOUND INTERFACE SUMMARY REPORT</h2></th>
		</tr>
		<tr>
			<th colspan="10" style="text-align:center;"><h2 class="printtitle" style="font-size: 14px;">For the Period	<?php echo  date("F d, Y",$datefrom) ?> to <?php echo  date("F d, Y",$dateto) ?></h2></th>
		</tr>
		<tr>
			<th colspan="10" style="text-align:left;"><h3>Process Date: <?php echo date("d-M-Y",$startdate)?> to <?php echo date("d-M-Y",$endofdate)?></h3></th>
		</tr>
		<tr>
			<th colspan="10" style="text-align:left;"><h3>Process Time: <?php echo date("h:i:s",$startdate)?> to <?php echo date("h:i:s",$endofdate)?></h3></th>
		</tr>
		<tr>
			<th colspan="10" style="text-align:left;"><h3>Extraction & Sending Status: Successful</h3></th>
		</tr>
		
		
		<tr>
			<th rowspan="2" style="text-align:center;">File Name</th>
			<th colspan="2" style="text-align:center;">
				Process Dates
			</th>
			<th colspan="2" style="text-align:center;">
				Hash Totals
			</th>
			<th colspan="5" style="text-align:center;">
				Transaction Details
			</th>
		</tr>
		<tr>
			<th>Start</th>
			<th>End</th>
			<th>Total Count</th>
			<th>Total Amount</th>
			<th>Transaction Batch Name</th>
			<th>Batch Amount</th>
			<th>No. of Trxs</th>
			<th>Total Trx Amount</th>
			<th>Trx Lines</th>
		</tr>
	</thead>
    <tbody>
		<?php 
$queryresult = db_query($sql,$array);
foreach ($queryresult  as $key => $record):?>
<tr>
<td><?php  echo $record->filename?></td>
<td><?php echo date("m/d/Y h:i:s",$record->start_datetime)?></td>
<td><?php echo date("m/d/Y h:i:s",$record->end_datetime)?></td>
<td><?php echo $record->totalcount?></td>

<td><?php echo number_format($record->totalamount,2,".",",")?></td>
<td><?php echo "estore#".$record->transaction_batch_id?></td>
<td><?php echo number_format($record->batchamount,2,".",",")?></td>
<td><?php echo $record->nooftrx?></td>
<td><?php echo number_format($record->totaltrxammount,2,".",",")?></td>
<td><?php echo $record->notrxlines?></td>
</tr>
<?php endforeach;?>

	</tbody>
    </table>
  </body>
</html>