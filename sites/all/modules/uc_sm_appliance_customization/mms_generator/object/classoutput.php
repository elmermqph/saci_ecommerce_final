<?php 
class MMS_CLASS
{
	private $suffixvalue = "34";
	
	public function file_save_to_server($fileset){
		
		foreach ($fileset as $key => $arrayfieldcron):
			if($key=="tkstore"){
				$arraycheck = $this->tk_store_array($arrayfieldcron);
				$this->tk_store_array_db($arraycheck[$key]);
			}else if($key=="qtyupdate"){
				$arraycheck = $this->sku_update_array($arrayfieldcron);
				$this->sku_update_array_db($arraycheck[$key]);
			}else{
				foreach($arrayfieldcron as $arraymainvalue){
					$arraycheck = $this->file_to_array($arraymainvalue);
					//if($key=="itemprice")
						//return $arraycheck;
					foreach($arraycheck[$key] as $value):
						$this->file_to_array_db($key,$value);
					endforeach;
				}		
			}
		endforeach;
		return TRUE;
	}
	
	public function zip_file_compressor($files = array(),$destination = '',$overwrite = false,$filepath) {
		/* creates a compressed zip file */
		//if the zip file already exists and overwrite is false, return false
		if(file_exists($destination) && !$overwrite) { return false; }
			//vars
			$valid_files = array();
			//if files were passed in...
			if(is_array($files)) {
				//cycle through each file
				foreach($files as $file) {
					//make sure the file exists
					if(file_exists($file)) {
						$valid_files[] = $file;
					}
				}
			}
			//if we have good files...
			if(count($valid_files)) {
				//create the archive
				$zip = new ZipArchive();
				if($zip->open($destination,$overwrite ? ZIPARCHIVE::OVERWRITE : ZIPARCHIVE::CREATE) !== true) {
				return false;
			}
			//add the files
			foreach($valid_files as $file) {
				$newfile = str_replace($filepath,"",$file);
				$zip->addFile($file,$newfile);
			}
			//debug
			//echo 'The zip archive contains ',$zip->numFiles,' files with a status of ',$zip->status;
			//close the zip -- done!
			$zip->close();
			//check to make sure the file exists
			return file_exists($destination);
		}else{
			return false;
		}
	}
	
	
	public function convert_xml(){
		$filepath =  MMS_FILE_PATH_ROOT;
		$tempstorage = "sites/default/files/mms_path";
		$ziptempstorage = "sites/default/files/temp_xml";
		if ($handle = opendir($filepath.$ziptempstorage)) {
			while (false !== ($file = readdir($handle))) { 
				if ($file != "." && $file != "..") {
					if(file_exists($filepath.$ziptempstorage."/".$file)){
						if(strpos($file,".crc")>0){
							unlink($filepath.$ziptempstorage."/".$file);
						}else{
							$str = substr($file,0,2);
							if($str=="ID" || $str=="IF"){
								$filesystemcheck['item']['folderpath'][] = $filepath.$ziptempstorage."/".$file;
								$filesystemcheck['ean']['folderpath'][] = $filepath.$ziptempstorage."/".$file;
								$filesystemcheck['item']['filename'][] = $file;
								$filesystemcheck['ean']['filename'][] = $file;
							}else if($str=="UF"){
								$filesystemcheck['itemprice']['folderpath'][] = $filepath.$ziptempstorage."/".$file;
								$filesystemcheck['itemdescr']['folderpath'][] = $filepath.$ziptempstorage."/".$file;
								$filesystemcheck['itemprice']['filename'][] = $file;
								$filesystemcheck['itemdescr']['filename'][] = $file;
							}
						}
					}else{
						return  MMS_FILE_PATH_ROOT."sites/default/files/mms_path/";
					}
				}
			}
		}
		closedir($handle); 
		$arraynatureorder = array('item','ean','itemprice','itemdescr','tkstore','qtyupdate');
		foreach($arraynatureorder as $value){
			if(isset($filesystemcheck[$value])){
				$ordervalue[$value] = true;
				if(isset($filesystemcheck[$value]['filename'])){
					foreach($filesystemcheck[$value]['filename'] as $keycount => $rootfoldervalue){
						$filenamemodifier[$value][$rootfoldervalue]['content'] = $this->convert_file_from_array($value,$filesystemcheck[$value]['folderpath'][$keycount]);
						$filenamemodifier[$value][$rootfoldervalue]['folderpath'] = $filesystemcheck[$value]['folderpath'][$keycount];
						
					}
				}	
			}
		}
		foreach($filenamemodifier as $labelvalue){
			foreach($labelvalue as $key => $value){
				if(isset($modifybody[$key]['content']))
					$modifybody[$key]['content'] .= $value['content'];
				else
					$modifybody[$key]['content'] = $value['content'];
				$modifybody[$key]['filepath'] = $value['folderpath'];
			}	
		}
		$header = '<?xml version="1.0" encoding="UTF-8" standalone="no"?><!DOCTYPE host SYSTEM "host.dtd"><host date="2012-07-24" time="14:32">';
		$footer = '</host>';
		
		foreach ($modifybody as $key => $value){
			if(file_exists ($filepath.$tempstorage."/".$key))
				unlink($filepath.$tempstorage."/".$key);
			$handle = fopen($filepath.$tempstorage."/".$key, "a");
			if(fwrite($handle,$header.$value['content'].$footer)){
				unlink($value['filepath']);
				fclose($handle);
			}
		}
		
		return "TRUE";	
	}
	
	private function convert_file_from_array($keycheck,$arraycheck){
		$return = file_get_contents($arraycheck);
		switch($keycheck){
			case "item":
				$start = strpos($return,"<items>");	
				$end = (strpos(substr($return ,$start),"</items>")+8);	
			break;
			case "ean":
				$start = strpos($return,"<barcodes>");	
				$end = (strpos(substr($return ,$start),"</barcodes>")+11);	
			break;
			case "itemprice":
				$start = strpos($return,"<prices>");	
				$end = (strpos(substr($return ,$start),"</prices>")+9);	
			break;
			case "itemdescr":
				$start = strpos($return,"<descriptions>");	
				$end = (strpos(substr($return ,$start),"</descriptions>")+15);	
			break;
			
		}
		if($start>0){
			$arrayremove = array('<itemimages','operimagecount="1"','operimagestart="250"','','custimagestart="250"','custimagecount="1"/>');
			return  str_replace($arrayremove,'',substr($return ,$start,$end));
			
		}else 
			return '';
	}

	
	
	/*
		CONVERT XML TO ARRAY 
		file ID0370423________.001,IF0370423________.001, and UF0370423________.001
		getting this are the ff tag automatically converting to array
			item = list of item
			ean = list of barcode
			itemprice = update price
	*/
	private function file_to_array($fileset){
		$xml = simplexml_load_file($fileset);
		foreach($xml->children() as $firstparent):
			$keybasedept = "";
			foreach($firstparent as $secondkey => $secondparent):
				if($keybasedept!=$secondkey){
					$seconparentcount = 0;
					$keybasedept=$secondkey;
				}else{
					$seconparentcount++;
				}
				switch ($secondkey) {
					case "item":
						$attributedept = $secondparent->attributes();
						$adept[$secondkey][$seconparentcount] = array('intcode' => (string)$attributedept['intcode']);
						/*
							,'storeid' => 	$attributedept['storeid']->__toString(),'itemtype' => $attributedept['itemtype']->__toString(),'additemtype' => $attributedept['additemtype']->__toString(),'alpha_code' => $attributedept['alpha_code']->__toString(),'supplier_code' => $attributedept['supplier_code']->__toString()
						
						*/
						foreach($secondparent as $thirdkey => $parentvalue):
							switch ($thirdkey) {
								case "price":
									$adept[$secondkey][$seconparentcount] = array_merge($adept[$secondkey][$seconparentcount], array('hostprice'=>((string)$parentvalue->hostprice/100)));
								break;
								case "descritm":
									$adept[$secondkey][$seconparentcount] = array_merge($adept[$secondkey][$seconparentcount], array('descr1itm'=>(string)$parentvalue->descr1itm));
								break;
								
								/*
								case "descritm":
									$adept[$secondkey][$seconparentcount] = array_merge($adept[$secondkey][$seconparentcount], array('descr1itm'=>(string)$parentvalue->descr1itm,'extdescr1'=>(string)$parentvalue->extdescr1));
								break;
								case "deptnumb":
									$adept[$secondkey][$seconparentcount] = array_merge($adept[$secondkey][$seconparentcount], array('deptnumb'=>(string)$parentvalue));
								break;
								case "descritm":
									$adept[$secondkey][$seconparentcount] = array_merge($adept[$secondkey][$seconparentcount], array('descr1itm'=>(string)$parentvalue->descr1itm,'extdescr1'=>(string)$parentvalue->extdescr1));
								break;
								case "vatitm":
									$adept[$secondkey][$seconparentcount] = array_merge($adept[$secondkey][$seconparentcount], array('vatitm'=>(string)$parentvalue));
								break;
								case "optionitm":
									$attributedept = $parentvalue->attributes();
									$adept[$secondkey][$seconparentcount] = array_merge($adept[$secondkey][$seconparentcount],array('priceovr'=>(string)$attributedept['priceovr']));
								break;
								
								case "promofilter1":
									$adept[$secondkey][$seconparentcount] = array_merge($adept[$secondkey][$seconparentcount], array('promofilter1'=>(string)$parentvalue));
								break;
								case "promofilter2":
									$adept[$secondkey][$seconparentcount] = array_merge($adept[$secondkey][$seconparentcount], array('promofilter2'=>(string)$parentvalue));
								break;
								case "promofilter3":
									$adept[$secondkey][$seconparentcount] = array_merge($adept[$secondkey][$seconparentcount], array('promofilter3'=>(string)$parentvalue));
								break;
								*/
							}
						endforeach;
					break;
					case "ean":
						$attributedept = $secondparent->attributes();
						$adept[$secondkey][$seconparentcount] = array('barcode' => (string)$attributedept['barcode']);
						/*
							,'storeid' => $attributedept['storeid']->__toString(),'type' => $attributedept['type']->__toString(),'scale' => $attributedept['scale']->__toString()
						*/
						foreach($secondparent as $thirdkey => $parentvalue):
							switch ($thirdkey) {
								case "intcode":
									$adept[$secondkey][$seconparentcount] = array_merge($adept[$secondkey][$seconparentcount], array('intcode'=>(string)$parentvalue));
								break;
								/*
									case "package":
										$adept[$secondkey][$seconparentcount] = array_merge($adept[$secondkey][$seconparentcount], array('type'=>(string)$parentvalue->type,'trayqty'=>(string)$parentvalue->trayqty,'qty'=>(string)$parentvalue->qty,'price'=>(string)$parentvalue->price));
									break;
								*/
							}
						endforeach;
					break;
					case "itemprice":
						$attributedept = $secondparent->attributes();
						$adept[$secondkey][$seconparentcount] = array('intcode' => (string)$attributedept['intcode']);
						foreach($secondparent as $thirdkey => $parentvalue):
							if($thirdkey == "priceamount"){
								$adept[$secondkey][$seconparentcount] = array_merge($adept[$secondkey][$seconparentcount], array($thirdkey=>((string)$parentvalue)));
							}else if($thirdkey == "activedate"){
								$adept[$secondkey][$seconparentcount] = array_merge($adept[$secondkey][$seconparentcount], array($thirdkey=>((string)$parentvalue)));
							}else if($thirdkey == "validdateto"){
								$adept[$secondkey][$seconparentcount] = array_merge($adept[$secondkey][$seconparentcount], array($thirdkey=>((string)$parentvalue)));
							}
						endforeach;
					break;
					case "itemdescr":
						$attributedept = $secondparent->attributes();
						$adept[$secondkey][$seconparentcount] = array('intcode' => (string)$attributedept['intcode']);
						foreach($secondparent as $thirdkey => $parentvalue):
							if($thirdkey == "itemdescr1"){
								$adept[$secondkey][$seconparentcount] = array_merge($adept[$secondkey][$seconparentcount], array($thirdkey=>(string)$parentvalue));
							}
						endforeach;
					break;
				}
				
			endforeach;
		endforeach;
		return $adept;
	}
	/*--------------------------------------------------------------------------------*/
	/*
		array convert to database
		getting array in this function file_to_array() saving to datebase 
	*/
	private function file_to_array_db($key,$value){
		$object = db_query("SELECT nid FROM uc_products WHERE model = :model",array(':model' => $value['intcode']));
		$record = $object ->fetchObject();  
		switch ($key) {
			case "item":
				if(isset($record->nid)):
					$newNode = node_load($record->nid);
					$newNode->nid = $record->nid;	
					$newNode->model = $value['intcode'];
					$newNode->title = $value['descr1itm'];
					$newNode->sell_price = $value['hostprice'];
					$newNode->changed = strtotime("now");
				else:
					$newNode = (object) NULL;
					$newNode->created = strtotime("now");
					$newNode->model = $value['intcode'];
					$newNode->title = $value['descr1itm'];
					$newNode->sell_price = $value['hostprice']; 
					$newNode->status = 0;
					$newNode->list_price = 0;
					$newNode->cost = 0;
					$newNode->weight = 0;
					$newNode->weight_units = 0;
					$newNode->length = 0;
					$newNode->width = 0;
					$newNode->height = 0;
					$newNode->length_units = 0;
					$newNode->pkg_qty = 1;
					$newNode->default_qty  = 1;
					$newNode->shippable  = 0;
					$newNode->type = 'product';
					$newNode->changed = strtotime("now");
					$newNode->uid = 1;
					$newNode->comment = 0;
					$newNode->sticky = 0;
					$newNode->language = 'und';
				endif;
				if(node_save($newNode)){
					unset($newNode);
					return TRUE;
				}
			break;
			case "ean":
				$newNode = node_load($record->nid);
				$newNode->changed = strtotime("now");
				$newNode->field_barcode['und'][0]['value'] = $value['barcode'];
				if(node_save($newNode)){
					unset($newNode);
					return TRUE;
				}
			break;
			case "itemprice":
				if(isset($record->nid)){
					$priceupdateinsert = db_insert('z_price_update')
						->fields(
							array(
								'intcode',
								'activedate',
								'validdateto',
								'price',
								'timesavenow',
								'nodeid'
							)
						)
						->values(
							array(
								'intcode' => $value['intcode'],
								'activedate' => $value['activedate'],
								'validdateto' => $value['validdateto'],
								'price' => $value['priceamount'],
								'timesavenow' => strtotime("now")
								,'nodeid' => $record->nid)
							)->execute();
					if($priceupdateinsert){
						return TRUE;
					}
					/*
						$newNode = node_load($record->nid);
						$newNode->changed = strtotime("now");
						$newNode->sell_price = $value['priceamount'];
					*/
				}else{
					return TRUE;
				}
			break;
			case "itemdescr":
				if(isset($record->nid)){
					$newNode = node_load($record->nid);
					$newNode->changed = strtotime("now");
					$newNode->title = $value['itemdescr1'];
					if(node_save($newNode)){
						unset($newNode);
						return TRUE;
					}
				}else{
					return TRUE;
				}
			break;
		}
	}
	/*--------------------------------------------------------------------------------*/
	/*
		CONVERT TXTFILE TO ARRAY 
		file TKSTORE________.TXT
		this are the ff VALUE GET ON TEXT FILE
		intcode/sku
		quantity
			
	*/
	public function tk_store_array($myFile){
		$fh = fopen($myFile, 'r');
		$theData = fread($fh,filesize($myFile));
		fclose($fh);
		$print = explode("\n",$theData);
		foreach($print as $key => $value){
			$explode = explode("    ",trim($value));
			if($explode[0]!="")
				$fetch['tkstore'][$key]['intcode'] = $explode[0].$this->suffixvalue;
			if($explode[0]!="")	
				$fetch['tkstore'][$key]['qty'] = $explode[1];
		}
		return $fetch;
	}
	/*--------------------------------------------------------------------------------*/
	/*
		SAVE ARRAY ON DATABASE
		getting array in this function tk_store_array() saving to datebase 
			
	*/
	private function tk_store_array_db($array){
		foreach($array as $value):
			$object = db_query("SELECT nid FROM uc_products WHERE model = :model",array(':model' => $value['intcode']));
			$record = $object ->fetchObject(); 
			if(isset($record->nid)){
				$ucproductstock = db_query("SELECT nid FROM uc_product_stock WHERE sku = :sku AND nid = :nid",array(':sku' => $value['intcode'],':nid' => $record->nid));
				$recordstock = $ucproductstock ->fetchObject(); 
				if(isset($recordstock->nid)){
					$stock = db_update('uc_product_stock')->fields(array('sku' => $value['intcode'],'nid' => $record->nid,'active' => 1,'stock' => $value['qty'],'threshold' => 0))->condition('sku', $value['intcode'])->condition('nid', $record->nid)->execute();
				}else{
					$stock = db_insert('uc_product_stock')->fields(array('sku', 'nid', 'active', 'stock', 'threshold'))->values(array('sku' => $value['intcode'],'nid' => $record->nid,'active' => 1,'stock' => $value['qty'],'threshold' => 0))->execute();
				}
			}
		endforeach;
		return TRUE;
	}
	/*--------------------------------------------------------------------------------*/
	private function sku_update_array($myFile){
		$fh = fopen($myFile, 'r');
		$theData = fread($fh,filesize($myFile));
		fclose($fh);
		$print = explode("\n",$theData);
		foreach($print as $key => $value):
			$explode = explode(" ",trim($value));
			$typekey = 1;
			foreach($explode as $mainvalue):
				if($mainvalue!=""):
					if($typekey==1){
						$fetch['qtyupdate'][$key]['intcode'] = substr($mainvalue, 10).$this->suffixvalue;
						$fetch['qtyupdate'][$key]['tanscode'] = substr($mainvalue, 6,3);
					}else if($typekey==2)
						$fetch['qtyupdate'][$key]['stock'] = $mainvalue;
					$typekey++;
				endif;
			endforeach;
		endforeach;
		return $fetch;
	}
	private function sku_update_array_db($array){
		$transacodecheck = array("031"=>1,"041"=>1,"042"=>-1,"051"=>-1,"061"=>1,"062"=>-1);
		foreach($array as $key => $value):
			$object = db_query("SELECT nid FROM uc_products WHERE model = :model",array(':model' => $value['intcode']));
			$record = $object ->fetchObject(); 
			if(isset($record->nid)){
				$ucproductstock = db_query("SELECT nid,stock,sku FROM uc_product_stock WHERE sku = :sku AND nid = :nid",array(':sku' => $value['intcode'],':nid' => $record->nid));
				$recordstock = $ucproductstock->fetchObject(); 
				if(isset($recordstock->nid)){
					if(isset($transacodecheck[$value['tanscode']])){
						if($transacodecheck[$value['tanscode']]<0){
							if($value['stock']<0){
								$expressionvalue = $value['stock'];
							}else{
								$expressionvalue = $value['stock'] * $transacodecheck[$value['tanscode']];
							}
						}else{
							$expressionvalue = $value['stock'] * $transacodecheck[$value['tanscode']];
						}
					}else{
						$expressionvalue = $value['stock'];
					}
					$totalstock = ($recordstock->stock)+($expressionvalue);
					$stock = db_update('uc_product_stock')
					->fields(
						array(
							'sku' => $value['intcode'],
							'nid' => $recordstock->nid,
							'active' => 1,
							'stock' => $totalstock,
							'threshold' => 0
							)
						)
						->condition('sku', $value['intcode'])
						->condition('nid', $recordstock->nid)
						->execute();
				}else{
					$stock = db_insert('uc_product_stock')
						->fields(
							array(
								'sku', 
								'nid', 
								'active', 
								'stock', 
								'threshold'
							)
						)->values(
							array('sku' => $value['intcode'],
							'nid' => $record->nid,
							'active' => 1,
							'stock' => $value['stock']
							,'threshold' => 0
							)
						)->execute();
				}
			}
		endforeach;
		return TRUE;
	}
	
}