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
?>
<table <?php if ($classes) { print 'class="'. $classes . '" '; } ?><?php print $attributes; ?>>
  <?php if (!empty($title)) : ?>
    <caption><?php print $title; ?></caption>
  <?php endif; ?>
 
    <thead>
      <tr>
		<th style="text-align:right;" colspan="10">
			<p style="margin:0px;">Extraction Date: <?php echo date("m/d/Y")?></p>
			<p style="margin:0px;">Extraction Time: <?php echo date("H:i:s")?></p>
		</th>
	</tr>
	<tr>
		<th style="text-align:center;" colspan="10">
			<h4 style="margin:0px;">Sales List Summary (SLS) Hash Total Report</h4>
			<p  style="margin:0px;">For the Month of <?php print (isset($_GET['created']['value']['date']))?date('F Y',strtotime($_GET['created']['value']['date'])):date('F Y');?></p>
			
		</th>
	</tr>
    </thead>
	 <?php 
		$countarray = array("php"=>0.00,"php_1"=>0.00,"php_2"=>0.00);
		$arraynumber = 0;
		foreach ($rows as $row_count => $row):
			foreach ($row as $field => $content): 
				if($field=="php" || $field=="php_1" || $field=="php_2"){
					$countarray[$field] += $content;
					
				}
			endforeach;
			$arraynumber++;
		endforeach;?>
  <tbody>
   
      <tr>
        <td>
			Total Vatable Sales
		
		</td>
		<td>
			<?php echo '<span class="prefix">P</span>'.number_format($countarray["php_1"],2,".",","); ?>
		
		</td>
	</tr>
	 <tr>
        <td>
			Total Vat Exempt Sales
		</td>
		<td>
			<?php echo '<span class="prefix">P</span>0.00'; ?>
		
		</td>
	</tr>
	 <tr>
        <td>
			Total Zero Amount
		</td>
		<td>
			<?php echo '<span class="prefix">P</span>0.00'; ?>
		</td>
	</tr>
     <tr>
        <td>
			Total Vat Amount
		
		</td>
		<td>
			<?php echo '<span class="prefix">P</span>'.number_format($countarray["php_2"],2,".",","); ?>
		
		</td>
	</tr>
	<tr>
        <td>Total Line Record</td>
		<td>
			<?php echo $arraynumber; ?>
		
		</td>
	</tr>
	<tr>
        <td>File-Name</td>
		<td>
			086204000
		</td>
	</tr>
  </tbody>
</table>