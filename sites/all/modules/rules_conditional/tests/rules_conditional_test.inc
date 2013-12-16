<?php
/**
 * @file
 * Testing implementations.
 */

/**
 * Test base conditional.
 *
 * @method RulesConditional test() test().
 */
class RulesConditionalTestStubPlugin extends RulesConditionalPlugin {
  protected $itemName = 'stub conditional';

  protected $interceptMethods = array('test');

  /**
   * Selects the branches to evaluate for this conditional.
   *
   * @param RulesState $state
   *   Rules state to use.
   * @return RulesConditionalBranchPlugin[]
   *   An array of branches to evaluate.
   */
  protected function selectBranches(RulesState $state) {
    // TODO: Implement selectBranches() method.
  }

  /**
   * Intercepts the 'test' method.
   */
  protected function call_test() {
    throw new Exception('intercept');
  }

  /**
   * Sets a fluent element.
   */
  public function fluent(RulesActionContainer $element) {
    $this->fluentElement = $element;
    return $this;
  }
}

/**
 * Test branch.
 */
class RulesConditionalTestStubBranchPlugin extends RulesConditionalBranchPlugin {
  protected $itemName = 'stub conditional branch';

  /**
   * Determines whether this branch can be evaluated.
   */
  public function canEvaluate(RulesState $state) {
    // TODO: Implement canEvaluate() method.
  }
}
