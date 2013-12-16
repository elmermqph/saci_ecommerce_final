<?php 

function fusion_starter_preprocess_page(&$vars) {
  global $language, $theme_key, $theme_info, $user;
  drupal_add_library('system','ui.datepicker');
}

