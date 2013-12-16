<?php

function sandcart_json_ajax(){
	$jsonencode = array(
		'province'	=> isset($_REQUEST['province']) ? $_REQUEST['province'] : '',
		'city' => isset($_REQUEST['city']) ? $_REQUEST['city'] : '',
	);
	// Get all municipality from a specific province
	if(!empty($jsonencode['province'])){
		$city = array();
		$zone_code = db_query("SELECT zone_code FROM {uc_zones} WHERE zone_id = :zone_id",array(":zone_id" => $jsonencode['province']))->fetchField();
		// $zone_code = db_query("SELECT zone_code FROM {uc_zones} WHERE zone_id = :zone_id",array(":zone_id" => 392))->fetchField();
		$qry = 'SELECT * FROM {uc_zones_municipality} WHERE uz_zone = :uz_zone ORDER BY municipality_name ASC';
		$results = db_query($qry,array(":uz_zone" => $zone_code));
		foreach($results as $key => $result){
			$city[$key]['tid'] = $result->id;
			$city[$key]['name'] = $result->municipality_name;
		}
		$jsonencode['province'] = $city;
	}else{
		$jsonencode['province'] = '';
	}
	
	
	// Get all Barangay form a specific Municipality
	if(!empty($jsonencode['city'])){
		$brgy = array();
		$qry = 'SELECT * FROM {uc_zones_barangay} WHERE uz_municipality = :uz_municipality ORDER BY barangay_name ASC';
		$results = db_query($qry,array(":uz_municipality" => $jsonencode['city']));
		// $results = db_query($qry,array(":uz_municipality" => 1840));
		foreach($results as $key => $result){
			$brgy[$key]['tid'] = $result->id;
			$brgy[$key]['name'] = $result->barangay_name;
		}
		$jsonencode['city'] = $brgy;
	}else{
		$jsonencode['city'] = '';
	}
	echo  json_encode($jsonencode);
}
