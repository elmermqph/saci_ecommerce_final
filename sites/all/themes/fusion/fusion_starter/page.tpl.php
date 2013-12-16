<div id="xmessage"></div>

<?php if((arg(0) == 'password') || arg(1) == '4031'): ?>
	<style type="text/css">

		#pid-content-custom-login .status,
		#pid-password div.error{
			width: 210px !important;
			height:auto;
		}
		body#pid-password,
		#pid-password #content,
		#pid-password #block-system-main{
			width: 300px !important;
			min-width: 300px !important;
		}
		
		
		#pid-content-custom-login #block-system-main{
			width: 275px;
		}
		/*#pid-update-redirect .status,
		#pid-update-redirect .error,*/
		#pid-content-custom-login .status,
		#pid-content-custom-login .error{
			margin-bottom: 5px; 
			width: 210px;
			margin: 0 !important;
			height: auto;
		}
		/*#pid-update-redirect #content-message,*/
		#pid-password #content-messages,
		#pid-content-custom-login #content-messages{
			margin: 0 !important;
		}
	</style>
<?php endif; ?>

<?php if(arg(1) == 192 || arg(1) == '4060') : ?>
	<style type="text/css">
		div.messages {
			width: 300px;
			margin-top: 250px;
			margin-left: 60px;
		}
	</style>
<?php endif ?>

<?php 
if(arg(0) == 'password') {
	drupal_set_title('Request new password');
}
?>

<?php  if(arg(0) == 'edit' && arg(2) == 'smac-details') : ?>
 <script type="text/javascript">
(function ($) {
	$(document).ready(function(){
			$('#newCloseBox').click(function(){
				var xxx = $('#card-status1 strong').length;
				if(xxx>0){
					if(confirm('Are you sure you want to exit without saving your card number?')) {
						window.location = "/user-save-success";
					}
				}else{
					window.location = "/user-save-success";
				}
				
			});
	});
})(jQuery);
</script>
	<div style="display:none;">
    	<div id="testt">
        	<p>test</p>
        </div>
    </div>
	<style type="text/css">
        #newCloseBox{
            background: url("/sites/all/modules/colorbox/styles/default/images/controls.png") no-repeat scroll -25px 0 transparent;
            bottom: 0;
            height: 25px;
            position: absolute;
            right: 0;
            text-indent: -9999px;
            width: 25px;
            cursor: pointer;
        }
    </style>
    <div id="newCloseBox"></div>
<?php  endif ?>

<?php  if(arg(0) == 'add' && arg(2) == 'smac-details') : ?>
 <script type="text/javascript">
(function ($) {
	$(document).ready(function(){
			$('#newCloseBox').click(function(){
				var xxx = $('#card-status1 strong').length;
				if(xxx>0){
					if(confirm('Are you sure you want to exit without saving your card number?')) {
						window.location = "/add-card-succes";
					}
				}else{
					window.location = "/add-card-succes";
				}
				
			});
	});
})(jQuery);
</script>
	<div style="display:none;">
    	<div id="testt">
        	<p>test</p>
        </div>
    </div>
	<style type="text/css">
        #newCloseBox{
            background: url("/sites/all/modules/colorbox/styles/default/images/controls.png") no-repeat scroll -25px 0 transparent;
            bottom: 0;
            height: 25px;
            position: absolute;
            right: 0;
            text-indent: -9999px;
            width: 25px;
            cursor: pointer;
        }
    </style>
    <div id="newCloseBox"></div>
<?php  endif ?>


<div> 
	<?php print theme('grid_block', array('content' => $messages, 'id' => 'content-messages')); ?>
	<?php print render($page['content']); ?>
</div>
