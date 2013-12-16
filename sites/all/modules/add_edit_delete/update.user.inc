<?php

function _update_user_x(){
	return drupal_get_form('_update_user_x_form');
}

function _update_user_x_form($form, &$form_state){
	$acc = user_load_by_name(arg(1));
	$account = user_load($acc->uid);
	
	
	
	$form['#id'] = 'user-register-form';
	$form['#validate'] = _create_adminvalidators();	
	$active = array(1 => t('&nbsp;&nbsp;Mr.'), 2 => t('&nbsp;&nbsp;Ms.'));
	$form['account-mark'] =array(
		'#type' => 'item',
  		'#markup' => t('Account Details'),
	);
	$form['active'] = array(
		'#type' => 'radios',
		'#title' => t('Title'),
		'#default_value' => 0,
		'#options' => $active,
	);
	$form['firstname'] = array(
		'#type' => 'textfield',
		'#title' => t('First Name'), 
		'#default_value' => '',
		'#required' => TRUE,
		'#maxlength'=> 100,
		'#attributes' => array('onpaste' => array('return false')),
	 );
	$form['lastname'] = array(
		'#type' => 'textfield',
		'#title' => t('Last Name'), 
		'#default_value' => '', 
		'#maxlength' => 100, 
		'#required' => TRUE,
		'#attributes' => array('onpaste' => array('return false')),
		
	);
	$form['bill_address'] = array(
		'#type' => 'textfield',
		'#title' => t('Address'), 
		'#default_value' => '', 
		'#maxlength' => 255, 
		'#required' => TRUE,
		'#attributes' => array('onpaste' => array('return false')),
	);
	
	
	// Country
	$countryoptions = _add_country_options();
	$form['country'] = array(
		'#type' => 'select',
		'#title' => t('Country'),
		'#options' => $countryoptions,
		'#default_value' => 608,
		'#required' => TRUE,
		'#ajax' => array(
			'callback' => '_country_callback', 
			'wrapper' => 'textfields', 
			'effect' => 'fade',
		),
	);
	
	$form['textfields'] = array(
		'#prefix' => '<div id="textfields">', 
		'#suffix' => '</div>', 
		'#type' => 'fieldset', 
	);
	
	if(isset($form_state['values']['country'])){
		$countryval = $form_state['values']['country'];
	}else{
		$countryval = 608;
	}
	
	if($countryval != 608){
		$prov_opt = isset($form_state['values']['country']) ? $form_state['values']['country'] : 0 ;
		$selected = isset($form_state['values']['state_prov']) ? $form_state['values']['state_prov'] : key($prov_opt);
		$stateprov = _add_country_options_prov($prov_opt);
		
		$form['textfields']['state_prov'] = array(
			'#type' => 'select',
			'#title' => t('Province'),
			'#options' => $stateprov,
			'#default_value' => $selected,
			'#required' => TRUE,
		);
	
		$form['textfields']['city1'] = array(
			'#type' => 'textfield',
			'#title' => t('City/Municipality'), 
			'#default_value' => NULL, 
			'#maxlength' => 100, 
			'#required' => TRUE,
			'#attributes' => array(
					'onpaste' => array('return false'),
					'class' => array('edit-city'),
					),
		);
	}else{
		$prov_opt = isset($form_state['values']['country']) ? $form_state['values']['country'] : 608;
		$stateprov = _add_country_options_prov($prov_opt);
		$selected = isset($form_state['values']['state_prov']) ? $form_state['values']['state_prov'] : key($stateprov);
		$citymunipality = array();
			$form['textfields']['state_prov'] = array(
			'#type' => 'select',
			'#title' => t('Province'),
			'#options' => $stateprov,
			'#default_value' => $selected,
			'#required' => TRUE,
			'#ajax' => array(
				'callback' => '_ajax_callback',
				'wrapper' => 'second-option',),
		);
		//options municipality
		$citymunipality = _option_muni($selected);
		$citySelected = isset($form_state['values']['city']) ? $form_state['values']['city'] : key($citymunipality);
		$form['textfields']['city'] = array(
			'#type' => 'select',
			'#title' => t('City/Municipality'),
			'#options' => $citymunipality,
			'#default_value' => $citySelected,
			'#prefix' => '<div id="second-option">',
			'#suffix' => '</div>',
			'#required' => TRUE,
		);
	}
	$form['postalcode'] = array(
		'#type' => 'textfield',
		'#title' => t('Postal/Zip Code'), 
		'#default_value' => '', 
		'#maxlength' => 4, 
		'#attributes' => array('onpaste' => array('return false')),
	);
	$form['mobile'] = array(
		'#type' => 'textfield',
		'#title' => t('Mobile No.'), 
		'#maxlength' => 11, 
		'#attributes' => array('onpaste' => array('return false')),
		'#required' => TRUE,
		
	);
	$form['telephone'] = array(
		'#type' => 'textfield',
		'#title' => t('Telephone No.'), 
		'#default_value' => '', 
		'#attributes' => array('onpaste' => array('return false')),

	);
	$form['faxno'] = array(
		'#type' => 'textfield',
		'#title' => t('Fax No.'), 
		'#default_value' => '', 
		'#attributes' => array('onpaste' => array('return false')),
	);
	 
	$form['dateob'] = array(
		'#type' => 'textfield',
		'#title' => t('Date of Birth'),
		'#size' => 10,
		'#maxlength' => 10,
		'#description' => t('MM-DD-YYYY'), 
		'#attributes' => array(
			'class' => array('pickadate'),
			'onpaste' => array('return false')
			),
		'#required' => TRUE,
	);
	
	// Account
	$form['name'] = array(
		'#type' => 'textfield',
		'#title' => t('Username'),
		'#default_value' => arg(1), 
		'#description' => t('Spaces are allowed; punctuation is not allowed except for periods, hyphens, apostrophes, and underscores.'),
		'#maxlength' => 100,
		'#attributes' => array('onpaste' => array('return false')),
		'#required' => TRUE,
	);
	$form['mail'] = array(
		'#type' => 'textfield',
		'#title' => t('E-mail address'),
		'#description' => t('A valid e-mail address. All e-mails from the system will be sent to this address. The e-mail address is not made public and will only be used if you wish to receive a new password or wish to receive certain news or notifications by e-mail.'),
		'#maxlength' => 100,
		'#attributes' => array('onpaste' => array('return false')),
		'#required' => TRUE,
		'#element_validate' => array('_custom_email_validate'),
		'#default_value' => $account->mail, 
		
	);
	
	$form['pass'] = array(
	  '#type' => 'password_confirm',
	  '#maxlength' => 15,
	  '#description' => t('Provide a password for the new account in both fields. Password must be at least 6 characters.'),
	);
	// End Account
	
	
	$form['tax-tin'] = array( 
		'#type' => 'textfield',
		'#title' => t('Tax Identification No.'),
		'#default_value' => '', 
		'#maxlength' => 12, 
		'#attributes' => array(
			'class' => array('tin-field'),
			'onpaste' => array('return false'),
			),
	);
	
	$reg_role = array(
		4 => t('registered'),
		7 => t('Catalogue Management'), 
		8 => t('Order Management'),
		9 => t('User Management	'),
		10 => t('Accounting'),
		11 => t('Merchandising'),
		12 => t('Operations'),
		13 => t('Marketing'),
		14 => t('Admin')
	);
	$form['xrole'] = array(
			'#type' => 'select',
			'#title' => t('Role'),
			'#options' => $reg_role,
		);
	
	$form['actions'] = array('#type' => 'actions');
	$form['actions']['submit'] = array(
		'#type' => 'submit', 
		'#value' => t('Create an account'),
	);
	return $form;
}

function _create_adminvalidators(){
	return array('_validate_username','_custom_email_validate');
}

function _validate_username($form, &$form_state){
	$name = $form_state['values']['name'];
	if ($error = _user_validate_name($name)) {
		form_set_error('name', $error);
	}
	else{
		if (db_query("SELECT COUNT(*) FROM {users} WHERE name = :name", array(':name' => $name))->fetchField()) {
		  form_set_error('name', t('The name '.$form_state['values']['name'].' is already taken.'));
		}
	}
}