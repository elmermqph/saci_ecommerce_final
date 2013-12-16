<div id="registration_form">
    <div class="field">
    	<?php
		print drupal_render($form['form_build_id']);
		print drupal_render($form['form_id']);
		?>
        <h3 class="account-details">New Customer</h3>
        
        <?php //prints the custom field ?>
        <?php print drupal_render($form['field_title']); ?>
        <?php print drupal_render($form['field_first_name']); ?>
        <?php print drupal_render($form['field_last_name']); ?>
        <?php print drupal_render($form['field_street_1']); ?>
        <?php print drupal_render($form['field_street_2']); ?>
        <?php print drupal_render($form['field_city']); ?>
        <?php print drupal_render($form['field_state_prov']); ?>
        <?php print drupal_render($form['field_zipcode']); ?>
        <?php print drupal_render($form['field_country']); ?>
        <?php print drupal_render($form['field_phone']); ?>
        <?php print drupal_render($form['field_fax']); ?>
        <?php print drupal_render($form['field_birthdate']); ?>
        
      <h3 class="login-details">Login Details:</h3>
        <?php print drupal_render($form['account']['mail']); // prints the mail field ?>
		<?php print drupal_render($form['account']['name']); // prints the username field ?>
        <?php print drupal_render($form['account']['pass']); // prints the password fields ?>
	 <?php
                //$form['captcha']['captcha_widgets']['captcha_response']['#title']       = '';
                //$form['captcha']['captcha_widgets']['captcha_response']['#description'] = '';
                print drupal_render($form['captcha']);
              ?>
        
	  <h3 class="login-details">Other Information:</h3>
      <?php print drupal_render($form['field_tin']); ?>
      
      <?php print drupal_render($form['actions']['submit']); // print the submit button ?>
    </div> 
  
</div>


