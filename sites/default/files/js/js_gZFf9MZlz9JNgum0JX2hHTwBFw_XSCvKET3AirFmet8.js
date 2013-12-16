(function ($) {

/**
 * Terminology:
 *
 *   "Link" means "Everything which is in flag.tpl.php" --and this may contain
 *   much more than the <A> element. On the other hand, when we speak
 *   specifically of the <A> element, we say "element" or "the <A> element".
 */

/**
 * The main behavior to perform AJAX toggling of links.
 */
Drupal.flagLink = function(context) {
  /**
   * Helper function. Updates a link's HTML with a new one.
   *
   * @param element
   *   The <A> element.
   * @return
   *   The new link.
   */
  function updateLink(element, newHtml) {
    var $newLink = $(newHtml);

    // Initially hide the message so we can fade it in.
    $('.flag-message', $newLink).css('display', 'none');

    // Reattach the behavior to the new <A> element. This element
    // is either whithin the wrapper or it is the outer element itself.
    var $nucleus = $newLink.is('a') ? $newLink : $('a.flag', $newLink);
    $nucleus.addClass('flag-processed').click(flagClick);

    // Find the wrapper of the old link.
    var $wrapper = $(element).parents('.flag-wrapper:first');
    if ($wrapper.length == 0) {
      // If no ancestor wrapper was found, or if the 'flag-wrapper' class is
      // attached to the <a> element itself, then take the element itself.
      $wrapper = $(element);
    }
    // Replace the old link with the new one.
    $wrapper.after($newLink).remove();
    Drupal.attachBehaviors($newLink.get(0));

    $('.flag-message', $newLink).fadeIn();
    setTimeout(function(){ $('.flag-message', $newLink).fadeOut() }, 3000);
    return $newLink.get(0);
  }

  /**
   * A click handler that is attached to all <A class="flag"> elements.
   */
  function flagClick() {
    // 'this' won't point to the element when it's inside the ajax closures,
    // so we reference it using a variable.
    var element = this;

    // While waiting for a server response, the wrapper will have a
    // 'flag-waiting' class. Themers are thus able to style the link
    // differently, e.g., by displaying a throbber.
    var $wrapper = $(element).parents('.flag-wrapper');
    if ($wrapper.is('.flag-waiting')) {
      // Guard against double-clicks.
      return false;
    }
    $wrapper.addClass('flag-waiting');

    // Hide any other active messages.
    $('span.flag-message:visible').fadeOut();

    // Send POST request
    $.ajax({
      type: 'POST',
      url: element.href,
      data: { js: true },
      dataType: 'json',
      success: function (data) {
        if (data.status) {
          // Success.
          data.link = $wrapper.get(0);
          $.event.trigger('flagGlobalBeforeLinkUpdate', [data]);
          if (!data.preventDefault) { // A handler may cancel updating the link.
            data.link = updateLink(element, data.newLink);
          }
          $.event.trigger('flagGlobalAfterLinkUpdate', [data]);
        }
        else {
          // Failure.
          alert(data.errorMessage);
          $wrapper.removeClass('flag-waiting');
        }
      },
      error: function (xmlhttp) {
        alert('An HTTP error '+ xmlhttp.status +' occurred.\n'+ element.href);
        $wrapper.removeClass('flag-waiting');
      }
    });
    return false;
  }

  $('a.flag-link-toggle:not(.flag-processed)', context).addClass('flag-processed').click(flagClick);
};

/**
 * Prevent anonymous flagging unless the user has JavaScript enabled.
 */
Drupal.flagAnonymousLinks = function(context) {
  $('a.flag:not(.flag-anonymous-processed)', context).each(function() {
    this.href += (this.href.match(/\?/) ? '&' : '?') + 'has_js=1';
    $(this).addClass('flag-anonymous-processed');
  });
}

String.prototype.flagNameToCSS = function() {
  return this.replace(/_/g, '-');
}

/**
 * A behavior specifically for anonymous users. Update links to the proper state.
 */
Drupal.flagAnonymousLinkTemplates = function(context) {
  // Swap in current links. Cookies are set by PHP's setcookie() upon flagging.

  var templates = Drupal.settings.flag.templates;

  // Build a list of user-flags.
  var userFlags = Drupal.flagCookie('flags');
  if (userFlags) {
    userFlags = userFlags.split('+');
    for (var n in userFlags) {
      var flagInfo = userFlags[n].match(/(\w+)_(\d+)/);
      var flagName = flagInfo[1];
      var contentId = flagInfo[2];
      // User flags always default to off and the JavaScript toggles them on.
      if (templates[flagName + '_' + contentId]) {
        $('.flag-' + flagName.flagNameToCSS() + '-' + contentId, context).after(templates[flagName + '_' + contentId]).remove();
      }
    }
  }

  // Build a list of global flags.
  var globalFlags = document.cookie.match(/flag_global_(\w+)_(\d+)=([01])/g);
  if (globalFlags) {
    for (var n in globalFlags) {
      var flagInfo = globalFlags[n].match(/flag_global_(\w+)_(\d+)=([01])/);
      var flagName = flagInfo[1];
      var contentId = flagInfo[2];
      var flagState = (flagInfo[3] == '1') ? 'flag' : 'unflag';
      // Global flags are tricky, they may or may not be flagged in the page
      // cache. The template always contains the opposite of the current state.
      // So when checking global flag cookies, we need to make sure that we
      // don't swap out the link when it's already in the correct state.
      if (templates[flagName + '_' + contentId]) {
        $('.flag-' + flagName.flagNameToCSS() + '-' + contentId, context).each(function() {
          if ($(this).find('.' + flagState + '-action').size()) {
            $(this).after(templates[flagName + '_' + contentId]).remove();
          }
        });
      }
    }
  }
}

/**
 * Utility function used to set Flag cookies.
 *
 * Note this is a direct copy of the jQuery cookie library.
 * Written by Klaus Hartl.
 */
Drupal.flagCookie = function(name, value, options) {
  if (typeof value != 'undefined') { // name and value given, set cookie
    options = options || {};
    if (value === null) {
      value = '';
      options = $.extend({}, options); // clone object since it's unexpected behavior if the expired property were changed
      options.expires = -1;
    }
    var expires = '';
    if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
      var date;
      if (typeof options.expires == 'number') {
        date = new Date();
        date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
      } else {
        date = options.expires;
      }
      expires = '; expires=' + date.toUTCString(); // use expires attribute, max-age is not supported by IE
    }
    // NOTE Needed to parenthesize options.path and options.domain
    // in the following expressions, otherwise they evaluate to undefined
    // in the packed version for some reason...
    var path = options.path ? '; path=' + (options.path) : '';
    var domain = options.domain ? '; domain=' + (options.domain) : '';
    var secure = options.secure ? '; secure' : '';
    document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
  } else { // only name given, get cookie
    var cookieValue = null;
    if (document.cookie && document.cookie != '') {
      var cookies = document.cookie.split(';');
      for (var i = 0; i < cookies.length; i++) {
        var cookie = jQuery.trim(cookies[i]);
        // Does this cookie string begin with the name we want?
        if (cookie.substring(0, name.length + 1) == (name + '=')) {
          cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
          break;
        }
      }
    }
    return cookieValue;
  }
};

Drupal.behaviors.flagLink = {};
Drupal.behaviors.flagLink.attach = function(context) {
  // For anonymous users with the page cache enabled, swap out links with their
  // current state for the user.
  if (Drupal.settings.flag && Drupal.settings.flag.templates) {
    Drupal.flagAnonymousLinkTemplates(context);
  }

  // For all anonymous users, require JavaScript for flagging to prevent spiders
  // from flagging things inadvertently.
  if (Drupal.settings.flag && Drupal.settings.flag.anonymous) {
    Drupal.flagAnonymousLinks(context);
  }

  // On load, bind the click behavior for all links on the page.
  Drupal.flagLink(context);
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
