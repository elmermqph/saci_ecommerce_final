<?php

function _edituserbyadmin_add_smac(){
	return drupal_get_form("_edituserbyadmin_add_smac_form");
}

function _edituserbyadmin_remove_smac(){
	return drupal_get_form("_edituserbyadmin_remove_smac_form");
}

function _edituserbyadmin_add_smac_form($form, &$form_state){
	$username = isset($_GET['name']) ? $_GET['name'] : NULL;
	
	$acc = user_load_by_name($username);
	$account = user_load($acc->uid);

	
	$form['#id'] = '-add-smac-form';
	$userid = isset($form_state['values']['userid']) ? $form_state['values']['userid'] : $account->uid;
	$form['userid'] = array(
		'#type' => 'hidden', 
		'#value' => $userid,
	);
	
	$firtsname_unique_code = isset($form_state['values']['firtsname_unique_code']) ? $form_state['values']['firtsname_unique_code'] : gen_chars(9);
	$form['firtsname_unique_code'] = array(
		'#type' => 'textfield',
		'#default_value' => '', 
		'#maxlength' => 50, 
		'#value' => $firtsname_unique_code,
		'#maxlength' => -15,
		'#attributes' => array('style' => array('display: none;'))
	);
	
	$lastname_unique_code = isset($form_state['values']['lastname_unique_code']) ? $form_state['values']['lastname_unique_code'] : gen_chars(9);
	$form['lastname_unique_code'] = array(
		'#type' => 'textfield',
		'#default_value' => '', 
		'#maxlength' => -50, 
		'#value' => $lastname_unique_code,
		'#maxlength' => 15,
		'#attributes' => array('style' => array('display: none;'))
	);
	$dob_unique_code = isset($form_state['values']['dob_unique_code']) ? $form_state['values']['dob_unique_code'] : gen_chars(9);
	$form['dob_unique_code'] = array(
		'#type' => 'textfield',
		'#default_value' => '', 
		'#maxlength' => -50, 
		'#value' => $dob_unique_code,
		'#maxlength' => 15,
		'#attributes' => array('style' => array('display: none;'))
	);
	
	$form['smac1'] = array(
		'#type' => 'textfield',
		'#size' => 1,
		'#maxlength' => 1,
		'#attributes' => array('class' => array('smac-field'),'onpaste' => 'return false'),
	);
	$form['smac2'] = array(
		'#type' => 'textfield',
		'#size' => 1,
		'#maxlength' => 1,
		'#attributes' => array('class' => array('smac-field'),'onpaste' => 'return false'),
	);
	$form['smac3'] = array(
		'#type' => 'textfield',
		'#size' => 1,
		'#maxlength' => 1,
		'#attributes' => array('class' => array('smac-field'),'onpaste' => 'return false'),
	);
	$form['smac4'] = array(
		'#type' => 'textfield',
		'#size' => 1,
		'#maxlength' => 1,
		'#attributes' => array('class' => array('smac-field'),'onpaste' => 'return false'),
	);
	$form["markup1"] = array("#markup" => "<div id='m-one'>-</div>");
	$form['smac5'] = array(
		'#type' => 'textfield',
		'#size' => 1,
		'#maxlength' => 1,
		'#attributes' => array('class' => array('smac-field'),'onpaste' => 'return false'),
	);
	$form['smac6'] = array(
		'#type' => 'textfield',
		'#size' => 1,
		'#maxlength' => 1,
		'#attributes' => array('class' => array('smac-field'),'onpaste' => 'return false'),
	);
	$form['smac7'] = array(
		'#type' => 'textfield',
		'#size' => 1,
		'#maxlength' => 1,
		'#attributes' => array('class' => array('smac-field'),'onpaste' => 'return false'),
	);
	$form['smac8'] = array(
		'#type' => 'textfield',
		'#size' => 1,
		'#maxlength' => 1,
		'#attributes' => array('class' => array('smac-field'),'onpaste' => 'return false'),
	);
	$form["markup2"] = array("#markup" => "<div id='m-two'>-</div>");
	$form['smac9'] = array(
		'#type' => 'textfield',
		'#size' => 1,
		'#maxlength' => 1,
		'#attributes' => array('class' => array('smac-field'),'onpaste' => 'return false'),
	);
	$form['smac10'] = array(
		'#type' => 'textfield',
		'#size' => 1,
		'#maxlength' => 1,
		'#attributes' => array('class' => array('smac-field'),'onpaste' => 'return false'),
	);
	$form['smac11'] = array(
		'#type' => 'textfield',
		'#size' => 1,
		'#maxlength' => 1,
		'#attributes' => array('class' => array('smac-field'),'onpaste' => 'return false'),
	);
	$form['smac12'] = array(
		'#type' => 'textfield',
		'#size' => 1,
		'#maxlength' => 1,
		'#attributes' => array('class' => array('smac-field'),'onpaste' => 'return false'),
	);
	$form["markup3"] = array("#markup" => "<div id='m-three'>-</div>");
	$form['smac13'] = array(
		'#type' => 'textfield',
		'#size' => 1,
		'#maxlength' => 1,
		'#attributes' => array('class' => array('smac-field'),'onpaste' => 'return false'),
	);
	$form['smac14'] = array(
		'#type' => 'textfield',
		'#size' => 1,
		'#maxlength' => 1,
		'#attributes' => array('class' => array('smac-field'),'onpaste' => 'return false'),
	); 
	$form['smac15'] = array(
		'#type' => 'textfield',
		'#maxlength' => 1, 
		'#size' => 1,
		'#attributes' => array('class' => array('smac-field'),'onpaste' => 'return false'),
	);
	$form['smac16'] = array(
		'#type' => 'textfield',
		'#size' => 1,
		'#maxlength' => 1,
		'#attributes' => array('class' => array('smac-field'),'onpaste' => 'return false'),
	);
	
	$form['validate_card'] = array( 
	  '#type' => 'button',
	  '#value' => t('Validate Card'),
	  '#ajax' => array(
		  'callback' => '_edituserbyadmin_form_callback',
		  'method' => 'html',
		  'wrapper' => 'card-status1',
		  'effect' => 'fade',
		  'event' => 'click',
		),
	);
	$form['clear'] = array(
		'#type' => 'button',
		'#value' => t('Clear'),
		'#weight' => 5,
	);

	$form['wrapper'] = array(
		'#prefix' => '<div id="card-status1">',
		'#suffix' => '</div>',
		'#weight' => 6,
		'#attributes' => array('class' => array('message-status-wrapper')),
	);

	$form['submit'] = array(
		'#type' => 'submit',
		'#value' => t('Save'),
		'#weight' => 7,
	);
	
	return $form;
}

function _edituserbyadmin_add_smac_form_submit($form, &$form_state){
	$account = user_load($form_state['values']['userid']);
	$sv_smac = '';
	$test_ctr = 0;
	if(!empty($account->field_smac_1['und']['0']['value'])){
		$old_smac = $account->field_smac_1['und']['0']['value'];
	}
	else{
		$old_smac = '';
	}
	
	$query = db_select('z_add_smac', 'u');
	$query->fields('u',array('smac_no',))
		->condition('p_name', $form_state['values']['firtsname_unique_code'])
		->condition('l_name', $form_state['values']['lastname_unique_code'])
		->condition('b_day', $form_state['values']['dob_unique_code']);
	$result = $query->execute();
	
	while($record = $result->fetchAssoc()) {
		$sv_smac .= $record['smac_no'] .'xxx';
		$test_ctr += 1;
	}
	
	if(empty($sv_smac)){
		drupal_set_message("Please enter Loyalty Card.",$type = 'error');
	}else{
		$new_smac = $old_smac.$sv_smac;
		$edit = array();
		$edit = array(
			'field_smac_1' => array(
				'und' => array(
					0 => array(
						'value' => $new_smac,
					),
				),
			),
		);
		 // user_save((object) array('uid' => $form_state['values']['userid']), (array) $edit);
		 user_save($account, $edit);
		 $smac_deleted = db_delete('z_add_smac')
			  ->condition('p_name', $form_state['values']['firtsname_unique_code'])
			  ->execute();
		 drupal_set_message('SM Advantage/Prestige/BDO has been successfully added.');
		 $redurl = '/update-redirect?name=' . $account->name;
		 header('Location: '.$redurl);
		 exit;
	}
	
	
}

function _edituserbyadmin_form_callback($form, &$form_state){
	$account = user_load($form_state['values']['userid']);
	$ctr = 1;
	$smac = '';
	$card = '';
	$cardto = '';
	$test_ctr = 0;
	for($ctr; $ctr <= 16; $ctr++){
		$card .= trim($form_state['values']['smac'.$ctr]);
	}
	
	$query = db_select('z_add_smac', 'u');
	$query->fields('u',array('p_name','smac_no',))
		->condition('p_name', $form_state['values']['firtsname_unique_code'])
		->condition('l_name', $form_state['values']['lastname_unique_code'])
		->condition('b_day', $form_state['values']['dob_unique_code']);
	$result = $query->execute();
	
	while($record = $result->fetchAssoc()) {
		$card2 = '';
		$card2 = substr($record['smac_no'],0,4).'-'.substr($record['smac_no'],4,4).'-'.substr($record['smac_no'],8,4).'-'.substr($record['smac_no'],12,4);		
		$card2 = $card2 .''.substr($record['smac_no'],16) . '<br />';
		$all_smac .= $card2;
	}
	
	if(strlen($card) != 16){
		//return drupal_set_message('Please enter valid SMAC No.',$type = 'error');
		return '<br /><div style="background-image: url(/misc/message-24-error.png); background-position: left center;background-repeat: no-repeat;border: 1px solid #ED541D;color: #ED541D;height: auto;padding: 5px 0 0 29px;">Please enter valid SMAC No.</div><strong>'. $all_smac .'</strong>';
	}else{
		$test = 'test';
		$check_smac = 'test';
		$mes = '';
		$url = SM_IP.$card;
		$stringData = file_get_contents($url);
		$keyexplode = explode("&#60web&#62",$stringData);
		
		if(trim($keyexplode[0]) == 'A' || trim($keyexplode[0]) == 'P'){
			$valid_mes = '';
			if(trim($keyexplode[4]) == 'invalid card type'){
				$mes ='<br /><div style="background-image: url(/misc/message-24-error.png); background-position: left center;background-repeat: no-repeat;border: 1px solid #ED541D;color: #ED541D;height: 25px;padding: 5px 0 0 29px;">Invalid Card Type</div>';
			}
			
			if(empty($mes)){
				$key_ctr = 0;
				// ADD MORE VALIDATION HERE TO PREVENT DUPLICATE ENTRY
				$query = db_select('z_add_smac', 'u');
				$query->fields('u',array('smac_no',))
					->condition('p_name', $form_state['values']['firtsname_unique_code']);
				$result = $query->execute();
				
				while($record = $result->fetchAssoc()) {
					//$valid_mes .= 'Please enter new Loyalty card or click save<br />';
					if(substr($record['smac_no'],0,16) == $card){
						$valid_mes = 'xxx';
					}
				}
					
				if(!empty($account->field_smac_1['und']['0']['value'])){
					$newcard = $card.'('.trim($keyexplode[4]).')';
					//8880877060872769(SM Advantage)&nbsp;
					$keyexplodex = explode("xxx",$account->field_smac_1['und']['0']['value']);
					while(!empty($keyexplodex[$key_ctr])){
						if($keyexplodex[$key_ctr] == $card.'('.trim($keyexplode[4]).')'){ 
							$valid_mes .= 'You have already validated this card. Please enter another card number, or continue.<br />';
						}
						$key_ctr += 1;
					}
				}

				if($valid_mes != ''){
					if($valid_mes == 'xxx'){
						return '<br /><div style="background-image: url(/misc/message-24-error.png); background-position: left center;background-repeat: no-repeat;border: 1px solid #ED541D;color: #ED541D;height: auto;padding: 5px 0 0 29px;">You have already validated this card. Please enter another card number, or continue.</div><strong>'. $all_smac .'</strong>';
					}else{
						return '<br /><div style="background-image: url(/misc/message-24-error.png); background-position: left center;background-repeat: no-repeat;border: 1px solid #ED541D;color: #ED541D;height: auto;padding: 5px 0 0 29px;">The card is already on your account.</div><strong>'. $all_smac .'</strong>';
					}
					
				}
				else{
					$query = db_select('z_add_smac', 'u');
					$query->fields('u',array('smac_no',))
						->condition('smac_no', $card);
					$result = $query->execute();
					while($record = $result->fetchAssoc()) {
						$check_smac .= 'ing';
					}
					
					if($check_smac == 'test'){
						$smac = db_insert('z_add_smac')
						  ->fields(array('smac_no','p_name','l_name','b_day'))
						  ->values(array(
							'smac_no' => $card .'('.trim($keyexplode[4]).')',
							'p_name' => $form_state['values']['firtsname_unique_code'],
							'l_name' => $form_state['values']['lastname_unique_code'],
							'b_day' => $form_state['values']['dob_unique_code'],
						  ))
						  ->execute();
					}
					
					$query = db_select('z_add_smac', 'u');
					$query->fields('u',array('smac_no',))
						->condition('p_name', $form_state['values']['firtsname_unique_code'])
						->condition('l_name', $form_state['values']['lastname_unique_code'])
						->condition('b_day', $form_state['values']['dob_unique_code']);
					$result = $query->execute();
					
					while($record = $result->fetchAssoc()) {
						
						$newcard1 = '';
						$newcard1 .= $record['smac_no'];
						$card1 = substr($newcard1,0,4).'-'.substr($newcard1,4,4).'-'.substr($newcard1,8,4).'-'.substr($newcard1,12,4);					
						$cardto .= $card1.substr($newcard1,16) . '<br />';
						
						$test_ctr += 1;
					}
					return '<br /><strong>'.$cardto.'</strong>';
				}
			}
			else{
				//return array(drupal_set_message($mes,$type = 'error'),$check_smac);
				return $mes . $all_smac ;
			}
		}
		
		elseif(trim($keyexplode[0]) == 'B'){
			//return array(drupal_set_message('Card Block.',$type = 'error'),$all_smac);  
			return '<br /><div style="background-image: url(/misc/message-24-error.png); background-position: left center;background-repeat: no-repeat;border: 1px solid #ED541D;color: #ED541D;height: 25px;padding: 5px 0 0 29px;">Card Block.</div><strong>'. $all_smac .'</strong>';
		}
		elseif(trim($keyexplode[0]) == 'I'){
			//return array(drupal_set_message('Card Inactive.',$type = 'error'),$all_smac);
			return '<br /><div style="background-image: url(/misc/message-24-error.png); background-position: left center;background-repeat: no-repeat;border: 1px solid #ED541D;color: #ED541D;height: 25px;padding: 5px 0 0 29px;">Card already expired.</div><strong>'. $all_smac .'</strong>';
		}
		else{
			//return array(drupal_set_message('Invalid card number.',$type = 'error'),$all_smac);
			//return array(drupal_set_message('Invalid card number.',$type = 'error'),$all_smac);
			return '<br /><div style="background-image: url(/misc/message-24-error.png); background-position: left center;background-repeat: no-repeat;border: 1px solid #ED541D;color: #ED541D;height: 25px;padding: 5px 0 0 29px;">Invalid card number.</div><strong>'. $all_smac .'</strong>';
		}
		//return array(drupal_set_message($account->field_first_name['und']['0']['value']));   /misc/message-24-error.png
	}
}


function _edituserbyadmin_remove_smac_form($form, &$form_state){
	$username = isset($_GET['userid']) ? $_GET['userid'] : NULL;
	$acc = user_load_by_name($username);
	$account = user_load($acc->uid);	
	$smac = '';
	
	for($ctr = 0; $ctr <= 15; $ctr++){
		$smac .= isset($_GET['smac-'.$ctr]) ? $_GET['smac-'.$ctr] . '<br />' : NULL;
	}
	if(empty($smac)){
		$redurl = '/update-redirect?name=' . $account->name;
		header('Location: '.$redurl);
		exit;
	}
	
	$userid = isset($form_state['values']['userid']) ? $form_state['values']['userid'] : $account->uid;
	$form['userid'] = array(
		'#type' => 'hidden', 
		'#value' => $userid,
	);
	
	$form['additional'] = array(
		'#markup' => 'Are your sure you want to remove the following smac .? <br />'.$smac,
		'#prefix' => '<div id="custo-infof">',
		'#suffix' => '</div>',
		'#attributes' => array('class' => array('message-status-wrapper')),
	);
	
	$form['yesbutton'] = array(
		'#type' => 'submit',
		'#value' => 'Yes',
	);
	
	$form['No'] = array(
		'#type' => 'submit',
		'#value' => t('No'),
	);
			
	return $form;
}

function _edituserbyadmin_remove_smac_form_submit($form, &$form_state){
	$account = user_load($form_state['values']['userid']);
	
	if($form_state['values']['op'] == 'No'){
		$redurl = '/update-redirect?name=' . $account->name;
		header('Location: '.$redurl);
		exit;
		 
	}else{

		$smac = '';
		$sogood = '';
		$test = '';
		
		$xsmac1 = (!empty($account->field_smac_1['und']['0']['value']))? $account->field_smac_1['und']['0']['value']: '';
		//$keyexplode2 = explode("&nbsp;",$xsmac1);
		
		for($ctr = 0; $ctr <= 15; $ctr++){
			$smac .= isset($_GET['smac-'.$ctr]) ? $_GET['smac-'.$ctr] .'*': NULL;
		}
		$keyexplode = explode("*",$smac);

		$one = !empty($keyexplode[0]) ? $keyexplode[0].'xxx' : NULL;
		$two = !empty($keyexplode[1]) ? $keyexplode[1].'xxx' : NULL;
		$three = !empty($keyexplode[2]) ? $keyexplode[2].'xxx' : NULL;
		$four = !empty($keyexplode[3]) ? $keyexplode[3].'xxx' : NULL;
		$five = !empty($keyexplode[4]) ? $keyexplode[4].'xxx' : NULL;
		$six = !empty($keyexplode[5]) ? $keyexplode[5].'xxx' : NULL;
		$seven = !empty($keyexplode[6]) ? $keyexplode[6].'xxx' : NULL;
		$eight = !empty($keyexplode[7]) ? $keyexplode[7].'xxx' : NULL;
		$nine = !empty($keyexplode[8]) ? $keyexplode[8].'xxx' : NULL;
		$ten = !empty($keyexplode[9]) ? $keyexplode[9].'xxx' : NULL;
		

		
		$xxx = array($one, $two, $three, $four, $five, $six, $seven, $eight, $nine ,$ten); 
		$bodytag = str_replace($xxx, "", $xsmac1);
		$edit = array();
		$edit = array(
			'field_smac_1' => array(
				'und' => array(
					0 => array(
						'value' => $bodytag,
					),
				),
			),
		);
		
		user_save($account, $edit);
		$redurl = '/update-redirect?name=' . $account->name;
		header('Location: '.$redurl);
		exit;
	}
}