<?php

/**
 * @file
 * Views hooks and callback registries.
 */

/**
 * Implements hook_views_data().
 */
function uc_hsbc_migs_views_data() {

  $data['uc_hsbc_migs']['table'] = array(
    'group' => t('HSBC Payment'),
		'base' => array(
      'field' => 'hsbc_migs_id',
			'title' => t('HSBC Migs ID'),
			'help' => t('HSBC MIGS data on your Store.'),
		),
		'join' => array(
      'uc_orders' => array(
        'left_field' => 'order_id',
				'field' => 'order_id',
			),
  	),
  );

	//hsbc_migs_sid
  $data['uc_hsbc_migs']['hsbc_migs_sid'] = array(
    'title' => t('Status ID'),
    'help' => t('The HSBC MIGS Status ID.'),
    'field' => array(
      'handler' => 'uc_hsbc_migs_handler_field_status_id',
      'click sortable' => TRUE,
    ),
    'sort' => array(
      'handler' => 'views_handler_sort',
    ),
    'filter' => array(
      'handler' => 'views_handler_filter_numeric',
    ),
		'relationship' => array(
      'base' => 'uc_hsbc_migs',
      'field' => 'hsbc_migs_sid',
      'handler' => 'views_handler_relationship',
      'label' => t('Status ID'),
    ),
  );
	//trans_no
  $data['uc_hsbc_migs']['trans_no'] = array(
    'title' => t('MIGS Transaction Number'),
    'help' => t('The HSBC MIGS Trans No.'),
    'field' => array(
      'handler' => 'uc_hsbc_migs_handler_field_status_id',
      'click sortable' => TRUE,
    ),
    'sort' => array(
      'handler' => 'views_handler_sort',
    ),
    'filter' => array(
      'handler' => 'views_handler_filter_string',
    ),
  );
	//receipt_no
  $data['uc_hsbc_migs']['receipt_no'] = array(
    'title' => t('MIGS Receipt Number'),
    'help' => t('The HSBC MIGS Receipt No.'),
    'field' => array(
      'handler' => 'uc_hsbc_migs_handler_field_status_id',
      'click sortable' => TRUE,
    ),
    'sort' => array(
      'handler' => 'views_handler_sort',
    ),
    'filter' => array(
      'handler' => 'views_handler_filter_string',
    ),
  );
	//authorized_no
  $data['uc_hsbc_migs']['authorized_no'] = array(
    'title' => t('MIGS Authorized No'),
    'help' => t('The HSBC MIGS Authorized No.'),
    'field' => array(
      'handler' => 'uc_hsbc_migs_handler_field_status_id',
      'click sortable' => TRUE,
    ),
    'sort' => array(
      'handler' => 'views_handler_sort',
    ),
    'filter' => array(
      'handler' => 'views_handler_filter_string',
    ),
  );
	

	$data['uc_hsbc_migs_statuses'] = array(
    'table' => array(
      'group' => t('HSBC Payment'),
		  'base' => array(
			  'field' => 'hsbc_migs_sid',
			  'title' => t('HSBC Migs Status Description'),
			  'help' => t('HSBC MIGS data on your Store.'),
			),
			'join' => array(
			  'uc_hsbc_migs' => array(
          'left_field' => 'hsbc_migs_sid',
					'field' => 'hsbc_migs_sid',
				),
			),
	  ),
  );

	//title
  $data['uc_hsbc_migs_statuses']['title'] = array(
    'title' => t('Status Title'),
    'help' => t('The HSBC MIGS Status Title.'),
    'field' => array(
      'handler' => 'uc_hsbc_migs_handler_field_status_title',
      'click sortable' => TRUE,
    ),
    'sort' => array(
      'handler' => 'views_handler_sort',
    ),
    'filter' => array(
      'handler' => 'views_handler_filter_string',
    ),
  );

	return $data;
}