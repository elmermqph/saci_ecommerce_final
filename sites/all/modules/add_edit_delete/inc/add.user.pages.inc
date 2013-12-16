<?php

function _add_user(){
	return drupal_get_form('_add_userbyadmin_form');
}


function _add_userbyadmin_form($form, &$form_state){
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
	$rids = array_keys($acc->roles);
	$form['xrole'] = array(
		'#type' => 'checkboxes',
		'#title' => t('Role'),
		'#options' => $reg_role,
		'#default_value' => $rids,
	);
	
	$form['actions'] = array('#type' => 'actions');
	$form['actions']['submit'] = array(
		'#type' => 'submit', 
		'#value' => t('Create an account'),
	);
	return $form;
}


function _add_userbyadmin_form_submit($form, &$form_state){
	// drupal_set_message($form_state['values']['xrole']);
	require_once DRUPAL_ROOT . '/' . variable_get('password_inc', 'includes/password.inc');
	$notify = !empty($form_state['values']['notify']);
	
	$checked = array_filter($form_state['values']['xrole']);
	
	
	$pass = $form_state['values']['pass'];
	$account = new StdClass();
	$account->is_new = TRUE;
	$account->status = TRUE;
	
	$account->name = $form_state['values']['name'];
	$account->pass = user_hash_password($pass);
	$account->mail = $form_state['values']['mail'];
	$account->init = $form_state['values']['mail'];
	
	$account->roles = $checked;
	$account->field_smac_1[LANGUAGE_NONE][0]['value'] = $form_state['values']['validcard'];
	$account->field_first_name[LANGUAGE_NONE][0]['value'] = $form_state['values']['firstname'];
	$account->field_last_name[LANGUAGE_NONE][0]['value'] = $form_state['values']['lastname'];
	$account->field_title[LANGUAGE_NONE][0]['value'] = $form_state['values']['active'];
	$account->field_date_ob[LANGUAGE_NONE][0]['value'] = $form_state['values']['dateob'];
	$account->field_post_zip_code[LANGUAGE_NONE][0]['value'] = $form_state['values']['postalcode'];
	$account->field_tel_no[LANGUAGE_NONE][0]['value'] = $form_state['values']['telephone'];
	$account->field_modile_no[LANGUAGE_NONE][0]['value'] = $form_state['values']['mobile'];
	$account->field_fax_no[LANGUAGE_NONE][0]['value'] = $form_state['values']['faxno'];
	$account->field_tin[LANGUAGE_NONE][0]['value'] = $form_state['values']['tax-tin'];
	$account->field_billing_address[LANGUAGE_NONE][0]['value'] = $form_state['values']['bill_address'];
	 
	// field_country_list
	$account->field_country_list[LANGUAGE_NONE][0]['value'] = $form_state['values']['country'];
	$account->field_not_ph_province[LANGUAGE_NONE][0]['value']  = $form_state['values']['state_prov'];
	
	if($form_state['values']['country'] != 608){
		$account->field_not_ph_city[LANGUAGE_NONE][0]['value'] = $form_state['values']['city1'];
	}else{
		$account->field_not_ph_city[LANGUAGE_NONE][0]['value'] = $form_state['values']['city'];
	}
	$account = user_save($account);
	
	
	
	// Terminate if an error occurred during user_save().   field_post_zip_code field_date_ob  field_smac_1  state_prov
	if (!$account) {
		drupal_set_message(t("Error saving user account."), 'error');
		$form_state['redirect'] = '';
		return;
	}else{
		_user_mail_notify('register_admin_created', $account);
		drupal_set_message(t('A welcome message with further instructions has been sent to your e-mail address.'));
		header('Location: /admin/people');
		 exit;
	}
	
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