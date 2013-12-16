/**
 * @file
 * Utility functions to display settings summaries on vertical tabs.
 */

(function ($) {

Drupal.behaviors.xendAdminFieldsetSummaries = {
  attach: function (context) {
    $('fieldset#edit-uc-xend-credentials', context).drupalSetSummary(function(context) {
      var server = $('#edit-uc-xend-connection-type :selected', context).text().toLowerCase();
      return Drupal.t('Using Xend @role server', { '@role': server });
    });

    $('fieldset#edit-uc-xend-quote-options', context).drupalSetSummary(function(context) {
      if ($('#edit-uc-xend-insurance').is(':checked')) {
        return Drupal.t('Packages are insured');
      }
      else {
        return Drupal.t('Packages are not insured');
      }
    });

  }
};

})(jQuery);
