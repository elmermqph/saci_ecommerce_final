<?php


function _edituserbyadmin_information_user(){
	return drupal_get_form('_edit_userbyadmin_form');
}

// user-update-by-admin/information?name=qazwsxqw
function _edit_userbyadmin_form($form, &$form_state){	
	$username = isset($_GET['name']) ? $_GET['name'] : NULL;
	$acc = user_load_by_name($username);
	$account = user_load($acc->uid);
	
	$form['#prefix'] = '<div id="edit-userbyadmin">';
  	$form['#suffix'] = '</div>';
	$form['#id'] = 'edit-byadmin-information-form';
	
	$titleopt = array(1 => t('&nbsp;&nbsp;Mr.'), 2 => t('&nbsp;&nbsp;Ms.'));
	$form['acc-active'] = array(
		'#type' => 'radios',
		'#title' => t('Title'),
		'#default_value' => isset($account->field_title['und']['0']['value']) ? $account->field_title['und']['0']['value'] : '',
		'#options' => $titleopt,
		'#weight' => -21,
	);
	$form['acc-firstname'] = array(
	  '#type' => 'textfield',
	  '#title' => t('Firstname'),
	  '#default_value' => isset($account->field_first_name['und']['0']['value']) ? $account->field_first_name['und']['0']['value'] : '',
	  '#size' => 24,
	  '#maxlength' => 100,
	  '#required' => TRUE,
	  '#attributes' => array('onpaste' => array('return false')),
	);
	
	$form['acc-lastname'] = array(
	  '#type' => 'textfield',
	  '#title' => t('Lastname'),
	  '#default_value' => isset($account->field_last_name['und']['0']['value']) ? $account->field_last_name['und']['0']['value'] : '',
	  '#size' => 24,
	  '#maxlength' => 100,
	  '#required' => TRUE,
	  '#attributes' => array('onpaste' => array('return false')),
	);
	$form['acc-dateob'] = array(
		'#type' => 'textfield',
		'#title' => t('Date of Birth'),
		'#size' => 10,
		'#maxlength' => 10,
		'#description' => t('YYYY-MM-DD'), 
		'#default_value' => isset($account->field_date_ob['und']['0']['value']) ? $account->field_date_ob['und']['0']['value'] : '',
		'#attributes' => array('class' => array('pickadate'), 'onpaste' => 'return false'),
		'#required' => TRUE,
	);
	$form['acc-tin'] = array(
	  '#type' => 'textfield',
	  '#title' => t('TIN No.'),
	  '#default_value' => isset($account->field_tin['und']['0']['value']) ? $account->field_tin['und']['0']['value'] : '',
	  '#size' => 24,
	  '#maxlength' => 12,
	  '#attributes' => array('onpaste' => array('return false')),
	);
	$form['mobile'] = array(
		'#type' => 'textfield',
		'#title' => t('Mobile No.'), 
		'#default_value' => isset($account->field_modile_no['und']['0']['value']) ? $account->field_modile_no['und']['0']['value'] : '', 
		'#maxlength' => 11, 
		'#size' => 24,
		'#required' => TRUE,
		'#attributes' => array('onpaste' => array('return false')),
	);
	$form['telephone'] = array(
		'#type' => 'textfield',
		'#title' => t('Telephone No.'), 
		'#default_value' => isset($account->field_tel_no['und']['0']['value']) ? $account->field_tel_no['und']['0']['value'] : '', 
		'#maxlength' => 14, 
		'#size' => 24,
		'#attributes' => array('onpaste' => array('return false')),
		
	);
	$form['faxno'] = array(
		'#type' => 'textfield',
		'#title' => t('Fax No.'), 
		'#default_value' => isset($account->field_fax_no['und']['0']['value']) ? $account->field_fax_no['und']['0']['value'] : '', 
		'#maxlength' => 14, 
		'#size' => 24,
		'#attributes' => array('onpaste' => array('return false')),
	);
	$form['userid'] = array(
		'#type' => 'hidden', 
		'#value' => $acc->uid,
	);
	$form['submit'] = array(
		'#type' => 'submit', 
		'#value' => t('Update User'),
	);
	return $form;
}


function _edit_userbyadmin_form_submit($form, &$form_state){
	// drupal_set_message($form_state['values']['userid']);
	
	$account = user_load($form_state['values']['userid']);
	$edit = array();
	$edit = array(
		'field_first_name' => array(
			'und' => array(
				0 => array(
					'value' => isset($form_state['values']['acc-firstname']) ? $form_state['values']['acc-firstname'] : '',
				),
			),
		),
		'field_last_name' => array(
			'und' => array(
				0 => array(
					'value' => isset($form_state['values']['acc-lastname']) ? $form_state['values']['acc-lastname'] : '',
				),
			),
		),
		'field_title' => array(
			'und' => array(
				0 => array(
					'value' => isset($form_state['values']['acc-active']) ? $form_state['values']['acc-active'] : '',
				),
			),
		),
		'field_date_ob' => array(
			'und' => array(
				0 => array(
					'value' => isset($form_state['values']['acc-dateob']) ? $form_state['values']['acc-dateob'] : '',
				),
			),
		),
		'field_tin' => array(
			'und' => array(
				0 => array(
					'value' => isset($form_state['values']['acc-tin']) ? $form_state['values']['acc-tin'] : '',
				),
			),
		),
		'field_modile_no' => array(
			'und' => array(
				0 => array(
					'value' => isset($form_state['values']['mobile']) ? $form_state['values']['mobile'] : '',
				),
			),
		),
		'field_tel_no' => array(
			'und' => array(
				0 => array(
					'value' => isset($form_state['values']['telephone']) ? $form_state['values']['telephone'] : '',
				),
			),
		),
		'field_fax_no' => array(
			'und' => array(
				0 => array(
					'value' => isset($form_state['values']['faxno']) ? $form_state['values']['faxno'] : '',
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