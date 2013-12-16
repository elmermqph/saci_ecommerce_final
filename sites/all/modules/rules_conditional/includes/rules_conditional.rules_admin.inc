<?php
/**
 * @file
 * Extensions to Rules UI.
 */

// Make Rules form functions available.
module_load_include('inc', 'rules', 'ui/ui.forms');

/**
 * Provides menu callbacks to extend Rules UI for conditionals.
 */
function _rules_conditional_rules_ui_menu_alter(&$items, $base_path, $base_count) {
  // Use existing add/edit items as extension base.
  $add_item = $items[$base_path . '/manage/%rules_config/add/%rules_element'];

  // Extend all plugins with a predicate.
  $extend_base = array(
    'file' => 'includes/rules_conditional.rules_admin.inc',
    'file path' => drupal_get_path('module', 'rules_conditional'),
  );
  $cache = rules_get_cache();
  foreach ($cache['plugin_info'] as $plugin => $info) {
    if (!empty($info['conditional predicate'])) {
      // Override "add".
      $items[$base_path . '/manage/%rules_config/add-predicate/%rules_element'] = array(
        'page arguments' => array('rules_conditional_add_predicate') + $add_item['page arguments'],
      ) + $extend_base + $add_item;
    }
  }
}

/**
 * Provides a variant of rules_ui_add_element() to create a condition as the
 * predicate of a plugin.
 */
function rules_conditional_add_predicate($form, &$form_state, $rules_config, $plugin_name, RulesContainerPlugin $parent, $base_path) {
  $cache = rules_get_cache();
  if (!isset($cache['plugin_info'][$plugin_name]['class'])) {
    drupal_not_found();
    exit;
  }

  // Build condition form.
  RulesPluginUI::$basePath = $base_path;
  if (!isset($form_state['rules_element'])) {
    RulesPluginUI::formDefaults($form, $form_state);
    $form_state += array('parent_element' => $parent, 'plugin' => $plugin_name);

    $form['element_name'] = array(
      '#type' => 'select',
      '#title' => t('Select the condition to add for %element', array('%element' => $plugin_name)),
      '#options' => RulesPluginUI::getOptions('condition'),
      '#ajax' => rules_ui_form_default_ajax() + array(
        'trigger_as' => array('name' => 'continue'),
      ),
    );
    $form['continue'] = array(
      '#type' => 'submit',
      '#name' => 'continue',
      '#value' => t('Continue'),
      '#ajax' => rules_ui_form_default_ajax(),
    );
  }

  // Build element form.
  if (isset($form_state['rules_element'])) {
    $form_state['rules_element']->form($form, $form_state, array('button' => TRUE, 'init' => TRUE));
    $form['#validate'][] = 'rules_ui_edit_element_validate';
    $form['#submit'][] = 'rules_ui_edit_element_submit';
  }
  else {
    $form['#submit'][] = 'rules_ui_add_element_submit';
  }
  return $form;
}
