!function(_){_(window).on("elementor/frontend/init",function(){var e=elementorModules.frontend.handlers.Base.extend({getDefaultSettings:function(){return{selectors:{hScrollElem:".premium-hscroll-wrap",sectionWrap:".premium-hscroll-sections-wrap",hscrollTemp:".premium-hscroll-temp"}}},getDefaultElements:function(){var e=this.getSettings("selectors"),t={$hScrollElem:this.$element.find(e.hScrollElem)};return t.$sectionWrap=t.$hScrollElem.find(e.sectionWrap),t.$hscrollTemp=t.$hScrollElem.find(e.hscrollTemp),t},bindEvents:function(){this.run()},run:function(){var e=this.$element,t=this.elements.$hScrollElem.data("settings"),n=this.getElementSettings("section_repeater");n.length&&(n.forEach(function(e){"id"!==e.template_type||""===e.section_id||0!=_("#"+e.section_id).length||$hScrollElem.html('<div class="premium-error-notice"><span>Section with ID <b>'+e.section_id+"</b> does not exist on this page. Please make sure that section ID is properly set from section settings -> Advanced tab -> CSS ID.<span></div>")}),new premiumHorizontalScroll(e,t,this.getElementSettings()).checkDisableOnOption())}});window.premiumHorizontalScroll=function(o,i,a){var c=this,m=o.find(".premium-hscroll-wrap"),r=i.id,d=a.section_repeater.length,n=elementorFrontend.isEditMode(),u=elementorFrontend.getCurrentDeviceMode(),l=300,s=[],h=0,p=-1,t=a.loop,f=a.entrance_animation,v="snap"===a.scroll_effect,g=!1,w=!1,S=null,C=null,k=null,y=a.rtl_mode,A=null;m.find(".premium-hscroll-temp").each(function(e,t){-1<_(t).data("hide").indexOf(u)&&function(e,t){0!==d&&(d--,_(e).remove(),m.find(".premium-hscroll-total-slides").html(9<d?d:"0"+d),m.find('.premium-hscroll-nav-item[data-slide="section_'+r+t+'"]').remove());0===d&&m.find(".premium-hscroll-arrow, .premium-hscroll-nav, .premium-hscroll-pagination").remove();i.opacity&&m.find(".premium-hscroll-temp:first").removeClass("premium-hscroll-hide")}(t,e)});var T=m.find(".premium-hscroll-temp");if(i.opacity)var D=0;y&&(D=d-1),"desktop"!==u?(v&&i.disableSnap&&(f=v=!1),["tablet","tablet_extra"].includes(u)?l=100:["mobile","mobile_extra"].includes(u)&&(l=50)):v&&(l=30);var b=_(".premium-hscroll-nav-item",m),e=_(".premium-hscroll-wrap-icon",m);c.checkDisableOnOption=function(){if(a.disable_on.includes(elementorFrontend.getCurrentDeviceMode()))return m.find(".premium-hscroll-arrow, .premium-hscroll-progress, .premium-hscroll-nav, .premium-hscroll-pagination").remove(),m.find(".premium-hscroll-temp").each(function(e,t){_(t).removeClass("premium-hscroll-temp")}),void m.find(".premium-hscroll-sections-wrap").removeClass("premium-hscroll-sections-wrap");c.init()},c.init=function(){d&&(c.setLayout(),c.setSectionsData(),c.handleAnimations(),c.setScene(),t||c.checkActive(),S.on("progress",c.onProgress),b.on("click.premiumHorizontalScroll",c.onNavDotClick),e.on("click.premiumHorizontalScroll",c.onNavArrowClick),c.checkRemoteAnchors(),c.checkLocalAnchors(),_(document).on("elementor/popup/show",function(){c.checkLocalAnchors()}),v&&(document.addEventListener?document.addEventListener("wheel",c.onScroll,{passive:!1}):document.attachEvent("onmousewheel",c.onScroll)),document.addEventListener?document.addEventListener("keydown",c.onKeyboardPress):document.attachEvent("keydown",c.onKeyboardPress),v&&_(window).on("load",function(){var e=_(window).outerHeight();C-e<150||0===h&&elementorFrontend.waypoint(m,function(e){"down"===e&&c.scrollToSlide(0)},{offset:150,triggerOnce:!1})}))},c.checkLocalAnchors=function(){_("a").on("click",function(e){var t=_(this).attr("href");t&&(t=t.replace("#/",""),c.checkAnchors(t))})},c.checkRemoteAnchors=function(){var e=new URL(window.location.html);if(e){var t=e.searchParams.get("slide");t&&c.checkAnchors(t)}},c.checkAnchors=function(e){var t=m.find(".premium-hscroll-temp[data-section='"+e+"']");if(t.length){var n=t.index();c.scrollToSlide(n,"anchors")}},c.onKeyboardPress=function(e){if(i.keyboard||"DURING"!==S.state()){if("BEFORE"!==S.state()){var t=[38,33];if("AFTER"===S.state()){if(-1!==_.inArray(e.keyCode,t)){var n=c.getScrollOffset(T.eq(d-1));return void(e.pageY-n<=300&&100<e.pageY-n?(c.preventDefault(event),c.scrollToSlide(d-1)):e.pageY-n<100&&(c.preventDefault(event),c.scrollToSlide(d-2)))}}else{if(-1!==_.inArray(e.keyCode,[40,34])){if(w)return void c.preventDefault(event);c.goToNext()}if(-1!==_.inArray(e.keyCode,t)){if(w)return void c.preventDefault(event);c.goToPrev("keyboard")}}}}else e.preventDefault()},c.getResponsiveControlValue=function(e){var t=a[e];return"desktop"!==u&&(t=a[e+"_"+u]),t="scroll_speed"===e?t||1:parseFloat(""===t.size||void 0===t?c.getControlDefaultVal(e):t.size)},c.getControlDefaultVal=function(e){return["distance","trigger_offset"].includes(e)?0:1},c.setScene=function(){g=new ScrollMagic.Controller,k=new TimelineMax,setTimeout(function(){c.setHorizontalSlider()},200);var e=c.getResponsiveControlValue("scroll_speed");["desktop","laptop","widescreen"].includes(u)?e=100*e+"%":e*=m.outerHeight(),S=new ScrollMagic.Scene({triggerElement:"#premium-hscroll-spacer-"+r,triggerHook:"onLeave",duration:e}).setPin("#premium-hscroll-wrap-"+r,{pushFollowers:!0}).setTween(k).addTo(g)},c.getDimensions=function(){var e=T.eq(0).innerWidth(),t=e*(d-1),n=e*d,o=c.getResponsiveControlValue("slides");return{distance:t=c.getResponsiveControlValue("distance")+(t-=(1-1/o)*m.outerWidth()),progressBar:n,ease:Power0.easeNone}},c.setHorizontalSlider=function(e){A=c.getDimensions();var t=y?"from":"to";if("tablet"===u&&!y&&c.checkIpad()?k.to("#premium-hscroll-scroller-wrap-"+r,1,{left:y?"0px":-A.distance,ease:A.ease},0):k[t]("#premium-hscroll-scroller-wrap-"+r,1,{x:-A.distance,ease:A.ease},0),k.to("#premium-hscroll-progress-line-"+r,1,{width:A.progressBar+"px",ease:A.ease},0),o.hasClass("custom-scroll-bar")){m.append('<div class="horizontal-content-scroller"><span></span></div>');var n=_(".horizontal-content-scroller").outerWidth()-_(".horizontal-content-scroller span").outerWidth();k.to(".horizontal-content-scroller span",1,{x:n,ease:A.ease},0)}void 0!==e&&(S.progress(0),S.update(!0))},c.checkIpad=function(){return/Macintosh/.test(navigator.userAgent)&&"ontouchend"in document},c.setLayout=function(){m.closest("section.elementor-section-height-full").removeClass("elementor-section-height-full")},c.setSectionsData=function(){var e=100/c.getResponsiveControlValue("slides");m.find(".premium-hscroll-slider").css("width",d*e+"%"),m.find(".premium-hscroll-temp").css("width",100/d+"%");var l=c.getResponsiveControlValue("scroll_speed"),i=parseFloat(m.find(".premium-hscroll-sections-wrap").width()/d),s=_(window).height()*l;T.each(function(e,t){var n="template"===a.section_repeater[e].template_type;if(_(t).data("section")&&!n){var o=_(t).data("section");c.getSectionContent(o)}var r=e*i;_(t).attr("data-position",r)}),C=m.offset().top,T.each(function(e,t){var n=e*s/(d-1);if(!["widescreen","desktop"].includes(u)&&0!=e)if(/iP(hone|ad|od)/i.test(navigator.userAgent)&&!window.MSStream||c.checkIpad()){var o=/(Chrome|CriOS|OPiOS|FxiOS)/.test(navigator.userAgent);if(!o){var r=""===navigator.vendor;o=o||r}var i=/WebKit/i.test(navigator.userAgent)&&!o;n="mobile"===u?c.getTouchScrollOffset(e,i?80:100,l,d):c.getTouchScrollOffset(e,i?30:80,l,d)}else n=c.getTouchScrollOffset(e,60,l,d);_(t).attr("data-scroll-offset",C+n)})},c.getTouchScrollOffset=function(e,t,n,o){var r=c.getResponsiveControlValue("trigger_offset");return e*((_(window).innerHeight()+t+r)*n)/(o-1)},c.onScroll=function(e){w&&null!==e&&c.preventDefault(e);var t=c.getDirection(e),n=S.state(),o=t<0?"down":"up";if("up"==o&&"AFTER"===S.state()){var r=c.getScrollOffset(T.eq(d-1));window.pageYOffset-r<=300&&100<window.pageYOffset-r&&c.scrollToSlide(d-1)}"DURING"===n&&("down"==o?w||d-1===h||c.goToNext():"up"==o&&(w||0===h||c.goToPrev()),(0!==h&&"up"==o||"down"==o&&d-1!==h)&&c.preventDefault(e))},c.getDirection=function(e){return e=window.event||e,Math.max(-1,Math.min(1,e.wheelDelta||-e.deltaY||-e.detail))},c.setSnapScroll=function(e){var t=e.scrollDirection,n=_(".premium-hscroll-next",m),o=_(".premium-hscroll-prev",m);"FORWARD"===t?w||d-1===h||n.trigger("click.premiumHorizontalScroll"):w||0===h||o.trigger("click.premiumHorizontalScroll")},c.refresh=function(){setTimeout(function(){var e=S.progress();c.setHorizontalSlider(e)},200)},c.onProgress=function(){var o=m.find(".premium-hscroll-progress-line").outerWidth(),r=m.outerWidth();T.each(function(e){var t=T.eq(e-1).data("scroll-offset"),n=_(this).data("position");i.opacity&&D!==e&&(window.pageYOffset>=t+r/8?_(this).removeClass("premium-hscroll-hide"):_(this).addClass("premium-hscroll-hide")),n-l<=o?(f&&!w&&c.triggerAnimations(),-1===s.indexOf(e)&&(s.push(e),h=e,c.onSlideChange())):-1!==s.indexOf(e)&&(s.pop(),h=s[s.length-1],c.onSlideChange())})},c.onSlideChange=function(){if(p=h,c.addBackgroundLayer(),i.pagination&&!v){var e=9<h+1?"":"0";m.find(".premium-hscroll-current-slide").text(e+(h+1))}b.removeClass("active"),m.find(".premium-hscroll-nav-item").eq(h).addClass("active"),c.checkActive(),f&&!w&&c.restartAnimations(h)},c.addBackgroundLayer=function(){m.find(".premium-hscroll-bg-layer[data-layer='"+h+"']").length&&(m.find(".premium-hscroll-layer-active").removeClass("premium-hscroll-layer-active"),m.find(".premium-hscroll-bg-layer[data-layer='"+h+"']").addClass("premium-hscroll-layer-active"))},c.getSectionContent=function(e){if(_("#"+e).length){var t=_("#"+e);n?(T.find(".elementor-element-overlay").remove(),_("#premium-hscroll-scroller-wrap-"+r).find('div[data-section="'+e+'"]').append(t.clone(!0))):_("#premium-hscroll-scroller-wrap-"+r).find('div[data-section="'+e+'"]').append(t)}},c.checkActive=function(){e.length&&(t?-1===h?h=d-1:d===h&&(h=0):(0===h?m.find(".premium-hscroll-arrow-left").addClass("premium-hscroll-arrow-hidden"):m.find(".premium-hscroll-arrow-left").removeClass("premium-hscroll-arrow-hidden"),d-1===h?m.find(".premium-hscroll-arrow-right").addClass("premium-hscroll-arrow-hidden"):m.find(".premium-hscroll-arrow-right").removeClass("premium-hscroll-arrow-hidden")))},c.onNavDotClick=function(){if(!w){var e=_(this).index();e===p&&"DURING"===S.state()||(h=e,c.scrollToSlide(e))}},c.onNavArrowClick=function(e){w||(_(e.target).closest(".premium-hscroll-arrow-left").length?c.goToPrev():_(e.target).closest(".premium-hscroll-arrow-right").length&&c.goToNext())},c.goToNext=function(){w||(h++,t&&(-1===h?h=d-1:d===h&&(h=0)),c.scrollToSlide(h))},c.goToPrev=function(e){w||"keyboard"===e&&0===h||(h--,t&&(-1===h?h=d-1:d===h&&(h=0)),c.scrollToSlide(h))},c.scrollToSlide=function(e,t){var n=c.getScrollOffset(T.eq(e));if((t||!w)&&!(h<0||d-1<h)){w=!0,p=e;var o=_("#premium-hscroll-spacer-"+r).outerHeight();v?_("html, body").stop().clearQueue().animate({scrollTop:n},1e3):TweenMax.to(window,1.5,{scrollTo:{y:n-o},ease:Power3.easeOut,onComplete:c.afterSlideChange}),i.pagination&&v&&m.find(".premium-hscroll-current-slide").removeClass("zoomIn animated"),i.pagination&&v&&setTimeout(function(){if(h+1!=m.find(".premium-hscroll-current-slide").text()){var e=9<h+1?"":"0";m.find(".premium-hscroll-current-slide").text(e+(h+1)).addClass("zoomIn animated")}},1e3),f&&setTimeout(function(){c.setAnimations()},1e3),v&&setTimeout(function(){w=!1},1500)}},c.afterSlideChange=function(){w=!1},c.handleAnimations=function(){f?(c.hideAnimations(),elementorFrontend.waypoint(m,function(){c.setAnimations()})):c.unsetAnimations()},c.hideAnimations=function(){T.find(".elementor-invisible").addClass("premium-hscroll-elem-hidden")},c.unsetAnimations=function(){T.not(":eq(0)").find(".elementor-invisible").each(function(e,t){_(t).removeClass("elementor-invisible")})},c.setAnimations=function(){c.restartAnimations(),c.triggerAnimations()},c.restartAnimations=function(t){T.filter(function(e){return e!==t}).find(".animated").each(function(e,t){var n=_(t).data("settings");if(void 0!==n){var o=n._animation||n.animation;_(t).removeClass("animated "+o).addClass("elementor-invisible")}})},c.triggerAnimations=function(){T.eq(h).find(".elementor-invisible, .premium-hscroll-elem-hidden").each(function(e,t){var n=_(t).data("settings");if(void 0!==n&&(n._animation||n.animation)){var o=n._animation_delay?n._animation_delay:0,r=n._animation||n.animation;setTimeout(function(){_(t).removeClass("elementor-invisible premium-hscroll-elem-hidden").addClass(r+" animated")},o)}})},c.getScrollOffset=function(e){if(_(e).length){var t=_(e).data("scroll-offset");return 0<_("#upper-element").length&&(t+=_("#upper-element").closest(".premium-notbar-outer-container").outerHeight(),_(e).attr("data-scroll-offset",t)),t}},c.preventDefault=function(e){e.preventDefault?e.preventDefault():e.returnValue=!1}},elementorFrontend.elementsHandler.attachHandler("premium-hscroll",e)})}(jQuery);