<?php

/**
 * @file
 * Default Rules configurations.
 */

/**
 * Implements hook_default_rules_configuration().
 */
function uc_xend_default_rules_configuration() {
  // Setup a default configuration for customer checkout notifications.
  $rule = rules_reaction_rule();
  $rule->label = t('Automatic Way Bill by Xend');
  $rule->active = TRUE;
  $rule->event('uc_order_status_update')
//	  ->condition('uc_quote_condition_order_shipping_method', array(
//		  'order:select'=>'order',
//			'method'=>'xend_parcel'))
		->condition('uc_order_condition_order_state', array(
			'order:select'=>'updated-order', 
			'order_state'=>'payment_received'))
    ->action('uc_xend_generate_waybill', array(
      'order:select' => 'order',
    ));

  $configs['uc_xend_auto_waybill'] = $rule;

  return $configs;
}
