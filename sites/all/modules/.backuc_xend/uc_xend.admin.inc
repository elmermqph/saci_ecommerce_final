<?php

/**
 * @file
 * Xend Shipping Quotes module administration menu and callbacks.
 *
 * @author dzieyzone.    <http://drupal.org/user/269019>
 */

/**
 * Xend Online Tool settings.
 *
 * Records Xend account information necessary to use the service. Allows testing
 * or production mode. Configures which Xend services are quoted to customers.
 *
 * @see uc_xend_admin_settings_validate()
 * @see uc_xend_admin_settings_submit()
 * @ingroup forms
 */
function uc_xend_admin_settings($form, &$form_state) {

  // Put fieldsets into vertical tabs
  $form['xend-settings'] = array(
    '#type' => 'vertical_tabs',
    '#attached' => array(
      'js' => array(
        'vertical-tabs' => drupal_get_path('module', 'uc_xend') . '/uc_xend.admin.js',
      ),
    ),
  );

  // Container for credential forms
  $form['uc_xend_credentials'] = array(
    '#type'          => 'fieldset',
    '#title'         => t('Credentials'),
    '#description'   => t('Authorization information.'),
    '#collapsible'   => TRUE,
    '#collapsed'     => TRUE,
    '#group'         => 'xend-settings',
  );
  // Form to set the developer key
  $form['uc_xend_credentials']['uc_xend_UserToken'] = array(
    '#type'          => 'textfield',
    '#title'         => t('myXend User Token'),
    '#default_value' => variable_get('uc_xend_UserToken', ''),
    '#description' => t('Used in ShipmentService and BookingService.'),
    '#required'      => TRUE,
  );
  $form['uc_xend_credentials']['uc_xend_DeveloperID'] = array(
    '#type'          => 'textfield',
    '#title'         => t('myXend Developer ID'),
    '#default_value' => variable_get('uc_xend_DeveloperID', ''),
    '#required'      => TRUE,
    '#description' => t('Used in RateService and TrackingService.'),
  );
  $form['uc_xend_credentials']['uc_xend_connection_type'] = array(
    '#type' => 'select',
    '#title' => t('Server mode'),
    '#description' => t('Use the Testing server while developing and configuring your site. Switch to the Production server only after you have demonstrated that transactions on the Testing server are working and you are ready to go live.'),
    '#options' => array(
		  'test' => t('Testing'),
      'live' => t('Production'),
    ),
    '#default_value' => variable_get('uc_xend_connection_type', 'test'),
  );
	$form['uc_xend_credentials']['uc_xend_createDev'] = array(
    '#type' => 'checkbox',
    '#title' => t('Include the From field on waybill package'),
    '#default_value' => variable_get('uc_xend_createDev', FALSE),
    '#description' => t('When enabled, it includes the From field provided below in creating package.'),
  );
	$form['uc_xend_credentials']['uc_xend_From_field'] = array(
    '#type'          => 'textarea',
    '#title'         => t('Xend From Information'),
    '#default_value' => variable_get('uc_xend_From_field', variable_get('site_name','')),
    '#description' => t('Only used during Production. This will be used in From field of the waybill package.'),
  );

  // Container for quote options
  $form['uc_xend_quote_options'] = array(
    '#type'          => 'fieldset',
    '#title'         => t('Quote options'),
    '#description'   => t('Preferences that affect computation of quote.'),
    '#collapsible'   => TRUE,
    '#collapsed'     => TRUE,
    '#group'         => 'xend-settings',
  );

  // Form to select package types
  $form['uc_xend_quote_options']['uc_xend_ShipmentType'] = array(
    '#type' => 'select',
    '#title' => t('Default Package Type'),
    '#default_value' => variable_get('uc_xend_ShipmentType', _uc_xend_pkg_types()),
    '#options' => _uc_xend_pkg_types(),
    '#description' => t('Type of packaging to be used.  May be overridden on a per-product basis via the product node edit form.'),
  );

  // Form to select package types
  $form['uc_xend_quote_options']['uc_xend_PurposeOfExportType'] = array(
    '#type' => 'select',
    '#title' => t('Default Purpose of Export Type'),
    '#default_value' => variable_get('uc_xend_PurposeOfExportType', 'None'),
    '#options' => _uc_xend_purpose_of_export_type(),
    '#description' => t('Type of packaging to be used.  May be overridden on a per-product basis via the product node edit form.'),
  );

  $form['uc_xend_quote_options']['uc_xend_insurance'] = array(
    '#type' => 'checkbox',
    '#title' => t('Package insurance'),
    '#default_value' => variable_get('uc_xend_insurance', TRUE),
    '#description' => t('When enabled, the quotes presented to the customer will include the cost of insurance for the full sales price of all products in the order.'),
  );
  $form['uc_xend_quote_options']['uc_xend_BookingService'] = array(
    '#type' => 'checkbox',
    '#title' => t('Integrate Booking Service'),
    '#default_value' => variable_get('uc_xend_BookingService', FALSE),
    '#description' => t('When enabled, allows to create booking for pickup.'),
  );

  return system_settings_form($form);
}