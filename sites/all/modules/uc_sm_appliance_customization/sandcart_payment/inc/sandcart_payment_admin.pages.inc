<?php

function sandcart_admin_callback(){
	return drupal_get_form("sandcart_admin_form");
}


function sandcart_admin_form($form, &$form_state){
	$email_output = '';
	$email_output .= '<table id="bdo-howto" width="100%" border="0" style="font-size:10px; line-height: 15px;">';
	$email_output .= '<tbody style="border-top: medium none; font-size: 10px;">';
	$email_output .= '  <tr><td style="padding: 0 5px; font-size: 10px;">&nbsp;</td><td colspan="2" style="padding: 0 5px; font-size: 10px;">1. Go to any <a href="https://www.bdo.com.ph/sites/default/files/pdf/TieUpsBills-Payment_0.pdf" target="_blank">BDO Remit Subsidiary office or Remittance partner abroad offering bills payment.</a></td></tr>';
	$email_output .= '  <tr><td style="padding: 0 5px; font-size: 10px;">&nbsp;</td><td colspan="2" style="padding: 0 5px;font-size: 10px;">2. Fill out the remittance form of the BDO Remit Subsidiary office or Remittance partner (remittance form may vary per office).</td></tr>';
	$email_output .= '  <tr><td style="padding: 0 5px; font-size: 10px;">&nbsp;</td><td colspan="2" style="padding: 0 5px;"font-size: 10px;>3. Provide the following information:</td></tr>';
	$email_output .= '  <tr><td style="padding: 0 5px; font-size: 10px;">&nbsp;</td><td width="12" style="padding: 0 5px; font-size: 10px;">&nbsp;</td><td style="padding: 0 5px; font-size: 10px;" width="95%">a. Corporation: SM E-Store</td></tr>';
	$email_output .= '  <tr><td style="padding: 0 5px; font-size: 10px;">&nbsp;</td><td style="padding: 0 5px; font-size: 10px;">&nbsp;</td><td style="padding: 0 5px; font-size: 10px;">b. Product: SM Appliance</td></tr>';
	$email_output .= '  <tr><td style="padding: 0 5px; font-size: 10px;">&nbsp;</td><td style="padding: 0 5px;font-size: 10px;">&nbsp;</td><td style="padding: 0 5px;font-size: 10px;">c. Order Reference Number: :order_ref_no</td></tr>';
	$email_output .= '  <tr><td style="padding: 0 5px; font-size: 10px;">&nbsp;</td><td style="padding: 0 5px;font-size: 10px;">&nbsp;</td><td style="padding: 0 5px;font-size: 10px;">c. Order Total: :order_total</td></tr>';
	$email_output .= '  <tr><td style="padding: 0 5px; font-size: 10px;">&nbsp;</td><td colspan="2" style="padding: 0 5px;font-size: 10px;">4. Pay the exact amount in US Dollars or its foreign currency equivalent plus the remittance service fee. </td></tr>';
	$email_output .= "  <tr><td style='padding: 0 5px; font-size: 10px;'>&nbsp;</td><td colspan='2' style='padding: 0 5px;font-size: 10px;'>5. Keep the remittance receipt or invoice slip after the   transaction has been successfully processed. Before leaving, don't   forget the following:</td></tr>";
	$email_output .= '  <tr><td style="padding: 0 5px; font-size: 10px;">&nbsp;</td><td style="padding: 0 5px;font-size: 10px;">&nbsp;</td><td style="padding: 0 5px;font-size: 10px;">a. Check the remittance receipt or invoice slip to ensure all details are correct.</td></tr>';
	$email_output .= '  <tr><td style="padding: 0 5px; font-size: 10px;">&nbsp;</td><td style="padding: 0 5px;font-size: 10px;">&nbsp;</td><td style="padding: 0 5px;font-size: 10px;">b. Ensure that the amount paid is exact and correct.</td></tr>';
	$email_output .= '  <tr><td style="padding: 0 5px; font-size: 10px;">&nbsp;</td><td colspan="2" style="padding: 0 5px;font-size: 10px;">6. To check the status of your remittance: </td></tr>';
	$email_output .= '  <tr><td style="padding: 0 5px; font-size: 10px;">&nbsp;</td><td style="padding: 0 5px;font-size: 10px;">&nbsp;</td><td style="padding: 0 5px;font-size: 10px;">a. Go to the BDO website at <a href="http://www.bdo.com.ph/" target="_blank">www.bdo.com.ph</a> and then click on Remit Status Inquiry.</td></tr>';
	$email_output .= '  <tr><td style="padding: 0 5px; font-size: 10px;">&nbsp;</td><td style="padding: 0 5px;font-size: 10px;">&nbsp;</td><td style="padding: 0 5px;font-size: 10px;">b. Enter the reference number found on the remittance   receipt or invoice slip issued by the BDO Remit subsidiary office or   remittance partner.</td></tr>';
	$email_output .= '</tbody>';
	$email_output .= '</table>';
	
	$pdf_output = '';
	$pdf_output .= "<ul id='bdo-instruction' style='font-size:10px;'>";
	$pdf_output .= "<li style='list-style: none;'>1. Go to any <a href='https://www.bdo.com.ph/sites/default/files/pdf/TieUpsBills-Payment_0.pdf'>BDO Remit Subsidiary office or Remittance partner abroad offering bills payment.</a> </li>";
	$pdf_output .= "<li style='list-style: none;'>2. Fill  out the remittance form of the BDO Remit Subsidiary office or Remittance  partner (remittance form may vary per office).</li>";
	$pdf_output .= "<li style='list-style: none;'>3. Provide  the following information:";
		$pdf_output .= "<ul style='margin-bottom: 0;'>";
		$pdf_output .= "  <li style='list-style: none;'>a. Corporation:  SM E-Store</li>";
		$pdf_output .= "  <li style='list-style: none;'>b. Product:  SM Appliance</li>";
		$pdf_output .= "  <li style='list-style: none;'>c. Order Reference Number: :order_ref_no</li>";
		$pdf_output .= "  <li style='list-style: none;'>d. Order Total: :order_total</li>";
		$pdf_output .= "</ul></li>";
	$pdf_output .= "<li style='list-style: none;'>4. Pay the exact amount in US Dollars or its foreign currency  equivalent plus the remittance service fee. </li>";
	$pdf_output .= "<li style='list-style: none;'>5. Keep  the remittance receipt or invoice slip after the transaction has been  successfully processed. Before leaving, don't forget the following:";
		$pdf_output .= "<ul style='margin-bottom: 0;'>";
		$pdf_output .= "  <li style='list-style: none;'>a. Check  the remittance receipt or invoice slip to ensure all details are correct.</li>";
		$pdf_output .= "  <li style='list-style: none;'>b. Ensure  that the amount paid is exact and correct.</li>";
		$pdf_output .= "</ul></li>";
	$pdf_output .= "<li style='list-style: none;'>6. To check the status of your remittance: ";
		$pdf_output .= "  <ul style='margin-bottom: 0;'>";
		$pdf_output .= "	<li style='list-style: none;'>a. Go to the BDO website at <a href='http://www.bdo.com.ph/'>www.bdo.com.ph</a> and then click on  Remit Status Inquiry.</li>";
		$pdf_output .= "	<li style='list-style: none;'>b. Enter the reference number found on the remittance  receipt or invoice slip issued by the BDO Remit subsidiary office or remittance  partner.</li>";
		$pdf_output .= "  </ul></li>";
	$pdf_output .= "</ul>";
	
	
	$form['sandcart_bdo_instruction'] = array(
		'#type' => 'textarea',
		'#title' => t('PDF BDO Intsruction'),
		'#default_value' => variable_get('sandcart_bdo_instruction',$pdf_output),
		
	);
	$form['sandcart_email_bdo_instruction'] = array(
		'#type' => 'textarea',
		'#title' => t('Email BDO Intsruction'),
		'#default_value' => variable_get('sandcart_email_bdo_instruction',$email_output),
	);
	$form['sandcart_bdo_token'] = array(
		'#markup' => '<strong>Token</strong><br /><ul><li><i>:order_ref_no</i> = Order Reference Number</li><li><i>:order_total</i> = Order Total</li></ul>'
	);
	
	return system_settings_form($form);
}