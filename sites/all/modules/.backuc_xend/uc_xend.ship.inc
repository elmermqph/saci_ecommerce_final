<?php

/**
 * @file
 * Xend Web Services Rate / Available Services Quote.
 *
 * Shipping quote module that interfaces with the Xend Web Services API
 * to get rates for small package shipments.  Implements a SOAP Web Service
 * client.
 *
 * @author dzieyzone.    <http://drupal.org/user/269019>
 */


/**
 * Shipment creation callback.
 *
 * Confirms shipment data before requesting a shipping label.
 *
 * @param $order_id
 *   The order id for the shipment.
 * @param $package_ids
 *   Array of package ids to shipped.
 *
 * @see uc_xend_fulfill_order_validate()
 * @see uc_xend_fulfill_order_submit()
 * @ingroup forms
 */
function uc_xend_fulfill_order($form, &$form_state, $order, $package_ids) {
  $form['order_id'] = array('#type' => 'value', '#value' => $order->order_id);
  $packages = array();
  $addresses = array();

  // Container for package data
  $form['packages'] = array(
    '#type'        => 'fieldset',
    '#title'       => t('Packages'),
    '#collapsible' => TRUE,
    '#tree'        => TRUE
  );
  foreach ($package_ids as $id) {
    $package = uc_shipping_package_load($id);
    if ($package) {
//			drupal_set_message(print_r($package, true));
      foreach ($package->addresses as $address) {
        if (!in_array($address, $addresses)) {
          $addresses[] = $address;
        }
      }
      // Create list of products and get a representative product
      $product_list = array();
      $declared_value = 0;
      foreach ($package->products as $product) {
        $product_list[] = $product->qty . ' x ' . $product->model;
        $declared_value += $product->qty * $product->price;
      }

      $pkg_form = array(
        '#type' => 'fieldset',
        '#title' => t('Package !id', array('!id' => $id)),
      );
      $pkg_form['products'] = array(
        '#theme' => 'item_list',
        '#items' => $product_list,
      );
      $pkg_form['package_id'] = array(
        '#type'  => 'hidden',
        '#value' => $id,
      );
      $pkg_form['package_description'] = array(
        '#type' => 'hidden',
        '#value' => implode(', ', $product_list),
      );
      $pkg_form['pkg_type'] = array(
        '#type'          => 'select',
        '#title'         => t('Package type'),
        '#options'       => _uc_xend_pkg_types(),
        '#default_value' => $package->shipping_type,
        '#required'      => TRUE,
      );
      $pkg_form['purpose_of_export'] = array(
        '#type'          => 'select',
        '#title'         => t('Purpose of Export'),
        '#options'       => _uc_xend_purpose_of_export_type(),
        '#default_value' => variable_get('uc_xend_PurposeOfExportType', 'None'),
        '#required'      => TRUE,
      );
      $pkg_form['declared_value'] = array(
        '#type'          => 'textfield',
        '#title'         => t('Declared value'),
        '#default_value' => $declared_value,
        '#required'      => TRUE,
      );
      $pkg_form['weight'] = array(
        '#type'           => 'container',
        '#attributes'     => array('class' => array('uc-inline-form', 'clearfix')),
        '#description'    => t('Weight of the package. Default value is sum of product weights in the package.'),
        '#weight'         => 15,
      );
      $pkg_form['weight']['weight'] = array(
        '#type'          => 'textfield',
        '#title'         => t('Weight'),
        '#default_value' => isset($package->weight) ? $package->weight : 0,
        '#size'          => 10,
        '#maxlength'     => 15,
      );
      $pkg_form['weight']['units'] = array(
        '#type'          => 'select',
        '#title'         => t('Units'),
        '#options'       => array(
          'kg' => t('Kilograms'),
        ),
        '#default_value' => isset($package->weight_units) ?
                            $package->weight_units        :
                            variable_get('uc_weight_unit', 'kg'),
      );
      $pkg_form['dimensions'] = array(
        '#type'          => 'container',
        '#attributes'    => array('class' => array('uc-inline-form', 'clearfix')),
        '#description'   => t('Physical dimensions of the package.'),
        '#weight'        => 20,
      );
      $pkg_form['dimensions']['length'] = array(
        '#type'          => 'textfield',
        '#title'         => t('Length'),
        '#default_value' => isset($package->length) ? $package->length : 0,
        '#size'          => 10,
      );
      $pkg_form['dimensions']['width'] = array(
        '#type'          => 'textfield',
        '#title'         => t('Width'),
        '#default_value' => isset($package->width) ? $package->width : 0,
        '#size'          => 10,
      );
      $pkg_form['dimensions']['height'] = array(
        '#type'          => 'textfield',
        '#title'         => t('Height'),
        '#default_value' => isset($package->height) ? $package->height : 0,
        '#size'          => 10,
      );
      $pkg_form['dimensions']['units'] = array(
        '#type'          => 'select',
        '#title'         => t('Units'),
        '#options'       => array(
          'in' => t('Inches'),
          'ft' => t('Feet'),
          'cm' => t('Centimeters'),
          'mm' => t('Millimeters'),
        ),
        '#default_value' => isset($package->length_units) ?
                            $package->length_units        :
                            variable_get('uc_length_unit', 'cm'),
      );

      $form['packages'][$id] = $pkg_form;
    }
  }

  $form = uc_shipping_address_form($form, $form_state, $addresses, $order);
	$form['origin']['#access'] = FALSE;
  
  $required_fields = array(
    'delivery_email',
    'delivery_last_name',
    'delivery_street1',
    'delivery_city',
    'delivery_zone',
    'delivery_country',
    'delivery_postal_code'
  );

  foreach ( $required_fields as $field) {
    $form['destination'][$field]['#required'] = TRUE;
  }

  // Determine shipping option chosen by the customer
  $method  = $order->quote['method'];
  $methods = module_invoke_all('uc_shipping_method');
  if (isset($methods[$method])) {
    $services = $methods[$method]['quote']['accessorials'];
    $method   = $services[$order->quote['accessorials']];
  }

  // Container for shipment data
  $form['shipment'] = array(
    '#type'        => 'fieldset',
    '#title'       => t('Shipment data'),
    '#collapsible' => TRUE,
  );

  // Inform user of customer's shipping choice
  $form['shipment']['shipping_choice'] = array(
    '#type'   => 'markup',
    '#prefix' => '<div>',
    '#markup' => t('Customer selected "@method" as the shipping method and paid @rate', array('@method' => $method, '@rate' => uc_currency_format($order->quote['rate']))),
    '#suffix' => '</div>',
  );

  // Pass shipping charge paid information on to validation function so it
  // can be displayed alongside actual costs
  $form['shipment']['paid'] = array(
    '#type'  => 'value',
    '#value' => uc_currency_format($order->quote['rate']),
  );
/*
  $default_service = '';
  if ($method == 'xend') {
    $default_service = $order->quote['accessorials'];
  }
  $form['shipment']['service'] = array(
    '#type'          => 'select',
    '#title'         => t('Xend service'),
    '#options'       => _uc_xend_pkg_types(),
    '#default_value' => $default_service,
  );
//*/
  $form['actions'] = array('#type' => 'actions');
  $form['actions']['submit'] = array(
    '#type'  => 'submit',
    '#value' => t('Review shipment')
  );

  return $form;
}

/**
 * Passes final information into shipment object.
 *
 * @see uc_xend_fulfill_order()
 * @see uc_xend_confirm_shipment()
 */
function uc_xend_fulfill_order_validate($form, &$form_state) {
  $errors = form_get_errors();
  if (isset($errors)) {
    // Some required elements are missing - don't bother with making
    // a Xend API call until that gets fixed.
    return;
  }
  $_SESSION['xend'] = array();

  $origin = new stdClass();
  $destination = new stdClass();
  $packages = array();
  foreach ($form_state['values'] as $key => $value) {
    if (substr($key, 0, 7) == 'pickup_') {
      $field = substr($key, 7);
      $origin->$field = $value;
    }
    elseif (substr($key, 0, 9) == 'delivery_') {
      $field = substr($key, 9);
      $destination->$field = $value;
    }
  }

  // This is a total hack to work around changes made in the return value
  // from uc_shipping_address_form().  That function needs to be fixed, but
  // until then this should do the trick.
  $origin = $form_state['values']['pickup_address'];
  $origin->phone = $form_state['values']['phone'];
  $origin->first_name = $form_state['values']['first_name'];
  $origin->last_name = $form_state['values']['last_name'];
  $origin->company = $form_state['values']['company'];
  $origin->street1 = $form_state['values']['street1'];
  $origin->street2 = $form_state['values']['street2'];
  $origin->city = $form_state['values']['city'];
  $origin->zone = $form_state['values']['zone'];
  $origin->country = $form_state['values']['country'];
  $origin->postal_code = $form_state['values']['postal_code'];
  $origin->email = $form_state['values']['pickup_email'];

  $_SESSION['xend']['origin'] = $origin;

  if (empty($destination->company)) {
    $destination->company = $destination->first_name . ' ' . $destination->last_name;
  }
  $destination->zone_name = uc_zone_get_by_id($destination->zone);
  $destination->country_name = uc_country_get_by_id($destination->country);

  //store user comment if any
  $destination->order_comment = uc_order_comments_load($form_state['values']['order_id']);

  $_SESSION['xend']['destination'] = $destination;
  foreach ($form_state['values']['packages'] as $id => $pkg_form) {
    $package               = uc_shipping_package_load($id);
    $package->pkg_type     = $pkg_form['pkg_type'];
    $package->value        = $pkg_form['declared_value'];
    $package->weight       = $pkg_form['weight']['weight'];
    $package->weight_units = $pkg_form['weight']['units'];
    $package->length       = $pkg_form['dimensions']['length'];
    $package->width        = $pkg_form['dimensions']['width'];
    $package->height       = $pkg_form['dimensions']['height'];
    $package->length_units = $pkg_form['dimensions']['units'];
    $package->description  = $pkg_form['package_description'];
		$package->export_purpose 	= $pkg_form['purpose_of_export'];
		$package->paid = $form_state['values']['delivery_address']->quote['rate'];
    $_SESSION['xend']['packages'][$id] = $package;
  }
  $_SESSION['xend']['service'] = $package->pkg_type;//$form_state['values']['service'];
  $_SESSION['xend']['paid'] = $form_state['values']['paid'];
  $_SESSION['xend']['order_id'] = $form_state['values']['order_id'];
	$_SESSION['xend']['quote'] = $form_state['values']['delivery_address']->quote;

}

/**
 * Passes final information into shipment object.
 *
 * @see uc_xend_fulfill_order()
 * @see uc_xend_confirm_shipment()
 */
function uc_xend_fulfill_order_submit($form, &$form_state) {
  $form_state['redirect'] = 'admin/store/orders/' . $form_state['values']['order_id'] . '/shipments/xend';
}

/**
 * Last chance for user to review shipment.
 *
 * @see uc_xend_confirm_shipment_submit()
 * @see theme_uc_xend_confirm_shipment()
 * @ingroup forms
 */
function uc_xend_confirm_shipment($form, &$form_state, $order) {
	$bookrequest = variable_get('uc_xend_BookingService', FALSE);
	if ($bookrequest){
	  $form['xend']['AddressRefNo'] = array(
		  '#type' => 'select',
		  '#title' => t('Ship From'),
		  '#options' => _uc_xend_getAddress(),
		  '#default_value' => '',
	  );
	}
  $form['actions'] = array('#type' => 'actions');
  $form['actions']['submit'] = array(
    '#type' => 'submit',
    '#value' => $bookrequest?t('Request Pickup'):t('Submit Package'),
  );

  return $form;
}

/**
 * Displays final shipment information for review.
 *
 * @see uc_xend_confirm_shipment()
 * @ingroup themeable
 */
function theme_uc_xend_confirm_shipment($variables) {
  $form = $variables['form'];
	$output = '';
/*
  $output = '<div class="shipping-address"><b>' . t('Ship from:') . '</b><br />';
  $output .= uc_address_format(
    check_plain($_SESSION['xend']['origin']->first_name),
    check_plain($_SESSION['xend']['origin']->last_name),
    check_plain($_SESSION['xend']['origin']->company),
    check_plain($_SESSION['xend']['origin']->street1),
    check_plain($_SESSION['xend']['origin']->street2),
    check_plain($_SESSION['xend']['origin']->city),
    check_plain($_SESSION['xend']['origin']->zone),
    check_plain($_SESSION['xend']['origin']->postal_code),
    check_plain($_SESSION['xend']['origin']->country)
  );
  $output .= '<br />' . check_plain($_SESSION['xend']['origin']->email);
  $output .= '</div>';
*/
  $output .= '<div class="shipping-address"><b>' . t('Ship to:') . '</b><br />';
  $output .= uc_address_format(
    check_plain($_SESSION['xend']['destination']->first_name),
    check_plain($_SESSION['xend']['destination']->last_name),
    check_plain($_SESSION['xend']['destination']->company),
    check_plain($_SESSION['xend']['destination']->street1),
    check_plain($_SESSION['xend']['destination']->street2),
    check_plain($_SESSION['xend']['destination']->city),
    check_plain($_SESSION['xend']['destination']->zone),
    check_plain($_SESSION['xend']['destination']->postal_code),
    check_plain($_SESSION['xend']['destination']->country)
  );
  $output .= '<br />' . check_plain($_SESSION['xend']['destination']->email);
  $output .= '</div>';
  $output .= '<div class="shipment-data">';
  $method = uc_xend_uc_shipping_method();
	$shipMethod = $_SESSION['xend']['quote']['method'];
	$shipAccessorial = $_SESSION['xend']['quote']['accessorials'];
	$shippingMethod = isset($method[$shipMethod]['quote']['accessorials'][$shipAccessorial])? $method[$shipMethod]['quote']['accessorials'][$shipAccessorial]:$_SESSION['xend']['quote']['method'];
  $output .= '<strong>' . $shippingMethod . '</strong><br />';
  $output .= '<i>' . t('Paid') . '</i>: ' . $_SESSION['xend']['paid'] . '<br />';
  $output .= "</div>\n<br style=\"clear: both;\" />";
  $output .= drupal_render_children($form);

  return $output;
}

/**
 * Generates label and schedules pickup of the shipment.
 *
 * @see uc_xend_confirm_shipment()
 */
function uc_xend_confirm_shipment_submit($form, &$form_state) {
  // Request pickup using parameters in form.
  $order_id = $_SESSION['xend']['order_id'];
  $packages = array_keys($_SESSION['xend']['packages']);
	
  if ($response = uc_xend_shipment_request($_SESSION['xend'])){
		if (variable_get('uc_xend_BookingService', FALSE)){
			//  $request = uc_xend_request_pickup($order_id, $packages);
		}
		$shipment = new stdClass();
		$shipment->order_id = $order_id;
		$shipment->origin = clone $_SESSION['xend']['origin'];
		$shipment->destination = clone $_SESSION['xend']['destination'];
		$shipment->packages = $_SESSION['xend']['packages'];
		$shipment->shipping_method = 'xend';
		$shipment->accessorials = $_SESSION['xend']['service'];
		$shipment->carrier = t('Xend');
		
		foreach($response as $package_id=>$waybill){
			$_SESSION['xend']['packages'][$package_id]->waybillno = $waybill;
			$shipment->tracking_number = (string) $waybill;
			$package =& current($shipment->packages);
			$package->tracking_number = (string) $waybill;
			unset($package);
			next($shipment->packages);
		}
	
		uc_shipping_shipment_save($shipment);
	}
	else {
		drupal_set_message('Unable to ship package. Check your system logs or contact your administrator.');
	}

  unset($_SESSION['xend']);
  $form_state['redirect'] = 'admin/store/orders/' . $order_id . '/shipments';
}

/**
 * Constructs an XML label and pickup request.
 *
 * @param $digest
 *   Base-64 encoded shipment request.
 * @param $order_id
 *   The order id of the shipment.
 * @param $packages
 *   An array of package ids to be shipped.
 *
 * @return
 *   ShipmentAcceptRequest XML document to send to Xend.
 */
function uc_xend_request_pickup($order_id = 0, $packages = array()) {
	
  // declare variables
	$referenceNo = "";
	$exceptionFlag = false;

	// initialize SOAP client
	$wsdl = (variable_get('uc_xend_connection_type','test') == 'test') ? UC_XEND_TEST : UC_XEND_LIVE;
	$client= new SoapClient($wsdl . 'BookingService.asmx?wsdl', array());
	$funcs = $client->__getFunctions();

	// initialize SOAP header
	$headerbody = array('UserToken' => variable_get('uc_xend_UserToken',''));
	$header = new SoapHeader( $wsdl, 'AuthHeader', $headerbody);
	$client->__setSoapHeaders($header);
	// prepare parameters
	$param = array('BookingDate' => date('Y-m-d\TH\:i\:s\.u'),
	'AddressRefNo' => 1,
	'Remarks' => 'testing only');
	// execute SOAP method
	try	{
  	$result = $client->Schedule($param);
	}
	catch (SoapFault $soapfault) {
		$exceptionFlag = true;
		$exception = $soapfault->getMessage();
		preg_match_all('/: (.*?). at/s', $exception, $error, PREG_SET_ORDER);
		echo $error[0][1];
	}
	if (!$exceptionFlag) {
		$result->ScheduleResult;
		$referenceNo = $result->ScheduleResult;
	}
	echo $referenceNo;
  return $schema;
}

function _uc_xend_getAddress(){
  $addresses = array();
	// initialize SOAP client
	$wsdl = (variable_get('uc_xend_connection_type','test') == 'test') ? UC_XEND_TEST : UC_XEND_LIVE;
	$client= new SoapClient($wsdl . 'BookingService.asmx?wsdl', array());
	$funcs = $client->__getFunctions();

	// initialize SOAP header
	$headerbody = array('UserToken' => variable_get('uc_xend_UserToken',''));
	$header = new SoapHeader( $wsdl, 'AuthHeader', $headerbody);
	$client->__setSoapHeaders($header);
	// execute SOAP method
	try	{
 	  $result = $client->GetAddress();
		$objAddressList = $result->GetAddressResult->Address;
		/*
		foreach($objAddressList as $address) {
		  drupal_set_message(print_r($address,true));
			$addresses[$address->AddressRefNo] = $address->Street1 . ', '. $address->Street2;
		}
		*/
		$addresses[$objAddressList->AddressRefNo] = $objAddressList->Street1 . ', '. $objAddressList->Street2;
		return $addresses;
	}
	catch (SoapFault $soapfault) {
		$exception = $soapfault->getMessage();
		drupal_set_message('Unable to retrieve Address from Xend Web API');
		_uc_xend_log_error( array('bookingService'=>$exception) );
	}
	return array();
}