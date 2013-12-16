<?php 

function _delete_smac(){
	if(arg(1)){
		$sm = trim(str_replace("-","",arg(1)));
		$sm = str_replace("x"," ",$sm);
		$smacno = db_delete('z_reg_smac')
		  ->condition('smac_no', $sm)
		  ->execute();
		echo "success";
	}else{
		echo "error";
	}
}