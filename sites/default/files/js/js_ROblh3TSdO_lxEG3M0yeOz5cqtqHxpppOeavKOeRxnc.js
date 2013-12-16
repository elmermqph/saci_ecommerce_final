(function ($) {

Drupal.behaviors.fusionHasJS = {
  attach: function (context, settings) {
    $('html').removeClass('no-js');
  }
};

Drupal.behaviors.fusionEqualheights = {
  attach: function (context, settings) {
    if (jQuery().equalHeights) {
      $("#header-top-wrapper div.equal-heights div.content").equalHeights();
      $("#header-group-wrapper div.equal-heights div.content").equalHeights();
      $("#preface-top-wrapper div.equal-heights div.content").equalHeights();
      $("#preface-bottom div.equal-heights div.content").equalHeights();
      $("#sidebar-first div.equal-heights div.content").equalHeights();
      $("#content-region div.equal-heights div.content").equalHeights();
      $("#node-top div.equal-heights div.content").equalHeights();
      $("#node-bottom div.equal-heights div.content").equalHeights();
      $("#sidebar-second div.equal-heights div.content").equalHeights();
      $("#postscript-top div.equal-heights div.content").equalHeights();
      $("#postscript-bottom-wrapper div.equal-heights div.content").equalHeights();
      $("#footer-wrapper div.equal-heights div.content").equalHeights();
    }
  }
};

Drupal.behaviors.fusionIE6fixes = {
  attach: function (context, settings) {
    // IE6 & less-specific functions
    // Add hover class to main menu li elements on hover
    if ($.browser.msie && ($.browser.version < 7)) {
      $('form input.form-submit').hover(function() {
        $(this).addClass('hover');
        }, function() {
          $(this).removeClass('hover');
      });
      $('#search input#search_header').hover(function() {
        $(this).addClass('hover');
        }, function() {
          $(this).removeClass('hover');
      });
    };
  }
};

Drupal.behaviors.fusionOverlabel = {
  attach: function (context, settings) {
    if (jQuery().overlabel) {
      $("div.fusion-horiz-login label").overlabel();
    }
  }
};

Drupal.behaviors.fusionGridMask = {
  attach: function (context, settings) {
    // Exit if grid mask not enabled
    if ($('body.grid-mask-enabled').size() == 0) {
      return;
    }

    var grid_width_pos = parseInt($('body').attr('class').indexOf('grid-width-')) + 11;
    var grid_width = $('body').attr('class').substring(grid_width_pos, grid_width_pos + 2);
    var grid = '<div id="grid-mask-overlay" class="full-width"><div class="region">';
    for (i = 1; i <= grid_width; i++) {
      grid += '<div class="block grid' + grid_width + '-1"><div class="gutter"></div></div>';
    }
    grid += '</div></div>';
    $('body.grid-mask-enabled').prepend(grid);
    $('#grid-mask-overlay .region').addClass('grid' + grid_width + '-' + grid_width);
    $('#grid-mask-overlay .block .gutter').height($('body').height());
  }
};

Drupal.behaviors.fusionGridMaskToggle = {
  attach: function (context, settings) {
    // Exit if grid mask not enabled
    if ($('body.grid-mask-enabled').size() == 0) {
      return;
    }

    $('body.grid-mask-enabled').prepend('<div id="grid-mask-toggle">grid</div>');
    $('div#grid-mask-toggle')
    .toggle( function () {
      $(this).toggleClass('grid-on');
      $('body').toggleClass('grid-mask');
    },
    function() {
      $(this).toggleClass('grid-on');
      $('body').toggleClass('grid-mask');
    });
  }
};

})(jQuery);;
// Zoom 1.3 - jQuery image zooming plugin
// (c) 2011 Jack Moore - jacklmoore.com
// license: www.opensource.org/licenses/mit-license.php
(function(a){var b={url:!1,icon:!0,grab:!1,callback:!1,duration:120};a.fn.zoom=function(c){return this.each(function(){var d=this,e=a(d),f=new Image,g=a(f),h,i=e.css("position"),j=a.extend({},b,c||{}),k="mousemove";e.css({position:/(absolute|fixed)/.test(i)?i:"relative",overflow:"hidden"});if(!j.url){j.url=e.find("img:first")[0].src;if(!j.url)return}j.icon&&(h=a('<div class="zoomIcon">').appendTo(e)),f.onload=function(){function n(){b=e.outerWidth(),c=e.outerHeight(),d=(f.width-b)/b,h=(f.height-c)/c}function o(a){i=a.pageX-m.left,l=a.pageY-m.top,i>b?i=b:i<0&&(i=0),l>c?l=c:l<0&&(l=0),f.style.left=i*-d+"px",f.style.top=l*-h+"px",a.preventDefault()}var b,c,d,h,i,l,m=e.offset();n(),g.addClass("zoomImg").css({position:"absolute",top:0,left:0,opacity:0,width:f.width,height:f.height,border:"none"}).appendTo(e),j.grab?g.mousedown(function(b){m=e.offset(),a(document).one("mouseup",function(){g.stop().fadeTo(j.duration,0),a(document).unbind(k,o)}),n(),o(b),g.stop().fadeTo(a.support.opacity?j.duration:0,1),a(document)[k](o),b.preventDefault()}):g.hover(function(){m=e.offset(),n(),g.stop().fadeTo(a.support.opacity?j.duration:0,1)},function(){g.stop().fadeTo(j.duration,0)})[k](function(a){f.style.left=(a.pageX-m.left)*-d+"px",f.style.top=(a.pageY-m.top)*-h+"px"}),a.isFunction(j.callback)&&j.callback.call(f)},f.src=j.url})},a.fn.zoom.defaults=b})(jQuery);;
/*
 * Masked Input Plugin for jQuery 1.2.1
 * Copyright (c) 2008 Josh Bush (digitalbush.com)
 * Licensed under the MIT (MIT-LICENSE.txt) 
 */
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('(4($){2 w=($.21.1V?\'1U\':\'1Q\')+".C";2 x=(1o.1E!=1A);$.C={1m:{\'9\':"[0-9]",\'a\':"[A-1k-z]",\'*\':"[A-1k-1s-9]"}};$.28.1i({D:4(b,c){3(5.y==0)6;3(1h b==\'1f\'){c=(1h c==\'1f\')?c:b;6 5.11(4(){3(5.13){5.1e();5.13(b,c)}B 3(5.1d){2 a=5.1d();a.1B(V);a.1z(\'Y\',c);a.1c(\'Y\',b);a.1x()}})}B{3(5[0].13){b=5[0].1w;c=5[0].1v}B 3(15.S&&15.S.1a){2 d=15.S.1a();b=0-d.1D().1c(\'Y\',-1y);c=b+d.29.y}6{I:b,W:c}}},X:4(){6 5.1F("X")},C:4(m,n){3(!m&&5.y>0){2 o=$(5[0]);2 q=o.R("12");6 $.18(o.R("14"),4(c,i){6 q[i]?c:E}).19(\'\')}n=$.1i({F:"1G",U:E},n);2 r=$.C.1m;2 q=[];2 s=m.y;2 u=E;2 v=m.y;$.11(m.1b(""),4(i,c){3(c==\'?\'){v--;s=i}B{q.1I(r[c]?20 22(r[c]):E);3(q[q.y-1]&&u==E)u=q.y-1}});6 5.11(4(){2 f=$(5);2 g=$.18(m.1b(""),4(c,i){3(c!=\'?\')6 r[c]?n.F:c});2 h=G;2 l=f.7();f.R("14",g).R("12",q);4 K(a){Z(++a<v){3(q[a])6 a}6 v};4 1g(a){Z(!q[a]&&a>=0)a--;P(2 i=a;i<v;i++){3(q[i]){g[i]=n.F;2 j=K(i);3(j<v&&q[i].O(g[j])){g[i]=g[j]}B Q}}H();f.D(1t.1u(u,a))};4 1j(a){P(2 i=a,c=n.F;i<v;i++){3(q[i]){2 j=K(i);2 t=g[i];g[i]=c;3(j<v&&q[j].O(t))c=t;B Q}}};4 1l(e){2 a=$(5).D();2 k=e.10;h=(k<16||(k>16&&k<17)||(k>17&&k<1n));3((a.I-a.W)!=0&&(!h||k==8||k==T))M(a.I,a.W);3(k==8||k==T||(x&&k==1H)){1g(a.I+(k==T?0:-1));6 G}B 3(k==27){M(0,v);H();$(5).D(u);6 G}};4 1p(e){3(h){h=G;6(e.10==8)?G:E}e=e||1o.1J;2 k=e.1K||e.10||e.1L;2 a=$(5).D();3(e.1M||e.1N){6 V}B 3((k>=1n&&k<=1O)||k==17||k>1P){2 p=K(a.I-1);3(p<v){2 c=1R.1S(k);3(q[p].O(c)){1j(p);g[p]=c;H();2 b=K(p);$(5).D(b);3(n.U&&b==v)n.U.1T(f)}}}6 G};4 M(a,b){P(2 i=a;i<b&&i<v;i++){3(q[i])g[i]=n.F}};4 H(){6 f.7(g.19(\'\')).7()};4 J(a){2 b=f.7();2 d=-1;P(2 i=0,N=0;i<v;i++){3(q[i]){g[i]=n.F;Z(N++<b.y){2 c=b.1W(N-1);3(q[i].O(c)){g[i]=c;d=i;Q}}3(N>b.y)Q}}3(!a&&d+1<s){f.7("");M(0,v)}B 3(a||d+1>=s){H();3(!a)f.7(f.7().1X(0,d+1))}6(s?i:u)};f.1Y("X",4(){f.1Z(".C").1q("14").1q("12")}).L("1e.C",4(){l=f.7();2 a=J();H();1r(4(){f.D(a)},0)}).L("23.C",4(){J();3(f.7()!=l)f.24()}).L("25.C",1l).L("26.C",1p).L(w,4(){1r(4(){f.D(J(V))},0)});J()})}})})(1C);',62,134,'||var|if|function|this|return|val|||||||||||||||||||||||||||length|||else|mask|caret|null|placeholder|false|writeBuffer|begin|checkVal|seekNext|bind|clearBuffer|pos|test|for|break|data|selection|46|completed|true|end|unmask|character|while|keyCode|each|tests|setSelectionRange|buffer|document||32|map|join|createRange|split|moveStart|createTextRange|focus|number|shiftL|typeof|extend|shiftR|Za|keydownEvent|definitions|41|window|keypressEvent|removeData|setTimeout|z0|Math|max|selectionEnd|selectionStart|select|100000|moveEnd|undefined|collapse|jQuery|duplicate|orientation|trigger|_|127|push|event|charCode|which|ctrlKey|altKey|122|186|input|String|fromCharCode|call|paste|msie|charAt|substring|one|unbind|new|browser|RegExp|blur|change|keydown|keypress||fn|text'.split('|'),0,{}));
/**
 * AW Masked Input
 * @version 1.2.1
 * @author Kendall Conrad
 * @url http://www.angelwatt.com/coding/masked_input.php
 * @created 2008-12-16
 * @modified 2012-08-22
 * @license This work is licensed under a Creative Commons
 *  Attribution-Share Alike 3.0 United States License
 *  http://creativecommons.org/licenses/by-sa/3.0/us/
 *
 * Argument pieces {
 * @param elm [req] text input node to apply the mask on
 * @param format [req] string format for the mask
 * @param allowed [opt, '0123456789'] string with chars allowed to be typed
 * @param sep [opt, '\/:-'] string of char(s) used as separators in mask
 * @param typeon [opt, '_YMDhms'] string of chars in mask that can be typed on
 * @param onbadkey [opt, null] function to run when user types a unallowed key
 * @param badkeywait [opt, 0] used with onbadkey. Indicates how long (in ms) to lock text input for onbadkey function to run
 * };
 */
(function(scope) {
'use strict';

scope.MaskedInput = function(args) {
	// Ensure passing in valid argument
	if (!args || !args.elm  || !args.format) {
		return null;
	}
	// Ensure use of 'new'
	if (!(this instanceof scope.MaskedInput)) {
		return new scope.MaskedInput(args);
	}
	// Initialize variables
	var self = this,
		el = args['elm'],
		format = args['format'],
		allowed = args['allowed'] || '0123456789',
		sep = args['separator'] || '\/:-',
		open = args['typeon'] || '_YMDhms',
		onbadkey = args['onbadkey'] || function(){},
		badwait = args['badkeywait'] || 0,
		// ----
		locked = false,
		startText = format;

	/**
	 * Add events to objects.
	 */
	var evtAdd = function(obj, type, fx, capture) {
		if (window.addEventListener) {
			return function (obj, type, fx, capture) {
				obj.addEventListener(type, fx,
					(capture === undefined) ? false : capture);
			};
		}
		if (window.attachEvent) {
			return function (obj, type, fx) {
				obj.attachEvent('on' + type, fx);
			};
		}
		return function (obj, type, fx) {
			obj['on' + type] = fx;
		};
	}();

	/**
	 * Initialize the object.
	 */
	var init = function() {
		// Check if an input or textarea tag was passed in
		if (!el.tagName || (el.tagName.toUpperCase() !== 'INPUT' && el.tagName.toUpperCase() !== 'TEXTAREA')) {
			return null;
		}

		el.value = format;
		// Assign events
		evtAdd(el, 'keydown', function(e) {
			KeyHandlerDown(e);
		});
		evtAdd(el, 'keypress', function(e) {
			KeyHandlerPress(e);
		});
		// Let us set the initial text state when focused
		evtAdd(el, 'focus', function() {
			startText = el.value;
		});
		// Handle onChange event manually
		evtAdd(el, 'blur', function() {
			if (el.value !== startText && el.onchange) {
				el.onchange();
			}
		});
		return self;
	};

	/**
	 * Gets the keyboard input in usable way.
	 * @param code integer character code
	 * @return string representing character code
	 */
	var GetKey = function(code) {
		code = code || window.event;
		var ch = '',
			keyCode = code.which,
			evt = code.type;
		if (keyCode == null) {
			keyCode = code.keyCode;
		}
		// no key, no play
		if (keyCode === null) {
			return '';
		}
		// deal with special keys
		switch (keyCode) {
		case 8:
			ch = 'bksp';
			break;
		case 46: // handle del and . both being 46
			ch = (evt == 'keydown') ? 'del' : '.';
			break;
		case 16:
			ch = 'shift';
			break;
		case 0: /*CRAP*/
		case 9: /*TAB*/
		case 13:/*ENTER*/
			ch = 'etc';
			break;
		case 37: case 38: case 39: case 40: // arrow keys
			ch = (!code.shiftKey &&
					 (code.charCode != 39 && code.charCode !== undefined)) ?
				'etc' : String.fromCharCode(keyCode);
			break;
		// default to thinking it's a character or digit
		default:
			ch = String.fromCharCode(keyCode);
		}
		return ch;
	};

	/**
	 * Stop the event propogation chain.
	 * @param evt Event to stop
	 * @param ret boolean, used for IE to prevent default event
	 */
	var stopEvent = function(evt, ret) {
		// Stop default behavior the standard way
		if (evt.preventDefault) {
			evt.preventDefault();
		}
		// Then there's IE
        evt.returnValue = ret || false;
	};

	/**
	 * Handles the key down events.
	 * @param e Event
	 */
	var KeyHandlerDown = function(e) {
		e = e || event;
		if (locked) {
			stopEvent(e);
			return false;
		}
		var key = GetKey(e);
		// Stop copy and paste
		if ((e.metaKey || e.ctrlKey) && (key == 'X' || key == 'V')) {
			stopEvent(e);
			return false;
		}
		// Allow for OS commands
		if (e.metaKey || e.ctrlKey) {
			return true;
		}
		if (el.value == '') {
			el.value = format;
			SetTextCursor(el,0);
		}
		// Only do update for bksp del
		if (key == 'bksp' || key == 'del') {
			Update(key);
			stopEvent(e);
			return false;
		}
		else {
            return true;
		}
	};

	/**
	 * Handles the key press events.
	 * @param e Event
	 */
	var KeyHandlerPress = function(e) {
		e = e || event;
		if (locked) {
			stopEvent(e);
			return false;
		}
		var key = GetKey(e);
		// Check if modifier key is being pressed; command
		if (key=='etc' || e.metaKey || e.ctrlKey || e.altKey) {
			return true;
		}
		if (key != 'bksp' && key != 'del' && key != 'shift') {
			if (!GoodOnes(key)) {
				stopEvent(e);
				return false;
			}
			if (Update(key)) {
				stopEvent(e, true);
				return true;
			}
			stopEvent(e);
			return false;
		}
		else {
			return false;
		}
	};

	/**
	 * Updates the text field with the given key.
	 * @param key string keyboard input.
	 */
	var Update = function(key) {
		var p = GetTextCursor(el),
			c = el.value,
			val = '';
		// Handle keys now
		switch (true) {
		// Allowed characters
		case (allowed.indexOf(key) != -1):
			// if text cursor at end
			if (++p > format.length) {
				return false;
			}
			// Handle cases where user places cursor before separator
			while (sep.indexOf(c.charAt(p-1)) != -1 && p <= format.length) {
				p++;
			}
			val = c.substr(0, p-1) + key + c.substr(p);
			// Move csor up a spot if next char is a separator char
			if (allowed.indexOf(c.charAt(p)) == -1
					&& open.indexOf(c.charAt(p)) == -1) {
				p++;
			}
			break;
		case (key=='bksp'): // backspace
			// at start of field
			if (--p < 0) {
				return false;
			}
			// If previous char is a separator, move a little more
			while (allowed.indexOf(c.charAt(p)) == -1
					&& open.indexOf(c.charAt(p)) == -1
					&& p > 1) {
				p--;
			}
			val = c.substr(0, p) + format.substr(p,1) + c.substr(p+1);
			break;
		case (key=='del'): // forward delete
			// at end of field
			if (p >= c.length) {
				return false;
			}
			// If next char is a separator and not the end of the text field
			while (sep.indexOf(c.charAt(p)) != -1
					 && c.charAt(p) != '') {
				p++;
			}
			val = c.substr(0, p) + format.substr(p,1) + c.substr(p+1);
			p++; // Move position forward
			break;
		case (key=='etc'):
			// Catch other allowed chars
			return true;
		default:
			return false; // Ignore the rest
		}
		el.value = ''; // blank it first (Firefox issue)
		el.value = val; // put updated value back in
		SetTextCursor(el, p); // Set the text cursor
		return false;
	};

	/**
	 * Gets the current position of the text cursor in a text field.
	 * @param node a input or textarea HTML node.
	 * @return int text cursor position index, or -1 if there was a problem.
	 */
	var GetTextCursor = function(node) {
		try {
			if (node.selectionStart >= 0) {
				return node.selectionStart;
			}
			else if (document.selection) {// IE
				var ntxt = node.value; // getting starting text
				var rng = document.selection.createRange();
				rng.text = '|%|';
				var start = node.value.indexOf('|%|');
				rng.moveStart('character', -3);
				rng.text = '';
				// put starting text back in,
				// fixes issue if all text was highlighted
				node.value = ntxt;
				return start;
			}
			return -1;
		}
		catch(e) {
			return -1;
		}
	};

	/**
	 * Sets the text cursor in a text field to a specific position.
	 * @param node a input or textarea HTML node.
	 * @param pos int of the position to be placed.
	 * @return boolean true is successful, false otherwise.
	 */
	var SetTextCursor = function(node, pos) {
		try {
			if (node.selectionStart) {
				node.focus();
				node.setSelectionRange(pos,pos);
			}
			else if (node.createTextRange) { // IE
				var rng = node.createTextRange();
				rng.move('character', pos);
				rng.select();
			}
		}
		catch(e) {
			return false;
		}
		return true;
	};

	/**
	 * Returns whether or not a given input is valid for the mask.
	 * @param k string of character to check.
	 * @return bool true if it's a valid character.
	 */
	var GoodOnes = function(k) {
		// if not in allowed list, or invisible key action
		if (allowed.indexOf(k) == -1 && k!='bksp' && k!='del' && k!='etc') {
			// Need to ensure cursor position not lost
			var p = GetTextCursor(el);
			locked = true;
			onbadkey();
			// Hold lock long enough for onbadkey function to run
			setTimeout(function() {
				locked = false;
				SetTextCursor(el,p);
			}, badwait);
			return false;
		}
		return true;
	};

	/**
	 * Resets the text field so just the format is present.
	 */
	self.resetField = function() {
		el.value = format;
	};

	/**
	 * Set the allowed characters that can be used in the mask.
	 * @param a string of characters that can be used.
	 */
	self.setAllowed = function(a) {
		allowed = a;
		resetField();
	};

	/**
	 * The format to be used in the mask.
	 * @param f string of the format.
	 */
	self.setFormat = function(f) {
		format = f;
		resetField();
	};

	/**
	 * Set the characters to be used as separators.
	 * @param s string representing the separator characters.
	 */
	self.setSeparator = function(s) {
		sep = s;
		resetField();
	};

	/**
	 * Set the characters that the user will be typing over.
	 * @param t string representing the characters that will be typed over.
	 */
	self.setTypeon = function(t) {
		open = t;
		resetField();
	};

	return init();
}
})(window);
;
