/**
 * @file ajaxView.js
 *
 * Handles AJAX fetching of views, including filter submission and response.
 */
(function ($) {

/**
 * Attaches the AJAX behavior to Views exposed filter forms and key View links.
 */
Drupal.behaviors.ViewsAjaxView = {};
Drupal.behaviors.ViewsAjaxView.attach = function() {
  if (Drupal.settings && Drupal.settings.views && Drupal.settings.views.ajaxViews) {
    $.each(Drupal.settings.views.ajaxViews, function(i, settings) {
      // @todo: Figure out where to store the object.
      new Drupal.views.ajaxView(settings);
    });
  }
};

Drupal.views = {};

/**
 * Javascript object for a certain view.
 */
Drupal.views.ajaxView = function(settings) {
  var selector = '.view-dom-id-' + settings.view_dom_id;
  this.$view = $(selector);

  // Retrieve the path to use for views' ajax.
  var ajax_path = Drupal.settings.views.ajax_path;

  // If there are multiple views this might've ended up showing up multiple times.
  if (ajax_path.constructor.toString().indexOf("Array") != -1) {
    ajax_path = ajax_path[0];
  }

  // Check if there are any GET parameters to send to views.
  var queryString = window.location.search || '';
  if (queryString !== '') {
    // Remove the question mark and Drupal path component if any.
    var queryString = queryString.slice(1).replace(/q=[^&]+&?|&?render=[^&]+/, '');
    if (queryString !== '') {
      // If there is a '?' in ajax_path, clean url are on and & should be used to add parameters.
      queryString = ((/\?/.test(ajax_path)) ? '&' : '?') + queryString;
    }
  }

  this.element_settings = {
    url: ajax_path + queryString,
    submit: settings,
    setClick: true,
    event: 'click',
    selector: selector,
    progress: { type: 'throbber' }
  };

  this.settings = settings;

  // Add the ajax to exposed forms.
  this.$exposed_form = $('form#views-exposed-form-'+ settings.view_name.replace(/_/g, '-') + '-' + settings.view_display_id.replace(/_/g, '-'));
  this.$exposed_form.once(jQuery.proxy(this.attachExposedFormAjax, this));

  // Add the ajax to pagers.
  this.$view
    // Don't attach to nested views. Doing so would attach multiple behaviors
    // to a given element.
    .filter(jQuery.proxy(this.filterNestedViews, this))
    .once(jQuery.proxy(this.attachPagerAjax, this));
};

Drupal.views.ajaxView.prototype.attachExposedFormAjax = function() {
  var button = $('input[type=submit], input[type=image]', this.$exposed_form);
  button = button[0];

  this.exposedFormAjax = new Drupal.ajax($(button).attr('id'), button, this.element_settings);
};

Drupal.views.ajaxView.prototype.filterNestedViews= function() {
  // If there is at least one parent with a view class, this view
  // is nested (e.g., an attachment). Bail.
  return !this.$view.parents('.view').size();
};

/**
 * Attach the ajax behavior to each link.
 */
Drupal.views.ajaxView.prototype.attachPagerAjax = function() {
  this.$view.find('ul.pager > li > a, th.views-field a, .attachment .views-summary a')
  .each(jQuery.proxy(this.attachPagerLinkAjax, this));
};

/**
 * Attach the ajax behavior to a singe link.
 */
Drupal.views.ajaxView.prototype.attachPagerLinkAjax = function(id, link) {
  var $link = $(link);
  var viewData = {};
  var href = $link.attr('href');
  // Construct an object using the settings defaults and then overriding
  // with data specific to the link.
  $.extend(
    viewData,
    this.settings,
    Drupal.Views.parseQueryString(href),
    // Extract argument data from the URL.
    Drupal.Views.parseViewArgs(href, this.settings.view_base_path)
  );

  // For anchor tags, these will go to the target of the anchor rather
  // than the usual location.
  $.extend(viewData, Drupal.Views.parseViewArgs(href, this.settings.view_base_path));

  this.element_settings.submit = viewData;
  this.pagerAjax = new Drupal.ajax(false, $link, this.element_settings);
};

Drupal.ajax.prototype.commands.viewsScrollTop = function (ajax, response, status) {
  // Scroll to the top of the view. This will allow users
  // to browse newly loaded content after e.g. clicking a pager
  // link.
  var offset = $(response.selector).offset();
  // We can't guarantee that the scrollable object should be
  // the body, as the view could be embedded in something
  // more complex such as a modal popup. Recurse up the DOM
  // and scroll the first element that has a non-zero top.
  var scrollTarget = response.selector;
  while ($(scrollTarget).scrollTop() == 0 && $(scrollTarget).parent()) {
    scrollTarget = $(scrollTarget).parent();
  }
  // Only scroll upward
  if (offset.top - 10 < $(scrollTarget).scrollTop()) {
    $(scrollTarget).animate({scrollTop: (offset.top - 10)}, 500);
  }
};

})(jQuery);
;
(function ($) {

Drupal.behaviors.ucOutOfStock = {
  // Your code here
  //

  attach: function() {

    attrid = 'edit-attributes';

    function checkStock(forms) {
      var form_ids = new Array();
      var node_ids = new Array();
      var attr_ids = new Array();
      $.each(forms, function(index, form) {
        var product = new Object();
        var attributes = new Object();
        var formid_data = new Array();

        var nid = form.attr('id').match(/(?:uc-product-add-to-cart-form-|catalog-buy-it-now-form-)([0-9]+)/)[1];

        attributes.found = new Object();
        attributes.value = new Object();
        
        $(":input[name*=attributes]:not(:text)", form).each(function(index){
          id = $(this).attr('name').substring(11,$(this).attr('name').length-1);
          if ($(this).is(':radio')) {
            attributes.found['attr'+id] = 1;
            if ($(this).is(':checked')) {
              if ($(this).val()) {
                attributes.value['attr'+id] = 1;
                attr_ids.push(nid + ':' + id + ':' + $(this).val());
              }
            }
          }
          else {
            attributes.found['attr'+id] = 1;
              if ($(this).val()) {
                attributes.value['attr'+id] = 1;
                attr_ids.push(nid + ':' + id + ':' + $(this).val());
              }
            }
        });

        // find qty
        product['qty'] = 1;
        qty = $(":input[name=qty]", form).val()
        if (qty) {
          product['qty'] = qty;
        }

        // finding if attributes are found with no value
        attributes.found.length = attributes.value.length = 0;
        for (var i in attributes.found) {
          if (i!='length') {
            attributes.found.length++;
          }
        }
        for (var i in attributes.value) {
          if (i!='length') {
            attributes.value.length++;
          }
        }
        if (attributes.found.length != attributes.value.length) {
          // Put back the normal HTML of the add to cart form
          $(".uc_out_of_stock_html", form).html('');
          $("input:submit.node-add-to-cart,input:submit.list-add-to-cart", form).show();
          return;

         }

        $(".uc_out_of_stock_throbbing", form).addClass('uc_oos_throbbing');
        form_ids.push(form.attr('id'));
        node_ids.push(nid);
      });

      if (form_ids.length == 0) {
        return;
      }
      var post = { 'form_ids[]': form_ids, 'node_ids[]': node_ids, 'attr_ids[]': attr_ids }
      $.post(Drupal.settings.basePath+'?q=uc_out_of_stock/query', post, function (data, textStatus) { /* ALTA SOLUTIONS 20120228 fix as stated in http://drupal.org/node/1201310#comment-5515346 by davident */
        $.each(data, function(form_id, stock_level) {
          var form = $('#' + form_id);
          if (stock_level != null && parseInt(stock_level) <= 0) {
            $("input:submit.node-add-to-cart,input:submit.list-add-to-cart", form).hide();
            $(".uc_out_of_stock_html", form).html(Drupal.settings.uc_out_of_stock.msg);
          }
          else {
            // Put back the normal HTML of the add to cart form
            $(".uc_out_of_stock_html", form).html('');
            $("input:submit.node-add-to-cart,input:submit.list-add-to-cart", form).show();
          }
          $(".uc_out_of_stock_throbbing", form).removeClass('uc_oos_throbbing');
        });
      }, 'json');
    }

    var forms = new Array();
    $("form[id*=uc-product-add-to-cart-form], form[id*=uc-catalog-buy-it-now-form]").each(function(index) {
      forms.push($(this));
      $("input:submit.node-add-to-cart,input:submit.list-add-to-cart", $(this)).before('<div class="uc_out_of_stock_throbbing">&nbsp;&nbsp;&nbsp;&nbsp;</div>');
      $("input:submit.node-add-to-cart,input:submit.list-add-to-cart", $(this)).after('<div class="uc_out_of_stock_html"></div>');
      var form = $(this);

      $(":input[name*=attributes]:not(:text)", $(this)).change(function(){
        checkStock([form]);
      });
      /* TODO: Feature request - support qty field, would make sense if cart
       * contents are checked in the server as well as just stock
       */
      /*
      $(":input[name=qty]", $(this)).keyup(function(){
        checkStock(eachForm);
      });
      */

      checkStock(forms);

      // This form has no possible attributes
    });

  }
}

})(jQuery);
;
