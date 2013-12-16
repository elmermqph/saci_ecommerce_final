<?php 
$filepathroot = $_SERVER['DOCUMENT_ROOT']."/product_cart/";
define("DRUPAL_ROOT",$filepathroot);
require_once $filepathroot."includes/bootstrap.inc";
drupal_bootstrap(DRUPAL_BOOTSTRAP_FULL);