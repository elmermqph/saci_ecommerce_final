<?php

function _sandcart_quote_settings(){
	return drupal_get_form("sandcart_settings_form");
}


function sandcart_settings_form($form, &$form_state){
	$form['sandcart_saci_valuation'] = array(
		'#type' => 'textfield',
		'#title' => 'Valuation',
		'#default_value' => variable_get('sandcart_saci_valuation','1'),
		'#description' => t('Valuation'),
		'#field_suffix' => t('%'),
	);
	$form['sandcart_saci_vat'] = array(
		'#type' => 'textfield',
		'#title' => 'VAT',
		'#default_value' => variable_get('sandcart_saci_vat','12'),
		'#description' => t('Value Added Tax (VAT)'),
		'#field_suffix' => t('%')
	);
	return system_settings_form($form);
}