<?php 

function sm_appliance_preprocess_page(&$vars) {
  global $language, $theme_key, $theme_info, $user;
  
  if(arg(1) == 'checkout'){  
	$account = user_load($user->uid);
if(empty($account->field_first_name['und']['0']['value'])){$xfirstname = ' ';}else{$xfirstname = $account->field_first_name['und']['0']['value'];}
if(empty($account->field_last_name['und']['0']['value'])){$xlastname = ' ';}else{$xlastname = $account->field_last_name['und']['0']['value'];}
if(empty($account->field_province['und']['0']['value'])){$xprov = ' ';}else{$xprov = $account->field_province['und']['0']['value'];}
if(empty($account->field_billing_address['und']['0']['value'])){$bill_add = ' ';}else{$bill_add = $account->field_billing_address['und']['0']['value'];}
if(empty($account->field_city['und']['0']['value'])){$xcity = ' ';}else{$xcity = _x_get_minicipality($account->field_city['und']['0']['value']);}
if(empty($account->field_post_zip_code['und']['0']['value'])){$postal = ' ';}else{$postal = $account->field_post_zip_code['und']['0']['value'];}
	if(empty($account->field_modile_no['und']['0']['value'])){$phone = ' ';}else{$phone = $account->field_modile_no['und']['0']['value'];}
	  drupal_add_js('  
		(function($){
			$(document).ready(function(){
				$("#edit-panes-billing-billing-first-name").val("'.$xfirstname.'");
				$("#edit-panes-billing-billing-last-name").val("'.$xlastname.'");
				$("#edit-panes-billing-billing-street1").val("'.$bill_add.'");
				$("#edit-panes-billing-billing-city").val("'.$xcity.'");
				$("#edit-panes-billing-billing-postal-code").val("'.$postal.'");
				$("#edit-panes-billing-billing-zone").val("'.$xprov.'");
				$("#edit-panes-billing-billing-phone").val("'.$phone.'");
			});
		})(jQuery);
	  ','inline');
	  
	  drupal_add_js('
		(function($){
			$(document).ready(function(){
				$("ul.secondary").find("li").eq(1).attr("style","display: none;");
				$("div.error").attr("style","display: none;");
				$("#block-system-main").attr("style","width: 940px;");
			});
		})(jQuery);
	  ','inline');
  }
  if(arg(5) == 'mail'){
	  drupal_add_js('
		(function($){
			$(document).ready(function(){
				$("ul.secondary").find("li").eq(1).attr("style","display: none;");
				$("div.error").attr("style","display: none;");
				$("#block-system-main").attr("style","width: 940px;");
			});
		})(jQuery);
	  ','inline');
  }
  
  if((arg(0) == 'user' && arg(1) == 'register') || (arg(1) == 'user')){
	  drupal_add_library('system','ui.datepicker');
  }
  
  //edit/user/account-details
  
}

//112 ubercart zone value
//$("#edit-panes-delivery-delivery-zone").val(112);

/*


 * Implement theme_theme
 */
function sm_appliance_theme(&$existing, $type, $theme, $path) {
   $hooks['user_login_block'] = array(
		 'template' => 'user-login-block',
		 'render element' => 'form',
   );
   
//	$hooks['user_register'] = array(
//		'render element' => 'form',
//		'template' => 'user-register', 
//	  
//  );

   return $hooks;
}

/*
 * Implement theme_preprocess_user_login_block
 */
function sm_appliance_preprocess_user_login_block(&$vars) {
	$vars['form']['actions']['submit']['#value'] = t('LOGIN & CHECKOUT'); 
	$vars['name'] = render($vars['form']['name']);
	$vars['pass'] = render($vars['form']['pass']);	
	//$vars['submit'] = render($vars['form']['actions']['submit']);
	$vars['rendered'] = drupal_render_children($vars['form']);
	
}

/*
 * Altering links in user login block
 */
function sm_appliance_form_user_login_block_alter(&$form) {
	unset($form['links']);
	
	$form['actions']['request_password'] = array(
		'#markup' => l(t('Forgot password'), 'user/password', array('attributes' => array('title' => t('Request new password via e-mail.')))),
	  ); 
}


//function sm_appliance_uc_cart_checkout_review($variables) {
//	global $user;
//	$account = user_load($user->uid);
//	
//	$panes = $variables['panes'];
//	$form = $variables['form'];
//	
//	drupal_add_css(drupal_get_path('module', 'uc_cart') . '/uc_cart.css');
//	$pn = _uc_checkout_pane_list();
//  
//  	$cartitems = uc_cart_get_contents();
//    $output = '';
//	$output .= '<div class="instruction"><div id="review-instructions">' . filter_xss_admin(variable_get('uc_checkout_review_instructions', uc_get_message('review_instructions'))) . '</div></div>';
//	$output .= '<div class="edit-cart1"><a href="/cart">edit</a></div><div class="orange-arrow5">Your Shopping Cart currently contains the following: </div><div class="orange-arrow2"></div><div id="cart-form-pane"><table>';
//	$output .= '<thead><tr><th></th><th>Item</th><th>Qty.</th><th>Unit Price</th><th>Total Price</th></tr></thead>'; 
//	
//  	$subtotal = 0;
//	foreach ($cartitems as $cartitem) { 
//		$output .= '<tr>';
//		
//		$display_item = module_invoke($cartitem->module, 'uc_cart_display', $cartitem);
//		if (!empty($display_item)) {
//			//display image
//			$cartpicture = uc_product_get_picture($cartitem->nid,'uc_cart');
//			$file_path = '/sites/default/files/styles/uc_cart/public/'.$cartpicture['#item']['filename'];
//			
//			$output .= '<td class="image"><img src="'. $file_path .'" class="cartimage" /></td>';
//			$output .= '<td class="desc">'.$cartitem->title.'</td>';
//			$output .= '<td class="qty">'.$cartitem->qty.'</td>';
//			$output .= '<td class="unit_price">'.uc_currency_format($cartitem->price).'</td>';
//			$tPrice = $cartitem->qty * $cartitem->price;
//			$output .= '<td class="price">'.uc_currency_format($tPrice).'</td>';
//			$subtotal = $subtotal + $tPrice;
//		}
//		$output .= '</tr>';
//	}
//	$output .= '<tr>';
//	$output .= '<td class="subtotal" colspan="6"><span id="subtotal-title" style="float:left;">Subtotal:</span><span class="uc-price">'.uc_currency_format($subtotal).'</span></td>';
//	$output .= '</tr>';
//	$result = db_query("SELECT mid, title, label, base_rate, product_rate FROM {uc_flatrate_methods}");
//	foreach ($result as $method) {
//		$rate = $method->base_rate;
//	}
////	$output .= '<tr>';
////	$output .= '<td class="subtotal" colspan="6"><span id="subtotal-title" style="float:left;">Delivery Charge:</span><span class="uc-price">'.uc_currency_format($rate).'</span></td>';
////	$output .= '</tr>';
////	$output .= '<tr>';
////	$output .= '<td class="subtotal" colspan="6"><span id="subtotal-title" style="float:left;">Total:</span><span class="uc-price-total">'.uc_currency_format($subtotal + $rate).'</span></td>';
////	$output .= '</tr>';
//	$output .= '</table></div>';	
//	$output .= '<div>'.drupal_render($form).'</div>';
//	
//	
//  	$output .= '<div class="information-wrapper"><div class="edit-info"><a href="/cart/checkout">edit</a></div><div class="orange-arrow5"><span class="delivered-to">Items will be delivered to:  </span></div><div class="orange-arrow2"></div>';
//	$output .= '<div class="review-address">';
//	$output .= '<span class="review-info">'.$account->field_first_name['und']['0']['value'].' ' .$account->field_last_name['und']['0']['value'].'</span><br />';
//	$output .= '<span class="review-info-description">Package Recipient</span><br />';
//	$output .= '<span class="review-info">'.$account->field_street_1['und']['0']['value'].' ' .$account->field_zipcode['und']['0']['value'].'</span><br />';
//	$output .= '<span class="review-info-description">Address</span>';
//	$output .= '</div></div>';
//  return $output;
//}

/*
 * Alter form elements
 */
//*
function sm_appliance_form_element($variables) {
  $element = &$variables['element'];
  // This is also used in the installer, pre-database setup.
  $t = get_t();

  // This function is invoked as theme wrapper, but the rendered form element
  // may not necessarily have been processed by form_builder().
  $element += array(
    '#title_display' => 'before',
  );

  // Add element #id for #type 'item'.
  if (isset($element['#markup']) && !empty($element['#id'])) {
    $attributes['id'] = $element['#id'];
  }
  // Add element's #type and #name as class to aid with JS/CSS selectors.
  $attributes['class'] = array('form-item');
  if (!empty($element['#type'])) {
    $attributes['class'][] = 'form-type-' . strtr($element['#type'], '_', '-');
  }
  if (!empty($element['#name'])) {
    $attributes['class'][] = 'form-item-' . strtr($element['#name'], array(' ' => '-', '_' => '-', '[' => '-', ']' => ''));
  }
  // Add a class for disabled elements to facilitate cross-browser styling.
  if (!empty($element['#attributes']['disabled'])) {
    $attributes['class'][] = 'form-disabled';
  }
  $output = '<div' . drupal_attributes($attributes) . '>' . "\n";

  // If #title is not set, we don't display any label or required marker.
  if (!isset($element['#title'])) {
    $element['#title_display'] = 'none';
  }
  $prefix = isset($element['#field_prefix']) ? '<span class="field-prefix">' . $element['#field_prefix'] . '</span> ' : '';
  $suffix = isset($element['#field_suffix']) ? ' <span class="field-suffix">' . $element['#field_suffix'] . '</span>' : '';

  $required = !empty($element['#required']) ? theme('form_required_marker', array('element' => $element)) : '';
  
  switch ($element['#title_display']) {
    case 'before':
    case 'invisible':
      $output .= ' ' . theme('form_element_label', $variables);
      $output .= ' ' . $prefix . $element['#children'] . $suffix . ' ' . $required . "\n";
      break;

    case 'after':
      $output .= ' ' . $prefix . $element['#children'] . $suffix;
      $output .= ' ' . theme('form_element_label', $variables) . "\n";
      break;

    case 'none':
    case 'attribute':
      // Output no label and no required marker, only the children.
      $output .= ' ' . $prefix . $element['#children'] . $suffix . "\n";
      break;
  }

  if (!empty($element['#description'])) {
    $output .= '<div class="description">' . $element['#description'] . "</div>\n";
  }

  $output .= "</div>\n";

  return $output;
}


function sm_appliance_form_element_label($variables) {
  $element = $variables['element'];
  // This is also used in the installer, pre-database setup.
  $t = get_t();

  // If title and required marker are both empty, output no label.
  if ((!isset($element['#title']) || $element['#title'] === '') && empty($element['#required'])) {
    return '';
  }

  // If the element is required, a required marker is appended to the label.
  //$required = !empty($element['#required']) ? theme('form_required_marker', array('element' => $element)) : '';

  $title = filter_xss_admin($element['#title']);

  $attributes = array();
  // Style the label as class option to display inline with the element.
  if ($element['#title_display'] == 'after') {
    $attributes['class'] = 'option';
  }
  // Show label only to screen readers to avoid disruption in visual flows.
  elseif ($element['#title_display'] == 'invisible') {
    $attributes['class'] = 'element-invisible';
  }

  if (!empty($element['#id'])) {
    $attributes['for'] = $element['#id'];
  }

  // The leading whitespace helps visually separate fields from inline labels.
  return ' <label' . drupal_attributes($attributes) . '>' . $t('!title', array('!title' => $title)) . "</label>\n";
}
//*/






function sm_appliance_uc_cart_review_table($variables) {
  $items = $variables['items'];
  $show_subtotal = $variables['show_subtotal'];

  $subtotal = 0;

  // Set up table header.
  $header = array(
    array(
      'data' => t('Qty'),
      'class' => array('item'),
    ),
    array(
      'data' => t('Description'),
      'class' => array('products'),
    ),
    array(
      'data' => t('Total Price'),
      'class' => array('price'),
    ),
  );

  // Set up table rows.
  $display_items = entity_view('uc_order_product', $items, 'cart');
  if (!empty($display_items['uc_order_product'])) {
    foreach (element_children($display_items['uc_order_product']) as $key) {
      $display_item = $display_items['uc_order_product'][$key];
      if (count(element_children($display_item))) {
        $total = $display_item['#total'];
        $subtotal += $total;
        $description = $display_item['title']['#markup'];
        if (!empty($display_item['description']['#markup'])) {
          $description .= $display_item['description']['#markup'];
        }
        $qty = $display_item['qty']['#default_value'];
        $suffix = !empty($display_item['#suffixes']) ? implode(' ', $display_item['#suffixes']) : '';

        $rows[] = array(
          array(
            'data' => array(
              '#theme' => 'uc_qty',
              '#qty' => $qty,
            ),
            'class' => array('qty'),
          ),
          array(
            'data' => $description,
            'class' => array('products'),
          ),
          array(
            'data' => array(
              '#theme' => 'uc_price',
              '#price' => $total,
              '#suffix' => $suffix,
            ),
            'class' => array('price'),
          ),
        );
      }
    }
  }

  // Add the subtotal as the final row.
  if ($show_subtotal) {
    $rows[] = array(
      'data' => array(
        // One cell
        array(
          'data' => array(
            '#theme' => 'uc_price', 
            '#prefix' => '<span id="subtotal-title" class="xsubtotal">' . t('Sub-Total:') . '</span> ', 
            '#price' => $subtotal,
          ),
          // Cell attributes 
          'colspan' => 3, 
          'class' => array('subtotal'),
        ),
      ),
      // Row attributes 
      'class' => array('subtotal'),
    );
  }

  return theme('table', array('header' => $header, 'rows' => $rows, 'attributes' => array('class' => array('cart-review'))));
}

function sm_appliance_uc_price($variables) {
  $output = '<span class="uc-price x">' . sm_appliance_currency_format($variables['price']) . '</span>';
  if (!empty($variables['suffixes'])) {
    $output .= '<span class="price-suffixes">' . implode(' ', $variables['suffixes']) . '</span>';
  }
  return $output;
}

function sm_appliance_currency_format($value, $sign = NULL, $thou = NULL, $dec = NULL) {
  if ($value === NULL) {
    return NULL;
  }

  $output = '';

  $sign_after = variable_get('uc_sign_after_amount', FALSE);
  $prec = variable_get('uc_currency_prec', 2);
  if (is_null($sign)) {
    $sign = variable_get('uc_currency_sign', '$');
  }
  if (is_null($thou)) {
    $thou = variable_get('uc_currency_thou', ',');
  }
  if (is_null($dec)) {
    $dec = variable_get('uc_currency_dec', '.');
  }

  // If the value is significantly less than the minimum precision, zero it.
  if ($prec > 0 && round(abs($value), $prec + 1) < pow(10, -$prec)) {
    $value = 0;
  }

  // Force the price to a positive value and add a negative sign if necessary.
  if ($value < 0) {
    $value = abs($value);
    $output .= '-';
  }

  // Add the currency sign first if specified.
  if ($sign && !$sign_after) {
    $output .= '<span class="x-sign">'.$sign.'</span>';
  }

  // Format the number, like 1234.567 => 1,234.57
  $output .= number_format($value, $prec, $dec, $thou);

  // Add the currency sign last if specified.
  if ($sign && $sign_after) {
    $output .= $sign;
  }

  return $output;
}



function sm_appliance_uc_cart_checkout_review($variables) {
	$panes = $variables['panes'];
  $form = $variables['form'];

  drupal_add_css(drupal_get_path('module', 'uc_cart') . '/uc_cart.css');

  $output = '<div id="review-instructions">' . filter_xss_admin(variable_get('uc_checkout_review_instructions', uc_get_message('review_instructions'))) . '</div>';

  $output .= '<table class="order-review-table">';

  foreach ($panes as $title => $data) {
    $output .= '<tr class="pane-title-row">';
    
	if($title != 'Cart contents'){
	$output .= '<td colspan="3">' . $title . '</td>';
		$output .= '</tr>';
		if (is_array($data)) {
		  foreach ($data as $row) {
			if (is_array($row)) {
			  if (isset($row['border'])) {
				$border = ' class="row-border-' . $row['border'] . '"';
			  }
			  else {
				$border = '';
			  }
			  $output .= '<tr' . $border . '>';
			  $output .= '<td class="title-col">' . $row['title'] . ':</td>';
			  $output .= '<td class="data-col">' . $row['data'] . '</td>';
			  $output .= '</tr>';
			}
			else {
			  $output .= '<tr><td colspan="3">' . $row . '</td></tr>';
			}
		  }
		}
		else {
		  $output .= '<tr><td colspan="3">' . $data . '</td></tr>';
		}
	}
	
	else{
		$output .= '<td colspan="3">' . $title . '</td>';
		//$output .= '<tr><td><tr><td>Qty.</td><td>Description</td><td>Total Price</td></tr></td></tr>';
		$output .= '<tr><td width="50">Qty.</td><td>Description</td><td>Total Price</td></tr>';
		
		$cartitems = uc_cart_get_contents();
		$subtotal = 0;
		foreach ($cartitems as $cartitem) { 
			$display_item = module_invoke($cartitem->module, 'uc_cart_display', $cartitem);
			if (!empty($display_item)) {
				$output .= '<tr>';
				$output .= '<td class="qty" width="100">'.$cartitem->qty.'</td>';
				$output .= '<td class="desc">'.$cartitem->title.'</td>';
				$output .= '<td class="unit_price">'.uc_currency_format($cartitem->price).'</td>';
				$output .= '</tr>';
			}
		}
		
	}
    
  }

  $output .= '<tr class="review-button-row">';
  $output .= '<td colspan="3">' . drupal_render($form) . '</td>';
  $output .= '</tr>';

  $output .= '</table>';

  return $output;
}