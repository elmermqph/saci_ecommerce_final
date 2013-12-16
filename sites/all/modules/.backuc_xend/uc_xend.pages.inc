<?php

/**
 * Function to retrieve token from server.
 *
 */
function uc_xend_get_token(){
	$token = 'No token generated. Apply Developer ID first';
	if (isset($_GET['t'])){
		$token = strtoupper(check_plain($_GET['t']));
	}
	$output = t('Xend API token: !token', array('!token'=> $token));
	$output .= '<p>Third-party website must first apply as a &quot;Developer&quot; account in myXend by emailing romulo.gapuz@xend.com.ph the following information:</p>';
	$output .= '<ul>';
	$output .= '<li>' . t('Business Name') . '</li>';
	$output .= '<li>' . t('Address and Contact Information') . '</li>';
	$output .= '<li>' . t('Contact Person') . '</li>';
	$output .= '<li>' . t('Website') . '</li>';
	$output .= '<li>' . t('Redirect URL (used when retrieving token)') . '</li>';
	$output .= '<p>'. t('Once registered as a third-party developer, a &quot;Developer ID&quot; will be issued for used in web service calls and retrieving of user token. Developer ID is a globally unique identifier (GUID).') . '</p>';
	return $output;
}