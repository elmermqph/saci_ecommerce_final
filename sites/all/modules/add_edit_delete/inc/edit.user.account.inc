<?php



function _edituserbyadmin_account_user(){

	return drupal_get_form('_edit_account_userbyadmin_form');

}



function _edit_account_userbyadmin_form($form, &$form_state){

	$form['#prefix'] = '<div id="edit-account-userbyadmin">';

  	$form['#suffix'] = '</div>';

	$form['#id'] = 'edit-byadmin-account-form';

	

	$form['firstname'] = array(

		'#type' => 'textfield',

		'#title' => t('First Name'),

		'#default_value' => '',

		'#maxlength' => 100,

		'#required' => TRUE,

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

	

	$form['name'] = array(

		'#type' => 'textfield',

		'#title' => t('Username'),

		'#default_value' => '',

		'#maxlength' => 100,

		'#required' => TRUE,

		'#attributes' => array('onpaste' => array('return false')),

		'#description' => t('Spaces are allowed; punctuation is not allowed except for periods, hyphens, apostrophes, and underscores.'),

	);

	

	

	

	$form['mail'] = array(

		'#type' => 'textfield',

		'#title' => t('Email'),

		'#default_value' => '',

		'#required' => TRUE,

		'#maxlength' => 100,

		'#attributes' => array('onpaste' => array('return false')),

		'#description' => t('A valid e-mail address. All e-mails from the system will be sent to this address. The e-mail address is not made public and will only be used if you wish to receive a new password or wish to receive certain news or notifications by e-mail.'),

	);

	

	$form['pass'] = array(

	  '#type' => 'password_confirm',

	  '#maxlength' => 15,

	  '#description' => t('Provide a password for the new account in both fields. Password must be at least 6 characters.'),

	  '#required' => TRUE,

	);

	

	$reg_role = array(

		14 => t('Admin'),

		10 => t('Accounting'),

		12 => t('Contact Center & Operations'),

		11 => t('Sales & Merchandising'),

		13 => t('Marketing'),

	);

	

	$rids = array_keys($account->roles);

	

	$form['xrole'] = array(

		'#type' => 'checkboxes',

		'#title' => t('Roles'),

		'#options' => $reg_role,

		'#default_value' => '',

		'#required' => TRUE,

	);

	

	$form['userid'] = array(

		'#type' => 'hidden', 

		'#value' => $account->uid,

	);

	$form['#validate'] = _editaccountbyadmin_validators();

	$form['submit'] = array(

		'#type' => 'submit', 

		'#value' => t('Save User'),

	);

	return $form;

}





function _edit_account_userbyadmin_form_submit($form, &$form_state){
	global $base_url;
	require_once DRUPAL_ROOT . '/' . variable_get('password_inc', 'includes/password.inc');

	$notify = !empty($form_state['values']['notify']);

	$checked = array_filter($form_state['values']['xrole']);

	

	$xx = implode(",",$checked);

	$varole ='';

	foreach($checked as $new_rols){

		if($new_rols == "14"){

			$varole .= "Admin ";

		}

		if($new_rols == "10"){

			$varole .= "Accounting ";

		}if($new_rols == "12"){

			$varole .= "Contact Center & Operations ";

		}

		if($new_rols == "11"){

			$varole .= "Sales Merchandising ";

		}

		if($new_rols == "13"){

			$varole .= "Marketing ";

		}

	}

	

	$pass = $form_state['values']['pass'];

	

	

	$account = new StdClass();

	$account->is_new = TRUE;

	$account->status = TRUE;

	

	$account->name = $form_state['values']['name'];

	$account->pass = user_hash_password($pass);

	$account->mail = $form_state['values']['mail'];

	$account->init = $form_state['values']['mail'];

	$account->roles = $checked;

	

	$account->field_first_name[LANGUAGE_NONE][0]['value'] = $form_state['values']['firstname'];

	$account->field_last_name[LANGUAGE_NONE][0]['value'] = $form_state['values']['lastname'];	

	

	

	$account = user_save($account);
	_uc_smappliance_drupal_mail('default_from', $form_state['values']['mail'], 'Your account has been created to SACI Dashboard', 'Dear '.  $form_state['values']['firstname'] .', <br /><br /><br />You have been assigned the '.$varole.'  role. <br /><br />To login, go to '.$base_url.'/dashboard/login using the credentials below:<br /><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Username: '.$form_state['values']['name'].'<br /><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Password: ' .$pass . '<br /><br /><br />Thank you! <br /> <br />SM Appliance Center Administrator');

		

		

	drupal_set_message("A welcome message with further instructions has been sent to ".$form_state['values']['mail'].".");

	$redurl = '/user-list';

	header('Location: '.$redurl);

	exit;

}



function _editaccountbyadmin_validators(){

	return array('_validate_account_usernamex','_validate_account_emailx');

}





function _validate_account_usernamex($form, &$form_state){

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



function _validate_account_emailx($form, &$form_state){

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