<?php
ob_start();
/**
 * @file
 * Default theme implementation to display the basic html structure of a single
 * Drupal page.
 *
 * Variables:
 * - $css: An array of CSS files for the current page.
 * - $language: (object) The language the site is being displayed in.
 *   $language->language contains its textual representation.
 *   $language->dir contains the language direction. It will either be 'ltr' or 'rtl'.
 * - $rdf_namespaces: All the RDF namespace prefixes used in the HTML document.
 * - $grddl_profile: A GRDDL profile allowing agents to extract the RDF data.
 * - $head_title: A modified version of the page title, for use in the TITLE tag.
 * - $head: Markup for the HEAD section (including meta tags, keyword tags, and
 *   so on).
 * - $styles: Style tags necessary to import all CSS files for the page.
 * - $scripts: Script tags necessary to load the JavaScript files and settings
 *   for the page.
 * - $page_top: Initial markup from any modules that have altered the
 *   page. This variable should always be output first, before all other dynamic
 *   content.
 * - $page: The rendered page content.
 * - $page_bottom: Final closing markup from any modules that have altered the
 *   page. This variable should always be output last, after all other dynamic
 *   content.
 * - $classes String of classes that can be used to style contextually through
 *   CSS.
 *
 * @see template_preprocess()
 * @see template_preprocess_html()
 * @see template_process()
 */
?><!DOCTYPE html PUBLIC "-//W3C//DTD XHTML+RDFa 1.0//EN" "http://www.w3.org/MarkUp/DTD/xhtml-rdfa-1.dtd">

<!-- paulirish.com/2008/conditional-stylesheets-vs-css-hacks-answer-neither/ -->
<!--[if lt IE 7]> <html class="no-js ie6 ie" xmlns="http://www.w3.org/1999/xhtml" xml:lang="<?php print $language->language; ?>" version="XHTML+RDFa 1.0" dir="<?php print $language->dir; ?>" <?php print $rdf_namespaces; ?>> <![endif]-->
<!--[if IE 7]>    <html class="no-js ie7 ie" xmlns="http://www.w3.org/1999/xhtml" xml:lang="<?php print $language->language; ?>" version="XHTML+RDFa 1.0" dir="<?php print $language->dir; ?>" <?php print $rdf_namespaces; ?>> <![endif]-->
<!--[if IE 8]>    <html class="no-js ie8 ie" xmlns="http://www.w3.org/1999/xhtml" xml:lang="<?php print $language->language; ?>" version="XHTML+RDFa 1.0" dir="<?php print $language->dir; ?>" <?php print $rdf_namespaces; ?>> <![endif]-->
<!--[if IE 9]>    <html class="no-js ie9 ie" xmlns="http://www.w3.org/1999/xhtml" xml:lang="<?php print $language->language; ?>" version="XHTML+RDFa 1.0" dir="<?php print $language->dir; ?>" <?php print $rdf_namespaces; ?>> <![endif]-->
<!--[if gt IE 9]><!--> <html class="no-js" xmlns="http://www.w3.org/1999/xhtml" xml:lang="<?php print $language->language; ?>" version="XHTML+RDFa 1.0" dir="<?php print $language->dir; ?>" <?php print $rdf_namespaces; ?>> <!--<![endif]-->
<?php
	$cur_nid = "";
	if (arg(0) == 'node') {
		$cur_nid = arg(1);
	}
?>
<?php
	$cur_type = "";
	$qry_get_prod_type = db_query("SELECT type FROM {node} WHERE nid = :cur_nid",array(":cur_nid"=>$cur_nid));
	foreach($qry_get_prod_type as $qry_get_prod_type_row){
		$cur_type = $qry_get_prod_type_row->type;
	}
	
	global $base_url;
	$cur_title = "";
	$cur_model = "";
	$cur_image = "";
	$cur_image_array = array();
	
	if($cur_type == "product"){	
		$qry_get_prod_info = db_query("SELECT nid,field_product_features_value,uri FROM {node} n
		LEFT JOIN {field_data_field_product_features} prodfeature ON prodfeature.entity_id = n.nid
		JOIN {field_data_uc_product_image} prodimage ON prodimage.entity_id = n.nid
		JOIN {file_managed} fmanage ON fmanage.fid = prodimage.uc_product_image_fid
		WHERE n.nid = :a_nid"
		,array(":a_nid"=>$cur_nid));
		
		foreach($qry_get_prod_info as $qry_get_prod_info_row){
			$cur_desc = $qry_get_prod_info_row->field_product_features_value;	
			if($cur_image == ""){
				$cur_image = $qry_get_prod_info_row->uri;
				$cur_image = str_replace("public://","",$cur_image);
			}	
		}
	}elseif($cur_nid == 1){
		$qry_get_prod_info = db_query("SELECT nid,body_value FROM {node} n
		JOIN {field_data_body} prodbody ON prodbody.entity_id = n.nid
		WHERE n.nid = :a_nid"
		,array(":a_nid"=>$cur_nid));
		
		foreach($qry_get_prod_info as $qry_get_prod_info_row){
			$cur_desc = $qry_get_prod_info_row->body_value;	
		}
	}
?>
<head profile="<?php print $grddl_profile; ?>">
  <?php print $head; ?>
  <title><?php print $head_title; ?></title>
  <?php print $styles; ?>
  <?php print $scripts; ?>
  <link href='http://fonts.googleapis.com/css?family=Cabin:400,500,600,700' rel='stylesheet' type='text/css'>
	<?php
		if($cur_type == "product"){
			?>
			<meta property="og:type" content="product" />
			<meta property="og:url" content="<?php echo $base_url . "/" . request_uri(); ?>" />
			<meta property="og:image" content="<?php echo $base_url . "/sites/default/files/" . $cur_image; ?>" />
			<meta property="og:description" content='<?php echo strip_tags($cur_desc); ?>' />
			<?php
		}elseif($cur_nid == 1){
			?>
			<meta property="og:type" content="product" />
			<meta property="og:url" content="<?php echo $base_url . "/" . request_uri(); ?>" />
			<meta property="og:image" content="" />
			<meta property="og:description" content='<?php echo strip_tags($cur_desc); ?>' />
			<?php
		}
	?>
</head>
<body id="<?php print $body_id; ?>" class="<?php print $classes; ?>" <?php print $attributes;?>>
  <div id="skip-link">
    <a href="#main-content-area"><?php print t('Skip to main content area'); ?></a>
  </div>
  <?php print $page_top; ?>
  <?php print $page; ?>
  <?php print $page_bottom; ?>
</body>
</html>
