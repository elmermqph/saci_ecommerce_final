<?php
if(!defined("MMS_FILE_PATH_ROOT"))
	define("MMS_FILE_PATH_ROOT",$_SERVER['DOCUMENT_ROOT']."/");
		
function _sandcart_import_location(){
	return drupal_get_form("_import_location_form");
}

function _import_location_form($form, &$form_state){
//	$form['state_prov'] = array(
//		'#type' => 'select',
//		'#title' => t('Province'),
//		'#options' => _export_province_opt(),
//		'#required' => TRUE,
//	);
	
	$form['upload'] = array(
		'#type' => 'file',
		'#title' => t('Select File'),
		'#description' => t('Upload Barangay in CSV format'),
	);
	
	$form['submit'] = array(
		'#type' => 'submit', 
		'#value' => t('Import'),
	);
	
	
	
	return $form;
}


function _import_location_form_submit($form, &$form_state){
	$file = file_save_upload('upload', array(
		'file_validate_extensions' => array('csv'), // Validate extensions.
		FILE_EXISTS_REPLACE
	));
	
	$test = array();
	$row = 1;
	if (($handle = fopen($file->uri, 'r')) !== FALSE) {
		while (($data = fgetcsv($handle, 1000, ",")) !== FALSE) {
			if($row != 1){
				$test[$row] = array($data[0],$data[1],$data[2],$data[3],$data[4]);
			}
			$row++;
		}
		fclose($handle);
	}
	foreach($test as $key => $value){
		switch($value[3]){
			case 0:{
				// Insert
				$insert_brgy = db_insert('uc_zones_barangay')
					->fields(array(
						'barangay_name' => $value[2],
						'uz_municipality' => $value[1],
						'delivery_status' => $value[4],
					))
					->execute();
			}
			default:{
				// Update
			$update_brgy = db_update('uc_zones_barangay')
					->fields(array(
						'delivery_status' => $value[4],
						'uz_municipality' => $value[1]
					))
					->condition('id',$value[3])
					->execute();
			}
		}
	}
}

//function import_location_ajax_calback($form, &$form_state){
//	return $form['city'];
//}



function _sandcart_export_location(){
	return drupal_get_form('_export_location_form');
}

function _export_location_form($form, &$form_state){
	$form['#attributes'] = array('enctype' => "multipart/form-data");
	$form['state_prov'] = array(
		'#type' => 'select',
		'#title' => t('Province'),
		'#options' => _export_province_opt(),
		'#required' => TRUE,
	);

	$form['submit'] = array(
		'#type' => 'submit', 
		'#value' => t('Export'),
	);
	return $form;
}


function _export_location_form_submit($form, &$form_state){
	$collect = array();
	//$collect['header'] = array ("area_code","municipality_name","municipality_id","barangay_name","barangay_id","status");
	$collect['header'] = array ("municipality_name","municipality_id","barangay_name","barangay_id","status");
	
	$qry = "SELECT * FROM {uc_zones_municipality} WHERE uz_zone = :uz_zone";
	$result = db_query($qry,array(":uz_zone" => $form_state['values']['state_prov']));
	foreach($result as $result){
		$qrybrgy = "SELECT * FROM {uc_zones_barangay} WHERE uz_municipality = :uz_municipality";
		$brgy_results = db_query($qrybrgy,array(":uz_municipality" => $result->id));
		foreach($brgy_results as $brgy_result){
			$collect[$brgy_result->barangay_name] = array(
				// 'AREA CODE' => $form_state['values']['state_prov'],
				'Municipality Name' => $result->municipality_name,
				'Municipality id' => $result->id,
				'Barangay Name' => $brgy_result->barangay_name,
				'Barangay id' => $brgy_result->id,
				'Status' => $brgy_result->delivery_status,
			);
		}
	}
	global $base_url;
	$filepath = MMS_FILE_PATH_ROOT."outbound/csv_shipping_acommodation/";
	$fp = fopen($filepath.'saci_shipping_accomodation.csv', 'w');
	if($fp){
		foreach ($collect as $fields) {
				fputcsv($fp, $fields);
		}
		fclose($fp);
		$file = MMS_FILE_PATH_ROOT.'/outbound/csv_shipping_acommodation/saci_shipping_accomodation.csv';
        header('Content-Description: File Transfer');
        header('Content-Type: application/csv');
        header('Content-Disposition: attachment; filename=municipality_and_barangay_for_'.$form_state['values']['state_prov'].'.csv');
        header('Expires: 0');
        header('Cache-Control: must-revalidate');
        header('Pragma: public');
        header('Content-Length: ' . filesize($file));
        ob_clean();
        flush();
		readfile($file);
	}else{
		return "Not Open";
	}
}


function _export_province_opt(){
	$cityopt = array();
	$qry = "SELECT * FROM {uc_zones} WHERE zone_country_id = :zone_country_id";
	$results = db_query($qry,array(":zone_country_id" => 608));
	foreach($results as $result){
		$cityopt[$result->zone_code] = $result->zone_name;
	}
	return $cityopt;
}