
(function ($) {
  var BrowserClass = {
    init: function() {
      this.agent = navigator.userAgent.toLowerCase();
      this.browser = this.checkBrowser();
      this.platform = this.checkPlatform();
      this.classes = this.browser.concat(this.platform);
    },

    checkBrowser: function() {
      var classes = Array();
      var matches = Array();
      var aresult = '';
      var aversion = '';
      var resultant = '';

      if (this.agent.match(/msie/)) {
        classes.push('ie');

        reg_res = this.agent.match(/.*msie ([0-9]*)\..*/);
        classes.push('ie' + reg_res[1]);

      }

      if (this.agent.match(/opera/)) {
        classes.push('opera');
        
        aresult = this.stristr(this.agent, 'version').split('/');
        if(aresult[1]) {
          aversion = aresult[1].split(' ');
          classes.push('opera' + this.clearVersion(aversion[0]));
        }
      }

      // Chrome is send safari header too
      if (this.agent.match(/chrome/)) {
        classes.push('chrome');
        
        aresult = this.stristr(this.agent, 'chrome').split('/');
        aversion = aresult[1].split(' ');
        classes.push('chrome' + this.clearVersion(aversion[0]));
        
      } else if (this.agent.match(/safari/)) {
        classes.push('safari');
        aresult = this.stristr(this.agent, 'version').split('/');
        
        if(aresult[1]) {
          aversion = aresult[1].split(' ');
          classes.push('safari' + this.clearVersion(aversion[0]));
        }
      }

      if (this.agent.match(/netscape/)) {
        classes.push('netscape');
        
        matches = this.agent.match(/navigator\/([^ ]*)/);
        if (matches) {
          classes.push('netscape' + this.clearVersion(matches[1]));
        }
        else {
          matches = this.agent.match(/netscape6?\/([^ ]*)/);
          if (matches) {
            classes.push('netscape' + this.clearVersion(matches[1]));
          }
        }
      }

      if (this.agent.match(/firefox/)) {
        classes.push('ff');
        matches = this.agent.match(/firefox[\/ \(]([^ ;\)]+)/);
        if(matches) {
          classes.push('ff' + this.clearVersion(matches[1]));
        }
      }

      if (this.agent.match(/konqueror/)) {
        classes.push('konqueror');
        
        aresult = this.stristr(this.agent, 'konqueror').split(' ');
        aversion = aresult[0].split('/');
        classes.push('konqueror' + this.clearVersion(aversion[1]));
      }

      if (this.agent.match(/dillo/)) {
        classes.push('dillo');
      }

      if (this.agent.match(/chimera/)) {
        classes.push('chimera');
      }

      if (this.agent.match(/beonex/)) {
        classes.push('beonex');
      }

      if (this.agent.match(/aweb/)) {
        classes.push('aweb');
      }

      if (this.agent.match(/amaya/)) {
        classes.push('amaya');
      }

      if (this.agent.match(/icab/)) {
        classes.push('icab');
      }

      if (this.agent.match(/lynx/)) {
        classes.push('lynx');
      }

      if (this.agent.match(/galeon/)) {
        classes.push('galeon');
      }

      if (this.agent.match(/opera mini/)) {
        classes.push('operamini');
        
        resultant = this.stristr(this.agent, 'opera mini');
        if(resultant.match('/\//')) {
          aresult = resultant.split('/');
          aversion = aresult[1].split(' ');
          classes.push('operamini' + this.clearVersion(aversion[0]));
        }
        else {
          aversion = this.stristr(resultant, 'opera mini').split(' ');
          classes.push('operamini' + this.clearVersion(aversion[1]));
        }
      }

      return classes;
    },

    checkPlatform: function() {
      var classes = Array();

      if (this.agent.match(/windows/)) {
        classes.push('win');
      }

      if (this.agent.match(/ipad/)) {
        classes.push('ipad');
      }

      if (this.agent.match(/ipod/)) {
        classes.push('ipod');
      }

      if (this.agent.match(/iphone/)) {
        classes.push('iphone');
      }

      if (this.agent.match(/mac/)) {
        classes.push('mac');
      }

      if (this.agent.match(/android/)) {
        classes.push('android');
      }

      if (this.agent.match(/linux/)) {
        classes.push('linux');
      }

      if (this.agent.match(/nokia/)) {
        classes.push('nokia');
      }

      if (this.agent.match(/blackberry/)) {
        classes.push('blackberry');
      }

      if (this.agent.match(/freebsd/)) {
        classes.push('freebsd');
      }

      if (this.agent.match(/openbsd/)) {
        classes.push('openbsd');
      }

      if (this.agent.match(/netbsd/)) {
        classes.push('netbsd');
      }

      return classes;
    },
    
    clearVersion: function(version) {
      version = version.replace('/[^0-9,.,a-z,A-Z-]/', '');
      var find = (version + '').indexOf('.');
      return version.substr(0, find);
    },
    
    stristr: function(haystack, needle, bool) {
      // Finds first occurrence of a string within another, case insensitive  
      // 
      // version: 1103.1210
      // discuss at: http://phpjs.org/functions/stristr
      // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
      // +   bugfxied by: Onno Marsman
      // *     example 1: stristr('Kevin van Zonneveld', 'Van');
      // *     returns 1: 'van Zonneveld'
      // *     example 2: stristr('Kevin van Zonneveld', 'VAN', true);
      // *     returns 2: 'Kevin '
      var pos = 0;

      haystack += '';
      pos = haystack.toLowerCase().indexOf((needle + '').toLowerCase());
      if (pos == -1) {
          return false;
      } else {
          if (bool) {
              return haystack.substr(0, pos);
          } else {
              return haystack.slice(pos);
          }
      }
    }

  };

  BrowserClass.init();
  $('body').addClass(BrowserClass.classes.join(' '));
})(jQuery);;
(function($) {

/**
 * Initialize editor libraries.
 *
 * Some editors need to be initialized before the DOM is fully loaded. The
 * init hook gives them a chance to do so.
 */
Drupal.wysiwygInit = function() {
  // This breaks in Konqueror. Prevent it from running.
  if (/KDE/.test(navigator.vendor)) {
    return;
  }

  jQuery.each(Drupal.wysiwyg.editor.init, function(editor) {
    // Clone, so original settings are not overwritten.
    this(jQuery.extend(true, {}, Drupal.settings.wysiwyg.configs[editor]));
  });
};

/**
 * Attach editors to input formats and target elements (f.e. textareas).
 *
 * This behavior searches for input format selectors and formatting guidelines
 * that have been preprocessed by Wysiwyg API. All CSS classes of those elements
 * with the prefix 'wysiwyg-' are parsed into input format parameters, defining
 * the input format, configured editor, target element id, and variable other
 * properties, which are passed to the attach/detach hooks of the corresponding
 * editor.
 *
 * Furthermore, an "enable/disable rich-text" toggle link is added after the
 * target element to allow users to alter its contents in plain text.
 *
 * This is executed once, while editor attach/detach hooks can be invoked
 * multiple times.
 *
 * @param context
 *   A DOM element, supplied by Drupal.attachBehaviors().
 */
Drupal.behaviors.attachWysiwyg = {
  attach: function(context, settings) {
    // This breaks in Konqueror. Prevent it from running.
    if (/KDE/.test(navigator.vendor)) {
      return;
    }

    $('.wysiwyg', context).once('wysiwyg', function() {
      if (!this.id || typeof Drupal.settings.wysiwyg.triggers[this.id] === 'undefined') {
        return;
      }
      var $this = $(this);
      var params = Drupal.settings.wysiwyg.triggers[this.id];
      for (var format in params) {
        params[format].format = format;
        params[format].trigger = this.id;
        params[format].field = params.field;
      }
      var format = 'format' + this.value;
      // Directly attach this editor, if the input format is enabled or there is
      // only one input format at all.
      if ($this.is(':input')) {
        Drupal.wysiwygAttach(context, params[format]);
      }
      // Attach onChange handlers to input format selector elements.
      if ($this.is('select')) {
        $this.change(function() {
          // If not disabled, detach the current and attach a new editor.
          Drupal.wysiwygDetach(context, params[format]);
          format = 'format' + this.value;
          Drupal.wysiwygAttach(context, params[format]);
        });
      }
      // Detach any editor when the containing form is submitted.
      $('#' + params.field).parents('form').submit(function (event) {
        // Do not detach if the event was cancelled.
        if (event.isDefaultPrevented()) {
          return;
        }
        Drupal.wysiwygDetach(context, params[format]);
      });
    });
  }
};

/**
 * Attach an editor to a target element.
 *
 * This tests whether the passed in editor implements the attach hook and
 * invokes it if available. Editor profile settings are cloned first, so they
 * cannot be overridden. After attaching the editor, the toggle link is shown
 * again, except in case we are attaching no editor.
 *
 * @param context
 *   A DOM element, supplied by Drupal.attachBehaviors().
 * @param params
 *   An object containing input format parameters.
 */
Drupal.wysiwygAttach = function(context, params) {
  if (typeof Drupal.wysiwyg.editor.attach[params.editor] == 'function') {
    // (Re-)initialize field instance.
    Drupal.wysiwyg.instances[params.field] = {};
    // Provide all input format parameters to editor instance.
    jQuery.extend(Drupal.wysiwyg.instances[params.field], params);
    // Provide editor callbacks for plugins, if available.
    if (typeof Drupal.wysiwyg.editor.instance[params.editor] == 'object') {
      jQuery.extend(Drupal.wysiwyg.instances[params.field], Drupal.wysiwyg.editor.instance[params.editor]);
    }
    // Store this field id, so (external) plugins can use it.
    // @todo Wrong point in time. Probably can only supported by editors which
    //   support an onFocus() or similar event.
    Drupal.wysiwyg.activeId = params.field;
    // Attach or update toggle link, if enabled.
    if (params.toggle) {
      Drupal.wysiwygAttachToggleLink(context, params);
    }
    // Otherwise, ensure that toggle link is hidden.
    else {
      $('#wysiwyg-toggle-' + params.field).hide();
    }
    // Attach editor, if enabled by default or last state was enabled.
    if (params.status) {
      Drupal.wysiwyg.editor.attach[params.editor](context, params, (Drupal.settings.wysiwyg.configs[params.editor] ? jQuery.extend(true, {}, Drupal.settings.wysiwyg.configs[params.editor][params.format]) : {}));
    }
    // Otherwise, attach default behaviors.
    else {
      Drupal.wysiwyg.editor.attach.none(context, params);
      Drupal.wysiwyg.instances[params.field].editor = 'none';
    }
  }
};

/**
 * Detach all editors from a target element.
 *
 * @param context
 *   A DOM element, supplied by Drupal.attachBehaviors().
 * @param params
 *   An object containing input format parameters.
 */
Drupal.wysiwygDetach = function(context, params) {
  var editor = Drupal.wysiwyg.instances[params.field].editor;
  if (jQuery.isFunction(Drupal.wysiwyg.editor.detach[editor])) {
    Drupal.wysiwyg.editor.detach[editor](context, params);
  }
};

/**
 * Append or update an editor toggle link to a target element.
 *
 * @param context
 *   A DOM element, supplied by Drupal.attachBehaviors().
 * @param params
 *   An object containing input format parameters.
 */
Drupal.wysiwygAttachToggleLink = function(context, params) {
  if (!$('#wysiwyg-toggle-' + params.field).length) {
    var text = document.createTextNode(params.status ? Drupal.settings.wysiwyg.disable : Drupal.settings.wysiwyg.enable);
    var a = document.createElement('a');
    $(a).attr({ id: 'wysiwyg-toggle-' + params.field, href: 'javascript:void(0);' }).append(text);
    var div = document.createElement('div');
    $(div).addClass('wysiwyg-toggle-wrapper').append(a);
    $('#' + params.field).after(div);
  }
  $('#wysiwyg-toggle-' + params.field)
    .html(params.status ? Drupal.settings.wysiwyg.disable : Drupal.settings.wysiwyg.enable).show()
    .unbind('click.wysiwyg', Drupal.wysiwyg.toggleWysiwyg)
    .bind('click.wysiwyg', { params: params, context: context }, Drupal.wysiwyg.toggleWysiwyg);

  // Hide toggle link in case no editor is attached.
  if (params.editor == 'none') {
    $('#wysiwyg-toggle-' + params.field).hide();
  }
};

/**
 * Callback for the Enable/Disable rich editor link.
 */
Drupal.wysiwyg.toggleWysiwyg = function (event) {
  var context = event.data.context;
  var params = event.data.params;
  if (params.status) {
    // Detach current editor.
    params.status = false;
    Drupal.wysiwygDetach(context, params);
    // After disabling the editor, re-attach default behaviors.
    // @todo We HAVE TO invoke Drupal.wysiwygAttach() here.
    Drupal.wysiwyg.editor.attach.none(context, params);
    Drupal.wysiwyg.instances[params.field] = Drupal.wysiwyg.editor.instance.none;
    Drupal.wysiwyg.instances[params.field].editor = 'none';
    $(this).html(Drupal.settings.wysiwyg.enable).blur();
  }
  else {
    // Before enabling the editor, detach default behaviors.
    Drupal.wysiwyg.editor.detach.none(context, params);
    // Attach new editor using parameters of the currently selected input format.
    params = Drupal.settings.wysiwyg.triggers[params.trigger]['format' + $('#' + params.trigger).val()];
    params.status = true;
    Drupal.wysiwygAttach(context, params);
    $(this).html(Drupal.settings.wysiwyg.disable).blur();
  }
}

/**
 * Parse the CSS classes of an input format DOM element into parameters.
 *
 * Syntax for CSS classes is "wysiwyg-name-value".
 *
 * @param element
 *   An input format DOM element containing CSS classes to parse.
 * @param params
 *   (optional) An object containing input format parameters to update.
 */
Drupal.wysiwyg.getParams = function(element, params) {
  var classes = element.className.split(' ');
  var params = params || {};
  for (var i = 0; i < classes.length; i++) {
    if (classes[i].substr(0, 8) == 'wysiwyg-') {
      var parts = classes[i].split('-');
      var value = parts.slice(2).join('-');
      params[parts[1]] = value;
    }
  }
  // Convert format id into string.
  params.format = 'format' + params.format;
  // Convert numeric values.
  params.status = parseInt(params.status, 10);
  params.toggle = parseInt(params.toggle, 10);
  params.resizable = parseInt(params.resizable, 10);
  return params;
};

/**
 * Allow certain editor libraries to initialize before the DOM is loaded.
 */
Drupal.wysiwygInit();

})(jQuery);
;
