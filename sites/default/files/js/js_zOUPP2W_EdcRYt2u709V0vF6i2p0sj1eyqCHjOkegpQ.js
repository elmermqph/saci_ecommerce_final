// ColorBox v1.3.19.3 - jQuery lightbox plugin
// (c) 2011 Jack Moore - jacklmoore.com
// License: http://www.opensource.org/licenses/mit-license.php
(function(a,b,c){function Z(c,d,e){var g=b.createElement(c);return d&&(g.id=f+d),e&&(g.style.cssText=e),a(g)}function $(a){var b=y.length,c=(Q+a)%b;return c<0?b+c:c}function _(a,b){return Math.round((/%/.test(a)?(b==="x"?z.width():z.height())/100:1)*parseInt(a,10))}function ab(a){return K.photo||/\.(gif|png|jpe?g|bmp|ico)((#|\?).*)?$/i.test(a)}function bb(){var b,c=a.data(P,e);c==null?(K=a.extend({},d),console&&console.log&&console.log("Error: cboxElement missing settings object")):K=a.extend({},c);for(b in K)a.isFunction(K[b])&&b.slice(0,2)!=="on"&&(K[b]=K[b].call(P));K.rel=K.rel||P.rel||"nofollow",K.href=K.href||a(P).attr("href"),K.title=K.title||P.title,typeof K.href=="string"&&(K.href=a.trim(K.href))}function cb(b,c){a.event.trigger(b),c&&c.call(P)}function db(){var a,b=f+"Slideshow_",c="click."+f,d,e,g;K.slideshow&&y[1]?(d=function(){F.text(K.slideshowStop).unbind(c).bind(j,function(){if(K.loop||y[Q+1])a=setTimeout(W.next,K.slideshowSpeed)}).bind(i,function(){clearTimeout(a)}).one(c+" "+k,e),r.removeClass(b+"off").addClass(b+"on"),a=setTimeout(W.next,K.slideshowSpeed)},e=function(){clearTimeout(a),F.text(K.slideshowStart).unbind([j,i,k,c].join(" ")).one(c,function(){W.next(),d()}),r.removeClass(b+"on").addClass(b+"off")},K.slideshowAuto?d():e()):r.removeClass(b+"off "+b+"on")}function eb(b){U||(P=b,bb(),y=a(P),Q=0,K.rel!=="nofollow"&&(y=a("."+g).filter(function(){var b=a.data(this,e),c;return b&&(c=b.rel||this.rel),c===K.rel}),Q=y.index(P),Q===-1&&(y=y.add(P),Q=y.length-1)),S||(S=T=!0,r.show(),K.returnFocus&&a(P).blur().one(l,function(){a(this).focus()}),q.css({opacity:+K.opacity,cursor:K.overlayClose?"pointer":"auto"}).show(),K.w=_(K.initialWidth,"x"),K.h=_(K.initialHeight,"y"),W.position(),o&&z.bind("resize."+p+" scroll."+p,function(){q.css({width:z.width(),height:z.height(),top:z.scrollTop(),left:z.scrollLeft()})}).trigger("resize."+p),cb(h,K.onOpen),J.add(D).hide(),I.html(K.close).show()),W.load(!0))}function fb(){!r&&b.body&&(Y=!1,z=a(c),r=Z(X).attr({id:e,"class":n?f+(o?"IE6":"IE"):""}).hide(),q=Z(X,"Overlay",o?"position:absolute":"").hide(),s=Z(X,"Wrapper"),t=Z(X,"Content").append(A=Z(X,"LoadedContent","width:0; height:0; overflow:hidden"),C=Z(X,"LoadingOverlay").add(Z(X,"LoadingGraphic")),D=Z(X,"Title"),E=Z(X,"Current"),G=Z(X,"Next"),H=Z(X,"Previous"),F=Z(X,"Slideshow").bind(h,db),I=Z(X,"Close")),s.append(Z(X).append(Z(X,"TopLeft"),u=Z(X,"TopCenter"),Z(X,"TopRight")),Z(X,!1,"clear:left").append(v=Z(X,"MiddleLeft"),t,w=Z(X,"MiddleRight")),Z(X,!1,"clear:left").append(Z(X,"BottomLeft"),x=Z(X,"BottomCenter"),Z(X,"BottomRight"))).find("div div").css({"float":"left"}),B=Z(X,!1,"position:absolute; width:9999px; visibility:hidden; display:none"),J=G.add(H).add(E).add(F),a(b.body).append(q,r.append(s,B)))}function gb(){return r?(Y||(Y=!0,L=u.height()+x.height()+t.outerHeight(!0)-t.height(),M=v.width()+w.width()+t.outerWidth(!0)-t.width(),N=A.outerHeight(!0),O=A.outerWidth(!0),r.css({"padding-bottom":L,"padding-right":M}),G.click(function(){W.next()}),H.click(function(){W.prev()}),I.click(function(){W.close()}),q.click(function(){K.overlayClose&&W.close()}),a(b).bind("keydown."+f,function(a){var b=a.keyCode;S&&K.escKey&&b===27&&(a.preventDefault(),W.close()),S&&K.arrowKey&&y[1]&&(b===37?(a.preventDefault(),H.click()):b===39&&(a.preventDefault(),G.click()))}),a("."+g,b).live("click",function(a){a.which>1||a.shiftKey||a.altKey||a.metaKey||(a.preventDefault(),eb(this))})),!0):!1}var d={transition:"elastic",speed:300,width:!1,initialWidth:"600",innerWidth:!1,maxWidth:!1,height:!1,initialHeight:"450",innerHeight:!1,maxHeight:!1,scalePhotos:!0,scrolling:!0,inline:!1,html:!1,iframe:!1,fastIframe:!0,photo:!1,href:!1,title:!1,rel:!1,opacity:.9,preloading:!0,current:"image {current} of {total}",previous:"previous",next:"next",close:"close",xhrError:"This content failed to load.",imgError:"This image failed to load.",open:!1,returnFocus:!0,reposition:!0,loop:!0,slideshow:!1,slideshowAuto:!0,slideshowSpeed:2500,slideshowStart:"start slideshow",slideshowStop:"stop slideshow",onOpen:!1,onLoad:!1,onComplete:!1,onCleanup:!1,onClosed:!1,overlayClose:!0,escKey:!0,arrowKey:!0,top:!1,bottom:!1,left:!1,right:!1,fixed:!1,data:undefined},e="colorbox",f="cbox",g=f+"Element",h=f+"_open",i=f+"_load",j=f+"_complete",k=f+"_cleanup",l=f+"_closed",m=f+"_purge",n=!a.support.opacity&&!a.support.style,o=n&&!c.XMLHttpRequest,p=f+"_IE6",q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X="div",Y;if(a.colorbox)return;a(fb),W=a.fn[e]=a[e]=function(b,c){var f=this;b=b||{},fb();if(gb()){if(!f[0]){if(f.selector)return f;f=a("<a/>"),b.open=!0}c&&(b.onComplete=c),f.each(function(){a.data(this,e,a.extend({},a.data(this,e)||d,b))}).addClass(g),(a.isFunction(b.open)&&b.open.call(f)||b.open)&&eb(f[0])}return f},W.position=function(a,b){function i(a){u[0].style.width=x[0].style.width=t[0].style.width=a.style.width,t[0].style.height=v[0].style.height=w[0].style.height=a.style.height}var c=0,d=0,e=r.offset(),g,h;z.unbind("resize."+f),r.css({top:-9e4,left:-9e4}),g=z.scrollTop(),h=z.scrollLeft(),K.fixed&&!o?(e.top-=g,e.left-=h,r.css({position:"fixed"})):(c=g,d=h,r.css({position:"absolute"})),K.right!==!1?d+=Math.max(z.width()-K.w-O-M-_(K.right,"x"),0):K.left!==!1?d+=_(K.left,"x"):d+=Math.round(Math.max(z.width()-K.w-O-M,0)/2),K.bottom!==!1?c+=Math.max(z.height()-K.h-N-L-_(K.bottom,"y"),0):K.top!==!1?c+=_(K.top,"y"):c+=Math.round(Math.max(z.height()-K.h-N-L,0)/2),r.css({top:e.top,left:e.left}),a=r.width()===K.w+O&&r.height()===K.h+N?0:a||0,s[0].style.width=s[0].style.height="9999px",r.dequeue().animate({width:K.w+O,height:K.h+N,top:c,left:d},{duration:a,complete:function(){i(this),T=!1,s[0].style.width=K.w+O+M+"px",s[0].style.height=K.h+N+L+"px",K.reposition&&setTimeout(function(){z.bind("resize."+f,W.position)},1),b&&b()},step:function(){i(this)}})},W.resize=function(a){S&&(a=a||{},a.width&&(K.w=_(a.width,"x")-O-M),a.innerWidth&&(K.w=_(a.innerWidth,"x")),A.css({width:K.w}),a.height&&(K.h=_(a.height,"y")-N-L),a.innerHeight&&(K.h=_(a.innerHeight,"y")),!a.innerHeight&&!a.height&&(A.css({height:"auto"}),K.h=A.height()),A.css({height:K.h}),W.position(K.transition==="none"?0:K.speed))},W.prep=function(b){function g(){return K.w=K.w||A.width(),K.w=K.mw&&K.mw<K.w?K.mw:K.w,K.w}function h(){return K.h=K.h||A.height(),K.h=K.mh&&K.mh<K.h?K.mh:K.h,K.h}if(!S)return;var c,d=K.transition==="none"?0:K.speed;A.remove(),A=Z(X,"LoadedContent").append(b),A.hide().appendTo(B.show()).css({width:g(),overflow:K.scrolling?"auto":"hidden"}).css({height:h()}).prependTo(t),B.hide(),a(R).css({"float":"none"}),o&&a("select").not(r.find("select")).filter(function(){return this.style.visibility!=="hidden"}).css({visibility:"hidden"}).one(k,function(){this.style.visibility="inherit"}),c=function(){function s(){n&&r[0].style.removeAttribute("filter")}var b,c,g=y.length,h,i="frameBorder",k="allowTransparency",l,o,p,q;if(!S)return;l=function(){clearTimeout(V),C.hide(),cb(j,K.onComplete)},n&&R&&A.fadeIn(100),D.html(K.title).add(A).show();if(g>1){typeof K.current=="string"&&E.html(K.current.replace("{current}",Q+1).replace("{total}",g)).show(),G[K.loop||Q<g-1?"show":"hide"]().html(K.next),H[K.loop||Q?"show":"hide"]().html(K.previous),K.slideshow&&F.show();if(K.preloading){b=[$(-1),$(1)];while(c=y[b.pop()])q=a.data(c,e),q&&q.href?(o=q.href,a.isFunction(o)&&(o=o.call(c))):o=c.href,ab(o)&&(p=new Image,p.src=o)}}else J.hide();K.iframe?(h=Z("iframe")[0],i in h&&(h[i]=0),k in h&&(h[k]="true"),h.name=f+ +(new Date),K.fastIframe?l():a(h).one("load",l),h.src=K.href,K.scrolling||(h.scrolling="no"),a(h).addClass(f+"Iframe").appendTo(A).one(m,function(){h.src="//about:blank"})):l(),K.transition==="fade"?r.fadeTo(d,1,s):s()},K.transition==="fade"?r.fadeTo(d,0,function(){W.position(0,c)}):W.position(d,c)},W.load=function(b){var c,d,e=W.prep;T=!0,R=!1,P=y[Q],b||bb(),cb(m),cb(i,K.onLoad),K.h=K.height?_(K.height,"y")-N-L:K.innerHeight&&_(K.innerHeight,"y"),K.w=K.width?_(K.width,"x")-O-M:K.innerWidth&&_(K.innerWidth,"x"),K.mw=K.w,K.mh=K.h,K.maxWidth&&(K.mw=_(K.maxWidth,"x")-O-M,K.mw=K.w&&K.w<K.mw?K.w:K.mw),K.maxHeight&&(K.mh=_(K.maxHeight,"y")-N-L,K.mh=K.h&&K.h<K.mh?K.h:K.mh),c=K.href,V=setTimeout(function(){C.show()},100),K.inline?(Z(X).hide().insertBefore(a(c)[0]).one(m,function(){a(this).replaceWith(A.children())}),e(a(c))):K.iframe?e(" "):K.html?e(K.html):ab(c)?(a(R=new Image).addClass(f+"Photo").error(function(){K.title=!1,e(Z(X,"Error").html(K.imgError))}).load(function(){var a;R.onload=null,K.scalePhotos&&(d=function(){R.height-=R.height*a,R.width-=R.width*a},K.mw&&R.width>K.mw&&(a=(R.width-K.mw)/R.width,d()),K.mh&&R.height>K.mh&&(a=(R.height-K.mh)/R.height,d())),K.h&&(R.style.marginTop=Math.max(K.h-R.height,0)/2+"px"),y[1]&&(K.loop||y[Q+1])&&(R.style.cursor="pointer",R.onclick=function(){W.next()}),n&&(R.style.msInterpolationMode="bicubic"),setTimeout(function(){e(R)},1)}),setTimeout(function(){R.src=c},1)):c&&B.load(c,K.data,function(b,c,d){e(c==="error"?Z(X,"Error").html(K.xhrError):a(this).contents())})},W.next=function(){!T&&y[1]&&(K.loop||y[Q+1])&&(Q=$(1),W.load())},W.prev=function(){!T&&y[1]&&(K.loop||Q)&&(Q=$(-1),W.load())},W.close=function(){S&&!U&&(U=!0,S=!1,cb(k,K.onCleanup),z.unbind("."+f+" ."+p),q.fadeTo(200,0),r.stop().fadeTo(300,0,function(){r.add(q).css({opacity:1,cursor:"auto"}).hide(),cb(m),A.remove(),setTimeout(function(){U=!1,cb(l,K.onClosed)},1)}))},W.remove=function(){a([]).add(r).add(q).remove(),r=null,a("."+g).removeData(e).removeClass(g).die()},W.element=function(){return a(P)},W.settings=d})(jQuery,document,this);;
(function ($) {

Drupal.behaviors.initColorbox = {
  attach: function (context, settings) {
    if (!$.isFunction($.colorbox)) {
      return;
    }
    $('a, area, input', context)
      .filter('.colorbox')
      .once('init-colorbox-processed')
      .colorbox(settings.colorbox);
  }
};

{
  $(document).bind('cbox_complete', function () {
    Drupal.attachBehaviors('#cboxLoadedContent');
  });
}

})(jQuery);
;
(function ($) {

Drupal.behaviors.initColorboxDefaultStyle = {
  attach: function (context, settings) {
    $(document).bind('cbox_complete', function () {
      // Only run if there is a title.
      if ($('#cboxTitle:empty', context).length == false) {
        setTimeout(function () { $('#cboxTitle', context).slideUp() }, 1500);
        $('#cboxLoadedContent img', context).bind('mouseover', function () {
          $('#cboxTitle', context).slideDown();
        });
        $('#cboxOverlay', context).bind('mouseover', function () {
          $('#cboxTitle', context).slideUp();
        });
      }
      else {
        $('#cboxTitle', context).hide();
      }
    });
  }
};

})(jQuery);
;
(function ($) {

Drupal.behaviors.initColorboxLoad = {
  attach: function (context, settings) {
    if (!$.isFunction($.colorbox)) {
      return;
    }
    $.urlParams = function (url) {
      var p = {},
          e,
          a = /\+/g,  // Regex for replacing addition symbol with a space
          r = /([^&=]+)=?([^&]*)/g,
          d = function (s) { return decodeURIComponent(s.replace(a, ' ')); },
          q = url.split('?');
      while (e = r.exec(q[1])) {
        e[1] = d(e[1]);
        e[2] = d(e[2]);
        switch (e[2].toLowerCase()) {
          case 'true':
          case 'yes':
            e[2] = true;
            break;
          case 'false':
          case 'no':
            e[2] = false;
            break;
        }
        if (e[1] == 'width') { e[1] = 'innerWidth'; }
        if (e[1] == 'height') { e[1] = 'innerHeight'; }
        p[e[1]] = e[2];
      }
      return p;
    };
    $('a, area, input', context)
      .filter('.colorbox-load')
      .once('init-colorbox-load-processed', function () {
        var params = $.urlParams($(this).attr('href'));
        $(this).colorbox($.extend({}, settings.colorbox, params));
      });
  }
};

})(jQuery);
;
(function ($) {

Drupal.behaviors.initColorboxInline = {
  attach: function (context, settings) {
    if (!$.isFunction($.colorbox)) {
      return;
    }
    $.urlParam = function(name, url){
      if (name == 'fragment') {
        var results = new RegExp('(#[^&#]*)').exec(url);
      }
      else {
        var results = new RegExp('[\\?&]' + name + '=([^&#]*)').exec(url);
      }
      if (!results) { return ''; }
      return results[1] || '';
    };
    $('a, area, input', context).filter('.colorbox-inline').once('init-colorbox-inline-processed').colorbox({
      transition:settings.colorbox.transition,
      speed:settings.colorbox.speed,
      opacity:settings.colorbox.opacity,
      slideshow:settings.colorbox.slideshow,
      slideshowAuto:settings.colorbox.slideshowAuto,
      slideshowSpeed:settings.colorbox.slideshowSpeed,
      slideshowStart:settings.colorbox.slideshowStart,
      slideshowStop:settings.colorbox.slideshowStop,
      current:settings.colorbox.current,
      previous:settings.colorbox.previous,
      next:settings.colorbox.next,
      close:settings.colorbox.close,
      overlayClose:settings.colorbox.overlayClose,
      maxWidth:settings.colorbox.maxWidth,
      maxHeight:settings.colorbox.maxHeight,
      innerWidth:function(){
        return $.urlParam('width', $(this).attr('href'));
      },
      innerHeight:function(){
        return $.urlParam('height', $(this).attr('href'));
      },
      title:function(){
        return decodeURIComponent($.urlParam('title', $(this).attr('href')));
      },
      iframe:function(){
        return $.urlParam('iframe', $(this).attr('href'));
      },
      inline:function(){
        return $.urlParam('inline', $(this).attr('href'));
      },
      href:function(){
        return $.urlParam('fragment', $(this).attr('href'));
      }
    });
  }
};

})(jQuery);
;
/**
* hoverIntent r6 // 2011.02.26 // jQuery 1.5.1+
* <http://cherne.net/brian/resources/jquery.hoverIntent.html>
* 
* @param  f  onMouseOver function || An object with configuration options
* @param  g  onMouseOut function  || Nothing (use configuration options object)
* @author    Brian Cherne brian(at)cherne(dot)net
*/
(function($){$.fn.hoverIntent=function(f,g){var cfg={sensitivity:7,interval:100,timeout:0};cfg=$.extend(cfg,g?{over:f,out:g}:f);var cX,cY,pX,pY;var track=function(ev){cX=ev.pageX;cY=ev.pageY};var compare=function(ev,ob){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);if((Math.abs(pX-cX)+Math.abs(pY-cY))<cfg.sensitivity){$(ob).unbind("mousemove",track);ob.hoverIntent_s=1;return cfg.over.apply(ob,[ev])}else{pX=cX;pY=cY;ob.hoverIntent_t=setTimeout(function(){compare(ev,ob)},cfg.interval)}};var delay=function(ev,ob){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);ob.hoverIntent_s=0;return cfg.out.apply(ob,[ev])};var handleHover=function(e){var ev=jQuery.extend({},e);var ob=this;if(ob.hoverIntent_t){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t)}if(e.type=="mouseenter"){pX=ev.pageX;pY=ev.pageY;$(ob).bind("mousemove",track);if(ob.hoverIntent_s!=1){ob.hoverIntent_t=setTimeout(function(){compare(ev,ob)},cfg.interval)}}else{$(ob).unbind("mousemove",track);if(ob.hoverIntent_s==1){ob.hoverIntent_t=setTimeout(function(){delay(ev,ob)},cfg.timeout)}}};return this.bind('mouseenter',handleHover).bind('mouseleave',handleHover)}})(jQuery);;
/* Copyright (c) 2010 Brandon Aaron (http://brandonaaron.net)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Version 2.1.2
 */
(function(a){a.fn.bgiframe=(a.browser.msie&&/msie 6\.0/i.test(navigator.userAgent)?function(d){d=a.extend({top:"auto",left:"auto",width:"auto",height:"auto",opacity:true,src:"javascript:false;"},d);var c='<iframe class="bgiframe"frameborder="0"tabindex="-1"src="'+d.src+'"style="display:block;position:absolute;z-index:-1;'+(d.opacity!==false?"filter:Alpha(Opacity='0');":"")+"top:"+(d.top=="auto"?"expression(((parseInt(this.parentNode.currentStyle.borderTopWidth)||0)*-1)+'px')":b(d.top))+";left:"+(d.left=="auto"?"expression(((parseInt(this.parentNode.currentStyle.borderLeftWidth)||0)*-1)+'px')":b(d.left))+";width:"+(d.width=="auto"?"expression(this.parentNode.offsetWidth+'px')":b(d.width))+";height:"+(d.height=="auto"?"expression(this.parentNode.offsetHeight+'px')":b(d.height))+';"/>';return this.each(function(){if(a(this).children("iframe.bgiframe").length===0){this.insertBefore(document.createElement(c),this.firstChild)}})}:function(){return this});a.fn.bgIframe=a.fn.bgiframe;function b(c){return c&&c.constructor===Number?c+"px":c}})(jQuery);;
/*
 * Superfish v1.4.8 - jQuery menu widget
 * Copyright (c) 2008 Joel Birch
 *
 * Dual licensed under the MIT and GPL licenses:
 *  http://www.opensource.org/licenses/mit-license.php
 *  http://www.gnu.org/licenses/gpl.html
 *
 * CHANGELOG: http://users.tpg.com.au/j_birch/plugins/superfish/changelog.txt
 */
/*
 * This is not the original jQuery Supersubs plugin.
 * Please refer to the README for more information.
 */

(function($){
  $.fn.superfish = function(op){
    var sf = $.fn.superfish,
      c = sf.c,
      $arrow = $(['<span class="',c.arrowClass,'"> &#187;</span>'].join('')),
      over = function(){
        var $$ = $(this), menu = getMenu($$);
        clearTimeout(menu.sfTimer);
        $$.showSuperfishUl().siblings().hideSuperfishUl();
      },
      out = function(){
        var $$ = $(this), menu = getMenu($$), o = sf.op;
        clearTimeout(menu.sfTimer);
        menu.sfTimer=setTimeout(function(){
          o.retainPath=($.inArray($$[0],o.$path)>-1);
          $$.hideSuperfishUl();
          if (o.$path.length && $$.parents(['li.',o.hoverClass].join('')).length<1){over.call(o.$path);}
        },o.delay);
      },
      getMenu = function($menu){
        var menu = $menu.parents(['ul.',c.menuClass,':first'].join(''))[0];
        sf.op = sf.o[menu.serial];
        return menu;
      },
      addArrow = function($a){ $a.addClass(c.anchorClass).append($arrow.clone()); };

    return this.each(function() {
      var s = this.serial = sf.o.length;
      var o = $.extend({},sf.defaults,op);
      o.$path = $('li.'+o.pathClass,this).slice(0,o.pathLevels).each(function(){
        $(this).addClass([o.hoverClass,c.bcClass].join(' '))
          .filter('li:has(ul)').removeClass(o.pathClass);
      });
      sf.o[s] = sf.op = o;

      $('li:has(ul)',this)[($.fn.hoverIntent && !o.disableHI) ? 'hoverIntent' : 'hover'](over,out).each(function() {
        if (o.autoArrows) addArrow( $('>a:first-child',this) );
      })
      .not('.'+c.bcClass)
        .hideSuperfishUl();

      var $a = $('a',this);
      $a.each(function(i){
        var $li = $a.eq(i).parents('li');
        $a.eq(i).focus(function(){over.call($li);}).blur(function(){out.call($li);});
      });
      o.onInit.call(this);

    }).each(function() {
      var menuClasses = [c.menuClass];
      if (sf.op.dropShadows  && !($.browser.msie && $.browser.version < 7)) menuClasses.push(c.shadowClass);
      $(this).addClass(menuClasses.join(' '));
    });
  };

  var sf = $.fn.superfish;
  sf.o = [];
  sf.op = {};
  sf.IE7fix = function(){
    var o = sf.op;
    if ($.browser.msie && $.browser.version > 6 && o.dropShadows && o.animation.opacity!=undefined)
      this.toggleClass(sf.c.shadowClass+'-off');
    };
  sf.c = {
    bcClass: 'sf-breadcrumb',
    menuClass: 'sf-js-enabled',
    anchorClass: 'sf-with-ul',
    arrowClass: 'sf-sub-indicator',
    shadowClass: 'sf-shadow'
  };
  sf.defaults = {
    hoverClass: 'sfHover',
    pathClass: 'overideThisToUse',
    pathLevels: 1,
    delay: 800,
    animation: {opacity:'show'},
    speed: 'normal',
    autoArrows: true,
    dropShadows: true,
    disableHI: false, // true disables hoverIntent detection
    onInit: function(){}, // callback functions
    onBeforeShow: function(){},
    onShow: function(){},
    onHide: function(){}
  };
  $.fn.extend({
    hideSuperfishUl : function(){
      var o = sf.op,
        not = (o.retainPath===true) ? o.$path : '';
      o.retainPath = false;
      var $ul = $(['li.',o.hoverClass].join(''),this).add(this).not(not).removeClass(o.hoverClass)
          .find('>ul').css({top: '-99999em'}).addClass('sf-hidden');
      o.onHide.call($ul);
      return this;
    },
    showSuperfishUl : function(){
      var o = sf.op,
        sh = sf.c.shadowClass+'-off',
        $ul = this.addClass(o.hoverClass)
          .find('>ul.sf-hidden').css({display: 'none', top: ''}).removeClass('sf-hidden');
      sf.IE7fix.call($ul);
      o.onBeforeShow.call($ul);
      $ul.animate(o.animation,o.speed,function(){ sf.IE7fix.call($ul); o.onShow.call($ul); });
      return this;
    }
  });
})(jQuery);;
/*
 * Supersubs v0.2b - jQuery plugin
 * Copyright (c) 2008 Joel Birch
 *
 * Dual licensed under the MIT and GPL licenses:
 *  http://www.opensource.org/licenses/mit-license.php
 *  http://www.gnu.org/licenses/gpl.html
 *
 * This plugin automatically adjusts submenu widths of suckerfish-style menus to that of
 * their longest list item children. If you use this, please expect bugs and report them
 * to the jQuery Google Group with the word 'Superfish' in the subject line.
 *
 */
/*
 * This is not the original jQuery Supersubs plugin.
 * Please refer to the README for more information.
 */

(function($){ // $ will refer to jQuery within this closure
  $.fn.supersubs = function(options){
    var opts = $.extend({}, $.fn.supersubs.defaults, options);
    // return original object to support chaining
    return this.each(function() {
      // cache selections
      var $$ = $(this);
      // support metadata
      var o = $.meta ? $.extend({}, opts, $$.data()) : opts;
      // get the font size of menu.
      // .css('fontSize') returns various results cross-browser, so measure an em dash instead
      var fontsize = $('<li id="menu-fontsize">&#8212;</li>').css({
        'padding' : 0,
        'position' : 'absolute',
        'top' : '-99999em',
        'width' : 'auto'
      }).appendTo($$).width(); //clientWidth is faster, but was incorrect here
      // remove em dash
      $('#menu-fontsize').remove();

      // Jump on level if it's a "NavBar"
      if ($$.hasClass('sf-navbar')) {
        $$ = $('li > ul', $$);
      }
      // cache all ul elements 
      $ULs = $$.find('ul:not(.sf-megamenu)');
      // loop through each ul in menu
      $ULs.each(function(i) {
        // cache this ul
        var $ul = $ULs.eq(i);
        // get all (li) children of this ul
        var $LIs = $ul.children();
        // get all anchor grand-children
        var $As = $LIs.children('a');
        // force content to one line and save current float property
        var liFloat = $LIs.css('white-space','nowrap').css('float');
        // remove width restrictions and floats so elements remain vertically stacked
        var emWidth = $ul.add($LIs).add($As).css({
          'float' : 'none',
          'width'  : 'auto'
        })
        // this ul will now be shrink-wrapped to longest li due to position:absolute
        // so save its width as ems. Clientwidth is 2 times faster than .width() - thanks Dan Switzer
        .end().end()[0].clientWidth / fontsize;
        // add more width to ensure lines don't turn over at certain sizes in various browsers
        emWidth += o.extraWidth;
        // restrict to at least minWidth and at most maxWidth
        if (emWidth > o.maxWidth)    { emWidth = o.maxWidth; }
        else if (emWidth < o.minWidth)  { emWidth = o.minWidth; }
        emWidth += 'em';
        // set ul to width in ems
        $ul.css('width',emWidth);
        // restore li floats to avoid IE bugs
        // set li width to full width of this ul
        // revert white-space to normal
        $LIs.css({
          'float' : liFloat,
          'width' : '100%',
          'white-space' : 'normal'
        })
        // update offset position of descendant ul to reflect new width of parent
        .each(function(){
          var $childUl = $('>ul',this);
          var offsetDirection = $childUl.css('left')!==undefined ? 'left' : 'right';
          $childUl.css(offsetDirection,emWidth);
        });
      });
    });
  };
  // expose defaults
  $.fn.supersubs.defaults = {
    minWidth: 9, // requires em unit.
    maxWidth: 25, // requires em unit.
    extraWidth: 0 // extra width can ensure lines don't sometimes turn over due to slight browser differences in how they round-off values
  };
})(jQuery); // plugin code ends;
/*
 * Supposition v0.2 - an optional enhancer for Superfish jQuery menu widget.
 *
 * Copyright (c) 2008 Joel Birch - based mostly on work by Jesse Klaasse and credit goes largely to him.
 * Special thanks to Karl Swedberg for valuable input.
 *
 * Dual licensed under the MIT and GPL licenses:
 *  http://www.opensource.org/licenses/mit-license.php
 *  http://www.gnu.org/licenses/gpl.html
 */
/*
 * This is not the original jQuery Supersubs plugin.
 * Please refer to the README for more information.
 */

(function($){
  $.fn.supposition = function(){
    var $w = $(window), /*do this once instead of every onBeforeShow call*/
    _offset = function(dir) {
      return window[dir == 'y' ? 'pageYOffset' : 'pageXOffset']
      || document.documentElement && document.documentElement[dir=='y' ? 'scrollTop' : 'scrollLeft']
      || document.body[dir=='y' ? 'scrollTop' : 'scrollLeft'];
    },
    onHide = function(){
      this.css({bottom:''});
    },
    onBeforeShow = function(){
      this.each(function(){
        var $u = $(this);
        $u.css('display','block');
        var menuWidth = $u.width(),
        menuParentWidth = $u.closest('li').outerWidth(true),
        menuParentLeft = $u.closest('li').offset().left,
        totalRight = $w.width() + _offset('x'),
        menuRight = $u.offset().left + menuWidth,
        exactMenuWidth = (menuRight > (menuParentWidth + menuParentLeft)) ? menuWidth - (menuRight - (menuParentWidth + menuParentLeft)) : menuWidth;  
        if ($u.parents('.sf-js-enabled').hasClass('rtl')) {
          if (menuParentLeft < exactMenuWidth) {
            $u.css('left', menuParentWidth + 'px');
            $u.css('right', 'auto');
          }
        }
        else {
          if (menuRight > totalRight && menuParentLeft > menuWidth) {
            $u.css('right', menuParentWidth + 'px');
            $u.css('left', 'auto');
          }
        }
        var windowHeight = $w.height(),
        offsetTop = $u.offset().top,
        menuParentShadow = ($u.closest('.sf-menu').hasClass('sf-shadow') && $u.css('padding-bottom').length > 0) ? parseInt($u.css('padding-bottom').slice(0,-2)) : 0,
        menuParentHeight = ($u.closest('.sf-menu').hasClass('sf-vertical')) ? '-' + menuParentShadow : $u.parent().outerHeight(true) - menuParentShadow,
        menuHeight = $u.height(),
        baseline = windowHeight + _offset('y');
        var expandUp = ((offsetTop + menuHeight > baseline) && (offsetTop > menuHeight));
        if (expandUp) {
          $u.css('bottom', menuParentHeight + 'px');
          $u.css('top', 'auto');
        }
        $u.css('display','none');
      });
    };

    return this.each(function() {
      var o = $.fn.superfish.o[this.serial]; /* get this menu's options */

      /* if callbacks already set, store them */
      var _onBeforeShow = o.onBeforeShow,
      _onHide = o.onHide;

      $.extend($.fn.superfish.o[this.serial],{
        onBeforeShow: function() {
          onBeforeShow.call(this); /* fire our Supposition callback */
          _onBeforeShow.call(this); /* fire stored callbacks */
        },
        onHide: function() {
          onHide.call(this); /* fire our Supposition callback */
          _onHide.call(this); /* fire stored callbacks */
        }
      });
    });
  };
})(jQuery);;
/*
 * sf-Touchscreen v1.0b - Provides touchscreen compatibility for the jQuery Superfish plugin.
 *
 * Developer's note:
 * Built as a part of the Superfish project for Drupal (http://drupal.org/project/superfish) 
 * Found any bug? have any cool ideas? contact me right away! http://drupal.org/user/619294/contact
 *
 * jQuery version: 1.3.x or higher.
 *
 * Dual licensed under the MIT and GPL licenses:
 *  http://www.opensource.org/licenses/mit-license.php
 *  http://www.gnu.org/licenses/gpl.html
 */

(function($){
  $.fn.sftouchscreen = function() {
    // Return original object to support chaining.
    return this.each( function() {
      // Select hyperlinks from parent menu items.
      $(this).find('li > ul').closest('li').children('a').each( function() {
        var $item = $(this);
        // No .toggle() here as it's not possible to reset it.
        $item.click( function(event){
          // Already clicked? proceed to the URI.
          if ($item.hasClass('sf-clicked')) {
            var $uri = $item.attr('href');
            window.location = $uri;
          }
          else {
            event.preventDefault();
            $item.addClass('sf-clicked');
          }
        }).closest('li').mouseleave( function(){
          // So, we reset everything.
          $item.removeClass('sf-clicked');
        });
      });
    });
  };
})(jQuery);;
/*!
 * jQuery blockUI plugin
 * Version 2.26 (09-SEP-2009)
 * @requires jQuery v1.2.3 or later
 *
 * Examples at: http://malsup.com/jquery/block/
 * Copyright (c) 2007-2008 M. Alsup
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 * Thanks to Amir-Hossein Sobhi for some excellent contributions!
 */

;(function($) {

if (/1\.(0|1|2)\.(0|1|2)/.test($.fn.jquery) || /^1.1/.test($.fn.jquery)) {
	alert('blockUI requires jQuery v1.2.3 or later!  You are using v' + $.fn.jquery);
	return;
}

$.fn._fadeIn = $.fn.fadeIn;

// this bit is to ensure we don't call setExpression when we shouldn't (with extra muscle to handle
// retarded userAgent strings on Vista)
var mode = document.documentMode || 0;
var setExpr = $.browser.msie && (($.browser.version < 8 && !mode) || mode < 8);
var ie6 = $.browser.msie && /MSIE 6.0/.test(navigator.userAgent) && !mode;

// global $ methods for blocking/unblocking the entire page
$.blockUI   = function(opts) { install(window, opts); };
$.unblockUI = function(opts) { remove(window, opts); };

// convenience method for quick growl-like notifications  (http://www.google.com/search?q=growl)
$.growlUI = function(title, message, timeout, onClose) {
	var $m = $('<div class="growlUI"></div>');
	if (title) $m.append('<h1>'+title+'</h1>');
	if (message) $m.append('<h2>'+message+'</h2>');
	if (timeout == undefined) timeout = 3000;
	$.blockUI({
		message: $m, fadeIn: 700, fadeOut: 1000, centerY: false,
		timeout: timeout, showOverlay: false,
		onUnblock: onClose, 
		css: $.blockUI.defaults.growlCSS
	});
};

// plugin method for blocking element content
$.fn.block = function(opts) {
	return this.unblock({ fadeOut: 0 }).each(function() {
		if ($.css(this,'position') == 'static')
			this.style.position = 'relative';
		if ($.browser.msie)
			this.style.zoom = 1; // force 'hasLayout'
		install(this, opts);
	});
};

// plugin method for unblocking element content
$.fn.unblock = function(opts) {
	return this.each(function() {
		remove(this, opts);
	});
};

$.blockUI.version = 2.26; // 2nd generation blocking at no extra cost!

// override these in your code to change the default behavior and style
$.blockUI.defaults = {
	// message displayed when blocking (use null for no message)
	message:  '<h1>Please wait...</h1>',

	title: null,	  // title string; only used when theme == true
	draggable: true,  // only used when theme == true (requires jquery-ui.js to be loaded)
	
	theme: false, // set to true to use with jQuery UI themes
	
	// styles for the message when blocking; if you wish to disable
	// these and use an external stylesheet then do this in your code:
	// $.blockUI.defaults.css = {};
	css: {
		padding:	0,
		margin:		0,
		width:		'30%',
		top:		'40%',
		left:		'35%',
		textAlign:	'center',
		color:		'#000',
		border:		'3px solid #aaa',
		backgroundColor:'#fff',
		cursor:		'wait'
	},
	
	// minimal style set used when themes are used
	themedCSS: {
		width:	'30%',
		top:	'40%',
		left:	'35%'
	},

	// styles for the overlay
	overlayCSS:  {
		backgroundColor: '#000',
		opacity:	  	 0.6,
		cursor:		  	 'wait'
	},

	// styles applied when using $.growlUI
	growlCSS: {
		width:  	'350px',
		top:		'10px',
		left:   	'',
		right:  	'10px',
		border: 	'none',
		padding:	'5px',
		opacity:	0.6,
		cursor: 	'default',
		color:		'#fff',
		backgroundColor: '#000',
		'-webkit-border-radius': '10px',
		'-moz-border-radius':	 '10px'
	},
	
	// IE issues: 'about:blank' fails on HTTPS and javascript:false is s-l-o-w
	// (hat tip to Jorge H. N. de Vasconcelos)
	iframeSrc: /^https/i.test(window.location.href || '') ? 'javascript:false' : 'about:blank',

	// force usage of iframe in non-IE browsers (handy for blocking applets)
	forceIframe: false,

	// z-index for the blocking overlay
	baseZ: 1000,

	// set these to true to have the message automatically centered
	centerX: true, // <-- only effects element blocking (page block controlled via css above)
	centerY: true,

	// allow body element to be stetched in ie6; this makes blocking look better
	// on "short" pages.  disable if you wish to prevent changes to the body height
	allowBodyStretch: true,

	// enable if you want key and mouse events to be disabled for content that is blocked
	bindEvents: true,

	// be default blockUI will supress tab navigation from leaving blocking content
	// (if bindEvents is true)
	constrainTabKey: true,

	// fadeIn time in millis; set to 0 to disable fadeIn on block
	fadeIn:  200,

	// fadeOut time in millis; set to 0 to disable fadeOut on unblock
	fadeOut:  400,

	// time in millis to wait before auto-unblocking; set to 0 to disable auto-unblock
	timeout: 0,

	// disable if you don't want to show the overlay
	showOverlay: true,

	// if true, focus will be placed in the first available input field when
	// page blocking
	focusInput: true,

	// suppresses the use of overlay styles on FF/Linux (due to performance issues with opacity)
	applyPlatformOpacityRules: true,

	// callback method invoked when unblocking has completed; the callback is
	// passed the element that has been unblocked (which is the window object for page
	// blocks) and the options that were passed to the unblock call:
	//	 onUnblock(element, options)
	onUnblock: null,

	// don't ask; if you really must know: http://groups.google.com/group/jquery-en/browse_thread/thread/36640a8730503595/2f6a79a77a78e493#2f6a79a77a78e493
	quirksmodeOffsetHack: 4
};

// private data and functions follow...

var pageBlock = null;
var pageBlockEls = [];

function install(el, opts) {
	var full = (el == window);
	var msg = opts && opts.message !== undefined ? opts.message : undefined;
	opts = $.extend({}, $.blockUI.defaults, opts || {});
	opts.overlayCSS = $.extend({}, $.blockUI.defaults.overlayCSS, opts.overlayCSS || {});
	var css = $.extend({}, $.blockUI.defaults.css, opts.css || {});
	var themedCSS = $.extend({}, $.blockUI.defaults.themedCSS, opts.themedCSS || {});
	msg = msg === undefined ? opts.message : msg;

	// remove the current block (if there is one)
	if (full && pageBlock)
		remove(window, {fadeOut:0});

	// if an existing element is being used as the blocking content then we capture
	// its current place in the DOM (and current display style) so we can restore
	// it when we unblock
	if (msg && typeof msg != 'string' && (msg.parentNode || msg.jquery)) {
		var node = msg.jquery ? msg[0] : msg;
		var data = {};
		$(el).data('blockUI.history', data);
		data.el = node;
		data.parent = node.parentNode;
		data.display = node.style.display;
		data.position = node.style.position;
		if (data.parent)
			data.parent.removeChild(node);
	}

	var z = opts.baseZ;

	// blockUI uses 3 layers for blocking, for simplicity they are all used on every platform;
	// layer1 is the iframe layer which is used to supress bleed through of underlying content
	// layer2 is the overlay layer which has opacity and a wait cursor (by default)
	// layer3 is the message content that is displayed while blocking

	var lyr1 = ($.browser.msie || opts.forceIframe) 
		? $('<iframe class="blockUI" style="z-index:'+ (z++) +';display:none;border:none;margin:0;padding:0;position:absolute;width:100%;height:100%;top:0;left:0" src="'+opts.iframeSrc+'"></iframe>')
		: $('<div class="blockUI" style="display:none"></div>');
	var lyr2 = $('<div class="blockUI blockOverlay" style="z-index:'+ (z++) +';display:none;border:none;margin:0;padding:0;width:100%;height:100%;top:0;left:0"></div>');
	
	var lyr3;
	if (opts.theme && full) {
		var s = '<div class="blockUI blockMsg blockPage ui-dialog ui-widget ui-corner-all" style="z-index:'+z+';display:none;position:fixed">' +
					'<div class="ui-widget-header ui-dialog-titlebar blockTitle">'+(opts.title || '&nbsp;')+'</div>' +
					'<div class="ui-widget-content ui-dialog-content"></div>' +
				'</div>';
		lyr3 = $(s);
	}
	else {
		lyr3 = full ? $('<div class="blockUI blockMsg blockPage" style="z-index:'+z+';display:none;position:fixed"></div>')
					: $('<div class="blockUI blockMsg blockElement" style="z-index:'+z+';display:none;position:absolute"></div>');
	}						   

	// if we have a message, style it
	if (msg) {
		if (opts.theme) {
			lyr3.css(themedCSS);
			lyr3.addClass('ui-widget-content');
		}
		else 
			lyr3.css(css);
	}

	// style the overlay
	if (!opts.applyPlatformOpacityRules || !($.browser.mozilla && /Linux/.test(navigator.platform)))
		lyr2.css(opts.overlayCSS);
	lyr2.css('position', full ? 'fixed' : 'absolute');

	// make iframe layer transparent in IE
	if ($.browser.msie || opts.forceIframe)
		lyr1.css('opacity',0.0);

	$([lyr1[0],lyr2[0],lyr3[0]]).appendTo(full ? 'body' : el);
	
	if (opts.theme && opts.draggable && $.fn.draggable) {
		lyr3.draggable({
			handle: '.ui-dialog-titlebar',
			cancel: 'li'
		});
	}

	// ie7 must use absolute positioning in quirks mode and to account for activex issues (when scrolling)
	var expr = setExpr && (!$.boxModel || $('object,embed', full ? null : el).length > 0);
	if (ie6 || expr) {
		// give body 100% height
		if (full && opts.allowBodyStretch && $.boxModel)
			$('html,body').css('height','100%');

		// fix ie6 issue when blocked element has a border width
		if ((ie6 || !$.boxModel) && !full) {
			var t = sz(el,'borderTopWidth'), l = sz(el,'borderLeftWidth');
			var fixT = t ? '(0 - '+t+')' : 0;
			var fixL = l ? '(0 - '+l+')' : 0;
		}

		// simulate fixed position
		$.each([lyr1,lyr2,lyr3], function(i,o) {
			var s = o[0].style;
			s.position = 'absolute';
			if (i < 2) {
				full ? s.setExpression('height','Math.max(document.body.scrollHeight, document.body.offsetHeight) - (jQuery.boxModel?0:'+opts.quirksmodeOffsetHack+') + "px"')
					 : s.setExpression('height','this.parentNode.offsetHeight + "px"');
				full ? s.setExpression('width','jQuery.boxModel && document.documentElement.clientWidth || document.body.clientWidth + "px"')
					 : s.setExpression('width','this.parentNode.offsetWidth + "px"');
				if (fixL) s.setExpression('left', fixL);
				if (fixT) s.setExpression('top', fixT);
			}
			else if (opts.centerY) {
				if (full) s.setExpression('top','(document.documentElement.clientHeight || document.body.clientHeight) / 2 - (this.offsetHeight / 2) + (blah = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"');
				s.marginTop = 0;
			}
			else if (!opts.centerY && full) {
				var top = (opts.css && opts.css.top) ? parseInt(opts.css.top) : 0;
				var expression = '((document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + '+top+') + "px"';
				s.setExpression('top',expression);
			}
		});
	}

	// show the message
	if (msg) {
		if (opts.theme)
			lyr3.find('.ui-widget-content').append(msg);
		else
			lyr3.append(msg);
		if (msg.jquery || msg.nodeType)
			$(msg).show();
	}

	if (($.browser.msie || opts.forceIframe) && opts.showOverlay)
		lyr1.show(); // opacity is zero
	if (opts.fadeIn) {
		if (opts.showOverlay)
			lyr2._fadeIn(opts.fadeIn);
		if (msg)
			lyr3.fadeIn(opts.fadeIn);
	}
	else {
		if (opts.showOverlay)
			lyr2.show();
		if (msg)
			lyr3.show();
	}

	// bind key and mouse events
	bind(1, el, opts);

	if (full) {
		pageBlock = lyr3[0];
		pageBlockEls = $(':input:enabled:visible',pageBlock);
		if (opts.focusInput)
			setTimeout(focus, 20);
	}
	else
		center(lyr3[0], opts.centerX, opts.centerY);

	if (opts.timeout) {
		// auto-unblock
		var to = setTimeout(function() {
			full ? $.unblockUI(opts) : $(el).unblock(opts);
		}, opts.timeout);
		$(el).data('blockUI.timeout', to);
	}
};

// remove the block
function remove(el, opts) {
	var full = (el == window);
	var $el = $(el);
	var data = $el.data('blockUI.history');
	var to = $el.data('blockUI.timeout');
	if (to) {
		clearTimeout(to);
		$el.removeData('blockUI.timeout');
	}
	opts = $.extend({}, $.blockUI.defaults, opts || {});
	bind(0, el, opts); // unbind events
	
	var els;
	if (full) // crazy selector to handle odd field errors in ie6/7
		els = $('body').children().filter('.blockUI').add('body > .blockUI');
	else
		els = $('.blockUI', el);

	if (full)
		pageBlock = pageBlockEls = null;

	if (opts.fadeOut) {
		els.fadeOut(opts.fadeOut);
		setTimeout(function() { reset(els,data,opts,el); }, opts.fadeOut);
	}
	else
		reset(els, data, opts, el);
};

// move blocking element back into the DOM where it started
function reset(els,data,opts,el) {
	els.each(function(i,o) {
		// remove via DOM calls so we don't lose event handlers
		if (this.parentNode)
			this.parentNode.removeChild(this);
	});

	if (data && data.el) {
		data.el.style.display = data.display;
		data.el.style.position = data.position;
		if (data.parent)
			data.parent.appendChild(data.el);
		$(data.el).removeData('blockUI.history');
	}

	if (typeof opts.onUnblock == 'function')
		opts.onUnblock(el,opts);
};

// bind/unbind the handler
function bind(b, el, opts) {
	var full = el == window, $el = $(el);

	// don't bother unbinding if there is nothing to unbind
	if (!b && (full && !pageBlock || !full && !$el.data('blockUI.isBlocked')))
		return;
	if (!full)
		$el.data('blockUI.isBlocked', b);

	// don't bind events when overlay is not in use or if bindEvents is false
	if (!opts.bindEvents || (b && !opts.showOverlay)) 
		return;

	// bind anchors and inputs for mouse and key events
	var events = 'mousedown mouseup keydown keypress';
	b ? $(document).bind(events, opts, handler) : $(document).unbind(events, handler);

// former impl...
//	   var $e = $('a,:input');
//	   b ? $e.bind(events, opts, handler) : $e.unbind(events, handler);
};

// event handler to suppress keyboard/mouse events when blocking
function handler(e) {
	// allow tab navigation (conditionally)
	if (e.keyCode && e.keyCode == 9) {
		if (pageBlock && e.data.constrainTabKey) {
			var els = pageBlockEls;
			var fwd = !e.shiftKey && e.target == els[els.length-1];
			var back = e.shiftKey && e.target == els[0];
			if (fwd || back) {
				setTimeout(function(){focus(back)},10);
				return false;
			}
		}
	}
	// allow events within the message content
	if ($(e.target).parents('div.blockMsg').length > 0)
		return true;

	// allow events for content that is not being blocked
	return $(e.target).parents().children().filter('div.blockUI').length == 0;
};

function focus(back) {
	if (!pageBlockEls)
		return;
	var e = pageBlockEls[back===true ? pageBlockEls.length-1 : 0];
	if (e)
		e.focus();
};

function center(el, x, y) {
	var p = el.parentNode, s = el.style;
	var l = ((p.offsetWidth - el.offsetWidth)/2) - sz(p,'borderLeftWidth');
	var t = ((p.offsetHeight - el.offsetHeight)/2) - sz(p,'borderTopWidth');
	if (x) s.left = l > 0 ? (l+'px') : '0';
	if (y) s.top  = t > 0 ? (t+'px') : '0';
};

function sz(el, p) {
	return parseInt($.css(el,p))||0;
};

})(jQuery);
;
// $Id: uc_ajax_cart.js,v 1.1.2.11 2010/05/01 12:42:30 erikseifert Exp $
Drupal.behaviors.ucAjaxCart = {
  attach: function (context, settings) {

  if (!Drupal.uc_ajax_cart) {

    // First initialization.

    // Set up UC Ajax Cart namespace.
    Drupal.uc_ajax_cart = {};

    // Populate namespace.
    Drupal.uc_ajax_cart.cart_open_state = true;
    Drupal.uc_ajax_cart.cart_wrapper = jQuery('#block-uc_ajax_cart-0', context);
    Drupal.uc_ajax_cart.cart_pane = jQuery('#ajaxCartUpdate #cart-block-contents-ajax', context);
    Drupal.uc_ajax_cart.update_container = jQuery('#ajaxCartUpdate', context);
    Drupal.uc_ajax_cart.unblock_handler = { attach: function () { Drupal.uc_ajax_cart.blockUI_blocked -= 1;}}
    Drupal.uc_ajax_cart.blockUI_blocked = 0;


    // BlockUI settings.
    jQuery.blockUI.defaults.growlCSS.opacity = 1;
    jQuery.blockUI.defaults.timeout = Drupal.settings.uc_ajax_cart.TIMEOUT;
    jQuery.blockUI.defaults.onUnblock = Drupal.uc_ajax_cart.unblock_handler;

    // Other one time processes.
    ///////////////////////////

    // Hide update cart button if needed.
    jQuery('.hidden-update-bt').hide();


    // Add open cart class because initially is opened.
    Drupal.uc_ajax_cart.cart_wrapper.addClass('cart-open');

    if (Drupal.settings.uc_ajax_cart.COLLAPSIBLE_CART) {
      // Check open state tracking.
      if (Drupal.settings.uc_ajax_cart.TRACK_CLOSED_STATE) {
        ajaxCartCheckCookieCartState();
      }
      else if (Drupal.settings.uc_ajax_cart.INITIAL_CLOSED_STATE) {
        // Close cart block.
        ajaxCartCloseCart();
      }
    }
  }


  // Set up ajax-cart-view-handler.
  jQuery('#ajax-cart-view-handler').attr('href', '#')
  .text(Drupal.t('Load cart content'))
  .click(ajaxCartUpdateBlockCart);



  // Ubercart Cart links support.
  jQuery('a.ajax-cart-link').not('.ajax-cart-processed').each(function () {
    var $elem = jQuery(this);
    // Check for ajaxify class.
    if (_checkAjaxify($elem)) {
      $elem.bind('click', function () {
        ajaxCartBlockUI(Drupal.settings.uc_ajax_cart.ADD_TITLE,
                        '<div class="messages status">' + Drupal.settings.uc_ajax_cart.ADD_MESSAGE + '</div>');
        jQuery.get(Drupal.settings.uc_ajax_cart.CART_LINK_CALLBACK,
                  { href: this.href },
                  ajaxCartFormSubmitted);
        return false;
      })
    }
  }).addClass('ajax-cart-processed');

  // Ubercart submit.
  jQuery('form.ajax-cart-submit-form input.ajax-cart-submit-form-button').not('.ajax-cart-processed, #edit-update').each(function () {
    var $elem = jQuery(this);
    // Check for ajaxify class.
    if (_checkAjaxify($elem)) {
      $elem.click(function () {
        var form = jQuery(this).parents('form').eq(0);
        form.ajaxSubmit({
          url : Drupal.settings.uc_ajax_cart.CALLBACK,
          beforeSubmit : function () {
            ajaxCartBlockUI(Drupal.settings.uc_ajax_cart.ADD_TITLE,
                            '<div class="messages status">' + Drupal.settings.uc_ajax_cart.ADD_MESSAGE + '</div>')},
          success : ajaxCartFormSubmitted,
          type : 'post'
        });
        return false;
      });
    }
  }).addClass('ajax-cart-processed');




  // Check for autoupdate cart block.
  if (jQuery('#ajaxCartUpdate').not('.ajax-cart-processed').hasClass('load-on-view')) {
    jQuery('#ajaxCartUpdate').addClass('ajax-cart-processed');
    ajaxCartUpdateBlockCart();
  }


  // Call behaviors over cart block.
  ajaxCartCartBlockBehaviors();

  // Call behaviors over cart page.
  ajaxCartCartPageBehaviors();
}
}



// Submits product changes using AJAX and updates cart and cart block accordingly.
function ajaxCartSubmit() {
  jQuery(this).parents('form').ajaxSubmit({
    url: Drupal.settings.uc_ajax_cart.UPDATE_CALLBACK,
    success: ajaxCartFormSubmitted,
    beforeSubmit: function () {
      jQuery('#uc-cart-view-form input').attr('disabled', 'disabled');
      ajaxCartBlockUI(Drupal.settings.uc_ajax_cart.ADD_TITLE, '<div class="messages status">' + Drupal.settings.uc_ajax_cart.UPDATE_MESSAGE + '</div>');
    }
  });
   jQuery('.colorbox-load').addClass('test');
  return false;
}

// Triggers cart submit button.
function triggerCartSubmit() {
  jQuery('#uc-cart-view-form #edit-update').trigger('click');
}


// Process behaviors for the cart from cart page.
function ajaxCartCartPageBehaviors(context) {

  if (Drupal.settings.uc_ajax_cart.AJAXIFY_CART_PAGE) {

    // Set handler for cart submit button.
    jQuery('#uc-cart-view-form #edit-update').not('.ajax-cart-processed').bind('click', ajaxCartSubmit)
    .addClass('ajax-cart-processed');

    // Trigger submit button when cart qty form input elements are changed.
    jQuery('#uc-cart-view-form .qty input').not('.ajax-cart-processed').bind('change', function (e) {
      triggerCartSubmit();
	  
      return false;
    })
    .addClass('ajax-cart-processed');

    // Ubercart has changed remove checkboxes to buttons above Ubercart 2.4.
    jQuery('#uc-cart-view-form .remove input').not('.ajax-cart-processed').each(function () {
      var elem = jQuery(this);
      var is_button = false;
      if (elem.attr('type') != 'checkbox') {
        is_button = true;
      }
      elem.click(function (e) {
        if (is_button) {
          jQuery(this).parents('tr').eq(0).find('td.qty input.form-text').val('0');
        }
        triggerCartSubmit();
        return false;
      });
      elem.addClass('ajax-cart-processed');
    });
	jQuery('.colorbox-load').addClass('test');
  }
}


// Process behaviors for the cart block.
function ajaxCartCartBlockBehaviors(context) {
   // Is the cart in the receieved context?
   var cart_pane = jQuery('#ajaxCartUpdate #cart-block-contents-ajax');
   if (cart_pane.length) {
     Drupal.uc_ajax_cart.cart_pane = cart_pane;

    jQuery('#ajaxCartToggleView').not('.ajax-cart-processed').click(function () {
      ajaxCartToggleView();
      return false;
    })
    .addClass('ajax-cart-processed');
   }
}


// Opens cart block.
// Sets cookie if track open state enabled.
function ajaxCartOpenCart(instantly) {
  if (!Drupal.uc_ajax_cart.cart_open_state) {
    Drupal.uc_ajax_cart.cart_open_state = true;
    if ((!instantly) && (Drupal.settings.uc_ajax_cart.CART_PANE_EFFECT)) {
      Drupal.uc_ajax_cart.cart_pane.slideDown(Drupal.settings.uc_ajax_cart.CART_PANE_EFFECT_DURATION);
    }
    else {
      Drupal.uc_ajax_cart.cart_pane.show();
    }
    Drupal.uc_ajax_cart.cart_wrapper.addClass('cart-open');

    if (Drupal.settings.uc_ajax_cart.TRACK_CLOSED_STATE) {
      jQuery.cookie('ajax-cart-visible', '1', { path: '/'});
    }
  }
}


// Closes cart block.
// Sets cookie if track open state enabled.
function ajaxCartCloseCart(instantly) {
  if (Drupal.uc_ajax_cart.cart_open_state) {
    Drupal.uc_ajax_cart.cart_open_state = false;
    if ((!instantly) && (Drupal.settings.uc_ajax_cart.CART_PANE_EFFECT)) {
      Drupal.uc_ajax_cart.cart_pane.slideUp(Drupal.settings.uc_ajax_cart.CART_PANE_EFFECT_DURATION);
    }
    else {
      Drupal.uc_ajax_cart.cart_pane.hide();
    }
    Drupal.uc_ajax_cart.cart_wrapper.removeClass('cart-open');

    if (Drupal.settings.uc_ajax_cart.TRACK_CLOSED_STATE && (jQuery.cookie('ajax-cart-visible') != '0')) {
      jQuery.cookie('ajax-cart-visible', '0', { path: '/'});
    }
  }
}


// Initialize cart page ajax update feature.
// Simply call behaviors for cart page with right context.
function ajaxCartInitCartView() {

  // Hide update cart button if needed.
  jQuery('.hidden-update-bt').hide();

  ajaxCartCartPageBehaviors(jQuery('#cart-form-pane'));
}

// Initialize cart block.
// Simply call behaviors for cart block with right context.
function ajaxCartInitCartBlock() {
  ajaxCartCartBlockBehaviors(Drupal.uc_ajax_cart.cart_wrapper);

  // Cart has been loaded, so it's shown, change state accordingly.
  Drupal.uc_ajax_cart.cart_open_state = true;

  if (Drupal.settings.uc_ajax_cart.COLLAPSIBLE_CART) {
    // Check this is the right state.
    if (Drupal.settings.uc_ajax_cart.TRACK_CLOSED_STATE) {
      ajaxCartCheckCookieCartState();
    } else if (Drupal.settings.uc_ajax_cart.INITIAL_CLOSED_STATE) {
       ajaxCartCloseCart(true);
    }

  }
}


// Checks open state cookie and changes cart open state accordingly.
function ajaxCartCheckCookieCartState() {
  var cookie_state = jQuery.cookie('ajax-cart-visible');

  if (Drupal.uc_ajax_cart.cart_open_state != cookie_state) {
    if (cookie_state == true) {
      ajaxCartOpenCart(true);
    }
    else {
      ajaxCartCloseCart(true);
    }
  }
}


// Show message using BlockUI anc configured layout.
function ajaxCartShowMessageProxy(title, message) {

  if (Drupal.settings.uc_ajax_cart.HIDE_CART_OPERATIONS) {
    return;
  }

  // Check if UI is blocked. Blocked UI implies no fader in to avoid flickering.
  var fadein = 0;
  if (!Drupal.uc_ajax_cart.blockUI_blocked) {
    fadein = 500;
  }

  Drupal.uc_ajax_cart.blockUI_blocked += 1;
  if (Drupal.settings.uc_ajax_cart.BLOCK_UI == 1) {
    jQuery.blockUI({ message : '<h2>' + title + '</h2>' + message, fadeIn: fadein });
  }
  else {
    var $m = jQuery('<div class="growlUI"></div>');
    if (title) {
      $m.append('<h1>' + title + '</h1>');
    }

    if (message) {
      $m.append('<h2>' + message + '</h2>');
    }

    jQuery.blockUI({
      message: $m,
      fadeIn: fadein,
      fadeOut: 700,
      showOverlay: false,
      centerY: false,
      css: {
        width: '350px',
        top: '10px',
        left: '',
        right: '10px',
        border: 'none',
        padding: '5px',
        backgroundColor: '#000',
        '-webkit-border-radius': '10px',
        '-moz-border-radius': '10px',
        'border-radius': '10px',
        color: '#fff',
        opacity: 1
      }
    });
  }
}


function ajaxCartShowMessageProxyClose() {
  jQuery.unblockUI();
}


// Toggle cart block.
function ajaxCartToggleView() {
  Drupal.uc_ajax_cart.cart_open_state ? ajaxCartCloseCart() : ajaxCartOpenCart();
}


// Processes after cart form is submitted.
function ajaxCartFormSubmitted(e) {
  // Enable input elements from cart from cart page.
  jQuery('form.ajax-cart-submit-form input').attr('disabled', false);

  // Update cart block.
  ajaxCartUpdateBlockCart();


  ajaxCartBlockUI(Drupal.settings.uc_ajax_cart.CART_OPERATION, e);
  ajaxCartReloadCartView();
}


function ajaxCartBlockUI(title, message) {
  ajaxCartShowMessageProxy(title, message);
}


function ajaxCartBlockUIRemove(url) {
  jQuery('#uc-cart-view-form input').attr('disabled', 'disabled');
  ajaxCartShowMessageProxy(Drupal.settings.uc_ajax_cart.REMOVE_TITLE, Drupal.settings.uc_ajax_cart.REMOVE_MESSAGE);
  jQuery.post(url, ajaxCartFormSubmitted);
  return false;
}


// Loads cart block contents using ajax.
function ajaxCartUpdateBlockCart() {
  Drupal.uc_ajax_cart.update_container.load(Drupal.settings.uc_ajax_cart.SHOW_CALLBACK, '', ajaxCartInitCartBlock);
  return false;
}


// Reloads standard Ubercart cart form from cart page.
function ajaxCartReloadCartView() {
  if (jQuery('#cart-form-pane').length) {
    jQuery('#cart-form-pane').parent().load(Drupal.settings.uc_ajax_cart.SHOW_VIEW_CALLBACK, ajaxCartInitCartView);
  }
}


function ajaxCartUpdateCartViewUpdated(e) {
  ajaxCartUpdateBlockCart();
  ajaxCartInitCartView();
}


function ajaxCartShowMessages(e) {
  if (e != "") {
    clearTimeout();
    ajaxCartShowMessageProxy('Message', e);
  }
}


/**
 *  Checks if a add to cart input submit button element must be ajaxified.
 */
function _checkAjaxify($elem) {
  var rc = true;
  if (Drupal.settings.uc_ajax_cart.AJAXIFY_CLASS) {
    rc = $elem.parents().add($elem).is('.' + Drupal.settings.uc_ajax_cart.AJAXIFY_CLASS);
    rc = Drupal.settings.uc_ajax_cart.AJAXIFY_CLASS_EXCLUDES ? !rc : rc;
  }
  return rc;
}
;
/**
 * Cookie plugin
 *
 * Copyright (c) 2006 Klaus Hartl (stilbuero.de)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 */

/**
 * Create a cookie with the given name and value and other optional parameters.
 *
 * @example $.cookie('the_cookie', 'the_value');
 * @desc Set the value of a cookie.
 * @example $.cookie('the_cookie', 'the_value', { expires: 7, path: '/', domain: 'jquery.com', secure: true });
 * @desc Create a cookie with all available options.
 * @example $.cookie('the_cookie', 'the_value');
 * @desc Create a session cookie.
 * @example $.cookie('the_cookie', null);
 * @desc Delete a cookie by passing null as value. Keep in mind that you have to use the same path and domain
 *       used when the cookie was set.
 *
 * @param String name The name of the cookie.
 * @param String value The value of the cookie.
 * @param Object options An object literal containing key/value pairs to provide optional cookie attributes.
 * @option Number|Date expires Either an integer specifying the expiration date from now on in days or a Date object.
 *                             If a negative value is specified (e.g. a date in the past), the cookie will be deleted.
 *                             If set to null or omitted, the cookie will be a session cookie and will not be retained
 *                             when the the browser exits.
 * @option String path The value of the path atribute of the cookie (default: path of page that created the cookie).
 * @option String domain The value of the domain attribute of the cookie (default: domain of page that created the cookie).
 * @option Boolean secure If true, the secure attribute of the cookie will be set and the cookie transmission will
 *                        require a secure protocol (like HTTPS).
 * @type undefined
 *
 * @name $.cookie
 * @cat Plugins/Cookie
 * @author Klaus Hartl/klaus.hartl@stilbuero.de
 */

/**
 * Get the value of a cookie with the given name.
 *
 * @example $.cookie('the_cookie');
 * @desc Get the value of a cookie.
 *
 * @param String name The name of the cookie.
 * @return The value of the cookie.
 * @type String
 *
 * @name $.cookie
 * @cat Plugins/Cookie
 * @author Klaus Hartl/klaus.hartl@stilbuero.de
 */
jQuery.cookie = function(name, value, options) {
    if (typeof value != 'undefined') { // name and value given, set cookie
        options = options || {};
        if (value === null) {
            value = '';
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
        // CAUTION: Needed to parenthesize options.path and options.domain
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
};;
(function ($) {
  Drupal.viewsSlideshow = Drupal.viewsSlideshow || {};

  /**
   * Views Slideshow Controls
   */
  Drupal.viewsSlideshowControls = Drupal.viewsSlideshowControls || {};

  /**
   * Implement the play hook for controls.
   */
  Drupal.viewsSlideshowControls.play = function (options) {
    // Route the control call to the correct control type.
    // Need to use try catch so we don't have to check to make sure every part
    // of the object is defined.
    try {
      if (typeof Drupal.settings.viewsSlideshowControls[options.slideshowID].top.type != "undefined" && typeof Drupal[Drupal.settings.viewsSlideshowControls[options.slideshowID].top.type].play == 'function') {
        Drupal[Drupal.settings.viewsSlideshowControls[options.slideshowID].top.type].play(options);
      }
    }
    catch(err) {
      // Don't need to do anything on error.
    }

    try {
      if (typeof Drupal.settings.viewsSlideshowControls[options.slideshowID].bottom.type != "undefined" && typeof Drupal[Drupal.settings.viewsSlideshowControls[options.slideshowID].bottom.type].play == 'function') {
        Drupal[Drupal.settings.viewsSlideshowControls[options.slideshowID].bottom.type].play(options);
      }
    }
    catch(err) {
      // Don't need to do anything on error.
    }
  };

  /**
   * Implement the pause hook for controls.
   */
  Drupal.viewsSlideshowControls.pause = function (options) {
    // Route the control call to the correct control type.
    // Need to use try catch so we don't have to check to make sure every part
    // of the object is defined.
    try {
      if (typeof Drupal.settings.viewsSlideshowControls[options.slideshowID].top.type != "undefined" && typeof Drupal[Drupal.settings.viewsSlideshowControls[options.slideshowID].top.type].pause == 'function') {
        Drupal[Drupal.settings.viewsSlideshowControls[options.slideshowID].top.type].pause(options);
      }
    }
    catch(err) {
      // Don't need to do anything on error.
    }

    try {
      if (typeof Drupal.settings.viewsSlideshowControls[options.slideshowID].bottom.type != "undefined" && typeof Drupal[Drupal.settings.viewsSlideshowControls[options.slideshowID].bottom.type].pause == 'function') {
        Drupal[Drupal.settings.viewsSlideshowControls[options.slideshowID].bottom.type].pause(options);
      }
    }
    catch(err) {
      // Don't need to do anything on error.
    }
  };


  /**
   * Views Slideshow Text Controls
   */

  // Add views slieshow api calls for views slideshow text controls.
  Drupal.behaviors.viewsSlideshowControlsText = {
    attach: function (context) {

      // Process previous link
      $('.views_slideshow_controls_text_previous:not(.views-slideshow-controls-text-previous-processed)', context).addClass('views-slideshow-controls-text-previous-processed').each(function() {
        var uniqueID = $(this).attr('id').replace('views_slideshow_controls_text_previous_', '');
        $(this).click(function() {
          Drupal.viewsSlideshow.action({ "action": 'previousSlide', "slideshowID": uniqueID });
          return false;
        });
      });

      // Process next link
      $('.views_slideshow_controls_text_next:not(.views-slideshow-controls-text-next-processed)', context).addClass('views-slideshow-controls-text-next-processed').each(function() {
        var uniqueID = $(this).attr('id').replace('views_slideshow_controls_text_next_', '');
        $(this).click(function() {
          Drupal.viewsSlideshow.action({ "action": 'nextSlide', "slideshowID": uniqueID });
          return false;
        });
      });

      // Process pause link
      $('.views_slideshow_controls_text_pause:not(.views-slideshow-controls-text-pause-processed)', context).addClass('views-slideshow-controls-text-pause-processed').each(function() {
        var uniqueID = $(this).attr('id').replace('views_slideshow_controls_text_pause_', '');
        $(this).click(function() {
          if (Drupal.settings.viewsSlideshow[uniqueID].paused) {
            Drupal.viewsSlideshow.action({ "action": 'play', "slideshowID": uniqueID, "force": true });
          }
          else {
            Drupal.viewsSlideshow.action({ "action": 'pause', "slideshowID": uniqueID, "force": true });
          }
          return false;
        });
      });
    }
  };

  Drupal.viewsSlideshowControlsText = Drupal.viewsSlideshowControlsText || {};

  /**
   * Implement the pause hook for text controls.
   */
  Drupal.viewsSlideshowControlsText.pause = function (options) {
    var pauseText = Drupal.theme.prototype['viewsSlideshowControlsPause'] ? Drupal.theme('viewsSlideshowControlsPause') : '';
    $('#views_slideshow_controls_text_pause_' + options.slideshowID + ' a').text(pauseText);
  };

  /**
   * Implement the play hook for text controls.
   */
  Drupal.viewsSlideshowControlsText.play = function (options) {
    var playText = Drupal.theme.prototype['viewsSlideshowControlsPlay'] ? Drupal.theme('viewsSlideshowControlsPlay') : '';
    $('#views_slideshow_controls_text_pause_' + options.slideshowID + ' a').text(playText);
  };

  // Theme the resume control.
  Drupal.theme.prototype.viewsSlideshowControlsPause = function () {
    return Drupal.t('Resume');
  };

  // Theme the pause control.
  Drupal.theme.prototype.viewsSlideshowControlsPlay = function () {
    return Drupal.t('Pause');
  };

  /**
   * Views Slideshow Pager
   */
  Drupal.viewsSlideshowPager = Drupal.viewsSlideshowPager || {};

  /**
   * Implement the transitionBegin hook for pagers.
   */
  Drupal.viewsSlideshowPager.transitionBegin = function (options) {
    // Route the pager call to the correct pager type.
    // Need to use try catch so we don't have to check to make sure every part
    // of the object is defined.
    try {
      if (typeof Drupal.settings.viewsSlideshowPager[options.slideshowID].top.type != "undefined" && typeof Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].top.type].transitionBegin == 'function') {
        Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].top.type].transitionBegin(options);
      }
    }
    catch(err) {
      // Don't need to do anything on error.
    }

    try {
      if (typeof Drupal.settings.viewsSlideshowPager[options.slideshowID].bottom.type != "undefined" && typeof Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].bottom.type].transitionBegin == 'function') {
        Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].bottom.type].transitionBegin(options);
      }
    }
    catch(err) {
      // Don't need to do anything on error.
    }
  };

  /**
   * Implement the goToSlide hook for pagers.
   */
  Drupal.viewsSlideshowPager.goToSlide = function (options) {
    // Route the pager call to the correct pager type.
    // Need to use try catch so we don't have to check to make sure every part
    // of the object is defined.
    try {
      if (typeof Drupal.settings.viewsSlideshowPager[options.slideshowID].top.type != "undefined" && typeof Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].top.type].goToSlide == 'function') {
        Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].top.type].goToSlide(options);
      }
    }
    catch(err) {
      // Don't need to do anything on error.
    }

    try {
      if (typeof Drupal.settings.viewsSlideshowPager[options.slideshowID].bottom.type != "undefined" && typeof Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].bottom.type].goToSlide == 'function') {
        Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].bottom.type].goToSlide(options);
      }
    }
    catch(err) {
      // Don't need to do anything on error.
    }
  };

  /**
   * Implement the previousSlide hook for pagers.
   */
  Drupal.viewsSlideshowPager.previousSlide = function (options) {
    // Route the pager call to the correct pager type.
    // Need to use try catch so we don't have to check to make sure every part
    // of the object is defined.
    try {
      if (typeof Drupal.settings.viewsSlideshowPager[options.slideshowID].top.type != "undefined" && typeof Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].top.type].previousSlide == 'function') {
        Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].top.type].previousSlide(options);
      }
    }
    catch(err) {
      // Don't need to do anything on error.
    }

    try {
      if (typeof Drupal.settings.viewsSlideshowPager[options.slideshowID].bottom.type != "undefined" && typeof Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].bottom.type].previousSlide == 'function') {
        Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].bottom.type].previousSlide(options);
      }
    }
    catch(err) {
      // Don't need to do anything on error.
    }
  };

  /**
   * Implement the nextSlide hook for pagers.
   */
  Drupal.viewsSlideshowPager.nextSlide = function (options) {
    // Route the pager call to the correct pager type.
    // Need to use try catch so we don't have to check to make sure every part
    // of the object is defined.
    try {
      if (typeof Drupal.settings.viewsSlideshowPager[options.slideshowID].top.type != "undefined" && typeof Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].top.type].nextSlide == 'function') {
        Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].top.type].nextSlide(options);
      }
    }
    catch(err) {
      // Don't need to do anything on error.
    }

    try {
      if (typeof Drupal.settings.viewsSlideshowPager[options.slideshowID].bottom.type != "undefined" && typeof Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].bottom.type].nextSlide == 'function') {
        Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].bottom.type].nextSlide(options);
      }
    }
    catch(err) {
      // Don't need to do anything on error.
    }
  };


  /**
   * Views Slideshow Pager Fields
   */

  // Add views slieshow api calls for views slideshow pager fields.
  Drupal.behaviors.viewsSlideshowPagerFields = {
    attach: function (context) {
      // Process pause on hover.
      $('.views_slideshow_pager_field:not(.views-slideshow-pager-field-processed)', context).addClass('views-slideshow-pager-field-processed').each(function() {
        // Parse out the location and unique id from the full id.
        var pagerInfo = $(this).attr('id').split('_');
        var location = pagerInfo[2];
        pagerInfo.splice(0, 3);
        var uniqueID = pagerInfo.join('_');

        // Add the activate and pause on pager hover event to each pager item.
        if (Drupal.settings.viewsSlideshowPagerFields[uniqueID][location].activatePauseOnHover) {
          $(this).children().each(function(index, pagerItem) {
            var mouseIn = function() {
              Drupal.viewsSlideshow.action({ "action": 'goToSlide', "slideshowID": uniqueID, "slideNum": index });
              Drupal.viewsSlideshow.action({ "action": 'pause', "slideshowID": uniqueID });
            }
            
            var mouseOut = function() {
              Drupal.viewsSlideshow.action({ "action": 'play', "slideshowID": uniqueID });
            }
          
            if (jQuery.fn.hoverIntent) {
              $(pagerItem).hoverIntent(mouseIn, mouseOut);
            }
            else {
              $(pagerItem).hover(mouseIn, mouseOut);
            }
            
          });
        }
        else {
          $(this).children().each(function(index, pagerItem) {
            $(pagerItem).click(function() {
              Drupal.viewsSlideshow.action({ "action": 'goToSlide', "slideshowID": uniqueID, "slideNum": index });
            });
          });
        }
      });
    }
  };

  Drupal.viewsSlideshowPagerFields = Drupal.viewsSlideshowPagerFields || {};

  /**
   * Implement the transitionBegin hook for pager fields pager.
   */
  Drupal.viewsSlideshowPagerFields.transitionBegin = function (options) {
    for (pagerLocation in Drupal.settings.viewsSlideshowPager[options.slideshowID]) {
      // Remove active class from pagers
      $('[id^="views_slideshow_pager_field_item_' + pagerLocation + '_' + options.slideshowID + '"]').removeClass('active');

      // Add active class to active pager.
      $('#views_slideshow_pager_field_item_'+ pagerLocation + '_' + options.slideshowID + '_' + options.slideNum).addClass('active');
    }

  };

  /**
   * Implement the goToSlide hook for pager fields pager.
   */
  Drupal.viewsSlideshowPagerFields.goToSlide = function (options) {
    for (pagerLocation in Drupal.settings.viewsSlideshowPager[options.slideshowID]) {
      // Remove active class from pagers
      $('[id^="views_slideshow_pager_field_item_' + pagerLocation + '_' + options.slideshowID + '"]').removeClass('active');

      // Add active class to active pager.
      $('#views_slideshow_pager_field_item_' + pagerLocation + '_' + options.slideshowID + '_' + options.slideNum).addClass('active');
    }
  };

  /**
   * Implement the previousSlide hook for pager fields pager.
   */
  Drupal.viewsSlideshowPagerFields.previousSlide = function (options) {
    for (pagerLocation in Drupal.settings.viewsSlideshowPager[options.slideshowID]) {
      // Get the current active pager.
      var pagerNum = $('[id^="views_slideshow_pager_field_item_' + pagerLocation + '_' + options.slideshowID + '"].active').attr('id').replace('views_slideshow_pager_field_item_' + pagerLocation + '_' + options.slideshowID + '_', '');

      // If we are on the first pager then activate the last pager.
      // Otherwise activate the previous pager.
      if (pagerNum == 0) {
        pagerNum = $('[id^="views_slideshow_pager_field_item_' + pagerLocation + '_' + options.slideshowID + '"]').length() - 1;
      }
      else {
        pagerNum--;
      }

      // Remove active class from pagers
      $('[id^="views_slideshow_pager_field_item_' + pagerLocation + '_' + options.slideshowID + '"]').removeClass('active');

      // Add active class to active pager.
      $('#views_slideshow_pager_field_item_' + pagerLocation + '_' + options.slideshowID + '_' + pagerNum).addClass('active');
    }
  };

  /**
   * Implement the nextSlide hook for pager fields pager.
   */
  Drupal.viewsSlideshowPagerFields.nextSlide = function (options) {
    for (pagerLocation in Drupal.settings.viewsSlideshowPager[options.slideshowID]) {
      // Get the current active pager.
      var pagerNum = $('[id^="views_slideshow_pager_field_item_' + pagerLocation + '_' + options.slideshowID + '"].active').attr('id').replace('views_slideshow_pager_field_item_' + pagerLocation + '_' + options.slideshowID + '_', '');
      var totalPagers = $('[id^="views_slideshow_pager_field_item_' + pagerLocation + '_' + options.slideshowID + '"]').length();

      // If we are on the last pager then activate the first pager.
      // Otherwise activate the next pager.
      pagerNum++;
      if (pagerNum == totalPagers) {
        pagerNum = 0;
      }

      // Remove active class from pagers
      $('[id^="views_slideshow_pager_field_item_' + pagerLocation + '_' + options.slideshowID + '"]').removeClass('active');

      // Add active class to active pager.
      $('#views_slideshow_pager_field_item_' + pagerLocation + '_' + options.slideshowID + '_' + slideNum).addClass('active');
    }
  };


  /**
   * Views Slideshow Slide Counter
   */

  Drupal.viewsSlideshowSlideCounter = Drupal.viewsSlideshowSlideCounter || {};

  /**
   * Implement the transitionBegin for the slide counter.
   */
  Drupal.viewsSlideshowSlideCounter.transitionBegin = function (options) {
    $('#views_slideshow_slide_counter_' + options.slideshowID + ' .num').text(options.slideNum + 1);
  };

  /**
   * This is used as a router to process actions for the slideshow.
   */
  Drupal.viewsSlideshow.action = function (options) {
    // Set default values for our return status.
    var status = {
      'value': true,
      'text': ''
    }

    // If an action isn't specified return false.
    if (typeof options.action == 'undefined' || options.action == '') {
      status.value = false;
      status.text =  Drupal.t('There was no action specified.');
      return error;
    }

    // If we are using pause or play switch paused state accordingly.
    if (options.action == 'pause') {
      Drupal.settings.viewsSlideshow[options.slideshowID].paused = 1;
      // If the calling method is forcing a pause then mark it as such.
      if (options.force) {
        Drupal.settings.viewsSlideshow[options.slideshowID].pausedForce = 1;
      }
    }
    else if (options.action == 'play') {
      // If the slideshow isn't forced pause or we are forcing a play then play
      // the slideshow.
      // Otherwise return telling the calling method that it was forced paused.
      if (!Drupal.settings.viewsSlideshow[options.slideshowID].pausedForce || options.force) {
        Drupal.settings.viewsSlideshow[options.slideshowID].paused = 0;
        Drupal.settings.viewsSlideshow[options.slideshowID].pausedForce = 0;
      }
      else {
        status.value = false;
        status.text += ' ' + Drupal.t('This slideshow is forced paused.');
        return status;
      }
    }

    // We use a switch statement here mainly just to limit the type of actions
    // that are available.
    switch (options.action) {
      case "goToSlide":
      case "transitionBegin":
      case "transitionEnd":
        // The three methods above require a slide number. Checking if it is
        // defined and it is a number that is an integer.
        if (typeof options.slideNum == 'undefined' || typeof options.slideNum !== 'number' || parseInt(options.slideNum) != (options.slideNum - 0)) {
          status.value = false;
          status.text = Drupal.t('An invalid integer was specified for slideNum.');
        }
      case "pause":
      case "play":
      case "nextSlide":
      case "previousSlide":
        // Grab our list of methods.
        var methods = Drupal.settings.viewsSlideshow[options.slideshowID]['methods'];

        // if the calling method specified methods that shouldn't be called then
        // exclude calling them.
        var excludeMethodsObj = {};
        if (typeof options.excludeMethods !== 'undefined') {
          // We need to turn the excludeMethods array into an object so we can use the in
          // function.
          for (var i=0; i < excludeMethods.length; i++) {
            excludeMethodsObj[excludeMethods[i]] = '';
          }
        }

        // Call every registered method and don't call excluded ones.
        for (i = 0; i < methods[options.action].length; i++) {
          if (Drupal[methods[options.action][i]] != undefined && typeof Drupal[methods[options.action][i]][options.action] == 'function' && !(methods[options.action][i] in excludeMethodsObj)) {
            Drupal[methods[options.action][i]][options.action](options);
          }
        }
        break;

      // If it gets here it's because it's an invalid action.
      default:
        status.value = false;
        status.text = Drupal.t('An invalid action "!action" was specified.', { "!action": options.action });
    }
    return status;
  };
})(jQuery);
;
(function($){
Drupal.behaviors.contextReactionBlock = {attach: function(context) {
  $('form.context-editor:not(.context-block-processed)')
    .addClass('context-block-processed')
    .each(function() {
      var id = $(this).attr('id');
      Drupal.contextBlockEditor = Drupal.contextBlockEditor || {};
      $(this).bind('init.pageEditor', function(event) {
        Drupal.contextBlockEditor[id] = new DrupalContextBlockEditor($(this));
      });
      $(this).bind('start.pageEditor', function(event, context) {
        // Fallback to first context if param is empty.
        if (!context) {
          context = $(this).data('defaultContext');
        }
        Drupal.contextBlockEditor[id].editStart($(this), context);
      });
      $(this).bind('end.pageEditor', function(event) {
        Drupal.contextBlockEditor[id].editFinish();
      });
    });

  //
  // Admin Form =======================================================
  //
  // ContextBlockForm: Init.
  $('#context-blockform:not(.processed)').each(function() {
    $(this).addClass('processed');
    Drupal.contextBlockForm = new DrupalContextBlockForm($(this));
    Drupal.contextBlockForm.setState();
  });

  // ContextBlockForm: Attach block removal handlers.
  // Lives in behaviors as it may be required for attachment to new DOM elements.
  $('#context-blockform a.remove:not(.processed)').each(function() {
    $(this).addClass('processed');
    $(this).click(function() {
      $(this).parents('tr').eq(0).remove();
      Drupal.contextBlockForm.setState();
      return false;
    });
  });
}};

/**
 * Context block form. Default form for editing context block reactions.
 */
DrupalContextBlockForm = function(blockForm) {
  this.state = {};

  this.setState = function() {
    $('table.context-blockform-region', blockForm).each(function() {
      var region = $(this).attr('id').split('context-blockform-region-')[1];
      var blocks = [];
      $('tr', $(this)).each(function() {
        var bid = $(this).attr('id');
        var weight = $(this).find('select').val();
        blocks.push({'bid' : bid, 'weight' : weight});
      });
      Drupal.contextBlockForm.state[region] = blocks;
    });

    // Serialize here and set form element value.
    $('form input.context-blockform-state').val(JSON.stringify(this.state));

    // Hide enabled blocks from selector that are used
    $('table.context-blockform-region tr').each(function() {
      var bid = $(this).attr('id');
      $('div.context-blockform-selector input[value='+bid+']').parents('div.form-item').eq(0).hide();
    });
    // Show blocks in selector that are unused
    $('div.context-blockform-selector input').each(function() {
      var bid = $(this).val();
      if ($('table.context-blockform-region tr#'+bid).size() === 0) {
        $(this).parents('div.form-item').eq(0).show();
      }
    });
  };

  // make sure we update the state right before submits, this takes care of an
  // apparent race condition between saving the state and the weights getting set
  // by tabledrag
  $('#ctools-export-ui-edit-item-form').submit(function() { Drupal.contextBlockForm.setState(); });

  // Tabledrag
  // Add additional handlers to update our blocks.
  $.each(Drupal.settings.tableDrag, function(base) {
    var table = $('#' + base + ':not(.processed)', blockForm);
    if (table && table.is('.context-blockform-region')) {
      table.addClass('processed');
      table.bind('mouseup', function(event) {
        Drupal.contextBlockForm.setState();
        return;
      });
    }
  });

  // Add blocks to a region
  $('td.blocks a', blockForm).each(function() {
    $(this).click(function() {
      var region = $(this).attr('href').split('#')[1];
      var selected = $("div.context-blockform-selector input:checked");
      if (selected.size() > 0) {
        selected.each(function() {
          // create new block markup
          var block = document.createElement('tr');
          var text = $(this).parents('div.form-item').eq(0).hide().children('label').text();
          var select = '<div class="form-item form-type-select"><select class="tabledrag-hide form-select">';
          var i;
          for (i = -10; i < 10; ++i) {
            select += '<option>' + i + '</option>';
          }
          select += '</select></div>';
          $(block).attr('id', $(this).attr('value')).addClass('draggable');
          $(block).html("<td>"+ text + "</td><td>" + select + "</td><td><a href='' class='remove'>X</a></td>");

          // add block item to region
          var base = "context-blockform-region-"+ region;
          Drupal.tableDrag[base].makeDraggable(block);
          $('table#'+base).append(block);
          if ($.cookie('Drupal.tableDrag.showWeight') == 1) {
            $('table#'+base).find('.tabledrag-hide').css('display', '');
            $('table#'+base).find('.tabledrag-handle').css('display', 'none');
          }
          else {
            $('table#'+base).find('.tabledrag-hide').css('display', 'none');
            $('table#'+base).find('.tabledrag-handle').css('display', '');
          }
          Drupal.attachBehaviors($('table#'+base));

          Drupal.contextBlockForm.setState();
          $(this).removeAttr('checked');
        });
      }
      return false;
    });
  });
};

/**
 * Context block editor. AHAH editor for live block reaction editing.
 */
DrupalContextBlockEditor = function(editor) {
  this.editor = editor;
  this.state = {};
  this.blocks = {};
  this.regions = {};

  // Category selector handler.
  // Also set to "Choose a category" option as browsers can retain
  // form values from previous page load.
  $('select.context-block-browser-categories', editor).change(function() {
    var category = $(this).val();
    var params = {
      containment: 'document',
      revert: true,
      dropOnEmpty: true,
      placeholder: 'draggable-placeholder',
      forcePlaceholderSize: true,
      helper: 'clone',
      appendTo: 'body',
      connectWith: ($.ui.version === '1.6') ? ['.ui-sortable'] : '.ui-sortable'
    };
    $('div.category', editor).hide().sortable('destroy');
    $('div.category-'+category, editor).show().sortable(params);
  });
  $('select.context-block-browser-categories', editor).val(0).change();

  return this;
};

DrupalContextBlockEditor.prototype.initBlocks = function(blocks) {
  var self = this;
  this.blocks = blocks;
  blocks.each(function() {
    $(this).addClass('draggable');
    $(this).prepend($('<a class="context-block-handle"></a>'));
    $(this).prepend($('<a class="context-block-remove"></a>').click(function() {
      $(this).parent ('.block').eq(0).fadeOut('medium', function() {
        $(this).remove();
        self.updateBlocks();
      });
      return false;
    }));
  });
};

DrupalContextBlockEditor.prototype.initRegions = function(regions) {
  this.regions = regions;
};

/**
  * Update UI to match the current block states.
  */
DrupalContextBlockEditor.prototype.updateBlocks = function() {
  var browser = $('div.context-block-browser');

  // For all enabled blocks, mark corresponding addables as having been added.
  $('.block, .admin-block').each(function() {
    var bid = $(this).attr('id').split('block-')[1]; // Ugh.
    $('#context-block-addable-'+bid, browser).draggable('disable').addClass('context-block-added').removeClass('context-block-addable');
  });
  // For all hidden addables with no corresponding blocks, mark as addable.
  $('.context-block-item', browser).each(function() {
    var bid = $(this).attr('id').split('context-block-addable-')[1];
    if ($('#block-'+bid).size() === 0) {
      $(this).draggable('enable').removeClass('context-block-added').addClass('context-block-addable');
    }
  });

  // Mark empty regions.
  $(this.regions).each(function() {
    if ($('.block:has(a.context-block)', this).size() > 0) {
      $(this).removeClass('context-block-region-empty');
    }
    else {
      $(this).addClass('context-block-region-empty');
    }
  });
};

/**
  * Live update a region.
  */
DrupalContextBlockEditor.prototype.updateRegion = function(event, ui, region, op) {
  switch (op) {
    case 'over':
      $(region).removeClass('context-block-region-empty');
      break;
    case 'out':
      if (
        // jQuery UI 1.8
        $('.draggable-placeholder', region).size() === 1 &&
        $('.block:has(a.context-block)', region).size() == 0
        // jQuery UI 1.6
        // $('div.draggable-placeholder', region).size() === 0 &&
        // $('div.block:has(a.context-block)', region).size() == 1 &&
        // $('div.block:has(a.context-block)', region).attr('id') == ui.item.attr('id')
      ) {
        $(region).addClass('context-block-region-empty');
      }
      break;
  }
};

/**
  * Remove script elements while dragging & dropping.
  */
DrupalContextBlockEditor.prototype.scriptFix = function(event, ui, editor, context) {
  if ($('script', ui.item)) {
    var placeholder = $(Drupal.settings.contextBlockEditor.scriptPlaceholder);
    var label = $('div.handle label', ui.item).text();
    placeholder.children('strong').html(label);
    $('script', ui.item).parent().empty().append(placeholder);
  }
};

/**
  * Add a block to a region through an AHAH load of the block contents.
  */
DrupalContextBlockEditor.prototype.addBlock = function(event, ui, editor, context) {
  var self = this;
  if (ui.item.is('.context-block-addable')) {
    var bid = ui.item.attr('id').split('context-block-addable-')[1];

    // Construct query params for our AJAX block request.
    var params = Drupal.settings.contextBlockEditor.params;
    params.context_block = bid + ',' + context;

    // Replace item with loading block.
    var blockLoading = $('<div class="context-block-item context-block-loading"><span class="icon"></span></div>');
    ui.item.addClass('context-block-added');
    ui.item.after(blockLoading);
    ui.sender.append(ui.item);

    $.getJSON(Drupal.settings.contextBlockEditor.path, params, function(data) {
      if (data.status) {
        var newBlock = $(data.block);
        if ($('script', newBlock)) {
          $('script', newBlock).remove();
        }
        blockLoading.fadeOut(function() {
          $(this).replaceWith(newBlock);
          self.initBlocks(newBlock);
          self.updateBlocks();
          Drupal.attachBehaviors();
        });
      }
      else {
        blockLoading.fadeOut(function() { $(this).remove(); });
      }
    });
  }
  else if (ui.item.is(':has(a.context-block)')) {
    self.updateBlocks();
  }
};

/**
  * Update form hidden field with JSON representation of current block visibility states.
  */
DrupalContextBlockEditor.prototype.setState = function() {
  var self = this;

  $(this.regions).each(function() {
    var region = $('a.context-block-region', this).attr('id').split('context-block-region-')[1];
    var blocks = [];
    $('a.context-block', $(this)).each(function() {
      if ($(this).attr('class').indexOf('edit-') != -1) {
        var bid = $(this).attr('id').split('context-block-')[1];
        var context = $(this).attr('class').split('edit-')[1].split(' ')[0];
        context = context ? context : 0;
        var block = {'bid': bid, 'context': context};
        blocks.push(block);
      }
    });
    self.state[region] = blocks;
  });

  // Serialize here and set form element value.
  $('input.context-block-editor-state', this.editor).val(JSON.stringify(this.state));
};

/**
  * Disable text selection.
  */
DrupalContextBlockEditor.prototype.disableTextSelect = function() {
  if ($.browser.safari) {
    $('.block:has(a.context-block):not(:has(input,textarea))').css('WebkitUserSelect','none');
  }
  else if ($.browser.mozilla) {
    $('.block:has(a.context-block):not(:has(input,textarea))').css('MozUserSelect','none');
  }
  else if ($.browser.msie) {
    $('.block:has(a.context-block):not(:has(input,textarea))').bind('selectstart.contextBlockEditor', function() { return false; });
  }
  else {
    $(this).bind('mousedown.contextBlockEditor', function() { return false; });
  }
};

/**
  * Enable text selection.
  */
DrupalContextBlockEditor.prototype.enableTextSelect = function() {
  if ($.browser.safari) {
    $('*').css('WebkitUserSelect','');
  }
  else if ($.browser.mozilla) {
    $('*').css('MozUserSelect','');
  }
  else if ($.browser.msie) {
    $('*').unbind('selectstart.contextBlockEditor');
  }
  else {
    $(this).unbind('mousedown.contextBlockEditor');
  }
};

/**
  * Start editing. Attach handlers, begin draggable/sortables.
  */
DrupalContextBlockEditor.prototype.editStart = function(editor, context) {
  var self = this;

  // This is redundant to the start handler found in context_ui.js.
  // However it's necessary that we trigger this class addition before
  // we call .sortable() as the empty regions need to be visible.
  $(document.body).addClass('context-editing');
  this.editor.addClass('context-editing');

  this.disableTextSelect();
  this.initBlocks($('.block:has(a.context-block.edit-'+context+')'));
  this.initRegions($('a.context-block-region').parent());
  this.updateBlocks();

  // First pass, enable sortables on all regions.
  $(this.regions).each(function() {
    var region = $(this);
    var params = {
      containment: 'document',
      revert: true,
      dropOnEmpty: true,
      placeholder: 'draggable-placeholder',
      forcePlaceholderSize: true,
      items: '> .block:has(a.context-block.editable)',
      handle: 'a.context-block-handle',
      start: function(event, ui) { self.scriptFix(event, ui, editor, context); },
      stop: function(event, ui) { self.addBlock(event, ui, editor, context); },
      receive: function(event, ui) { self.addBlock(event, ui, editor, context); },
      over: function(event, ui) { self.updateRegion(event, ui, region, 'over'); },
      out: function(event, ui) { self.updateRegion(event, ui, region, 'out'); }
    };
    region.sortable(params);
  });

  // Second pass, hook up all regions via connectWith to each other.
  $(this.regions).each(function() {
    $(this).sortable('option', 'connectWith', ['.ui-sortable']);
  });

  // Terrible, terrible workaround for parentoffset issue in Safari.
  // The proper fix for this issue has been committed to jQuery UI, but was
  // not included in the 1.6 release. Therefore, we do a browser agent hack
  // to ensure that Safari users are covered by the offset fix found here:
  // http://dev.jqueryui.com/changeset/2073.
  if ($.ui.version === '1.6' && $.browser.safari) {
    $.browser.mozilla = true;
  }
};

/**
  * Finish editing. Remove handlers.
  */
DrupalContextBlockEditor.prototype.editFinish = function() {
  this.editor.removeClass('context-editing');
  this.enableTextSelect();

  // Remove UI elements.
  $(this.blocks).each(function() {
    $('a.context-block-handle, a.context-block-remove', this).remove();
    $(this).removeClass('draggable');
  });
  this.regions.sortable('destroy');

  this.setState();

  // Unhack the user agent.
  if ($.ui.version === '1.6' && $.browser.safari) {
    $.browser.mozilla = false;
  }
};

})(jQuery);
;
/**
 * @file base.js
 *
 * Some basic behaviors and utility functions for Views.
 */
(function ($) {

Drupal.Views = {};

/**
 * jQuery UI tabs, Views integration component
 */
Drupal.behaviors.viewsTabs = {
  attach: function (context) {
    if ($.viewsUi && $.viewsUi.tabs) {
      $('#views-tabset').once('views-processed').viewsTabs({
        selectedClass: 'active'
      });
    }

    $('a.views-remove-link').once('views-processed').click(function(event) {
      var id = $(this).attr('id').replace('views-remove-link-', '');
      $('#views-row-' + id).hide();
      $('#views-removed-' + id).attr('checked', true);
      event.preventDefault();
   });
  /**
    * Here is to handle display deletion
    * (checking in the hidden checkbox and hiding out the row)
    */
  $('a.display-remove-link')
    .addClass('display-processed')
    .click(function() {
      var id = $(this).attr('id').replace('display-remove-link-', '');
      $('#display-row-' + id).hide();
      $('#display-removed-' + id).attr('checked', true);
      return false;
  });
  }
};

/**
 * Helper function to parse a querystring.
 */
Drupal.Views.parseQueryString = function (query) {
  var args = {};
  var pos = query.indexOf('?');
  if (pos != -1) {
    query = query.substring(pos + 1);
  }
  var pairs = query.split('&');
  for(var i in pairs) {
    if (typeof(pairs[i]) == 'string') {
      var pair = pairs[i].split('=');
      // Ignore the 'q' path argument, if present.
      if (pair[0] != 'q' && pair[1]) {
        args[decodeURIComponent(pair[0].replace(/\+/g, ' '))] = decodeURIComponent(pair[1].replace(/\+/g, ' '));
      }
    }
  }
  return args;
};

/**
 * Helper function to return a view's arguments based on a path.
 */
Drupal.Views.parseViewArgs = function (href, viewPath) {
  var returnObj = {};
  var path = Drupal.Views.getPath(href);
  // Ensure we have a correct path.
  if (viewPath && path.substring(0, viewPath.length + 1) == viewPath + '/') {
    var args = decodeURIComponent(path.substring(viewPath.length + 1, path.length));
    returnObj.view_args = args;
    returnObj.view_path = path;
  }
  return returnObj;
};

/**
 * Strip off the protocol plus domain from an href.
 */
Drupal.Views.pathPortion = function (href) {
  // Remove e.g. http://example.com if present.
  var protocol = window.location.protocol;
  if (href.substring(0, protocol.length) == protocol) {
    // 2 is the length of the '//' that normally follows the protocol
    href = href.substring(href.indexOf('/', protocol.length + 2));
  }
  return href;
};

/**
 * Return the Drupal path portion of an href.
 */
Drupal.Views.getPath = function (href) {
  href = Drupal.Views.pathPortion(href);
  href = href.substring(Drupal.settings.basePath.length, href.length);
  // 3 is the length of the '?q=' added to the url without clean urls.
  if (href.substring(0, 3) == '?q=') {
    href = href.substring(3, href.length);
  }
  var chars = ['#', '?', '&'];
  for (i in chars) {
    if (href.indexOf(chars[i]) > -1) {
      href = href.substr(0, href.indexOf(chars[i]));
    }
  }
  return href;
};

})(jQuery);
;
(function ($) {

/**
 * A progressbar object. Initialized with the given id. Must be inserted into
 * the DOM afterwards through progressBar.element.
 *
 * method is the function which will perform the HTTP request to get the
 * progress bar state. Either "GET" or "POST".
 *
 * e.g. pb = new progressBar('myProgressBar');
 *      some_element.appendChild(pb.element);
 */
Drupal.progressBar = function (id, updateCallback, method, errorCallback) {
  var pb = this;
  this.id = id;
  this.method = method || 'GET';
  this.updateCallback = updateCallback;
  this.errorCallback = errorCallback;

  // The WAI-ARIA setting aria-live="polite" will announce changes after users
  // have completed their current activity and not interrupt the screen reader.
  this.element = $('<div class="progress" aria-live="polite"></div>').attr('id', id);
  this.element.html('<div class="bar"><div class="filled"></div></div>' +
                    '<div class="percentage"></div>' +
                    '<div class="message">&nbsp;</div>');
};

/**
 * Set the percentage and status message for the progressbar.
 */
Drupal.progressBar.prototype.setProgress = function (percentage, message) {
  if (percentage >= 0 && percentage <= 100) {
    $('div.filled', this.element).css('width', percentage + '%');
    $('div.percentage', this.element).html(percentage + '%');
  }
  $('div.message', this.element).html(message);
  if (this.updateCallback) {
    this.updateCallback(percentage, message, this);
  }
};

/**
 * Start monitoring progress via Ajax.
 */
Drupal.progressBar.prototype.startMonitoring = function (uri, delay) {
  this.delay = delay;
  this.uri = uri;
  this.sendPing();
};

/**
 * Stop monitoring progress via Ajax.
 */
Drupal.progressBar.prototype.stopMonitoring = function () {
  clearTimeout(this.timer);
  // This allows monitoring to be stopped from within the callback.
  this.uri = null;
};

/**
 * Request progress data from server.
 */
Drupal.progressBar.prototype.sendPing = function () {
  if (this.timer) {
    clearTimeout(this.timer);
  }
  if (this.uri) {
    var pb = this;
    // When doing a post request, you need non-null data. Otherwise a
    // HTTP 411 or HTTP 406 (with Apache mod_security) error may result.
    $.ajax({
      type: this.method,
      url: this.uri,
      data: '',
      dataType: 'json',
      success: function (progress) {
        // Display errors.
        if (progress.status == 0) {
          pb.displayError(progress.data);
          return;
        }
        // Update display.
        pb.setProgress(progress.percentage, progress.message);
        // Schedule next timer.
        pb.timer = setTimeout(function () { pb.sendPing(); }, pb.delay);
      },
      error: function (xmlhttp) {
        pb.displayError(Drupal.ajaxError(xmlhttp, pb.uri));
      }
    });
  }
};

/**
 * Display errors on the page.
 */
Drupal.progressBar.prototype.displayError = function (string) {
  var error = $('<div class="messages error"></div>').html(string);
  $(this.element).before(error).hide();

  if (this.errorCallback) {
    this.errorCallback(this);
  }
};

})(jQuery);
;
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
/*!
 * jQuery Cycle Plugin (with Transition Definitions)
 * Examples and documentation at: http://jquery.malsup.com/cycle/
 * Copyright (c) 2007-2010 M. Alsup
 * Version: 2.9999.3 (08-MAR-2012)
 * Dual licensed under the MIT and GPL licenses.
 * http://jquery.malsup.com/license.html
 * Requires: jQuery v1.3.2 or later
 */
;(function($, undefined) {

var ver = '2.9999.3';

// if $.support is not defined (pre jQuery 1.3) add what I need
if ($.support == undefined) {
	$.support = {
		opacity: !($.browser.msie)
	};
}

function debug(s) {
	$.fn.cycle.debug && log(s);
}		
function log() {
	window.console && console.log && console.log('[cycle] ' + Array.prototype.join.call(arguments,' '));
}
$.expr[':'].paused = function(el) {
	return el.cyclePause;
};


// the options arg can be...
//   a number  - indicates an immediate transition should occur to the given slide index
//   a string  - 'pause', 'resume', 'toggle', 'next', 'prev', 'stop', 'destroy' or the name of a transition effect (ie, 'fade', 'zoom', etc)
//   an object - properties to control the slideshow
//
// the arg2 arg can be...
//   the name of an fx (only used in conjunction with a numeric value for 'options')
//   the value true (only used in first arg == 'resume') and indicates
//	 that the resume should occur immediately (not wait for next timeout)

$.fn.cycle = function(options, arg2) {
	var o = { s: this.selector, c: this.context };

	// in 1.3+ we can fix mistakes with the ready state
	if (this.length === 0 && options != 'stop') {
		if (!$.isReady && o.s) {
			log('DOM not ready, queuing slideshow');
			$(function() {
				$(o.s,o.c).cycle(options,arg2);
			});
			return this;
		}
		// is your DOM ready?  http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
		log('terminating; zero elements found by selector' + ($.isReady ? '' : ' (DOM not ready)'));
		return this;
	}

	// iterate the matched nodeset
	return this.each(function() {
		var opts = handleArguments(this, options, arg2);
		if (opts === false)
			return;

		opts.updateActivePagerLink = opts.updateActivePagerLink || $.fn.cycle.updateActivePagerLink;
		
		// stop existing slideshow for this container (if there is one)
		if (this.cycleTimeout)
			clearTimeout(this.cycleTimeout);
		this.cycleTimeout = this.cyclePause = 0;

		var $cont = $(this);
		var $slides = opts.slideExpr ? $(opts.slideExpr, this) : $cont.children();
		var els = $slides.get();

		var opts2 = buildOptions($cont, $slides, els, opts, o);
		if (opts2 === false)
			return;

		if (els.length < 2) {
			log('terminating; too few slides: ' + els.length);
			return;
		}

		var startTime = opts2.continuous ? 10 : getTimeout(els[opts2.currSlide], els[opts2.nextSlide], opts2, !opts2.backwards);

		// if it's an auto slideshow, kick it off
		if (startTime) {
			startTime += (opts2.delay || 0);
			if (startTime < 10)
				startTime = 10;
			debug('first timeout: ' + startTime);
			this.cycleTimeout = setTimeout(function(){go(els,opts2,0,!opts.backwards)}, startTime);
		}
	});
};

function triggerPause(cont, byHover, onPager) {
	var opts = $(cont).data('cycle.opts');
	var paused = !!cont.cyclePause;
	if (paused && opts.paused)
		opts.paused(cont, opts, byHover, onPager);
	else if (!paused && opts.resumed)
		opts.resumed(cont, opts, byHover, onPager);
}

// process the args that were passed to the plugin fn
function handleArguments(cont, options, arg2) {
	if (cont.cycleStop == undefined)
		cont.cycleStop = 0;
	if (options === undefined || options === null)
		options = {};
	if (options.constructor == String) {
		switch(options) {
		case 'destroy':
		case 'stop':
			var opts = $(cont).data('cycle.opts');
			if (!opts)
				return false;
			cont.cycleStop++; // callbacks look for change
			if (cont.cycleTimeout)
				clearTimeout(cont.cycleTimeout);
			cont.cycleTimeout = 0;
			opts.elements && $(opts.elements).stop();
			$(cont).removeData('cycle.opts');
			if (options == 'destroy')
				destroy(cont, opts);
			return false;
		case 'toggle':
			cont.cyclePause = (cont.cyclePause === 1) ? 0 : 1;
			checkInstantResume(cont.cyclePause, arg2, cont);
			triggerPause(cont);
			return false;
		case 'pause':
			cont.cyclePause = 1;
			triggerPause(cont);
			return false;
		case 'resume':
			cont.cyclePause = 0;
			checkInstantResume(false, arg2, cont);
			triggerPause(cont);
			return false;
		case 'prev':
		case 'next':
			var opts = $(cont).data('cycle.opts');
			if (!opts) {
				log('options not found, "prev/next" ignored');
				return false;
			}
			$.fn.cycle[options](opts);
			return false;
		default:
			options = { fx: options };
		};
		return options;
	}
	else if (options.constructor == Number) {
		// go to the requested slide
		var num = options;
		options = $(cont).data('cycle.opts');
		if (!options) {
			log('options not found, can not advance slide');
			return false;
		}
		if (num < 0 || num >= options.elements.length) {
			log('invalid slide index: ' + num);
			return false;
		}
		options.nextSlide = num;
		if (cont.cycleTimeout) {
			clearTimeout(cont.cycleTimeout);
			cont.cycleTimeout = 0;
		}
		if (typeof arg2 == 'string')
			options.oneTimeFx = arg2;
		go(options.elements, options, 1, num >= options.currSlide);
		return false;
	}
	return options;
	
	function checkInstantResume(isPaused, arg2, cont) {
		if (!isPaused && arg2 === true) { // resume now!
			var options = $(cont).data('cycle.opts');
			if (!options) {
				log('options not found, can not resume');
				return false;
			}
			if (cont.cycleTimeout) {
				clearTimeout(cont.cycleTimeout);
				cont.cycleTimeout = 0;
			}
			go(options.elements, options, 1, !options.backwards);
		}
	}
};

function removeFilter(el, opts) {
	if (!$.support.opacity && opts.cleartype && el.style.filter) {
		try { el.style.removeAttribute('filter'); }
		catch(smother) {} // handle old opera versions
	}
};

// unbind event handlers
function destroy(cont, opts) {
	if (opts.next)
		$(opts.next).unbind(opts.prevNextEvent);
	if (opts.prev)
		$(opts.prev).unbind(opts.prevNextEvent);
	
	if (opts.pager || opts.pagerAnchorBuilder)
		$.each(opts.pagerAnchors || [], function() {
			this.unbind().remove();
		});
	opts.pagerAnchors = null;
	$(cont).unbind('mouseenter.cycle mouseleave.cycle');
	if (opts.destroy) // callback
		opts.destroy(opts);
};

// one-time initialization
function buildOptions($cont, $slides, els, options, o) {
	var startingSlideSpecified;
	// support metadata plugin (v1.0 and v2.0)
	var opts = $.extend({}, $.fn.cycle.defaults, options || {}, $.metadata ? $cont.metadata() : $.meta ? $cont.data() : {});
	var meta = $.isFunction($cont.data) ? $cont.data(opts.metaAttr) : null;
	if (meta)
		opts = $.extend(opts, meta);
	if (opts.autostop)
		opts.countdown = opts.autostopCount || els.length;

	var cont = $cont[0];
	$cont.data('cycle.opts', opts);
	opts.$cont = $cont;
	opts.stopCount = cont.cycleStop;
	opts.elements = els;
	opts.before = opts.before ? [opts.before] : [];
	opts.after = opts.after ? [opts.after] : [];

	// push some after callbacks
	if (!$.support.opacity && opts.cleartype)
		opts.after.push(function() { removeFilter(this, opts); });
	if (opts.continuous)
		opts.after.push(function() { go(els,opts,0,!opts.backwards); });

	saveOriginalOpts(opts);

	// clearType corrections
	if (!$.support.opacity && opts.cleartype && !opts.cleartypeNoBg)
		clearTypeFix($slides);

	// container requires non-static position so that slides can be position within
	if ($cont.css('position') == 'static')
		$cont.css('position', 'relative');
	if (opts.width)
		$cont.width(opts.width);
	if (opts.height && opts.height != 'auto')
		$cont.height(opts.height);

	if (opts.startingSlide != undefined) {
		opts.startingSlide = parseInt(opts.startingSlide,10);
		if (opts.startingSlide >= els.length || opts.startSlide < 0)
			opts.startingSlide = 0; // catch bogus input
		else 
			startingSlideSpecified = true;
	}
	else if (opts.backwards)
		opts.startingSlide = els.length - 1;
	else
		opts.startingSlide = 0;

	// if random, mix up the slide array
	if (opts.random) {
		opts.randomMap = [];
		for (var i = 0; i < els.length; i++)
			opts.randomMap.push(i);
		opts.randomMap.sort(function(a,b) {return Math.random() - 0.5;});
		if (startingSlideSpecified) {
			// try to find the specified starting slide and if found set start slide index in the map accordingly
			for ( var cnt = 0; cnt < els.length; cnt++ ) {
				if ( opts.startingSlide == opts.randomMap[cnt] ) {
					opts.randomIndex = cnt;
				}
			}
		}
		else {
			opts.randomIndex = 1;
			opts.startingSlide = opts.randomMap[1];
		}
	}
	else if (opts.startingSlide >= els.length)
		opts.startingSlide = 0; // catch bogus input
	opts.currSlide = opts.startingSlide || 0;
	var first = opts.startingSlide;

	// set position and zIndex on all the slides
	$slides.css({position: 'absolute', top:0, left:0}).hide().each(function(i) {
		var z;
		if (opts.backwards)
			z = first ? i <= first ? els.length + (i-first) : first-i : els.length-i;
		else
			z = first ? i >= first ? els.length - (i-first) : first-i : els.length-i;
		$(this).css('z-index', z);
	});

	// make sure first slide is visible
	$(els[first]).css('opacity',1).show(); // opacity bit needed to handle restart use case
	removeFilter(els[first], opts);

	// stretch slides
	if (opts.fit) {
		if (!opts.aspect) {
	        if (opts.width)
	            $slides.width(opts.width);
	        if (opts.height && opts.height != 'auto')
	            $slides.height(opts.height);
		} else {
			$slides.each(function(){
				var $slide = $(this);
				var ratio = (opts.aspect === true) ? $slide.width()/$slide.height() : opts.aspect;
				if( opts.width && $slide.width() != opts.width ) {
					$slide.width( opts.width );
					$slide.height( opts.width / ratio );
				}

				if( opts.height && $slide.height() < opts.height ) {
					$slide.height( opts.height );
					$slide.width( opts.height * ratio );
				}
			});
		}
	}

	if (opts.center && ((!opts.fit) || opts.aspect)) {
		$slides.each(function(){
			var $slide = $(this);
			$slide.css({
				"margin-left": opts.width ?
					((opts.width - $slide.width()) / 2) + "px" :
					0,
				"margin-top": opts.height ?
					((opts.height - $slide.height()) / 2) + "px" :
					0
			});
		});
	}

	if (opts.center && !opts.fit && !opts.slideResize) {
	  	$slides.each(function(){
	    	var $slide = $(this);
	    	$slide.css({
	      		"margin-left": opts.width ? ((opts.width - $slide.width()) / 2) + "px" : 0,
	      		"margin-top": opts.height ? ((opts.height - $slide.height()) / 2) + "px" : 0
	    	});
	  	});
	}
		
	// stretch container
	var reshape = opts.containerResize && !$cont.innerHeight();
	if (reshape) { // do this only if container has no size http://tinyurl.com/da2oa9
		var maxw = 0, maxh = 0;
		for(var j=0; j < els.length; j++) {
			var $e = $(els[j]), e = $e[0], w = $e.outerWidth(), h = $e.outerHeight();
			if (!w) w = e.offsetWidth || e.width || $e.attr('width');
			if (!h) h = e.offsetHeight || e.height || $e.attr('height');
			maxw = w > maxw ? w : maxw;
			maxh = h > maxh ? h : maxh;
		}
		if (maxw > 0 && maxh > 0)
			$cont.css({width:maxw+'px',height:maxh+'px'});
	}

	var pauseFlag = false;  // https://github.com/malsup/cycle/issues/44
	if (opts.pause)
		$cont.bind('mouseenter.cycle', function(){
			pauseFlag = true;
			this.cyclePause++;
			triggerPause(cont, true);
		}).bind('mouseleave.cycle', function(){
				pauseFlag && this.cyclePause--;
				triggerPause(cont, true);
		});

	if (supportMultiTransitions(opts) === false)
		return false;

	// apparently a lot of people use image slideshows without height/width attributes on the images.
	// Cycle 2.50+ requires the sizing info for every slide; this block tries to deal with that.
	var requeue = false;
	options.requeueAttempts = options.requeueAttempts || 0;
	$slides.each(function() {
		// try to get height/width of each slide
		var $el = $(this);
		this.cycleH = (opts.fit && opts.height) ? opts.height : ($el.height() || this.offsetHeight || this.height || $el.attr('height') || 0);
		this.cycleW = (opts.fit && opts.width) ? opts.width : ($el.width() || this.offsetWidth || this.width || $el.attr('width') || 0);

		if ( $el.is('img') ) {
			// sigh..  sniffing, hacking, shrugging...  this crappy hack tries to account for what browsers do when
			// an image is being downloaded and the markup did not include sizing info (height/width attributes);
			// there seems to be some "default" sizes used in this situation
			var loadingIE	= ($.browser.msie  && this.cycleW == 28 && this.cycleH == 30 && !this.complete);
			var loadingFF	= ($.browser.mozilla && this.cycleW == 34 && this.cycleH == 19 && !this.complete);
			var loadingOp	= ($.browser.opera && ((this.cycleW == 42 && this.cycleH == 19) || (this.cycleW == 37 && this.cycleH == 17)) && !this.complete);
			var loadingOther = (this.cycleH == 0 && this.cycleW == 0 && !this.complete);
			// don't requeue for images that are still loading but have a valid size
			if (loadingIE || loadingFF || loadingOp || loadingOther) {
				if (o.s && opts.requeueOnImageNotLoaded && ++options.requeueAttempts < 100) { // track retry count so we don't loop forever
					log(options.requeueAttempts,' - img slide not loaded, requeuing slideshow: ', this.src, this.cycleW, this.cycleH);
					setTimeout(function() {$(o.s,o.c).cycle(options)}, opts.requeueTimeout);
					requeue = true;
					return false; // break each loop
				}
				else {
					log('could not determine size of image: '+this.src, this.cycleW, this.cycleH);
				}
			}
		}
		return true;
	});

	if (requeue)
		return false;

	opts.cssBefore = opts.cssBefore || {};
	opts.cssAfter = opts.cssAfter || {};
	opts.cssFirst = opts.cssFirst || {};
	opts.animIn = opts.animIn || {};
	opts.animOut = opts.animOut || {};

	$slides.not(':eq('+first+')').css(opts.cssBefore);
	$($slides[first]).css(opts.cssFirst);

	if (opts.timeout) {
		opts.timeout = parseInt(opts.timeout,10);
		// ensure that timeout and speed settings are sane
		if (opts.speed.constructor == String)
			opts.speed = $.fx.speeds[opts.speed] || parseInt(opts.speed,10);
		if (!opts.sync)
			opts.speed = opts.speed / 2;
		
		var buffer = opts.fx == 'none' ? 0 : opts.fx == 'shuffle' ? 500 : 250;
		while((opts.timeout - opts.speed) < buffer) // sanitize timeout
			opts.timeout += opts.speed;
	}
	if (opts.easing)
		opts.easeIn = opts.easeOut = opts.easing;
	if (!opts.speedIn)
		opts.speedIn = opts.speed;
	if (!opts.speedOut)
		opts.speedOut = opts.speed;

	opts.slideCount = els.length;
	opts.currSlide = opts.lastSlide = first;
	if (opts.random) {
		if (++opts.randomIndex == els.length)
			opts.randomIndex = 0;
		opts.nextSlide = opts.randomMap[opts.randomIndex];
	}
	else if (opts.backwards)
		opts.nextSlide = opts.startingSlide == 0 ? (els.length-1) : opts.startingSlide-1;
	else
		opts.nextSlide = opts.startingSlide >= (els.length-1) ? 0 : opts.startingSlide+1;

	// run transition init fn
	if (!opts.multiFx) {
		var init = $.fn.cycle.transitions[opts.fx];
		if ($.isFunction(init))
			init($cont, $slides, opts);
		else if (opts.fx != 'custom' && !opts.multiFx) {
			log('unknown transition: ' + opts.fx,'; slideshow terminating');
			return false;
		}
	}

	// fire artificial events
	var e0 = $slides[first];
	if (!opts.skipInitializationCallbacks) {
		if (opts.before.length)
			opts.before[0].apply(e0, [e0, e0, opts, true]);
		if (opts.after.length)
			opts.after[0].apply(e0, [e0, e0, opts, true]);
	}
	if (opts.next)
		$(opts.next).bind(opts.prevNextEvent,function(){return advance(opts,1)});
	if (opts.prev)
		$(opts.prev).bind(opts.prevNextEvent,function(){return advance(opts,0)});
	if (opts.pager || opts.pagerAnchorBuilder)
		buildPager(els,opts);

	exposeAddSlide(opts, els);

	return opts;
};

// save off original opts so we can restore after clearing state
function saveOriginalOpts(opts) {
	opts.original = { before: [], after: [] };
	opts.original.cssBefore = $.extend({}, opts.cssBefore);
	opts.original.cssAfter  = $.extend({}, opts.cssAfter);
	opts.original.animIn	= $.extend({}, opts.animIn);
	opts.original.animOut   = $.extend({}, opts.animOut);
	$.each(opts.before, function() { opts.original.before.push(this); });
	$.each(opts.after,  function() { opts.original.after.push(this); });
};

function supportMultiTransitions(opts) {
	var i, tx, txs = $.fn.cycle.transitions;
	// look for multiple effects
	if (opts.fx.indexOf(',') > 0) {
		opts.multiFx = true;
		opts.fxs = opts.fx.replace(/\s*/g,'').split(',');
		// discard any bogus effect names
		for (i=0; i < opts.fxs.length; i++) {
			var fx = opts.fxs[i];
			tx = txs[fx];
			if (!tx || !txs.hasOwnProperty(fx) || !$.isFunction(tx)) {
				log('discarding unknown transition: ',fx);
				opts.fxs.splice(i,1);
				i--;
			}
		}
		// if we have an empty list then we threw everything away!
		if (!opts.fxs.length) {
			log('No valid transitions named; slideshow terminating.');
			return false;
		}
	}
	else if (opts.fx == 'all') {  // auto-gen the list of transitions
		opts.multiFx = true;
		opts.fxs = [];
		for (p in txs) {
			tx = txs[p];
			if (txs.hasOwnProperty(p) && $.isFunction(tx))
				opts.fxs.push(p);
		}
	}
	if (opts.multiFx && opts.randomizeEffects) {
		// munge the fxs array to make effect selection random
		var r1 = Math.floor(Math.random() * 20) + 30;
		for (i = 0; i < r1; i++) {
			var r2 = Math.floor(Math.random() * opts.fxs.length);
			opts.fxs.push(opts.fxs.splice(r2,1)[0]);
		}
		debug('randomized fx sequence: ',opts.fxs);
	}
	return true;
};

// provide a mechanism for adding slides after the slideshow has started
function exposeAddSlide(opts, els) {
	opts.addSlide = function(newSlide, prepend) {
		var $s = $(newSlide), s = $s[0];
		if (!opts.autostopCount)
			opts.countdown++;
		els[prepend?'unshift':'push'](s);
		if (opts.els)
			opts.els[prepend?'unshift':'push'](s); // shuffle needs this
		opts.slideCount = els.length;

		// add the slide to the random map and resort
		if (opts.random) {
			opts.randomMap.push(opts.slideCount-1);
			opts.randomMap.sort(function(a,b) {return Math.random() - 0.5;});
		}

		$s.css('position','absolute');
		$s[prepend?'prependTo':'appendTo'](opts.$cont);

		if (prepend) {
			opts.currSlide++;
			opts.nextSlide++;
		}

		if (!$.support.opacity && opts.cleartype && !opts.cleartypeNoBg)
			clearTypeFix($s);

		if (opts.fit && opts.width)
			$s.width(opts.width);
		if (opts.fit && opts.height && opts.height != 'auto')
			$s.height(opts.height);
		s.cycleH = (opts.fit && opts.height) ? opts.height : $s.height();
		s.cycleW = (opts.fit && opts.width) ? opts.width : $s.width();

		$s.css(opts.cssBefore);

		if (opts.pager || opts.pagerAnchorBuilder)
			$.fn.cycle.createPagerAnchor(els.length-1, s, $(opts.pager), els, opts);

		if ($.isFunction(opts.onAddSlide))
			opts.onAddSlide($s);
		else
			$s.hide(); // default behavior
	};
}

// reset internal state; we do this on every pass in order to support multiple effects
$.fn.cycle.resetState = function(opts, fx) {
	fx = fx || opts.fx;
	opts.before = []; opts.after = [];
	opts.cssBefore = $.extend({}, opts.original.cssBefore);
	opts.cssAfter  = $.extend({}, opts.original.cssAfter);
	opts.animIn	= $.extend({}, opts.original.animIn);
	opts.animOut   = $.extend({}, opts.original.animOut);
	opts.fxFn = null;
	$.each(opts.original.before, function() { opts.before.push(this); });
	$.each(opts.original.after,  function() { opts.after.push(this); });

	// re-init
	var init = $.fn.cycle.transitions[fx];
	if ($.isFunction(init))
		init(opts.$cont, $(opts.elements), opts);
};

// this is the main engine fn, it handles the timeouts, callbacks and slide index mgmt
function go(els, opts, manual, fwd) {
	var p = opts.$cont[0], curr = els[opts.currSlide], next = els[opts.nextSlide];

	// opts.busy is true if we're in the middle of an animation
	if (manual && opts.busy && opts.manualTrump) {
		// let manual transitions requests trump active ones
		debug('manualTrump in go(), stopping active transition');
		$(els).stop(true,true);
		opts.busy = 0;
		clearTimeout(p.cycleTimeout);
	}

	// don't begin another timeout-based transition if there is one active
	if (opts.busy) {
		debug('transition active, ignoring new tx request');
		return;
	}


	// stop cycling if we have an outstanding stop request
	if (p.cycleStop != opts.stopCount || p.cycleTimeout === 0 && !manual)
		return;

	// check to see if we should stop cycling based on autostop options
	if (!manual && !p.cyclePause && !opts.bounce &&
		((opts.autostop && (--opts.countdown <= 0)) ||
		(opts.nowrap && !opts.random && opts.nextSlide < opts.currSlide))) {
		if (opts.end)
			opts.end(opts);
		return;
	}

	// if slideshow is paused, only transition on a manual trigger
	var changed = false;
	if ((manual || !p.cyclePause) && (opts.nextSlide != opts.currSlide)) {
		changed = true;
		var fx = opts.fx;
		// keep trying to get the slide size if we don't have it yet
		curr.cycleH = curr.cycleH || $(curr).height();
		curr.cycleW = curr.cycleW || $(curr).width();
		next.cycleH = next.cycleH || $(next).height();
		next.cycleW = next.cycleW || $(next).width();

		// support multiple transition types
		if (opts.multiFx) {
			if (fwd && (opts.lastFx == undefined || ++opts.lastFx >= opts.fxs.length))
				opts.lastFx = 0;
			else if (!fwd && (opts.lastFx == undefined || --opts.lastFx < 0))
				opts.lastFx = opts.fxs.length - 1;
			fx = opts.fxs[opts.lastFx];
		}

		// one-time fx overrides apply to:  $('div').cycle(3,'zoom');
		if (opts.oneTimeFx) {
			fx = opts.oneTimeFx;
			opts.oneTimeFx = null;
		}

		$.fn.cycle.resetState(opts, fx);

		// run the before callbacks
		if (opts.before.length)
			$.each(opts.before, function(i,o) {
				if (p.cycleStop != opts.stopCount) return;
				o.apply(next, [curr, next, opts, fwd]);
			});

		// stage the after callacks
		var after = function() {
			opts.busy = 0;
			$.each(opts.after, function(i,o) {
				if (p.cycleStop != opts.stopCount) return;
				o.apply(next, [curr, next, opts, fwd]);
			});
			if (!p.cycleStop) {
				// queue next transition
				queueNext();
			}
		};

		debug('tx firing('+fx+'); currSlide: ' + opts.currSlide + '; nextSlide: ' + opts.nextSlide);
		
		// get ready to perform the transition
		opts.busy = 1;
		if (opts.fxFn) // fx function provided?
			opts.fxFn(curr, next, opts, after, fwd, manual && opts.fastOnEvent);
		else if ($.isFunction($.fn.cycle[opts.fx])) // fx plugin ?
			$.fn.cycle[opts.fx](curr, next, opts, after, fwd, manual && opts.fastOnEvent);
		else
			$.fn.cycle.custom(curr, next, opts, after, fwd, manual && opts.fastOnEvent);
	}
	else {
		queueNext();
	}

	if (changed || opts.nextSlide == opts.currSlide) {
		// calculate the next slide
		opts.lastSlide = opts.currSlide;
		if (opts.random) {
			opts.currSlide = opts.nextSlide;
			if (++opts.randomIndex == els.length) {
				opts.randomIndex = 0;
				opts.randomMap.sort(function(a,b) {return Math.random() - 0.5;});
			}
			opts.nextSlide = opts.randomMap[opts.randomIndex];
			if (opts.nextSlide == opts.currSlide)
				opts.nextSlide = (opts.currSlide == opts.slideCount - 1) ? 0 : opts.currSlide + 1;
		}
		else if (opts.backwards) {
			var roll = (opts.nextSlide - 1) < 0;
			if (roll && opts.bounce) {
				opts.backwards = !opts.backwards;
				opts.nextSlide = 1;
				opts.currSlide = 0;
			}
			else {
				opts.nextSlide = roll ? (els.length-1) : opts.nextSlide-1;
				opts.currSlide = roll ? 0 : opts.nextSlide+1;
			}
		}
		else { // sequence
			var roll = (opts.nextSlide + 1) == els.length;
			if (roll && opts.bounce) {
				opts.backwards = !opts.backwards;
				opts.nextSlide = els.length-2;
				opts.currSlide = els.length-1;
			}
			else {
				opts.nextSlide = roll ? 0 : opts.nextSlide+1;
				opts.currSlide = roll ? els.length-1 : opts.nextSlide-1;
			}
		}
	}
	if (changed && opts.pager)
		opts.updateActivePagerLink(opts.pager, opts.currSlide, opts.activePagerClass);
	
	function queueNext() {
		// stage the next transition
		var ms = 0, timeout = opts.timeout;
		if (opts.timeout && !opts.continuous) {
			ms = getTimeout(els[opts.currSlide], els[opts.nextSlide], opts, fwd);
         if (opts.fx == 'shuffle')
            ms -= opts.speedOut;
      }
		else if (opts.continuous && p.cyclePause) // continuous shows work off an after callback, not this timer logic
			ms = 10;
		if (ms > 0)
			p.cycleTimeout = setTimeout(function(){ go(els, opts, 0, !opts.backwards) }, ms);
	}
};

// invoked after transition
$.fn.cycle.updateActivePagerLink = function(pager, currSlide, clsName) {
   $(pager).each(function() {
       $(this).children().removeClass(clsName).eq(currSlide).addClass(clsName);
   });
};

// calculate timeout value for current transition
function getTimeout(curr, next, opts, fwd) {
	if (opts.timeoutFn) {
		// call user provided calc fn
		var t = opts.timeoutFn.call(curr,curr,next,opts,fwd);
		while (opts.fx != 'none' && (t - opts.speed) < 250) // sanitize timeout
			t += opts.speed;
		debug('calculated timeout: ' + t + '; speed: ' + opts.speed);
		if (t !== false)
			return t;
	}
	return opts.timeout;
};

// expose next/prev function, caller must pass in state
$.fn.cycle.next = function(opts) { advance(opts,1); };
$.fn.cycle.prev = function(opts) { advance(opts,0);};

// advance slide forward or back
function advance(opts, moveForward) {
	var val = moveForward ? 1 : -1;
	var els = opts.elements;
	var p = opts.$cont[0], timeout = p.cycleTimeout;
	if (timeout) {
		clearTimeout(timeout);
		p.cycleTimeout = 0;
	}
	if (opts.random && val < 0) {
		// move back to the previously display slide
		opts.randomIndex--;
		if (--opts.randomIndex == -2)
			opts.randomIndex = els.length-2;
		else if (opts.randomIndex == -1)
			opts.randomIndex = els.length-1;
		opts.nextSlide = opts.randomMap[opts.randomIndex];
	}
	else if (opts.random) {
		opts.nextSlide = opts.randomMap[opts.randomIndex];
	}
	else {
		opts.nextSlide = opts.currSlide + val;
		if (opts.nextSlide < 0) {
			if (opts.nowrap) return false;
			opts.nextSlide = els.length - 1;
		}
		else if (opts.nextSlide >= els.length) {
			if (opts.nowrap) return false;
			opts.nextSlide = 0;
		}
	}

	var cb = opts.onPrevNextEvent || opts.prevNextClick; // prevNextClick is deprecated
	if ($.isFunction(cb))
		cb(val > 0, opts.nextSlide, els[opts.nextSlide]);
	go(els, opts, 1, moveForward);
	return false;
};

function buildPager(els, opts) {
	var $p = $(opts.pager);
	$.each(els, function(i,o) {
		$.fn.cycle.createPagerAnchor(i,o,$p,els,opts);
	});
	opts.updateActivePagerLink(opts.pager, opts.startingSlide, opts.activePagerClass);
};

$.fn.cycle.createPagerAnchor = function(i, el, $p, els, opts) {
	var a;
	if ($.isFunction(opts.pagerAnchorBuilder)) {
		a = opts.pagerAnchorBuilder(i,el);
		debug('pagerAnchorBuilder('+i+', el) returned: ' + a);
	}
	else
		a = '<a href="#">'+(i+1)+'</a>';
		
	if (!a)
		return;
	var $a = $(a);
	// don't reparent if anchor is in the dom
	if ($a.parents('body').length === 0) {
		var arr = [];
		if ($p.length > 1) {
			$p.each(function() {
				var $clone = $a.clone(true);
				$(this).append($clone);
				arr.push($clone[0]);
			});
			$a = $(arr);
		}
		else {
			$a.appendTo($p);
		}
	}

	opts.pagerAnchors =  opts.pagerAnchors || [];
	opts.pagerAnchors.push($a);
	
	var pagerFn = function(e) {
		e.preventDefault();
		opts.nextSlide = i;
		var p = opts.$cont[0], timeout = p.cycleTimeout;
		if (timeout) {
			clearTimeout(timeout);
			p.cycleTimeout = 0;
		}
		var cb = opts.onPagerEvent || opts.pagerClick; // pagerClick is deprecated
		if ($.isFunction(cb))
			cb(opts.nextSlide, els[opts.nextSlide]);
		go(els,opts,1,opts.currSlide < i); // trigger the trans
//		return false; // <== allow bubble
	};
	
	if ( /mouseenter|mouseover/i.test(opts.pagerEvent) ) {
		$a.hover(pagerFn, function(){/* no-op */} );
	}
	else {
		$a.bind(opts.pagerEvent, pagerFn);
	}
	
	if ( ! /^click/.test(opts.pagerEvent) && !opts.allowPagerClickBubble)
		$a.bind('click.cycle', function(){return false;}); // suppress click
	
	var cont = opts.$cont[0];
	var pauseFlag = false; // https://github.com/malsup/cycle/issues/44
	if (opts.pauseOnPagerHover) {
		$a.hover(
			function() { 
				pauseFlag = true;
				cont.cyclePause++; 
				triggerPause(cont,true,true);
			}, function() { 
				pauseFlag && cont.cyclePause--; 
				triggerPause(cont,true,true);
			} 
		);
	}
};

// helper fn to calculate the number of slides between the current and the next
$.fn.cycle.hopsFromLast = function(opts, fwd) {
	var hops, l = opts.lastSlide, c = opts.currSlide;
	if (fwd)
		hops = c > l ? c - l : opts.slideCount - l;
	else
		hops = c < l ? l - c : l + opts.slideCount - c;
	return hops;
};

// fix clearType problems in ie6 by setting an explicit bg color
// (otherwise text slides look horrible during a fade transition)
function clearTypeFix($slides) {
	debug('applying clearType background-color hack');
	function hex(s) {
		s = parseInt(s,10).toString(16);
		return s.length < 2 ? '0'+s : s;
	};
	function getBg(e) {
		for ( ; e && e.nodeName.toLowerCase() != 'html'; e = e.parentNode) {
			var v = $.css(e,'background-color');
			if (v && v.indexOf('rgb') >= 0 ) {
				var rgb = v.match(/\d+/g);
				return '#'+ hex(rgb[0]) + hex(rgb[1]) + hex(rgb[2]);
			}
			if (v && v != 'transparent')
				return v;
		}
		return '#ffffff';
	};
	$slides.each(function() { $(this).css('background-color', getBg(this)); });
};

// reset common props before the next transition
$.fn.cycle.commonReset = function(curr,next,opts,w,h,rev) {
	$(opts.elements).not(curr).hide();
	if (typeof opts.cssBefore.opacity == 'undefined')
		opts.cssBefore.opacity = 1;
	opts.cssBefore.display = 'block';
	if (opts.slideResize && w !== false && next.cycleW > 0)
		opts.cssBefore.width = next.cycleW;
	if (opts.slideResize && h !== false && next.cycleH > 0)
		opts.cssBefore.height = next.cycleH;
	opts.cssAfter = opts.cssAfter || {};
	opts.cssAfter.display = 'none';
	$(curr).css('zIndex',opts.slideCount + (rev === true ? 1 : 0));
	$(next).css('zIndex',opts.slideCount + (rev === true ? 0 : 1));
};

// the actual fn for effecting a transition
$.fn.cycle.custom = function(curr, next, opts, cb, fwd, speedOverride) {
	var $l = $(curr), $n = $(next);
	var speedIn = opts.speedIn, speedOut = opts.speedOut, easeIn = opts.easeIn, easeOut = opts.easeOut;
	$n.css(opts.cssBefore);
	if (speedOverride) {
		if (typeof speedOverride == 'number')
			speedIn = speedOut = speedOverride;
		else
			speedIn = speedOut = 1;
		easeIn = easeOut = null;
	}
	var fn = function() {
		$n.animate(opts.animIn, speedIn, easeIn, function() {
			cb();
		});
	};
	$l.animate(opts.animOut, speedOut, easeOut, function() {
		$l.css(opts.cssAfter);
		if (!opts.sync) 
			fn();
	});
	if (opts.sync) fn();
};

// transition definitions - only fade is defined here, transition pack defines the rest
$.fn.cycle.transitions = {
	fade: function($cont, $slides, opts) {
		$slides.not(':eq('+opts.currSlide+')').css('opacity',0);
		opts.before.push(function(curr,next,opts) {
			$.fn.cycle.commonReset(curr,next,opts);
			opts.cssBefore.opacity = 0;
		});
		opts.animIn	   = { opacity: 1 };
		opts.animOut   = { opacity: 0 };
		opts.cssBefore = { top: 0, left: 0 };
	}
};

$.fn.cycle.ver = function() { return ver; };

// override these globally if you like (they are all optional)
$.fn.cycle.defaults = {
	activePagerClass: 'activeSlide', // class name used for the active pager link
	after:		   null,  // transition callback (scope set to element that was shown):  function(currSlideElement, nextSlideElement, options, forwardFlag)
	allowPagerClickBubble: false, // allows or prevents click event on pager anchors from bubbling
	animIn:		   null,  // properties that define how the slide animates in
	animOut:	   null,  // properties that define how the slide animates out
	aspect:		   false,  // preserve aspect ratio during fit resizing, cropping if necessary (must be used with fit option)
	autostop:	   0,	  // true to end slideshow after X transitions (where X == slide count)
	autostopCount: 0,	  // number of transitions (optionally used with autostop to define X)
	backwards:     false, // true to start slideshow at last slide and move backwards through the stack
	before:		   null,  // transition callback (scope set to element to be shown):	 function(currSlideElement, nextSlideElement, options, forwardFlag)
	center: 	   null,  // set to true to have cycle add top/left margin to each slide (use with width and height options)
	cleartype:	   !$.support.opacity,  // true if clearType corrections should be applied (for IE)
	cleartypeNoBg: false, // set to true to disable extra cleartype fixing (leave false to force background color setting on slides)
	containerResize: 1,	  // resize container to fit largest slide
	continuous:	   0,	  // true to start next transition immediately after current one completes
	cssAfter:	   null,  // properties that defined the state of the slide after transitioning out
	cssBefore:	   null,  // properties that define the initial state of the slide before transitioning in
	delay:		   0,	  // additional delay (in ms) for first transition (hint: can be negative)
	easeIn:		   null,  // easing for "in" transition
	easeOut:	   null,  // easing for "out" transition
	easing:		   null,  // easing method for both in and out transitions
	end:		   null,  // callback invoked when the slideshow terminates (use with autostop or nowrap options): function(options)
	fastOnEvent:   0,	  // force fast transitions when triggered manually (via pager or prev/next); value == time in ms
	fit:		   0,	  // force slides to fit container
	fx:			  'fade', // name of transition effect (or comma separated names, ex: 'fade,scrollUp,shuffle')
	fxFn:		   null,  // function used to control the transition: function(currSlideElement, nextSlideElement, options, afterCalback, forwardFlag)
	height:		  'auto', // container height (if the 'fit' option is true, the slides will be set to this height as well)
	manualTrump:   true,  // causes manual transition to stop an active transition instead of being ignored
	metaAttr:     'cycle',// data- attribute that holds the option data for the slideshow
	next:		   null,  // element, jQuery object, or jQuery selector string for the element to use as event trigger for next slide
	nowrap:		   0,	  // true to prevent slideshow from wrapping
	onPagerEvent:  null,  // callback fn for pager events: function(zeroBasedSlideIndex, slideElement)
	onPrevNextEvent: null,// callback fn for prev/next events: function(isNext, zeroBasedSlideIndex, slideElement)
	pager:		   null,  // element, jQuery object, or jQuery selector string for the element to use as pager container
	pagerAnchorBuilder: null, // callback fn for building anchor links:  function(index, DOMelement)
	pagerEvent:	  'click.cycle', // name of event which drives the pager navigation
	pause:		   0,	  // true to enable "pause on hover"
	pauseOnPagerHover: 0, // true to pause when hovering over pager link
	prev:		   null,  // element, jQuery object, or jQuery selector string for the element to use as event trigger for previous slide
	prevNextEvent:'click.cycle',// event which drives the manual transition to the previous or next slide
	random:		   0,	  // true for random, false for sequence (not applicable to shuffle fx)
	randomizeEffects: 1,  // valid when multiple effects are used; true to make the effect sequence random
	requeueOnImageNotLoaded: true, // requeue the slideshow if any image slides are not yet loaded
	requeueTimeout: 250,  // ms delay for requeue
	rev:		   0,	  // causes animations to transition in reverse (for effects that support it such as scrollHorz/scrollVert/shuffle)
	shuffle:	   null,  // coords for shuffle animation, ex: { top:15, left: 200 }
	skipInitializationCallbacks: false, // set to true to disable the first before/after callback that occurs prior to any transition
	slideExpr:	   null,  // expression for selecting slides (if something other than all children is required)
	slideResize:   1,     // force slide width/height to fixed size before every transition
	speed:		   1000,  // speed of the transition (any valid fx speed value)
	speedIn:	   null,  // speed of the 'in' transition
	speedOut:	   null,  // speed of the 'out' transition
	startingSlide: undefined,	  // zero-based index of the first slide to be displayed
	sync:		   1,	  // true if in/out transitions should occur simultaneously
	timeout:	   4000,  // milliseconds between slide transitions (0 to disable auto advance)
	timeoutFn:     null,  // callback for determining per-slide timeout value:  function(currSlideElement, nextSlideElement, options, forwardFlag)
	updateActivePagerLink: null, // callback fn invoked to update the active pager link (adds/removes activePagerClass style)
	width:         null   // container width (if the 'fit' option is true, the slides will be set to this width as well)
};

})(jQuery);


/*!
 * jQuery Cycle Plugin Transition Definitions
 * This script is a plugin for the jQuery Cycle Plugin
 * Examples and documentation at: http://malsup.com/jquery/cycle/
 * Copyright (c) 2007-2010 M. Alsup
 * Version:	 2.73
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 */
(function($) {

//
// These functions define slide initialization and properties for the named
// transitions. To save file size feel free to remove any of these that you
// don't need.
//
$.fn.cycle.transitions.none = function($cont, $slides, opts) {
	opts.fxFn = function(curr,next,opts,after){
		$(next).show();
		$(curr).hide();
		after();
	};
};

// not a cross-fade, fadeout only fades out the top slide
$.fn.cycle.transitions.fadeout = function($cont, $slides, opts) {
	$slides.not(':eq('+opts.currSlide+')').css({ display: 'block', 'opacity': 1 });
	opts.before.push(function(curr,next,opts,w,h,rev) {
		$(curr).css('zIndex',opts.slideCount + (!rev === true ? 1 : 0));
		$(next).css('zIndex',opts.slideCount + (!rev === true ? 0 : 1));
	});
	opts.animIn.opacity = 1;
	opts.animOut.opacity = 0;
	opts.cssBefore.opacity = 1;
	opts.cssBefore.display = 'block';
	opts.cssAfter.zIndex = 0;
};

// scrollUp/Down/Left/Right
$.fn.cycle.transitions.scrollUp = function($cont, $slides, opts) {
	$cont.css('overflow','hidden');
	opts.before.push($.fn.cycle.commonReset);
	var h = $cont.height();
	opts.cssBefore.top = h;
	opts.cssBefore.left = 0;
	opts.cssFirst.top = 0;
	opts.animIn.top = 0;
	opts.animOut.top = -h;
};
$.fn.cycle.transitions.scrollDown = function($cont, $slides, opts) {
	$cont.css('overflow','hidden');
	opts.before.push($.fn.cycle.commonReset);
	var h = $cont.height();
	opts.cssFirst.top = 0;
	opts.cssBefore.top = -h;
	opts.cssBefore.left = 0;
	opts.animIn.top = 0;
	opts.animOut.top = h;
};
$.fn.cycle.transitions.scrollLeft = function($cont, $slides, opts) {
	$cont.css('overflow','hidden');
	opts.before.push($.fn.cycle.commonReset);
	var w = $cont.width();
	opts.cssFirst.left = 0;
	opts.cssBefore.left = w;
	opts.cssBefore.top = 0;
	opts.animIn.left = 0;
	opts.animOut.left = 0-w;
};
$.fn.cycle.transitions.scrollRight = function($cont, $slides, opts) {
	$cont.css('overflow','hidden');
	opts.before.push($.fn.cycle.commonReset);
	var w = $cont.width();
	opts.cssFirst.left = 0;
	opts.cssBefore.left = -w;
	opts.cssBefore.top = 0;
	opts.animIn.left = 0;
	opts.animOut.left = w;
};
$.fn.cycle.transitions.scrollHorz = function($cont, $slides, opts) {
	$cont.css('overflow','hidden').width();
	opts.before.push(function(curr, next, opts, fwd) {
		if (opts.rev)
			fwd = !fwd;
		$.fn.cycle.commonReset(curr,next,opts);
		opts.cssBefore.left = fwd ? (next.cycleW-1) : (1-next.cycleW);
		opts.animOut.left = fwd ? -curr.cycleW : curr.cycleW;
	});
	opts.cssFirst.left = 0;
	opts.cssBefore.top = 0;
	opts.animIn.left = 0;
	opts.animOut.top = 0;
};
$.fn.cycle.transitions.scrollVert = function($cont, $slides, opts) {
	$cont.css('overflow','hidden');
	opts.before.push(function(curr, next, opts, fwd) {
		if (opts.rev)
			fwd = !fwd;
		$.fn.cycle.commonReset(curr,next,opts);
		opts.cssBefore.top = fwd ? (1-next.cycleH) : (next.cycleH-1);
		opts.animOut.top = fwd ? curr.cycleH : -curr.cycleH;
	});
	opts.cssFirst.top = 0;
	opts.cssBefore.left = 0;
	opts.animIn.top = 0;
	opts.animOut.left = 0;
};

// slideX/slideY
$.fn.cycle.transitions.slideX = function($cont, $slides, opts) {
	opts.before.push(function(curr, next, opts) {
		$(opts.elements).not(curr).hide();
		$.fn.cycle.commonReset(curr,next,opts,false,true);
		opts.animIn.width = next.cycleW;
	});
	opts.cssBefore.left = 0;
	opts.cssBefore.top = 0;
	opts.cssBefore.width = 0;
	opts.animIn.width = 'show';
	opts.animOut.width = 0;
};
$.fn.cycle.transitions.slideY = function($cont, $slides, opts) {
	opts.before.push(function(curr, next, opts) {
		$(opts.elements).not(curr).hide();
		$.fn.cycle.commonReset(curr,next,opts,true,false);
		opts.animIn.height = next.cycleH;
	});
	opts.cssBefore.left = 0;
	opts.cssBefore.top = 0;
	opts.cssBefore.height = 0;
	opts.animIn.height = 'show';
	opts.animOut.height = 0;
};

// shuffle
$.fn.cycle.transitions.shuffle = function($cont, $slides, opts) {
	var i, w = $cont.css('overflow', 'visible').width();
	$slides.css({left: 0, top: 0});
	opts.before.push(function(curr,next,opts) {
		$.fn.cycle.commonReset(curr,next,opts,true,true,true);
	});
	// only adjust speed once!
	if (!opts.speedAdjusted) {
		opts.speed = opts.speed / 2; // shuffle has 2 transitions
		opts.speedAdjusted = true;
	}
	opts.random = 0;
	opts.shuffle = opts.shuffle || {left:-w, top:15};
	opts.els = [];
	for (i=0; i < $slides.length; i++)
		opts.els.push($slides[i]);

	for (i=0; i < opts.currSlide; i++)
		opts.els.push(opts.els.shift());

	// custom transition fn (hat tip to Benjamin Sterling for this bit of sweetness!)
	opts.fxFn = function(curr, next, opts, cb, fwd) {
		if (opts.rev)
			fwd = !fwd;
		var $el = fwd ? $(curr) : $(next);
		$(next).css(opts.cssBefore);
		var count = opts.slideCount;
		$el.animate(opts.shuffle, opts.speedIn, opts.easeIn, function() {
			var hops = $.fn.cycle.hopsFromLast(opts, fwd);
			for (var k=0; k < hops; k++)
				fwd ? opts.els.push(opts.els.shift()) : opts.els.unshift(opts.els.pop());
			if (fwd) {
				for (var i=0, len=opts.els.length; i < len; i++)
					$(opts.els[i]).css('z-index', len-i+count);
			}
			else {
				var z = $(curr).css('z-index');
				$el.css('z-index', parseInt(z,10)+1+count);
			}
			$el.animate({left:0, top:0}, opts.speedOut, opts.easeOut, function() {
				$(fwd ? this : curr).hide();
				if (cb) cb();
			});
		});
	};
	$.extend(opts.cssBefore, { display: 'block', opacity: 1, top: 0, left: 0 });
};

// turnUp/Down/Left/Right
$.fn.cycle.transitions.turnUp = function($cont, $slides, opts) {
	opts.before.push(function(curr, next, opts) {
		$.fn.cycle.commonReset(curr,next,opts,true,false);
		opts.cssBefore.top = next.cycleH;
		opts.animIn.height = next.cycleH;
		opts.animOut.width = next.cycleW;
	});
	opts.cssFirst.top = 0;
	opts.cssBefore.left = 0;
	opts.cssBefore.height = 0;
	opts.animIn.top = 0;
	opts.animOut.height = 0;
};
$.fn.cycle.transitions.turnDown = function($cont, $slides, opts) {
	opts.before.push(function(curr, next, opts) {
		$.fn.cycle.commonReset(curr,next,opts,true,false);
		opts.animIn.height = next.cycleH;
		opts.animOut.top   = curr.cycleH;
	});
	opts.cssFirst.top = 0;
	opts.cssBefore.left = 0;
	opts.cssBefore.top = 0;
	opts.cssBefore.height = 0;
	opts.animOut.height = 0;
};
$.fn.cycle.transitions.turnLeft = function($cont, $slides, opts) {
	opts.before.push(function(curr, next, opts) {
		$.fn.cycle.commonReset(curr,next,opts,false,true);
		opts.cssBefore.left = next.cycleW;
		opts.animIn.width = next.cycleW;
	});
	opts.cssBefore.top = 0;
	opts.cssBefore.width = 0;
	opts.animIn.left = 0;
	opts.animOut.width = 0;
};
$.fn.cycle.transitions.turnRight = function($cont, $slides, opts) {
	opts.before.push(function(curr, next, opts) {
		$.fn.cycle.commonReset(curr,next,opts,false,true);
		opts.animIn.width = next.cycleW;
		opts.animOut.left = curr.cycleW;
	});
	$.extend(opts.cssBefore, { top: 0, left: 0, width: 0 });
	opts.animIn.left = 0;
	opts.animOut.width = 0;
};

// zoom
$.fn.cycle.transitions.zoom = function($cont, $slides, opts) {
	opts.before.push(function(curr, next, opts) {
		$.fn.cycle.commonReset(curr,next,opts,false,false,true);
		opts.cssBefore.top = next.cycleH/2;
		opts.cssBefore.left = next.cycleW/2;
		$.extend(opts.animIn, { top: 0, left: 0, width: next.cycleW, height: next.cycleH });
		$.extend(opts.animOut, { width: 0, height: 0, top: curr.cycleH/2, left: curr.cycleW/2 });
	});
	opts.cssFirst.top = 0;
	opts.cssFirst.left = 0;
	opts.cssBefore.width = 0;
	opts.cssBefore.height = 0;
};

// fadeZoom
$.fn.cycle.transitions.fadeZoom = function($cont, $slides, opts) {
	opts.before.push(function(curr, next, opts) {
		$.fn.cycle.commonReset(curr,next,opts,false,false);
		opts.cssBefore.left = next.cycleW/2;
		opts.cssBefore.top = next.cycleH/2;
		$.extend(opts.animIn, { top: 0, left: 0, width: next.cycleW, height: next.cycleH });
	});
	opts.cssBefore.width = 0;
	opts.cssBefore.height = 0;
	opts.animOut.opacity = 0;
};

// blindX
$.fn.cycle.transitions.blindX = function($cont, $slides, opts) {
	var w = $cont.css('overflow','hidden').width();
	opts.before.push(function(curr, next, opts) {
		$.fn.cycle.commonReset(curr,next,opts);
		opts.animIn.width = next.cycleW;
		opts.animOut.left   = curr.cycleW;
	});
	opts.cssBefore.left = w;
	opts.cssBefore.top = 0;
	opts.animIn.left = 0;
	opts.animOut.left = w;
};
// blindY
$.fn.cycle.transitions.blindY = function($cont, $slides, opts) {
	var h = $cont.css('overflow','hidden').height();
	opts.before.push(function(curr, next, opts) {
		$.fn.cycle.commonReset(curr,next,opts);
		opts.animIn.height = next.cycleH;
		opts.animOut.top   = curr.cycleH;
	});
	opts.cssBefore.top = h;
	opts.cssBefore.left = 0;
	opts.animIn.top = 0;
	opts.animOut.top = h;
};
// blindZ
$.fn.cycle.transitions.blindZ = function($cont, $slides, opts) {
	var h = $cont.css('overflow','hidden').height();
	var w = $cont.width();
	opts.before.push(function(curr, next, opts) {
		$.fn.cycle.commonReset(curr,next,opts);
		opts.animIn.height = next.cycleH;
		opts.animOut.top   = curr.cycleH;
	});
	opts.cssBefore.top = h;
	opts.cssBefore.left = w;
	opts.animIn.top = 0;
	opts.animIn.left = 0;
	opts.animOut.top = h;
	opts.animOut.left = w;
};

// growX - grow horizontally from centered 0 width
$.fn.cycle.transitions.growX = function($cont, $slides, opts) {
	opts.before.push(function(curr, next, opts) {
		$.fn.cycle.commonReset(curr,next,opts,false,true);
		opts.cssBefore.left = this.cycleW/2;
		opts.animIn.left = 0;
		opts.animIn.width = this.cycleW;
		opts.animOut.left = 0;
	});
	opts.cssBefore.top = 0;
	opts.cssBefore.width = 0;
};
// growY - grow vertically from centered 0 height
$.fn.cycle.transitions.growY = function($cont, $slides, opts) {
	opts.before.push(function(curr, next, opts) {
		$.fn.cycle.commonReset(curr,next,opts,true,false);
		opts.cssBefore.top = this.cycleH/2;
		opts.animIn.top = 0;
		opts.animIn.height = this.cycleH;
		opts.animOut.top = 0;
	});
	opts.cssBefore.height = 0;
	opts.cssBefore.left = 0;
};

// curtainX - squeeze in both edges horizontally
$.fn.cycle.transitions.curtainX = function($cont, $slides, opts) {
	opts.before.push(function(curr, next, opts) {
		$.fn.cycle.commonReset(curr,next,opts,false,true,true);
		opts.cssBefore.left = next.cycleW/2;
		opts.animIn.left = 0;
		opts.animIn.width = this.cycleW;
		opts.animOut.left = curr.cycleW/2;
		opts.animOut.width = 0;
	});
	opts.cssBefore.top = 0;
	opts.cssBefore.width = 0;
};
// curtainY - squeeze in both edges vertically
$.fn.cycle.transitions.curtainY = function($cont, $slides, opts) {
	opts.before.push(function(curr, next, opts) {
		$.fn.cycle.commonReset(curr,next,opts,true,false,true);
		opts.cssBefore.top = next.cycleH/2;
		opts.animIn.top = 0;
		opts.animIn.height = next.cycleH;
		opts.animOut.top = curr.cycleH/2;
		opts.animOut.height = 0;
	});
	opts.cssBefore.height = 0;
	opts.cssBefore.left = 0;
};

// cover - curr slide covered by next slide
$.fn.cycle.transitions.cover = function($cont, $slides, opts) {
	var d = opts.direction || 'left';
	var w = $cont.css('overflow','hidden').width();
	var h = $cont.height();
	opts.before.push(function(curr, next, opts) {
		$.fn.cycle.commonReset(curr,next,opts);
		if (d == 'right')
			opts.cssBefore.left = -w;
		else if (d == 'up')
			opts.cssBefore.top = h;
		else if (d == 'down')
			opts.cssBefore.top = -h;
		else
			opts.cssBefore.left = w;
	});
	opts.animIn.left = 0;
	opts.animIn.top = 0;
	opts.cssBefore.top = 0;
	opts.cssBefore.left = 0;
};

// uncover - curr slide moves off next slide
$.fn.cycle.transitions.uncover = function($cont, $slides, opts) {
	var d = opts.direction || 'left';
	var w = $cont.css('overflow','hidden').width();
	var h = $cont.height();
	opts.before.push(function(curr, next, opts) {
		$.fn.cycle.commonReset(curr,next,opts,true,true,true);
		if (d == 'right')
			opts.animOut.left = w;
		else if (d == 'up')
			opts.animOut.top = -h;
		else if (d == 'down')
			opts.animOut.top = h;
		else
			opts.animOut.left = -w;
	});
	opts.animIn.left = 0;
	opts.animIn.top = 0;
	opts.cssBefore.top = 0;
	opts.cssBefore.left = 0;
};

// toss - move top slide and fade away
$.fn.cycle.transitions.toss = function($cont, $slides, opts) {
	var w = $cont.css('overflow','visible').width();
	var h = $cont.height();
	opts.before.push(function(curr, next, opts) {
		$.fn.cycle.commonReset(curr,next,opts,true,true,true);
		// provide default toss settings if animOut not provided
		if (!opts.animOut.left && !opts.animOut.top)
			$.extend(opts.animOut, { left: w*2, top: -h/2, opacity: 0 });
		else
			opts.animOut.opacity = 0;
	});
	opts.cssBefore.left = 0;
	opts.cssBefore.top = 0;
	opts.animIn.left = 0;
};

// wipe - clip animation
$.fn.cycle.transitions.wipe = function($cont, $slides, opts) {
	var w = $cont.css('overflow','hidden').width();
	var h = $cont.height();
	opts.cssBefore = opts.cssBefore || {};
	var clip;
	if (opts.clip) {
		if (/l2r/.test(opts.clip))
			clip = 'rect(0px 0px '+h+'px 0px)';
		else if (/r2l/.test(opts.clip))
			clip = 'rect(0px '+w+'px '+h+'px '+w+'px)';
		else if (/t2b/.test(opts.clip))
			clip = 'rect(0px '+w+'px 0px 0px)';
		else if (/b2t/.test(opts.clip))
			clip = 'rect('+h+'px '+w+'px '+h+'px 0px)';
		else if (/zoom/.test(opts.clip)) {
			var top = parseInt(h/2,10);
			var left = parseInt(w/2,10);
			clip = 'rect('+top+'px '+left+'px '+top+'px '+left+'px)';
		}
	}

	opts.cssBefore.clip = opts.cssBefore.clip || clip || 'rect(0px 0px 0px 0px)';

	var d = opts.cssBefore.clip.match(/(\d+)/g);
	var t = parseInt(d[0],10), r = parseInt(d[1],10), b = parseInt(d[2],10), l = parseInt(d[3],10);

	opts.before.push(function(curr, next, opts) {
		if (curr == next) return;
		var $curr = $(curr), $next = $(next);
		$.fn.cycle.commonReset(curr,next,opts,true,true,false);
		opts.cssAfter.display = 'block';

		var step = 1, count = parseInt((opts.speedIn / 13),10) - 1;
		(function f() {
			var tt = t ? t - parseInt(step * (t/count),10) : 0;
			var ll = l ? l - parseInt(step * (l/count),10) : 0;
			var bb = b < h ? b + parseInt(step * ((h-b)/count || 1),10) : h;
			var rr = r < w ? r + parseInt(step * ((w-r)/count || 1),10) : w;
			$next.css({ clip: 'rect('+tt+'px '+rr+'px '+bb+'px '+ll+'px)' });
			(step++ <= count) ? setTimeout(f, 13) : $curr.css('display', 'none');
		})();
	});
	$.extend(opts.cssBefore, { display: 'block', opacity: 1, top: 0, left: 0 });
	opts.animIn	   = { left: 0 };
	opts.animOut   = { left: 0 };
};

})(jQuery);
;

/**
 *  @file
 *  A simple jQuery Cycle Div Slideshow Rotator.
 */

/**
 * This will set our initial behavior, by starting up each individual slideshow.
 */
(function ($) {
  Drupal.behaviors.viewsSlideshowCycle = {
    attach: function (context) {
      $('.views_slideshow_cycle_main:not(.viewsSlideshowCycle-processed)', context).addClass('viewsSlideshowCycle-processed').each(function() {
        var fullId = '#' + $(this).attr('id');
        var settings = Drupal.settings.viewsSlideshowCycle[fullId];
        settings.targetId = '#' + $(fullId + " :first").attr('id');
        settings.slideshowId = settings.targetId.replace('#views_slideshow_cycle_teaser_section_', '');
        settings.loaded = false;

        settings.opts = {
          speed:settings.speed,
          timeout:settings.timeout,
          delay:settings.delay,
          sync:settings.sync,
          random:settings.random,
          nowrap:settings.nowrap,
          after:function(curr, next, opts) {
            // Need to do some special handling on first load.
            var slideNum = opts.currSlide;
            if (typeof settings.processedAfter == 'undefined' || !settings.processedAfter) {
              settings.processedAfter = 1;
              slideNum = (typeof settings.opts.startingSlide == 'undefined') ? 0 : settings.opts.startingSlide;
            }
            Drupal.viewsSlideshow.action({ "action": 'transitionEnd', "slideshowID": settings.slideshowId, "slideNum": slideNum });
          },
          before:function(curr, next, opts) {
            // Remember last slide.
            if (settings.remember_slide) {
              createCookie(settings.vss_id, opts.currSlide + 1, settings.remember_slide_days);
            }

            // Make variable height.
            if (!settings.fixed_height) {
              //get the height of the current slide
              var $ht = $(this).height();
              //set the container's height to that of the current slide
              $(this).parent().animate({height: $ht});
            }

            // Need to do some special handling on first load.
            var slideNum = opts.nextSlide;
            if (typeof settings.processedBefore == 'undefined' || !settings.processedBefore) {
              settings.processedBefore = 1;
              slideNum = (typeof settings.opts.startingSlide == 'undefined') ? 0 : settings.opts.startingSlide;
            }

            Drupal.viewsSlideshow.action({ "action": 'transitionBegin', "slideshowID": settings.slideshowId, "slideNum": slideNum });
          },
          cleartype:(settings.cleartype)? true : false,
          cleartypeNoBg:(settings.cleartypenobg)? true : false
        }

        // Set the starting slide if we are supposed to remember the slide
        if (settings.remember_slide) {
          var startSlide = readCookie(settings.vss_id);
          if (startSlide == null) {
            startSlide = 0;
          }
          settings.opts.startingSlide =  startSlide;
        }

        if (settings.effect == 'none') {
          settings.opts.speed = 1;
        }
        else {
          settings.opts.fx = settings.effect;
        }

        // Take starting item from fragment.
        var hash = location.hash;
        if (hash) {
          var hash = hash.replace('#', '');
          var aHash = hash.split(';');
          var aHashLen = aHash.length;

          // Loop through all the possible starting points.
          for (var i = 0; i < aHashLen; i++) {
            // Split the hash into two parts. One part is the slideshow id the
            // other is the slide number.
            var initialInfo = aHash[i].split(':');
            // The id in the hash should match our slideshow.
            // The slide number chosen shouldn't be larger than the number of
            // slides we have.
            if (settings.slideshowId == initialInfo[0] && settings.num_divs > initialInfo[1]) {
              settings.opts.startingSlide = parseInt(initialInfo[1]);
            }
          }
        }

        // Pause on hover.
        if (settings.pause) {
          var mouseIn = function() {
            Drupal.viewsSlideshow.action({ "action": 'pause', "slideshowID": settings.slideshowId });
          }
          
          var mouseOut = function() {
            Drupal.viewsSlideshow.action({ "action": 'play', "slideshowID": settings.slideshowId });
          }
          
          if (jQuery.fn.hoverIntent) {
            $('#views_slideshow_cycle_teaser_section_' + settings.vss_id).hoverIntent(mouseIn, mouseOut);
          }
          else {
            $('#views_slideshow_cycle_teaser_section_' + settings.vss_id).hover(mouseIn, mouseOut);
          }
        }

        // Pause on clicking of the slide.
        if (settings.pause_on_click) {
          $('#views_slideshow_cycle_teaser_section_' + settings.vss_id).click(function() {
            Drupal.viewsSlideshow.action({ "action": 'pause', "slideshowID": settings.slideshowId, "force": true });
          });
        }

        if (typeof JSON != 'undefined') {
          var advancedOptions = JSON.parse(settings.advanced_options);
          for (var option in advancedOptions) {
            switch(option) {

              // Standard Options
              case "activePagerClass":
              case "allowPagerClickBubble":
              case "autostop":
              case "autostopCount":
              case "backwards":
              case "bounce":
              case "cleartype":
              case "cleartypeNoBg":
              case "containerResize":
              case "continuous":
              case "delay":
              case "easeIn":
              case "easeOut":
              case "easing":
              case "fastOnEvent":
              case "fit":
              case "fx":
              case "height":
              case "manualTrump":
              case "metaAttr":
              case "next":
              case "nowrap":
              case "pager":
              case "pagerEvent":
              case "pause":
              case "pauseOnPagerHover":
              case "prev":
              case "prevNextEvent":
              case "random":
              case "randomizeEffects":
              case "requeueOnImageNotLoaded":
              case "requeueTimeout":
              case "rev":
              case "slideExpr":
              case "slideResize":
              case "speed":
              case "speedIn":
              case "speedOut":
              case "startingSlide":
              case "sync":
              case "timeout":
              case "width":
                var optionValue = advancedOptions[option];
                optionValue = Drupal.viewsSlideshowCycle.advancedOptionCleanup(optionValue);
                settings.opts[option] = optionValue;
                break;
  
              // These process options that look like {top:50, bottom:20}
              case "animIn":
              case "animOut":
              case "cssBefore":
              case "cssAfter":
              case "shuffle":
                var cssValue = advancedOptions[option];
                cssValue = Drupal.viewsSlideshowCycle.advancedOptionCleanup(cssValue);
                settings.opts[option] = eval('(' + cssValue + ')');
                break;
  
              // These options have their own functions.
              case "after":
                var afterValue = advancedOptions[option];
                afterValue = Drupal.viewsSlideshowCycle.advancedOptionCleanup(afterValue);
                // transition callback (scope set to element that was shown): function(currSlideElement, nextSlideElement, options, forwardFlag)
                settings.opts[option] = function(currSlideElement, nextSlideElement, options, forwardFlag) {
                  eval(afterValue);
                }
                break;
  
              case "before":
                var beforeValue = advancedOptions[option];
                beforeValue = Drupal.viewsSlideshowCycle.advancedOptionCleanup(beforeValue);
                // transition callback (scope set to element to be shown):     function(currSlideElement, nextSlideElement, options, forwardFlag)
                settings.opts[option] = function(currSlideElement, nextSlideElement, options, forwardFlag) {
                  eval(beforeValue);
                }
                break;
  
              case "end":
                var endValue = advancedOptions[option];
                endValue = Drupal.viewsSlideshowCycle.advancedOptionCleanup(endValue);
                // callback invoked when the slideshow terminates (use with autostop or nowrap options): function(options)
                settings.opts[option] = function(options) {
                  eval(endValue);
                }
                break;
  
              case "fxFn":
                var fxFnValue = advancedOptions[option];
                fxFnValue = Drupal.viewsSlideshowCycle.advancedOptionCleanup(fxFnValue);
                // function used to control the transition: function(currSlideElement, nextSlideElement, options, afterCalback, forwardFlag)
                settings.opts[option] = function(currSlideElement, nextSlideElement, options, afterCalback, forwardFlag) {
                  eval(fxFnValue);
                }
                break;
  
              case "onPagerEvent":
                var onPagerEventValue = advancedOptions[option];
                onPagerEventValue = Drupal.viewsSlideshowCycle.advancedOptionCleanup(onPagerEventValue);
                settings.opts[option] = function(zeroBasedSlideIndex, slideElement) {
                  eval(onPagerEventValue);
                }
                break;
  
              case "onPrevNextEvent":
                var onPrevNextEventValue = advancedOptions[option];
                onPrevNextEventValue = Drupal.viewsSlideshowCycle.advancedOptionCleanup(onPrevNextEventValue);
                settings.opts[option] = function(isNext, zeroBasedSlideIndex, slideElement) {
                  eval(onPrevNextEventValue);
                }
                break;
  
              case "pagerAnchorBuilder":
                var pagerAnchorBuilderValue = advancedOptions[option];
                pagerAnchorBuilderValue = Drupal.viewsSlideshowCycle.advancedOptionCleanup(pagerAnchorBuilderValue);
                // callback fn for building anchor links:  function(index, DOMelement)
                settings.opts[option] = function(index, DOMelement) {
                  var returnVal = '';
                  eval(pagerAnchorBuilderValue);
                  return returnVal;
                }
                break;
  
              case "pagerClick":
                var pagerClickValue = advancedOptions[option];
                pagerClickValue = Drupal.viewsSlideshowCycle.advancedOptionCleanup(pagerClickValue);
                // callback fn for pager clicks:    function(zeroBasedSlideIndex, slideElement)
                settings.opts[option] = function(zeroBasedSlideIndex, slideElement) {
                  eval(pagerClickValue);
                }
                break;

              case "paused":
                var pausedValue = advancedOptions[option];
                pausedValue = Drupal.viewsSlideshowCycle.advancedOptionCleanup(pausedValue);
                // undocumented callback when slideshow is paused:    function(cont, opts, byHover)
                settings.opts[option] = function(cont, opts, byHover) {
                  eval(pausedValue);
                }
                break;
              
              case "resumed":
                var resumedValue = advancedOptions[option];
                resumedValue = Drupal.viewsSlideshowCycle.advancedOptionCleanup(resumedValue);
                // undocumented callback when slideshow is resumed:    function(cont, opts, byHover)
                settings.opts[option] = function(cont, opts, byHover) {
                  eval(resumedValue);
                }
                break;
  
              case "timeoutFn":
                var timeoutFnValue = advancedOptions[option];
                timeoutFnValue = Drupal.viewsSlideshowCycle.advancedOptionCleanup(timeoutFnValue);
                settings.opts[option] = function(currSlideElement, nextSlideElement, options, forwardFlag) {
                  eval(timeoutFnValue);
                }
                break;
  
              case "updateActivePagerLink":
                var updateActivePagerLinkValue = advancedOptions[option];
                updateActivePagerLinkValue = Drupal.viewsSlideshowCycle.advancedOptionCleanup(updateActivePagerLinkValue);
                // callback fn invoked to update the active pager link (adds/removes activePagerClass style)
                settings.opts[option] = function(pager, currSlideIndex) {
                  eval(updateActivePagerLinkValue);
                }
                break;
            }
          }
        }

        // If selected wait for the images to be loaded.
        // otherwise just load the slideshow.
        if (settings.wait_for_image_load) {
          // For IE/Chrome/Opera we if there are images then we need to make
          // sure the images are loaded before starting the slideshow.
          settings.totalImages = $(settings.targetId + ' img').length;
          if (settings.totalImages) {
            settings.loadedImages = 0;

            // Add a load event for each image.
            $(settings.targetId + ' img').each(function() {
              var $imageElement = $(this);
              $imageElement.bind('load', function () {
                Drupal.viewsSlideshowCycle.imageWait(fullId);
              });

              // Removing the source and adding it again will fire the load event.
              var imgSrc = $imageElement.attr('src');
              $imageElement.attr('src', '');
              $imageElement.attr('src', imgSrc);
            });

            // We need to set a timeout so that the slideshow doesn't wait
            // indefinitely for all images to load.
            setTimeout("Drupal.viewsSlideshowCycle.load('" + fullId + "')", settings.wait_for_image_load_timeout);
          }
          else {
            Drupal.viewsSlideshowCycle.load(fullId);
          }
        }
        else {
          Drupal.viewsSlideshowCycle.load(fullId);
        }
      });
    }
  };

  Drupal.viewsSlideshowCycle = Drupal.viewsSlideshowCycle || {};

  // Cleanup the values of advanced options.
  Drupal.viewsSlideshowCycle.advancedOptionCleanup = function(value) {
    value = $.trim(value);
    value = value.replace(/\n/g, '');
    if (!isNaN(parseInt(value))) {
      value = parseInt(value);
    }
    else if (value.toLowerCase() == 'true') {
      value = true;
    }
    else if (value.toLowerCase() == 'false') {
      value = false;
    }
    
    return value;
  }

  // This checks to see if all the images have been loaded.
  // If they have then it starts the slideshow.
  Drupal.viewsSlideshowCycle.imageWait = function(fullId) {
    if (++Drupal.settings.viewsSlideshowCycle[fullId].loadedImages == Drupal.settings.viewsSlideshowCycle[fullId].totalImages) {
      Drupal.viewsSlideshowCycle.load(fullId);
    }
  };

  // Start the slideshow.
  Drupal.viewsSlideshowCycle.load = function (fullId) {
    var settings = Drupal.settings.viewsSlideshowCycle[fullId];
    
    // Make sure the slideshow isn't already loaded.
    if (!settings.loaded) {
      $(settings.targetId).cycle(settings.opts);
      settings.loaded = true;
  
      // Start Paused
      if (settings.start_paused) {
        Drupal.viewsSlideshow.action({ "action": 'pause', "slideshowID": settings.slideshowId, "force": true });
      }
  
      // Pause if hidden.
      if (settings.pause_when_hidden) {
        var checkPause = function(settings) {
          // If the slideshow is visible and it is paused then resume.
          // otherwise if the slideshow is not visible and it is not paused then
          // pause it.
          var visible = viewsSlideshowCycleIsVisible(settings.targetId, settings.pause_when_hidden_type, settings.amount_allowed_visible);
          if (visible) {
            Drupal.viewsSlideshow.action({ "action": 'play', "slideshowID": settings.slideshowId });
          }
          else {
            Drupal.viewsSlideshow.action({ "action": 'pause', "slideshowID": settings.slideshowId });
          }
        }
  
        // Check when scrolled.
        $(window).scroll(function() {
         checkPause(settings);
        });
  
        // Check when the window is resized.
        $(window).resize(function() {
          checkPause(settings);
        });
      }
    }
  };

  Drupal.viewsSlideshowCycle.pause = function (options) {
    $('#views_slideshow_cycle_teaser_section_' + options.slideshowID).cycle('pause');
  };

  Drupal.viewsSlideshowCycle.play = function (options) {
    Drupal.settings.viewsSlideshowCycle['#views_slideshow_cycle_main_' + options.slideshowID].paused = false;
    $('#views_slideshow_cycle_teaser_section_' + options.slideshowID).cycle('resume');
  };

  Drupal.viewsSlideshowCycle.previousSlide = function (options) {
    $('#views_slideshow_cycle_teaser_section_' + options.slideshowID).cycle('prev');
  };

  Drupal.viewsSlideshowCycle.nextSlide = function (options) {
    $('#views_slideshow_cycle_teaser_section_' + options.slideshowID).cycle('next');
  };

  Drupal.viewsSlideshowCycle.goToSlide = function (options) {
    $('#views_slideshow_cycle_teaser_section_' + options.slideshowID).cycle(options.slideNum);
  };

  // Verify that the value is a number.
  function IsNumeric(sText) {
    var ValidChars = "0123456789";
    var IsNumber=true;
    var Char;

    for (var i=0; i < sText.length && IsNumber == true; i++) {
      Char = sText.charAt(i);
      if (ValidChars.indexOf(Char) == -1) {
        IsNumber = false;
      }
    }
    return IsNumber;
  }

  /**
   * Cookie Handling Functions
   */
  function createCookie(name,value,days) {
    if (days) {
      var date = new Date();
      date.setTime(date.getTime()+(days*24*60*60*1000));
      var expires = "; expires="+date.toGMTString();
    }
    else {
      var expires = "";
    }
    document.cookie = name+"="+value+expires+"; path=/";
  }

  function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
      var c = ca[i];
      while (c.charAt(0)==' ') c = c.substring(1,c.length);
      if (c.indexOf(nameEQ) == 0) {
        return c.substring(nameEQ.length,c.length);
      }
    }
    return null;
  }

  function eraseCookie(name) {
    createCookie(name,"",-1);
  }

  /**
   * Checks to see if the slide is visible enough.
   * elem = element to check.
   * type = The way to calculate how much is visible.
   * amountVisible = amount that should be visible. Either in percent or px. If
   *                it's not defined then all of the slide must be visible.
   *
   * Returns true or false
   */
  function viewsSlideshowCycleIsVisible(elem, type, amountVisible) {
    // Get the top and bottom of the window;
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();
    var docViewLeft = $(window).scrollLeft();
    var docViewRight = docViewLeft + $(window).width();

    // Get the top, bottom, and height of the slide;
    var elemTop = $(elem).offset().top;
    var elemHeight = $(elem).height();
    var elemBottom = elemTop + elemHeight;
    var elemLeft = $(elem).offset().left;
    var elemWidth = $(elem).width();
    var elemRight = elemLeft + elemWidth;
    var elemArea = elemHeight * elemWidth;

    // Calculate what's hiding in the slide.
    var missingLeft = 0;
    var missingRight = 0;
    var missingTop = 0;
    var missingBottom = 0;

    // Find out how much of the slide is missing from the left.
    if (elemLeft < docViewLeft) {
      missingLeft = docViewLeft - elemLeft;
    }

    // Find out how much of the slide is missing from the right.
    if (elemRight > docViewRight) {
      missingRight = elemRight - docViewRight;
    }

    // Find out how much of the slide is missing from the top.
    if (elemTop < docViewTop) {
      missingTop = docViewTop - elemTop;
    }

    // Find out how much of the slide is missing from the bottom.
    if (elemBottom > docViewBottom) {
      missingBottom = elemBottom - docViewBottom;
    }

    // If there is no amountVisible defined then check to see if the whole slide
    // is visible.
    if (type == 'full') {
      return ((elemBottom >= docViewTop) && (elemTop <= docViewBottom)
      && (elemBottom <= docViewBottom) &&  (elemTop >= docViewTop)
      && (elemLeft >= docViewLeft) && (elemRight <= docViewRight)
      && (elemLeft <= docViewRight) && (elemRight >= docViewLeft));
    }
    else if(type == 'vertical') {
      var verticalShowing = elemHeight - missingTop - missingBottom;

      // If user specified a percentage then find out if the current shown percent
      // is larger than the allowed percent.
      // Otherwise check to see if the amount of px shown is larger than the
      // allotted amount.
      if (amountVisible.indexOf('%')) {
        return (((verticalShowing/elemHeight)*100) >= parseInt(amountVisible));
      }
      else {
        return (verticalShowing >= parseInt(amountVisible));
      }
    }
    else if(type == 'horizontal') {
      var horizontalShowing = elemWidth - missingLeft - missingRight;

      // If user specified a percentage then find out if the current shown percent
      // is larger than the allowed percent.
      // Otherwise check to see if the amount of px shown is larger than the
      // allotted amount.
      if (amountVisible.indexOf('%')) {
        return (((horizontalShowing/elemWidth)*100) >= parseInt(amountVisible));
      }
      else {
        return (horizontalShowing >= parseInt(amountVisible));
      }
    }
    else if(type == 'area') {
      var areaShowing = (elemWidth - missingLeft - missingRight) * (elemHeight - missingTop - missingBottom);

      // If user specified a percentage then find out if the current shown percent
      // is larger than the allowed percent.
      // Otherwise check to see if the amount of px shown is larger than the
      // allotted amount.
      if (amountVisible.indexOf('%')) {
        return (((areaShowing/elemArea)*100) >= parseInt(amountVisible));
      }
      else {
        return (areaShowing >= parseInt(amountVisible));
      }
    }
  }
})(jQuery);
;
