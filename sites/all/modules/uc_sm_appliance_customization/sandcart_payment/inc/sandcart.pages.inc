<?php
define("MMS_FILE_PATH_ROOT",$_SERVER['DOCUMENT_ROOT']."/");
function sandcart_payment_print(){
	global $base_url;
	
	$domPath = $_SERVER['DOCUMENT_ROOT'] . '/' . drupal_get_path('module','mms_generator') . '/dompdf/dompdf_config.inc.php';
	require_once($domPath);
	
	$order_id = arg(2);
	
	if(!empty($order_id)){
		
		
		$qry = "SELECT COUNT(*) FROM {sandcart_bdo_complete} WHERE order_id = :order_id";
		$qry_order_id = db_query($qry,array(':order_id' => $order_id))->fetchField();
		
		if($qry_order_id > 0){
			drupal_add_css(drupal_get_path('module', 'uc_cart') . '/uc_cart.css');
			drupal_add_css(drupal_get_path('module', 'sandcart_payment') . '/css/bdo_complete.css');
			
			
			$qry2 = "SELECT order_panes FROM {sandcart_bdo_complete} WHERE order_id = :order_id";
			$order_panes = db_query($qry2,array(':order_id' => $order_id))->fetchField();
			
			$pdf_hmtl = '<html><head>';
			$pdf_hmtl .= '</head><body>';
			// $pdf_hmtl .= '<div style="margin-bottom:0.5em;"><img src="'.MMS_FILE_PATH_ROOT.'sites/all/themes/fusion/sm_appliance/images/smappliancewhite.png" /></div>';
			$pdf_hmtl .= '<div style="margin-bottom:0.5em;"><img src="'.MMS_FILE_PATH_ROOT.'sites/all/themes/fusion/sm_appliance/images/sacilogo.jpg" /></div>';
			$pdf_hmtl .= $order_panes;
			$pdf_hmtl .= '</body></html>';
			
			$pdf_name = 'Order-'.$order_id.'.pdf';
			$dompdf = new DOMPDF();
			$dompdf->load_html($pdf_hmtl);
			$dompdf->render();
			$dompdf->stream($pdf_name,array("Attachment" => 0));
			echo $pdf_html;
			
			
			//return $order_panes;
		}
	}
}