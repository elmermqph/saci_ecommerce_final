<?php

/**
 * @file
 * This file contains the Rules hooks and functions necessary to
 * make the cart related entity, conditions, events, and actions work.
 */

/**
 * Implements hook_rules_action_info().
 */
function uc_xend_rules_action_info() {
  $order_arg = array(
    'type' => 'uc_order',
    'label' => t('Order'),
  );

  $actions['uc_xend_generate_waybill'] = array(
    'label' => t('Send the order to Xend ready for shipping'),
    'group' => t('Order'),
    'parameter' => array(
      'order' => $order_arg,
    ),
  );

  return $actions;
}
