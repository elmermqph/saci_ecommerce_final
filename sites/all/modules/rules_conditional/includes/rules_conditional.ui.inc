<?php
/**
 * @file
 * Plugin UI implementation.
 */

/**
 * Base UI for providing customized operation links.
 */
class RulesConditionalPluginUI extends RulesContainerPluginUI {
  public function form(&$form, &$form_state, $options = array(), $iterator = NULL) {
    $pluginInfo = $this->element->pluginInfo();
    if (!empty($pluginInfo['conditional empty'])) {
      // Save element.
      $this->object->save();
      // Redirect right away.
      $path = RulesPluginUI::defaultRedirect($this->object);
      drupal_goto($path);
    }
    else {
      parent::form($form, $form_state, $options, $iterator);
    }
  }

  public function operations() {
    $ops = parent::operations();
    $pluginInfo = $this->element->pluginInfo();
    // Remove edit link if empty.
    if (!empty($pluginInfo['conditional empty']) && isset($ops['#links']['edit'])) {
      unset($ops['#links']['edit']);
    }
    // Apply add operation extensions.
    $elementChildrenTypes = array();
    foreach ($this->element->getIterator() as $element) {
      $plugin = $element->plugin();
      $elementChildrenTypes[$plugin] = $plugin;
    }
    foreach (rules_fetch_data('plugin_info') as $plugin => $info) {
      if (!empty($info['conditional predicate']) && isset($ops['#links']['add_' . $plugin])) {
        $ops['#links']['add_' . $plugin]['href'] = RulesPluginUI::path($this->element->root()->name, 'add-predicate', $this->element, $plugin);
      }
      // Remove operations as specified in the plugin info.
      $remove = FALSE;
      if (!empty($info['conditional single']) && isset($elementChildrenTypes[$plugin])) {
        $remove = TRUE;
      }
      elseif (!empty($info['conditional depends']) && !array_intersect($elementChildrenTypes, $info['conditional depends'])) {
        $remove = TRUE;
      }
      // Remove link.
      if ($remove) {
        unset($ops['#links']['add_' . $plugin]);
      }
    }
    return $ops;
  }
}

/**
 * Base UI for conditional branch.
 */
class RulesConditionalBranchPluginUI extends RulesActionContainerUI {
  public function form(&$form, &$form_state, $options = array(), $iterator = NULL) {
    $pluginInfo = $this->element->pluginInfo();
    if (!empty($pluginInfo['conditional empty'])) {
      // Save element.
      $this->object->save();
      // Redirect right away.
      $path = RulesPluginUI::defaultRedirect($this->object);
      drupal_goto($path);
    }
    else {
      parent::form($form, $form_state, $options, $iterator);
    }
  }

  public function operations() {
    $ops = parent::operations();
    $pluginInfo = $this->element->pluginInfo();
    // Remove edit link if empty.
    if (!empty($pluginInfo['conditional empty']) && isset($ops['#links']['edit'])) {
      unset($ops['#links']['edit']);
    }
    return $ops;
  }
}

/**
 * UI for configuring the predicate in a conditional branch.
 */
class RulesConditionalPredicateUI extends RulesConditionalBranchPluginUI {
  /**
   * @var RulesPlugin
   */
  protected $predicate;

  public function __construct(FacesExtendable $object) {
    parent::__construct($object);
    $this->predicate = $this->property('predicate');
    if (!is_object($this->predicate) || $this->predicate instanceof RulesContainerPlugin) {
      // TODO: Find out how to eventually nest a conditional container UI.
      $this->predicate = NULL;
      return;
    }
  }

  /**
   * Delegates the form to the predicate.
   */
  public function form(&$form, &$form_state, $options = array()) {
    if (isset($this->predicate)) {
      // Build form for predicate.
      $form_state['rules_element'] = $this->predicate;
      $this->predicate->form($form, $form_state, $options);
    }
  }

  /**
   * Delegates the form validator to the predicate.
   */
  public function form_validate($form, &$form_state) {
    if (isset($this->predicate)) {
      // Validate form for predicate.
      $form_state['rules_element'] = $this->predicate;
      $this->predicate->form_validate($form, $form_state);
    }
  }

  /**
   * Delegates the form submit handler to the predicate.
   */
  public function form_submit($form, &$form_state) {
    if (isset($this->predicate)) {
      // Handle form submission for predicate.
      $form_state['rules_element'] = $this->predicate;
      $this->predicate->form_submit($form, $form_state);
    }
  }

  public function buildContent() {
    $content = NULL;
    if (isset($this->predicate)) {
      // Build default content.
      $content = parent::buildContent();
      // Build label.
      $content['label']['#type'] = 'markup';
      unset($content['label']['#title']);
      $info = $this->element->pluginInfo();
      $content['label']['#markup'] = t('@plugin: @label', array(
        '@plugin' => isset($info['label']) ? $info['label'] : drupal_ucfirst($this->element->plugin()),
        '@label' => $this->predicate->label(),
      ));
      // Build parameter description from predicate.
      $predicateContent = $this->predicate->buildContent();
      if (isset($predicateContent['description']['parameter'])) {
        $content['description']['parameter'] = $predicateContent['description']['parameter'];
      }
    }
    return $content;
  }
}

/**
 * UI for supporting option lists in the case value.
 */
class RulesConditionalCaseUI extends RulesConditionalBranchPluginUI {
  protected function getParameterForm($name, $info, $settings, &$mode) {
    $form = parent::getParameterForm($name, $info, $settings, $mode);
    if ($name == 'value' && $mode == 'input') {
      $labels = $this->getValueOptionLabels();
      if (isset($labels)) {
        $form['settings']['value']['#type'] = 'select';
        $form['settings']['value']['#options'] = $labels;
        $form['settings']['value']['#empty_value'] = '';
      }
    }
    return $form;
  }

  public function buildContent() {
    $content = parent::buildContent();
    // Use option label for text.
    if (isset($this->element->settings['value'])) {
      $value = $this->element->settings['value'];
      $labels = $this->getValueOptionLabels();
      $content['label']['#markup'] = t('@plugin: @case', array(
        '@plugin' => $this->element->label(),
        '@case' => isset($labels[$value]) ? $labels[$value] : $value,
      ));
      unset($content['description']['parameter']['value']);
    }
    return $content;
  }

  public function getValueOptionLabels() {
    $parent = $this->element->parentElement();
    if (isset($parent->settings['data:select'])) {
      $dataSelector = $parent->settings['data:select'];
      if ($wrapper = $this->element->applyDataSelector($dataSelector)) {
        $dataInfo = $wrapper->info();
        if (!empty($dataInfo['options list'])) {
          return call_user_func($dataInfo['options list'], $this->element, 'value');
        }
      }
    }
  }
}
