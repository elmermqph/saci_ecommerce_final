<?php

function _update_dashboardx_user(){
	return drupal_get_form('_update_dashboard_user_form');
}

function _update_dashboard_user_form($form, &$form_state){
	$username = arg(3);
	
	$acc = user_load_by_name($username);
	$account = user_load($acc->uid);
	
	$form['#prefix'] = '<div id="edit-account-userbyadmin">';
  	$form['#suffix'] = '</div>';
	$form['#id'] = 'edit-byadmin-account-form';
	
	$form['firstname'] = array(
		'#type' => 'textfield',
		'#title' => t('Firstname'),
		'#default_value' => isset($account->field_first_name['und']['0']['value']) ? $account->field_first_name['und']['0']['value'] : '',
		'#maxlength' => 100,
		'#required' => TRUE,
		'#attributes' => array('onpaste' => array('return false')),
	);
	
	$form['lastname'] = array(
		'#type' => 'textfield',
		'#title' => t('Lastname'),
		'#default_value' => isset($account->field_last_name['und']['0']['value']) ? $account->field_last_name['und']['0']['value'] : '',
		'#maxlength' => 100,
		'#required' => TRUE,
		'#attributes' => array('onpaste' => array('return false')),
	);
	
	$form['name'] = array(
		'#type' => 'textfield',
		'#title' => t('Username'),
		'#default_value' => '',
		'#maxlength' => 100,
		'#required' => TRUE,
		'#attributes' => array('onpaste' => array('return false')),
		'#description' => t('Spaces are allowed; punctuation is not allowed except for periods, hyphens, apostrophes, and underscores.'),
		'#default_value' => $account->name,
	);
	
	
	
	$form['mail'] = array(
		'#type' => 'textfield',
		'#title' => t('Email'),
		'#default_value' => '',
		'#required' => TRUE,
		'#maxlength' => 100,
		'#attributes' => array('onpaste' => array('return false')),
		'#description' => t('A valid e-mail address. All e-mails from the system will be sent to this address. The e-mail address is not made public and will only be used if you wish to receive a new password or wish to receive certain news or notifications by e-mail.'),
		'#default_value' => $account->mail,
	);
	
	$form['pass'] = array(
	  '#type' => 'password_confirm',
	  '#maxlength' => 15,
	  '#description' => t('Provide a password for the new account in both fields. Password must be at least 6 characters.'),
	);
	
	$reg_role = array(
		14 => t('Admin'),
		10 => t('Accounting'),
		12 => t('Contact Center & Operations'),
		11 => t('Sales Merchandising'),
		13 => t('Marketing'),
	);
	
	$rids = array_keys($account->roles);
	
	$form['xrole'] = array(
		'#type' => 'checkboxes',
		'#title' => t('Roles'),
		'#options' => $reg_role,
		'#default_value' => $rids,
	);
	
	$form['userid'] = array(
		'#type' => 'hidden', 
		'#value' => $account->uid,
	);
	$form['#validate'] = _editaccountbyadmin_validators();
	$form['submit'] = array(
		'#type' => 'submit', 
		'#value' => t('Update User'),
	);
	return $form;
}


function _update_dashboard_user_form_submit($form, &$form_state){
	$account = user_load($form_state['values']['userid']);
	$checked = array_filter($form_state['values']['xrole']);
	
	if(empty($form_state['values']['pass'])){
		$edit = array(
			'name' => $form_state['values']['name'],
			'mail' => $form_state['values']['mail'],
			'roles' => $checked,
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
		);
	}else{
		$edit = array(
			'name' => $form_state['values']['name'],
			'mail' => $form_state['values']['mail'],
			'roles' => $checked,
			'pass' => $form_state['values']['pass'],
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
		);
	}
	user_save($account, $edit);

	$redurl = '/user-list';
	header('Location: '.$redurl);
	exit;
}

function _update_dashboard_user_form_validators(){
	return array('_validate_account_update_username','_validate_account_update_email');
}


function _validate_account_update_username($form, &$form_state){
	$ac = user_load($form_state['values']['userid']);
	$name = $form_state['values']['name'];
	
	if($ac->name != $name){
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

function _validate_account_update_email($form, &$form_state){
	$ac = user_load($form_state['values']['userid']);
	$mail = $form_state['values']['mail'];
	
	if($ac->mail != $mail){
		if(!$form_state['values']['mail']){
			drupal_set_message('please enter email address',$type = 'error');
		}
		if(!valid_email_address($form_state['values']['mail'])){
			form_set_error('mail', t('The email address appears to be invalid.'));
		}
		else{
		 if ($error = user_validate_mail($form_state['values']['mail'])) {
			  form_set_error('mail', $error);
			}
			elseif ((bool) db_select('users')->fields('users', array('uid'))->condition('uid', $ac->uid, '<>')->condition('mail', db_like($form_state['values']['mail']), 'LIKE')->range(0, 1)->execute()->fetchField()) {
			  if ($ac->uid) {
				form_set_error('mail', t('The e-mail address %email is already taken.', array('%email' => $form_state['values']['mail'])));
			  }
			  else {
				form_set_error('mail', t('The e-mail address %email is already registered.', array('%email' => $form_state['values']['mail'])));
			  }
			}
		}
	}
}