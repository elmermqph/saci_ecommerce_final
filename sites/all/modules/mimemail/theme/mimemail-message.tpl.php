<?php 
global $base_root;
/**
 * @file
 * Default theme implementation to format an HTML mail.
 *
 * Copy this file in your default theme folder to create a custom themed mail.
 * Rename it to mimemail-message--[key].tpl.php to override it for a
 * specific mail.
 *
 * Available variables:
 * - $recipient: The recipient of the message
 * - $subject: The message subject
 * - $body: The message body
 * - $css: Internal style sheets
 * - $key: The message identifier
 *
 * @see template_preprocess_mimemail_message()
 */
?>
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <?php if ($css): ?>
    <style type="text/css">
      <!--
      <?php print $css ?>
      -->
    </style>
    <?php endif; ?>
  </head>
  <body id="mimemail-body" <?php if ($key): print 'class="'. $key .'"'; endif; ?>>
    <div id="center">
      <div id="main">
		<?php $explode  = explode("|",$body); 
			if(isset($explode[12])){?>
			<table cellpadding="4" cellspacing="0" border="0" width="100%" style="font-family: verdana, arial, helvetica; font-size: small;">
              <tr>
                <td colspan="2" bgcolor="#006699" style="color: white;">
                  <b>Purchasing Information:</b>
                </td>
              </tr>
              <tr>
                <td colspan="2">
					<table width="100%" cellspacing="0" cellpadding="0" style="font-family: verdana, arial, helvetica; font-size: small;">
						<tr>
						  <td valign="top" width="50%">
							<b>E-mail Address:</b><br />
							   <?php echo $explode[2];?>
						  </td>
						  <td valign="top" width="50%">
							 <b>SM Advantage/Prestige/BDO:</b><br />
							  <?php 
							  if($explode[13]!=0){
								$cardnumber = trim($explode[13]);
								print substr($cardnumber,0,4)."-".substr($cardnumber,4,4)."-".substr($cardnumber,8,4)."-".substr($cardnumber,12,4);
							 }else{
								print "N/A";
							 }?>
						  </td>
						</tr>
                  </table>
				</td>
              </tr>
              <tr>
                <td colspan="2">
				<table width="100%" cellspacing="0" cellpadding="0" style="font-family: verdana, arial, helvetica; font-size: small;">
                    <tr>
                      <td valign="top" width="50%">
                        <b>Billing Address:</b><br />
                           <?php echo str_replace("&lt;br&gt;","<br />",$explode[3]);?><br />
                        <br />
                        <b>Billing Phone:</b><br />
                         <?php echo $explode[4];?><br />
                      </td>
                      <td valign="top" width="50%">
                        <b>Shipping Address:</b><br />
                        <?php echo str_replace("&lt;br&gt;","<br />",$explode[5]);?><br />
                        <br />
                        <b>Shipping Phone:</b><br />
                        <?php echo $explode[6];?><br />
                      </td>
                    </tr>
                  </table>

                </td>
              </tr>
              <tr>
                <td nowrap="nowrap">
                  <b>Order Grand Total:</b>
                </td>
                <td width="98%">
                  <b><?php print $explode[9]; ?></b>
                </td>
              </tr>
              <tr>
                <td nowrap="nowrap">
                  <b>Payment Method:</b>
                </td>
                <td width="98%">
                 <?php print $explode[1]; ?>
                </td>
              </tr>
			<?php 
			/*
				<tr>
                	<td colspan="2" bgcolor="#006699" style="color: white;">
                  		<b>Order Summary:</b>
                </td>
              </tr>
			*/
			
			?>	
            <?php 
			/*
				<tr>
                <td colspan="2" bgcolor="#EEEEEE">
                  <font color="#CC6600"><b>Shipping Details</b></font>
                </td>
              </tr>
			*/
			
			?>
         <?php 
			/*
				 <tr>
                <td colspan="2">

                  <table border="0" cellpadding="1" cellspacing="0" width="100%" style="font-family: verdana, arial, helvetica; font-size: small;">
                    <tr>
                      <td nowrap="nowrap">
                        <b>Sales Invoice #:</b>
                      </td>
                      <td width="98%">
						<?php print $explode[0]; ?>
                      </td>
                    </tr>

                    <tr>
                      <td nowrap="nowrap">
                        <b>Order Date: </b>
                      </td>
                      <td width="98%">
                          <?php print $explode[7]; ?>
                      </td>
                    </tr>
                    
                    <tr>
                      <td nowrap="nowrap">
                        <b>Estimated delivery date:</b>
                      </td>
                      <td width="98%">
						 <?php print $explode[8]; ?>
                      </td>
                    </tr>


                    <tr>
                      <td nowrap="nowrap">
                        <strong>Product(s) Sub-total:&nbsp;</strong>
                      </td>
                      <td width="98%">
							<?php print $explode[9]; ?>
                      </td>
                    </tr>

                    <tr>
                      <td>&nbsp;</td>
                      <td>------</td>
                    </tr>

                    <tr>
                      <td nowrap="nowrap">
                        <b>Transaction Amount:&nbsp;</b>
                      </td>
                      <td>
                        <b><?php print $explode[9]; ?></b>
                      </td>
                    </tr>
                  </table>
                  
                </td>
              </tr>
			
              
        

             
                
              <tr>
                <td colspan="2">
                <table width="100%">
            	<tr>
                  <td>
                  	<strong>Need to print an invoice?</strong> 
                  </td>
              </tr>
              <tr>
                  <td> 
                  	Visit <a href="<?php print $base_root."/my-account"; ?>">My Account</a> and click to view your orders. Click "View order" next to the appropriate order. You'll find a button to print an invoice on the next page
                  </td>
              </tr>
			  */
			
			?>
            </table>
			
                  <hr noshade="noshade" size="1" /><br />

                  
                  <p><b>Where can I get assistance for my online transactions?</b><br />
                  Call our toll free number: Mondays through Sundays: 9:00AM to 9:00PM
                  <br /></p>
                

               
					<p>Metro Manila: 833-8888</p>

					<p>Outside Metro Manila: 1-800-10833-8888</p>  
					<p>Or email us through: inquiries@smappliance.com</p>
                
					<p><b><a href="<?php print $base_root; ?>"><?php print $explode[11]; ?></a></b><br /></p>
                
                </td>
              </tr>
              
            </table>
			<?php }else {
				print $body;
			}?>
      </div>
    </div>
  </body>
</html>
