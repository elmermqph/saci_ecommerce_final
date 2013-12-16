<?php
/**
 * @file views-view-table.tpl.php
 * Template to display a view as a table.
 *
 * - $title : The title of this group of rows.  May be empty.
 * - $header: An array of header labels keyed by field id.
 * - $header_classes: An array of header classes keyed by field id.
 * - $fields: An array of CSS IDs to use for each field id.
 * - $classes: A class or classes to apply to the table, based on settings.
 * - $row_classes: An array of classes to apply to each row, indexed by row
 *   number. This matches the index in $rows.
 * - $rows: An array of row items. Each row is an array of content.
 *   $rows are keyed by row number, fields within rows are keyed by field ID.
 * - $field_classes: An array of classes to apply to each field, indexed by
 *   field id, then row number. This matches the index in $rows.
 * @ingroup views_templates
 */
	$arrayamount = array('vatable_sales'=>0.00,'vat_amt'=>0.00);
	$view = views_get_view('order_productlist');  
	$view->set_display('page_2');
	$view->exposed_input['created']['value']['date'] = $_GET['created']['value']['date'];
	$view->render();
	$array = $view->result;
	$countrow = 0;
	foreach ($array as $value):
		$object = db_query("SELECT vat_amt,vatable_sale FROM checkout_vat_inc WHERE order_id = :oid",array(':oid' => $value->order_id));
                $record = $object->fetchAssoc(); 
		if($object->rowCount()>0)
		      $countrow++;	
		$arrayamount['vatable_sales'] += $record['vatable_sale']; 
        $arrayamount['vat_amt'] += $record['vat_amt'];         
	endforeach;	
?>
<table <?php if ($classes) { print 'class="'. $classes . '" '; } ?><?php print $attributes; ?>>
  <?php if (!empty($title)) : ?>
    <caption><?php print $title; ?></caption>
  <?php endif; ?>
  <?php if (!empty($header)) : ?>
    <thead>
	<tr>
		<th style="text-align:right;" colspan="9">
			<p style="margin:0px;">Run Date: <?php echo date("m/d/Y")?></p>
			<p style="margin:0px;">Run Time: <?php echo date("H:i:s")?></p>
		</th>
	</tr>
	<tr>
		<th style="text-align:center;" colspan="9">
			<h4 style="margin:0px;">STAR APPLIANCE CENTER INC.</h4>
			<p  style="margin:0px;">Sales Invoice Register Report - Star Appliance Center Inc. Online Store</p>
			<p  style="margin:0px;">For the Month of <?php print (isset($_GET['created']['value']['date']))?date('F Y',strtotime($_GET['created']['value']['date'])):date('F Y');?></p>
			
		</th>
	</tr>
      <tr>
        <?php foreach ($header as $field => $label): ?>
          <th <?php if($field=="php_3" or $field=="nothing" or $field=="nothing_1"){print ' style="text-align:right;"';}?> 
		  <?php if ($header_classes[$field]) { print 'class="'. $header_classes[$field] . '" '; } ?>>
            <?php print $label; ?>
          </th>
        <?php endforeach; ?>
      </tr>
    </thead>
  <?php endif; ?>
  <tbody>
    <?php 
	$totalfieldselect = array("php"=>0.00,"php_1"=>0.00,"php_2"=>0.00) ;
	foreach ($rows as $row_count => $row): ?>
	<?php if($row["php"]!="" || $row["php_1"]!="" || $row["php_2"]!=""){?>
		  <tr class="<?php print implode(' ', $row_classes[$row_count]); ?>">
			
			<?php foreach ($row as $field => $content): ?>
			  <td <?php if ($field_classes[$field][$row_count]) { print 'class="'. $field_classes[$field][$row_count] . '" '; } ?><?php print drupal_attributes($field_attributes[$field][$row_count]); ?>
			  <?php if($field=="php" or $field=="php_1" or $field=="php_2" or $field="nothing" or $field="nothing_1"){print ' style="text-align:right;"';}?>>
				<?php if($field=="php" or $field=="php_1" or $field=="php_2"){
						$totalfieldselect[$field] += (float)$content;
						print '<span class="prefix">P</span>'.number_format($content,2,".",","); 
					}else
						print $content; 
				?> 
			  </td>
			<?php endforeach; ?>
			
		  </tr>
	  <?php }?>
    <?php endforeach; ?>
	<tr class="totalvalue">
		<td colspan="2"><span style="font-weight:bold;">Grand Total</span></td>
		<td></td>
		<td></td>
		<td class="amount" style="text-align:right;"><?php print '<span class="prefix">P</span>'.number_format($arrayamount['vatable_sales'],2,".",",");?></td>
		<td class="amount" style="text-align:right;">0.00</td>
		<td class="amount" style="text-align:right;">0.00</td>
		<td class="amount" style="text-align:right;"><?php print '<span class="prefix">P</span>'.number_format($arrayamount['vat_amt'],2,".",",");?></td>
		<td class="amount" style="text-align:right;"><?php print '<span class="prefix">P</span>'.number_format(($arrayamount['vatable_sales']+$arrayamount['vat_amt']),2,".",",");?></td>
	</tr>
  </tbody>
</table>