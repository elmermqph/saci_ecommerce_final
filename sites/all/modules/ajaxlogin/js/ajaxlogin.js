
(function($) {
  
  Drupal.behaviors.ajaxlogin = {
    attach: function(context, settings) {
      // Redirect if yelmoredirect property is set
      if (settings.ajaxlogin_reload) {
        window.location.reload();
      }
    },
  };
  
}) (jQuery);
