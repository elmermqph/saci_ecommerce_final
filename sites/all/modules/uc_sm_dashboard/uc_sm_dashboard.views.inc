<?php
function uc_sm_dashboard_views_query_alter(&$view, &$query) {
  // Only apply this where clause on the search issue project view.
  if ($view->name == 'uc_orders') {
    // Get the keyword used for the search.
		$text_query = isset($_GET['filter_by']) ? $_GET['filter_by'] : '';
		if (!empty($text_query)){
  		unset($query->where);
			$query->where[] = array(
				'conditions' => 
					array(
						array(
							'field' => 'uc_orders.billing_last_name',
							'value' => '%'.$text_query.'%',
							'operator' => 'LIKE'
						),
						array(
							'field' => 'uc_orders.billing_first_name',
							'value' => '%'.$text_query.'%',
							'operator' => 'LIKE'
						),
						array(
							'field' => 'uc_orders.order_status',
							'value' => '%'.$text_query.'%',
							'operator' => 'LIKE'
						),
					),
				'args' => array(),
				'type' => 'OR',
			);
		}
  }

  if ($view->name == 'uc_customers') {
    // Get the keyword used for the search.
		$text_query = isset($_GET['filter_by']) ? $_GET['filter_by'] : '';
		if (!empty($text_query)){
  		unset($query->where);
			$query->where[] = array(
				'conditions' => 
					array(
						array(
							'field' => 'uc_orders_users.billing_last_name',
							'value' => '%'.$text_query.'%',
							'operator' => 'LIKE'
						),
						array(
							'field' => 'uc_orders_users.billing_first_name',
							'value' => '%'.$text_query.'%',
							'operator' => 'LIKE'
						),
						array(
							'field' => 'uc_orders_users.primary_email',
							'value' => '%'.$text_query.'%',
							'operator' => 'LIKE'
						),
					),
				'args' => array(),
				'type' => 'OR',
			);
		}
  }

//*/
}

/**
 * @file
 * Views hooks and callback registries.
 */

/**
 * Implements hook_views_data().
 */
function uc_sm_dashboard_views_data() {
	  // Shipment table.
  $data['uc_shipments']['table']['group'] = t('Shipment');
  $data['uc_shipments']['table']['base'] = array(
    'field' => 'sid',
    'title' => t('Shipment'),
    'help' => t('Shipment data on your Store.'),
  );

  // Pull in user fields directly.
  $data['uc_shipments']['table']['join']['uc_orders'] = array(
    'left_field' => 'order_id',
    'field' => 'order_id',
  );

  // Tracking Number field.
  $data['uc_shipments']['tracking_number'] = array(
    'title' => t('Tracking Number'),
    'help' => t('Tracking Number of the package.'),
    'field' => array(
      'handler' => 'uc_sm_dashboard_handler_field_tracking_number',
      'click sortable' => TRUE,
    ),
    'sort' => array(
      'handler' => 'views_handler_sort',
    ),
    'filter' => array(
      'handler' => 'views_handler_filter_numeric',
    ),
    'argument' => array(
      'handler' => 'views_handler_argument_numeric',
      'name field' => 'title',
      'numeric' => TRUE,
      'validate type' => 'tracking_number',
    ),
  );

  // Expose the uid as a relationship.
  $data['uc_shipments']['order_id'] = array(
    'title' => t('Shipment'),
    'help' => t('Relate an order to the shipping details.'),
    'relationship' => array(
      'base' => 'uc_orders',
      'field' => 'order_id',
      'handler' => 'views_handler_relationship',
      'label' => t('shipment'),
    ),
  );

	return $data;
}