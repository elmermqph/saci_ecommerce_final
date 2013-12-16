<?php

function _edituserbyadmin_address_user(){
	$_SESSION['username'] = '';
	$_SESSION['username'] = isset($_GET['name']) ? $_GET['name'] : NULL;
	return drupal_get_form('_edit_userbyadmin_address_form');
}

function _edit_userbyadmin_address_form($form, &$form_state){
	$username = $_SESSION['username'];
	
	$acc = user_load_by_name($username);
	$account = user_load($acc->uid);
	
	$countryoptions = _country_options();
	$form['add-country'] = array(
		'#type' => 'select',
		'#title' => t('Country'),
		'#options' => $countryoptions,
		'#default_value' => $account->field_country_list['und']['0']['value'],
		'#weight' => -17,
		'#required' => TRUE,
		'#ajax' => array(
			'callback' => '_country_myaccount_callback', 
			'wrapper' => 'textfields', 
			'effect' => 'fade',
		),
	);
	$form['textfields'] = array(
		'#prefix' => '<div id="textfields">', 
		'#suffix' => '</div>', 
		'#type' => 'fieldset', 
		'#weight' => -15,
	);	
	if(isset($form_state['values']['add-country'])){
		$countryval = $form_state['values']['add-country'];
	}else{
		$countryval = $account->field_country_list['und']['0']['value'];
	}
	
	$setvaluecitytext = '';
	
	if($countryval == 608){
		$prov_opt = isset($form_state['values']['add-country']) ? $form_state['values']['add-country'] : $account->field_country_list['und']['0']['value'];
		$selected = isset($form_state['values']['state_prov']) ? $form_state['values']['state_prov'] : $account->field_not_ph_province['und']['0']['value'];
		// $selected = isset($account->field_not_ph_province['und']['0']['value']) ? $account->field_not_ph_province['und']['0']['value'] : $form_state['values']['state_prov'];
		$stateprov = _option_prov2($prov_opt);
		$form['textfields']['state_prov'] = array(
			'#type' => 'select',
			'#title' => t('Province'),
			'#options' => $stateprov,
			'#default_value' => $selected,
			'#required' => TRUE,
			'#weight' => -16,
				'#ajax' => array(
					'callback' => '_ajax_callback',
					'wrapper' => 'second-option',),
		);
		
		$prov = isset($selected) ? $selected : 359;
		$citymunipality = _option_muni($prov);
		$citySelected = isset($form_state['values']['city']) ? $form_state['values']['city'] : $account->field_not_ph_city['und']['0']['value'];
		// $citySelected = isset($account->field_not_ph_city['und']['0']['value']) ? $account->field_not_ph_city['und']['0']['value'] : $form_state['values']['city'];
		$form['textfields']['city'] = array( 
			'#type' => 'select',
			'#title' => 'City/Municipality <span class="form-required" title="This field is required.">*</span>',
			'#options' => $citymunipality,
			'#default_value' => $account->field_not_ph_city['und']['0']['value'],
			'#prefix' => '<div id="second-option">',
			'#suffix' => '</div>',
			'#weight' => -15,

		);
		
	}else{
		$prov_opt = isset($form_state['values']['add-country']) ? $form_state['values']['add-country'] : $account->field_country_list['und']['0']['value'];
		$selected = isset($form_state['values']['state_prov']) ? $form_state['values']['state_prov'] : $account->field_not_ph_province['und']['0']['value'];
		$stateprov = _option_prov2($prov_opt);
		$form['textfields']['state_prov'] = array(
			'#type' => 'select',
			'#title' => t('Province'),
			'#options' => $stateprov,
			'#default_value' => $account->field_not_ph_province['und']['0']['value'],
			'#weight' => -16,
			'#required' => TRUE,
		);
		//$setvaluecitytext =  (!is_numeric($account->field_not_ph_city['und']['0']['value'])) ? ' ' : $account->field_not_ph_city['und']['0']['value'];
		
		$form['textfields']['city'] = array(
			'#type' => 'textfield',
			'#default_value' => $account->field_not_ph_city['und']['0']['value'],
			'#title' => 'City<span class="form-required" title="This field is required.">*</span>', 
			'#attributes' => array('onpaste' => array('return false')),
			'#maxlength' => 100, 
			'#weight' => -13,
			//'#required' => TRUE,
		);
	}
	
	$form['add_postalcode'] = array(
		'#type' => 'textfield',
		'#title' => t('Postal/Zip Code'), 
		'#default_value' => $account->field_post_zip_code['und']['0']['value'], 
		'#maxlength' => 4, 
		'#weight' => -13,
		'#attributes' => array('onpaste' => array('return false')),
	);
	
	
	$form['add_street'] = array(
		'#type' => 'textfield',
		'#title' => t('Address'), 
		'#default_value' => $account->field_billing_address['und']['0']['value'], 
		'#maxlength' => 256, 
		'#weight' => -12,
		'#required' => TRUE,
		'#attributes' => array('onpaste' => array('return false')),
	);
	$form['userid'] = array(
		'#type' => 'hidden', 
		'#value' => $acc->uid,
	);
	
	$form['submit'] = array(
		'#type' => 'submit',
		'#value' => t('Save'),
	);
	
	return $form;
}


function _edit_userbyadmin_address_form_submit($form, &$form_state){
	$account = user_load($form_state['values']['userid']);
	$edit = array();
	
	if(!empty($form_state['values']['city'])){
		$edit = array(
			'field_country_list' => array(
				'und' => array(
					0 => array(
						'value' => $form_state['values']['add-country'],
					),
				),
			),
			'field_not_ph_province' => array(
				'und' => array(
					0 => array(
						'value' => $form_state['values']['state_prov'],
					),
				),
			),
			'field_not_ph_city' => array(
				'und' => array(
					0 => array(
						'value' => $form_state['values']['city'],
					),
				),
			),
			'field_post_zip_code' => array(
				'und' => array(
					0 => array(
						'value' => $form_state['values']['add_postalcode'],
					),
				),
			),
			'field_billing_address' => array(
				'und' => array(
					0 => array(
						'value' => $form_state['values']['add_street'],
					),
				),
			),
		);
		// user_save((object) array('uid' => $form_state['values']['userid']), (array) $edit);
		user_save($account, $edit);
		drupal_set_message("User updated Successfully!");
		$redurl = '/update-redirect?name=' . $account->name;
		header('Location: '.$redurl);
		exit;
	}
}