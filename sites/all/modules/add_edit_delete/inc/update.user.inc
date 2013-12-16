<?php

function _update_user_x(){
	return drupal_get_form('_update_user_x_form');
}

function _update_user_x_form($form, &$form_state){
	$acc = user_load_by_name(arg(1));
	$account = user_load($acc->uid);
	
	$form['#id'] = 'edit-byadmin-account-form';
	$form['#validate'] = _create_adminvalidators();	
	$form['account-mark'] =array(
		'#type' => 'item',
  		'#markup' => t('Account Details' ),
	);

	$form['firstname'] = array(
		'#type' => 'textfield',
		'#title' => t('First Name'), 
		'#default_value' => isset($account->field_first_name['und']['0']['value']) ? $account->field_first_name['und']['0']['value'] : '',
		'#required' => TRUE,
		'#maxlength'=> 100,
		'#attributes' => array('onpaste' => array('return false')),
	 );
	$form['lastname'] = array(
		'#type' => 'textfield',
		'#title' => t('Last Name'), 
		'#default_value' => isset($account->field_last_name['und']['0']['value']) ? $account->field_last_name['und']['0']['value'] : '',
		'#maxlength' => 100, 
		'#required' => TRUE,
		'#attributes' => array('onpaste' => array('return false')),
		
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
		'#default_value' => $account->mail, 
		
	);
	
	$form['pass'] = array(
	  '#type' => 'password_confirm',
	  '#maxlength' => 15,
	  '#description' => t('Provide a password for the new account in both fields. Password must be at least 6 characters.'),
	);
	// End Account

	
	$reg_role = array(
		14 => t('Admin'),
		10 => t('Accounting'),
		12 => t('Contact Center & Operations'),
		11 => t('Sales & Merchandising'),
		13 => t('Marketing'),
		
	);
	
	$rids = array_keys($acc->roles);
	
	$form['xrole'] = array(
		'#type' => 'checkboxes',
		'#title' => t('Role'),
		'#options' => $reg_role,
		'#default_value' => $rids,
		'#required' => TRUE,
	);
	
	$form['status'] = array(
		'#type' => 'select',
		'#title' => t('Status'),
		'#options' => array(
		  0 => t('Inactive'),
		  1 => t('Active'),
		),
		'#default_value' => $acc->status,
	);
	
	$form['userid'] = array(
		'#type' => 'hidden', 
		'#value' => $acc->uid,
	);
	
	$form['actions'] = array('#type' => 'actions');
	$form['actions']['submit'] = array(
		'#type' => 'submit', 
		'#value' => t('Update User'),
	);
	return $form;
}

function _create_adminvalidators(){
	return array('_validate_username','_custom_update_email_validate','_password_length');
}

function _validate_username($form, &$form_state){
	$acc = user_load_by_name(arg(1));
	$name = $form_state['values']['name'];
	
	if($acc->name != $name){	
		if ($error = _user_validate_name($name)) {
			form_set_error('name', $error);
		}
		else{
			if (db_query("SELECT COUNT(*) FROM {users} WHERE name = :name", array(':name' => $name))->fetchField()) {
			  form_set_error('name', t('The name '.$form_state['values']['name'].' is already taken.'));
			}
		}
	}
}
function _password_length($form, &$form_state){
	$xpassword = strlen($form_state['values']['pass']);
	if(!empty($xpassword)){
		if($xpassword < 6){
			form_set_error('pass', t('Please enter minimum of 6 characters for your password.'));
		}
	}
}
function _custom_update_email_validate($form, &$form_state){
	$acc = user_load_by_name(arg(1));
	$account = user_load($acc->uid);
	// $account = $form['#account'] = $GLOBALS['user'];
	if($account->mail != $form_state['values']['mail']){
		if(!valid_email_address($form_state['values']['mail'])){
			form_set_error('mail', t('The email address appears to be invalid.'));
		}
		else{
		 if ($error = user_validate_mail($form_state['values']['mail'])) {
			  form_set_error('mail', $error);
			}
			elseif ((bool) db_select('users')->fields('users', array('uid'))->condition('uid', $account->uid, '<>')->condition('mail', db_like($form_state['values']['mail']), 'LIKE')->range(0, 1)->execute()->fetchField()) {
			  // Format error message dependent on whether the user is logged in or not.
			  if ($account->uid) {
				form_set_error('mail', t('The e-mail address %email is already taken.', array('%email' => $form_state['values']['mail'])));
			  }
			  else {
				form_set_error('mail', t('The e-mail address %email is already registered. <a href="@password">Have you forgotten your password?</a>', array('%email' => $form_state['values']['mail'], '@password' => url('user/password'))));
			  }
			}
		}
	}
}

function _update_user_x_form_submit($form, &$form_state){
	$checked = array_filter($form_state['values']['xrole']);
	
	$acc = user_load_by_name(arg(1));
	$account = user_load($acc->uid);
	$edit = array();
	if(!empty($form_state['values']['pass'])){
		$edit = array(
			'name' => $form_state['values']['name'],
			'mail' => $form_state['values']['mail'],
			'pass' => $form_state['values']['pass'],
			'status' => $form_state['values']['status'],
 			'roles' => isset($checked) ? $checked : array(4 => 'registered'),
			'field_first_name' => array(

				'und' => array(
					0 => array(
						'value' => isset($form_state['values']['firstname']) ? $form_state['values']['firstname'] : '',
					),
				),
			),
			'field_last_name' => array(
				'und' => array(
					0 => array(
						'value' => isset($form_state['values']['lastname']) ? $form_state['values']['lastname'] : '',
					),
				),
			),

			/*'name' => $form_state['values']['uname'],*/
		);
	}else{	
		$edit = array(
			'name' => $form_state['values']['name'],
			'mail' => $form_state['values']['mail'],
			'status' => $form_state['values']['status'],
 			'roles' => isset($checked) ? $checked : array(4 => 'registered'),
			'field_first_name' => array(
				'und' => array(
					0 => array(
						'value' => isset($form_state['values']['firstname']) ? $form_state['values']['firstname'] : '',
					),
				),
			),
			'field_last_name' => array(
				'und' => array(
					0 => array(
						'value' => isset($form_state['values']['lastname']) ? $form_state['values']['lastname'] : '',
					),
				),
			),

			'name' => $form_state['values']['name'],
//			'pass' => $form_state['values']['pass'],
		);
	}
	
	// user_save((object) array('uid' => $form_state['values']['userid']), (array) $edit);
	user_save($account, $edit);
	_uc_smappliance_drupal_mail('default_from', $form_state['values']['mail'], 'Account Information Update', 'Hi '.  $form_state['values']['name'] .', <br /><br /><br />Administrator has edited your account information at SM Appliance Center Inc.');
	drupal_set_message("User updated Successfully!");
	$form_state['redirect'] = 'user-list';
}