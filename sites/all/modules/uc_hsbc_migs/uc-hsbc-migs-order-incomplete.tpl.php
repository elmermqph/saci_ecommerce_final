<?php
/**
 * @file
 * Template file for incomplete MIGS orders.
 *
 * Completed orders are not themeable in the payment module; you
 * need to theme the Ubercart order completion page instead.
 *
 * Template specific variables:
 *  'response_message'   - message derived from error code
 *  'error_message'      - preprocessed version of above
 *  'order_id'           - "Order #nn", derived from order_info in preprocess
 *  'order_info'         - Ubercart Order ID number
 *  'receipt_no'         - "Receipt #nn", derived from response_receiptno in preprocess
 *  'response_receiptno' - MIGS transaction receipt number
 */
 ?>
<?php
drupal_set_title('Order Error');
?>
<div class="uc-hsbc-migs-order-incomplete">
<?php if ( $response_message != 'Order already completed.') : 
	if($_GET['vpc_TxnResponseCode']==2){?>
		<style>
			h1.title{display:none;}
			h1.title.declined{display:block;margin: 0px;}
			
		</style>
		<script>
			(function($){
				$(document).ready(function(){
					var title =  $("title").html().replace("Order Complete!","Order Declined!");
					$("title").html(title);
					
				});	
			})(jQuery);
		</script>
		<h1 class="title gutter declined">Order Declined!</h1>
	<?php }?>
  <p>
     Sorry, your order (<?php print $order_id .', '. $receipt_no ?>) couldn't be processed for the following reason:
  </p>
  <ul>
    <li><strong><?php print $error_message ; ?></strong><br /></li>
  </ul>
  <!--<p>
    <small>Details of the error have been recorded in our site logs. You may contact the site administrator for more information.</small>
  </p>
  <p>
    You can try your order again with another payment method, or contact us for help.
  </p>-->
  
  <p>
  	We encountered an error while processing your payment, to verify the status of your transaction, kindly call us through:
  </p>
  <div style="margin-left: 50px; margin-top: 15px;">
  <p style="margin:0;">Phone: (+63 2) 831-8000 local3602</p>
  <p style="margin:0;">Fax: (+63 2) 834-9548</p>
  <p style="margin:0;">E-mail: inquiries@smappliance.com</p>
  </div>
  <p>
    <?php print l('View your shopping cart to attempt payment again.', 'cart') ; ?>
  </p>
<?php else : ?>
  <p>
    It looks like your order (<?php print $order_id .', '. $receipt_no ?>) has
    been completed already, but somehow you've reloaded the order
    confirmation page. This may not be a problem!
  </p>
  <p>
    You might just need to check the mailbox you used to place the
    order for further instructions, or contact the site administrator
    directly.
  </p>
  <p>
    <?php print theme('item_list', array( l('Log in or visit your account page.', 'user'), l('View your shopping cart.', 'cart'))); ?>
  </p>
<?php endif ; ?>
</div>