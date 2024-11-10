!function(e,t){"function"==typeof define&&define.amd?define(t):"object"==typeof exports?module.exports=t():e.ScrollMagic=t()}(this,function(){"use strict";function M(){j.log(2,"(COMPATIBILITY NOTICE) -> As of ScrollMagic 2.0.0 you need to use 'new ScrollMagic.Controller()' to create a new controller instance. Use 'new ScrollMagic.Scene()' to instance a scene.")}M.version="2.0.7",window.addEventListener("mousewheel",function(){});var I="data-scrollmagic-pin-spacer",C=(M.Controller=function(e){function o(e){return e.length<=1?e:((e=e.slice(0)).sort(function(e,t){return e.scrollOffset()>t.scrollOffset()?1:-1}),e)}var n,i,t,r="ScrollMagic.Controller",s="FORWARD",l="REVERSE",a="PAUSED",c=C.defaults,u=this,f=j.extend({},c,e),d=[],p=!1,g=0,h=a,v=!0,m=0,y=!0,w=function(){0<f.refreshInterval&&(i=window.setTimeout(_,f.refreshInterval))},S=function(){return f.vertical?j.get.scrollTop(f.container):j.get.scrollLeft(f.container)},b=function(){return f.vertical?j.get.height(f.container):j.get.width(f.container)},T=this._setScrollPos=function(e){f.vertical?v?window.scrollTo(j.get.scrollLeft(),e):f.container.scrollTop=e:v?window.scrollTo(e,j.get.scrollTop()):f.container.scrollLeft=e},x=function(){var n,e;y&&p&&(n=j.type.Array(p)?p:d.slice(0),p=!1,e=g,e=(g=u.scrollPos())-e,(h=0!=e?0<e?s:l:h)===l&&n.reverse(),n.forEach(function(e,t){P(3,"updating Scene "+(t+1)+"/"+n.length+" ("+d.length+" total)"),e.update(!0)}),0===n.length&&3<=f.loglevel&&P(3,"updating 0 Scenes (nothing added to controller)"))},E=function(){n=j.rAF(x)},R=function(e){P(3,"event fired causing an update:",e.type),"resize"==e.type&&(m=b(),h=a),!0!==p&&(p=!0,E())},_=function(){if(!v&&m!=b()){var t;try{t=new Event("resize",{bubbles:!1,cancelable:!1})}catch(e){(t=document.createEvent("Event")).initEvent("resize",!1,!1)}f.container.dispatchEvent(t)}d.forEach(function(e,t){e.refresh()}),w()},P=this._log=function(e,t){f.loglevel>=e&&(Array.prototype.splice.call(arguments,1,0,"("+r+") ->"),j.log.apply(window,arguments))};this._options=f;for(t in this.addScene=function(e){if(j.type.Array(e))e.forEach(function(e,t){u.addScene(e)});else if(e instanceof M.Scene){if(e.controller()!==u)e.addTo(u);else if(d.indexOf(e)<0){for(var t in d.push(e),d=o(d),e.on("shift.controller_sort",function(){d=o(d)}),f.globalSceneOptions)e[t]&&e[t].call(e,f.globalSceneOptions[t]);P(3,"adding Scene (now "+d.length+" total)")}}else P(1,"ERROR: invalid argument supplied for '.addScene()'");return u},this.removeScene=function(e){var t;return j.type.Array(e)?e.forEach(function(e,t){u.removeScene(e)}):-1<(t=d.indexOf(e))&&(e.off("shift.controller_sort"),d.splice(t,1),P(3,"removing Scene (now "+d.length+" left)"),e.remove()),u},this.updateScene=function(e,n){return j.type.Array(e)?e.forEach(function(e,t){u.updateScene(e,n)}):n?e.update(!0):!0!==p&&e instanceof M.Scene&&(-1==(p=p||[]).indexOf(e)&&p.push(e),p=o(p),E()),u},this.update=function(e){return R({type:"resize"}),e&&x(),u},this.scrollTo=function(e,t){if(j.type.Number(e))T.call(f.container,e,t);else if(e instanceof M.Scene)e.controller()===u?u.scrollTo(e.scrollOffset(),t):P(2,"scrollTo(): The supplied scene does not belong to this controller. Scroll cancelled.",e);else if(j.type.Function(e))T=e;else{var n=j.get.elements(e)[0];if(n){for(;n.parentNode.hasAttribute(I);)n=n.parentNode;var o=f.vertical?"top":"left",i=j.get.offset(f.container),r=j.get.offset(n);v||(i[o]-=u.scrollPos()),u.scrollTo(r[o]-i[o],t)}else P(2,"scrollTo(): The supplied argument is invalid. Scroll cancelled.",e)}return u},this.scrollPos=function(e){return arguments.length?(j.type.Function(e)?S=e:P(2,"Provided value for method 'scrollPos' is not a function. To change the current scroll position use 'scrollTo()'."),u):S.call(u)},this.info=function(e){var t={size:m,vertical:f.vertical,scrollPos:g,scrollDirection:h,container:f.container,isDocument:v};return arguments.length?void 0!==t[e]?t[e]:void P(1,'ERROR: option "'+e+'" is not available'):t},this.loglevel=function(e){return arguments.length?(f.loglevel!=e&&(f.loglevel=e),u):f.loglevel},this.enabled=function(e){return arguments.length?(y!=e&&(y=!!e,u.updateScene(d,!0)),u):y},this.destroy=function(e){window.clearTimeout(i);for(var t=d.length;t--;)d[t].destroy(e);return f.container.removeEventListener("resize",R),f.container.removeEventListener("scroll",R),j.cAF(n),P(3,"destroyed "+r+" (reset: "+(e?"true":"false")+")"),null},f)c.hasOwnProperty(t)||(P(2,'WARNING: Unknown option "'+t+'"'),delete f[t]);if(f.container=j.get.elements(f.container)[0],!f.container)throw P(1,"ERROR creating object "+r+": No valid scroll container supplied"),r+" init failed.";(v=f.container===window||f.container===document.body||!document.body.contains(f.container))&&(f.container=window),m=b(),f.container.addEventListener("resize",R),f.container.addEventListener("scroll",R);e=parseInt(f.refreshInterval,10);return f.refreshInterval=j.type.Number(e)?e:c.refreshInterval,w(),P(3,"added new "+r+" controller (v"+M.version+")"),u},{defaults:{container:window,vertical:!0,globalSceneOptions:{},loglevel:2,refreshInterval:100}}),D=(M.Controller.addOption=function(e,t){C.defaults[e]=t},M.Controller.extend=function(e){var t=this;M.Controller=function(){return t.apply(this,arguments),this.$super=j.extend({},this),e.apply(this,arguments)||this},j.extend(M.Controller,t),M.Controller.prototype=t.prototype,M.Controller.prototype.constructor=M.Controller},{defaults:{duration:0,offset:0,triggerElement:void 0,triggerHook:.5,reverse:!0,loglevel:2},validate:{offset:function(e){if(e=parseFloat(e),j.type.Number(e))return e;throw['Invalid value for option "offset":',e]},triggerElement:function(e){if(e=e||void 0){var t=j.get.elements(e)[0];if(!t||!t.parentNode)throw['Element defined in option "triggerElement" was not found:',e];e=t}return e},triggerHook:function(e){var t={onCenter:.5,onEnter:1,onLeave:0};if(j.type.Number(e))e=Math.max(0,Math.min(parseFloat(e),1));else{if(!(e in t))throw['Invalid value for option "triggerHook": ',e];e=t[e]}return e},reverse:function(e){return!!e},loglevel:function(e){if(e=parseInt(e),!j.type.Number(e)||e<0||3<e)throw['Invalid value for option "loglevel":',e];return e}},shifts:["duration","offset","triggerHook"]}),j=((M.Scene=function(e){function c(){l&&d&&m===a&&!l.info("isDocument")&&k()}function u(){l&&d&&m===a&&((p.relSize.width||p.relSize.autoFullWidth)&&j.get.width(window)!=j.get.width(p.spacer.parentNode)||p.relSize.height&&j.get.height(window)!=j.get.height(p.spacer.parentNode))&&L()}function f(e){l&&d&&m===a&&!l.info("isDocument")&&(e.preventDefault(),l._setScrollPos(l.info("scrollPos")-((e.wheelDelta||e[l.info("vertical")?"wheelDeltaY":"wheelDeltaX"])/3||30*-e.detail)))}var n,l,d,p,o="ScrollMagic.Scene",s="BEFORE",a="DURING",g="AFTER",i=D.defaults,h=this,v=j.extend({},i,e),m=s,y=0,r={start:0,end:0},w=0,S=!0,b={},T=(this.on=function(e,n){return j.type.Function(n)?(e=e.trim().split(" ")).forEach(function(e){var e=e.split("."),t=e[0],e=e[1];"*"!=t&&(b[t]||(b[t]=[]),b[t].push({namespace:e||"",callback:n}))}):T(1,"ERROR when calling '.on()': Supplied callback for '"+e+"' is not a valid function!"),h},this.off=function(e,r){return e?(e=e.trim().split(" ")).forEach(function(e,t){var e=e.split("."),n=e[0],i=e[1]||"";("*"===n?Object.keys(b):[n]).forEach(function(e){for(var t=b[e]||[],n=t.length;n--;){var o=t[n];!o||i!==o.namespace&&"*"!==i||r&&r!=o.callback||t.splice(n,1)}t.length||delete b[e]})}):T(1,"ERROR: Invalid event name supplied."),h},this.trigger=function(e,n){var o,i;return e?(e=e.trim().split("."),o=e[0],i=e[1],e=b[o],T(3,"event fired:",o,n?"->":"",n||""),e&&e.forEach(function(e,t){i&&i!==e.namespace||e.callback.call(h,new M.Event(o,e.namespace,h,n))})):T(1,"ERROR: Invalid event name supplied."),h},h.on("change.internal",function(e){"loglevel"!==e.what&&"tweenChanges"!==e.what&&("triggerElement"===e.what?E():"reverse"===e.what&&h.update())}).on("shift.internal",function(e){t(),h.update()}),this._log=function(e,t){v.loglevel>=e&&(Array.prototype.splice.call(arguments,1,0,"("+o+") ->"),j.log.apply(window,arguments))}),t=(this.addTo=function(e){return e instanceof M.Controller?l!=e&&(l&&l.removeScene(h),l=e,P(),x(!0),E(!0),t(),l.info("container").addEventListener("resize",R),e.addScene(h),h.trigger("add",{controller:l}),T(3,"added "+o+" to controller"),h.update()):T(1,"ERROR: supplied argument of 'addTo()' is not a valid ScrollMagic Controller"),h},this.enabled=function(e){return arguments.length?(S!=e&&(S=!!e,h.update(!0)),h):S},this.remove=function(){var e;return l&&(l.info("container").removeEventListener("resize",R),e=l,l=void 0,e.removeScene(h),h.trigger("remove"),T(3,"removed "+o+" from controller")),h},this.destroy=function(e){return h.trigger("destroy",{reset:e}),h.remove(),h.off("*.*"),T(3,"destroyed "+o+" (reset: "+(e?"true":"false")+")"),null},this.update=function(e){var t;return l&&(e?l.enabled()&&S?(e=l.info("scrollPos"),t=0<v.duration?(e-r.start)/(r.end-r.start):e>=r.start?1:0,h.trigger("update",{startPos:r.start,endPos:r.end,scrollPos:e}),h.progress(t)):d&&m===a&&k(!0):l.updateScene(h,!1)),h},this.refresh=function(){return x(),E(),h},this.progress=function(e){var t,n,o,i,r;return arguments.length?(t=!1,n=m,o=l?l.info("scrollDirection"):"PAUSED",r=v.reverse||y<=e,0===v.duration?(t=y!=e,m=0===(y=e<1&&r?0:1)?s:a):e<0&&m!==s&&r?(m=s,t=!(y=0)):0<=e&&e<1&&r?(y=e,m=a,t=!0):1<=e&&m!==g?(y=1,m=g,t=!0):m!==a||r||k(),t&&(i={progress:y,state:m,scrollDirection:o},e=function(e){h.trigger(e,i)},(r=m!=n)&&n!==a&&(e("enter"),e(n===s?"start":"end")),e("progress"),r&&m!==a&&(e(m===s?"start":"end"),e("leave"))),h):y},function(){r={start:w+v.offset},l&&v.triggerElement&&(r.start-=l.info("size")*v.triggerHook),r.end=r.start+v.duration}),x=function(e){var t;n&&C(t="duration",n.call(h))&&!e&&(h.trigger("change",{what:t,newval:v[t]}),h.trigger("shift",{reason:t}))},E=function(e){var t=0,n=v.triggerElement;if(l&&(n||0<w)){if(n)if(n.parentNode){for(var o=l.info(),i=j.get.offset(o.container),r=o.vertical?"top":"left";n.parentNode.hasAttribute(I);)n=n.parentNode;var s=j.get.offset(n);o.isDocument||(i[r]-=l.scrollPos()),t=s[r]-i[r]}else T(2,"WARNING: triggerElement was removed from DOM and will be reset to",void 0),h.triggerElement(void 0);o=t!=w;w=t,o&&!e&&h.trigger("shift",{reason:"triggerElementPosition"})}},R=function(e){0<v.triggerHook&&h.trigger("shift",{reason:"containerResize"})},_=j.extend(D.validate,{duration:function(t){var e;if(j.type.String(t)&&t.match(/^(\.|\d)*\d+%$/)&&(e=parseFloat(t)/100,t=function(){return l?l.info("size")*e:0}),j.type.Function(t)){n=t;try{t=parseFloat(n.call(h))}catch(e){t=-1}}if(t=parseFloat(t),!j.type.Number(t)||t<0)throw n?(n=void 0,['Invalid return value of supplied function for option "duration":',t]):['Invalid value for option "duration":',t];return t}}),P=function(e){(e=arguments.length?[e]:Object.keys(_)).forEach(function(t,e){if(_[t])try{n=_[t](v[t])}catch(e){var n=i[t],o=j.type.String(e)?[e]:e;j.type.Array(o)?(o[0]="ERROR: "+o[0],o.unshift(1),T.apply(this,o)):T(1,"ERROR: Problem executing validation callback for option '"+t+"':",e.message)}finally{v[t]=n}})},C=function(e,t){var n=!1,o=v[e];return v[e]!=t&&(v[e]=t,P(e),n=o!=v[e]),n},O=function(t){h[t]||(h[t]=function(e){return arguments.length?("duration"===t&&(n=void 0),C(t,e)&&(h.trigger("change",{what:t,newval:v[t]}),-1<D.shifts.indexOf(t)&&h.trigger("shift",{reason:t})),h):v[t]})},k=(this.controller=function(){return l},this.state=function(){return m},this.scrollOffset=function(){return r.start},this.triggerPosition=function(){var e=v.offset;return l&&(v.triggerElement?e+=w:e+=l.info("size")*h.triggerHook()),e},h.on("shift.internal",function(e){e="duration"===e.reason;(m===g&&e||m===a&&0===v.duration)&&k(),e&&L()}).on("progress.internal",function(e){k()}).on("add.internal",function(e){L()}).on("destroy.internal",function(e){h.removePin(e.reset)}),function(e){var t,n,o;d&&l&&(t=l.info(),n=p.spacer.firstChild,e||m!==a?(e={position:p.inFlow?"relative":"absolute",top:0,left:0},o=j.css(n,"position")!=e.position,p.pushFollowers?0<v.duration&&(m===g&&0===parseFloat(j.css(p.spacer,"padding-top"))||m===s&&0===parseFloat(j.css(p.spacer,"padding-bottom")))&&(o=!0):e[t.vertical?"top":"left"]=v.duration*y,j.css(n,e),o&&L()):("fixed"!=j.css(n,"position")&&(j.css(n,{position:"fixed"}),L()),e=j.get.offset(p.spacer,!0),o=v.reverse||0===v.duration?t.scrollPos-r.start:Math.round(y*v.duration*10)/10,e[t.vertical?"top":"left"]+=o,j.css(p.spacer.firstChild,{top:e.top,left:e.left})))}),L=function(){var e,t,n,o,i;d&&l&&p.inFlow&&(e=m===a,t=l.info("vertical"),n=p.spacer.firstChild,o=j.isMarginCollapseType(j.css(p.spacer,"display")),i={},p.relSize.width||p.relSize.autoFullWidth?e?j.css(d,{width:j.get.width(p.spacer)}):j.css(d,{width:"100%"}):(i["min-width"]=j.get.width(t?d:n,!0,!0),i.width=e?i["min-width"]:"auto"),p.relSize.height?e?j.css(d,{height:j.get.height(p.spacer)-(p.pushFollowers?v.duration:0)}):j.css(d,{height:"100%"}):(i["min-height"]=j.get.height(t?n:d,!0,!o),i.height=e?i["min-height"]:"auto"),p.pushFollowers&&(i["padding"+(t?"Top":"Left")]=v.duration*y,i["padding"+(t?"Bottom":"Right")]=v.duration*(1-y)),j.css(p.spacer,i))};this.setPin=function(e,t){var n=t&&t.hasOwnProperty("pushFollowers");if(t=j.extend({},{pushFollowers:!0,spacerClass:"scrollmagic-pin-spacer"},t),!(e=j.get.elements(e)[0]))return T(1,"ERROR calling method 'setPin()': Invalid pin element supplied."),h;if("fixed"===j.css(e,"position"))return T(1,"ERROR calling method 'setPin()': Pin does not work with elements that are positioned 'fixed'."),h;if(d){if(d===e)return h;h.removePin()}var o,e=(d=e).parentNode.style.display,i=["top","left","bottom","right","margin","marginLeft","marginRight","marginTop","marginBottom"],r=(d.parentNode.style.display="none","absolute"!=j.css(d,"position")),s=j.css(d,i.concat(["display"])),l=j.css(d,["width","height"]),e=(d.parentNode.style.display=e,!r&&t.pushFollowers&&(T(2,"WARNING: If the pinned element is positioned absolutely pushFollowers will be disabled."),t.pushFollowers=!1),window.setTimeout(function(){d&&0===v.duration&&n&&t.pushFollowers&&T(2,"WARNING: pushFollowers =",!0,"has no effect, when scene duration is 0.")},0),d.parentNode.insertBefore(document.createElement("div"),d)),a=j.extend(s,{position:r?"relative":"absolute",boxSizing:"content-box",mozBoxSizing:"content-box",webkitBoxSizing:"content-box"});return r||j.extend(a,j.css(d,["width","height"])),j.css(e,a),e.setAttribute(I,""),j.addClass(e,t.spacerClass),p={spacer:e,relSize:{width:"%"===l.width.slice(-1),height:"%"===l.height.slice(-1),autoFullWidth:"auto"===l.width&&r&&j.isMarginCollapseType(s.display)},pushFollowers:t.pushFollowers,inFlow:r},d.___origStyle||(d.___origStyle={},o=d.style,i.concat(["width","height","position","boxSizing","mozBoxSizing","webkitBoxSizing"]).forEach(function(e){d.___origStyle[e]=o[e]||""})),p.relSize.width&&j.css(e,{width:l.width}),p.relSize.height&&j.css(e,{height:l.height}),e.appendChild(d),j.css(d,{position:r?"relative":"absolute",margin:"auto",top:"auto",left:"auto",bottom:"auto",right:"auto"}),(p.relSize.width||p.relSize.autoFullWidth)&&j.css(d,{boxSizing:"border-box",mozBoxSizing:"border-box",webkitBoxSizing:"border-box"}),window.addEventListener("scroll",c),window.addEventListener("resize",c),window.addEventListener("resize",u),d.addEventListener("mousewheel",f),d.addEventListener("DOMMouseScroll",f),T(3,"added pin"),k(),h},this.removePin=function(e){var t,n,o;return d&&(m===a&&k(!0),!e&&l||((t=p.spacer.firstChild).hasAttribute(I)&&(n=p.spacer.style,o={},["margin","marginLeft","marginRight","marginTop","marginBottom"].forEach(function(e){o[e]=n[e]||""}),j.css(t,o)),p.spacer.parentNode.insertBefore(t,p.spacer),p.spacer.parentNode.removeChild(p.spacer),d.parentNode.hasAttribute(I)||(j.css(d,d.___origStyle),delete d.___origStyle)),window.removeEventListener("scroll",c),window.removeEventListener("resize",c),window.removeEventListener("resize",u),d.removeEventListener("mousewheel",f),d.removeEventListener("DOMMouseScroll",f),d=void 0,T(3,"removed pin (reset: "+(e?"true":"false")+")")),h};var A,F,N,z=[];for(F in h.on("destroy.internal",function(e){h.removeClassToggle(e.reset)}),this.setClassToggle=function(e,t){e=j.get.elements(e);return 0!==e.length&&j.type.String(t)?(0<z.length&&h.removeClassToggle(),A=t,z=e,h.on("enter.internal_class leave.internal_class",function(e){var n="enter"===e.type?j.addClass:j.removeClass;z.forEach(function(e,t){n(e,A)})})):T(1,"ERROR calling method 'setClassToggle()': Invalid "+(0===e.length?"element":"classes")+" supplied."),h},this.removeClassToggle=function(e){return e&&z.forEach(function(e,t){j.removeClass(e,A)}),h.off("start.internal_class end.internal_class"),A=void 0,z=[],h},v)i.hasOwnProperty(F)||(T(2,'WARNING: Unknown option "'+F+'"'),delete v[F]);for(N in i)O(N);return P(),h}).addOption=function(e,t,n,o){e in D.defaults?M._util.log(1,"[static] ScrollMagic.Scene -> Cannot add Scene option '"+e+"', because it already exists."):(D.defaults[e]=t,D.validate[e]=n,o&&D.shifts.push(e))},M.Scene.extend=function(e){var t=this;M.Scene=function(){return t.apply(this,arguments),this.$super=j.extend({},this),e.apply(this,arguments)||this},j.extend(M.Scene,t),M.Scene.prototype=t.prototype,M.Scene.prototype.constructor=M.Scene},M.Event=function(e,t,n,o){for(var i in o=o||{})this[i]=o[i];return this.type=e,this.target=this.currentTarget=n,this.namespace=t||"",this.timeStamp=this.timestamp=Date.now(),this},M._util=function(r){for(var e={},s=function(e){return parseFloat(e)||0},l=function(e){return e.currentStyle||r.getComputedStyle(e)},o=function(e,t,n,o){if((t=t===document?r:t)===r)o=!1;else if(!g.DomElement(t))return 0;e=e.charAt(0).toUpperCase()+e.substr(1).toLowerCase();var i=(n?t["offset"+e]||t["outer"+e]:t["client"+e]||t["inner"+e])||0;return n&&o&&(n=l(t),i+="Height"===e?s(n.marginTop)+s(n.marginBottom):s(n.marginLeft)+s(n.marginRight)),i},a=function(e){return e.replace(/^[^a-z]+([a-z])/g,"$1").replace(/-([a-z])/g,function(e){return e[1].toUpperCase()})},i=(e.extend=function(e){for(e=e||{},u=1;u<arguments.length;u++)if(arguments[u])for(var t in arguments[u])arguments[u].hasOwnProperty(t)&&(e[t]=arguments[u][t]);return e},e.isMarginCollapseType=function(e){return-1<["block","flex","list-item","table","-webkit-box"].indexOf(e)},0),t=["ms","moz","webkit","o"],n=r.requestAnimationFrame,c=r.cancelAnimationFrame,u=0;!n&&u<t.length;++u)n=r[t[u]+"RequestAnimationFrame"],c=r[t[u]+"CancelAnimationFrame"]||r[t[u]+"CancelRequestAnimationFrame"];c=c||function(e){r.clearTimeout(e)},e.rAF=(n=n||function(e){var t=(new Date).getTime(),n=Math.max(0,16-(t-i)),o=r.setTimeout(function(){e(t+n)},n);return i=t+n,o}).bind(r),e.cAF=c.bind(r);var f=["error","warn","log"],d=r.console||{};for(d.log=d.log||function(){},u=0;u<f.length;u++){var p=f[u];d[p]||(d[p]=d.log)}e.log=function(e){(f.length<e||e<=0)&&(e=f.length);var t=new Date,t=("0"+t.getHours()).slice(-2)+":"+("0"+t.getMinutes()).slice(-2)+":"+("0"+t.getSeconds()).slice(-2)+":"+("00"+t.getMilliseconds()).slice(-3),e=f[e-1],n=Array.prototype.splice.call(arguments,1),e=Function.prototype.bind.call(d[e],d);n.unshift(t),e.apply(d,n)};var g=e.type=function(e){return Object.prototype.toString.call(e).replace(/^\[object (.+)\]$/,"$1").toLowerCase()},h=(g.String=function(e){return"string"===g(e)},g.Function=function(e){return"function"===g(e)},g.Array=function(e){return Array.isArray(e)},g.Number=function(e){return!g.Array(e)&&0<=e-parseFloat(e)+1},g.DomElement=function(e){return"DIV"===e.nodeName||"SECTION"===e.nodeName||("object"==typeof HTMLElement||"function"==typeof HTMLElement?e instanceof HTMLElement||e instanceof SVGElement:e&&"object"==typeof e&&null!==e&&1===e.nodeType&&"string"==typeof e.nodeName)},e.get={});return h.elements=function(e){var t=[];if(g.String(e))try{e=document.querySelectorAll(e)}catch(e){return t}if("nodelist"===g(e)||g.Array(e)||e instanceof NodeList)for(var n=0,o=t.length=e.length;n<o;n++){var i=e[n];t[n]=g.DomElement(i)?i:h.elements(i)}else!g.DomElement(e)&&e!==document&&e!==r||(t=[e]);return t},h.scrollTop=function(e){return e&&"number"==typeof e.scrollTop?e.scrollTop:r.pageYOffset||0},h.scrollLeft=function(e){return e&&"number"==typeof e.scrollLeft?e.scrollLeft:r.pageXOffset||0},h.width=function(e,t,n){return o("width",e,t,n)},h.height=function(e,t,n){return o("height",e,t,n)},h.offset=function(e,t){var n={top:0,left:0};return e&&e.getBoundingClientRect&&(e=e.getBoundingClientRect(),n.top=e.top,n.left=e.left,t||(n.top+=h.scrollTop(),n.left+=h.scrollLeft())),n},e.addClass=function(e,t){t&&(e.classList?e.classList.add(t):e.className+=" "+t)},e.removeClass=function(e,t){t&&(e.classList?e.classList.remove(t):e.className=e.className.replace(new RegExp("(^|\\b)"+t.split(" ").join("|")+"(\\b|$)","gi")," "))},e.css=function(e,t){if(g.String(t))return l(e)[a(t)];var n,o,i;if(g.Array(t))return n={},o=l(e),t.forEach(function(e,t){n[e]=o[a(e)]}),n;for(i in t){var r=t[i];r==parseFloat(r)&&(r+="px"),e.style[a(i)]=r}},e}(window||{}));return M.Scene.prototype.addIndicators=function(){return M._util.log(1,"(ScrollMagic.Scene) -> ERROR calling addIndicators() due to missing Plugin 'debug.addIndicators'. Please make sure to include plugins/debug.addIndicators.js"),this},M.Scene.prototype.removeIndicators=function(){return M._util.log(1,"(ScrollMagic.Scene) -> ERROR calling removeIndicators() due to missing Plugin 'debug.addIndicators'. Please make sure to include plugins/debug.addIndicators.js"),this},M.Scene.prototype.setTween=function(){return M._util.log(1,"(ScrollMagic.Scene) -> ERROR calling setTween() due to missing Plugin 'animation.gsap'. Please make sure to include plugins/animation.gsap.js"),this},M.Scene.prototype.removeTween=function(){return M._util.log(1,"(ScrollMagic.Scene) -> ERROR calling removeTween() due to missing Plugin 'animation.gsap'. Please make sure to include plugins/animation.gsap.js"),this},M.Scene.prototype.setVelocity=function(){return M._util.log(1,"(ScrollMagic.Scene) -> ERROR calling setVelocity() due to missing Plugin 'animation.velocity'. Please make sure to include plugins/animation.velocity.js"),this},M.Scene.prototype.removeVelocity=function(){return M._util.log(1,"(ScrollMagic.Scene) -> ERROR calling removeVelocity() due to missing Plugin 'animation.velocity'. Please make sure to include plugins/animation.velocity.js"),this},M});var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";function r(e,t){var n="scroll"+(t="x"===t?"Width":"Height"),o="client"+t,i=document.body;return e===a||e===l||e===i?Math.max(l[n],i[n])-(a["inner"+t]||l[o]||i[o]):e[n]-e["offset"+t]}function s(e,t){var e=i(e).getBoundingClientRect(),n=document.body,o=!t||t===a||t===n,n=o?{top:l.clientTop-(window.pageYOffset||l.scrollTop||n.scrollTop||0),left:l.clientLeft-(window.pageXOffset||l.scrollLeft||n.scrollLeft||0)}:t.getBoundingClientRect(),e={x:e.left-n.left,y:e.top-n.top};return!o&&t&&(e.x+=c(t,"x")(),e.y+=c(t,"y")()),e}function o(e,t,n,o){var i=typeof e;return isNaN(e)?"string"==i&&"="===e.charAt(1)?parseInt(e.charAt(0)+"1",10)*parseFloat(e.substr(2))+o:"max"===e?r(t,n):Math.min(r(t,n),s(e,t)[n]):parseFloat(e)}var l=(_gsScope.document||{}).documentElement,a=_gsScope,i=function(e){return(e=(e="string"==typeof e?TweenLite.selector(e):e).length&&e!==a&&e[0]&&e[0].style&&!e.nodeType?e[0]:e)===a||e.nodeType&&e.style?e:null},c=function(e,t){var n="scroll"+("x"===t?"Left":"Top");return e===a&&(null!=e.pageXOffset?n="page"+t.toUpperCase()+"Offset":e=null!=l[n]?l:document.body),function(){return e[n]}},u=_gsScope._gsDefine.plugin({propName:"scrollTo",API:2,global:!0,version:"1.9.2",init:function(e,t,n){return this._wdw=e===a,this._target=e,this._tween=n,"object"!=typeof t?"string"==typeof(t={y:t}).y&&"max"!==t.y&&"="!==t.y.charAt(1)&&(t.x=t.y):t.nodeType&&(t={y:t,x:t}),this.vars=t,this._autoKill=!1!==t.autoKill,this.getX=c(e,"x"),this.getY=c(e,"y"),this.x=this.xPrev=this.getX(),this.y=this.yPrev=this.getY(),null!=t.x?(this._addTween(this,"x",this.x,o(t.x,e,"x",this.x)-(t.offsetX||0),"scrollTo_x",!0),this._overwriteProps.push("scrollTo_x")):this.skipX=!0,null!=t.y?(this._addTween(this,"y",this.y,o(t.y,e,"y",this.y)-(t.offsetY||0),"scrollTo_y",!0),this._overwriteProps.push("scrollTo_y")):this.skipY=!0,!0},set:function(e){this._super.setRatio.call(this,e);var e=this._wdw||!this.skipX?this.getX():this.xPrev,t=this._wdw||!this.skipY?this.getY():this.yPrev,n=t-this.yPrev,o=e-this.xPrev,i=u.autoKillThreshold;this.x<0&&(this.x=0),this.y<0&&(this.y=0),this._autoKill&&(!this.skipX&&(i<o||o<-i)&&e<r(this._target,"x")&&(this.skipX=!0),!this.skipY&&(i<n||n<-i)&&t<r(this._target,"y")&&(this.skipY=!0),this.skipX&&this.skipY&&(this._tween.kill(),this.vars.onAutoKill&&this.vars.onAutoKill.apply(this.vars.onAutoKillScope||this._tween,this.vars.onAutoKillParams||[]))),this._wdw?a.scrollTo(this.skipX?e:this.x,this.skipY?t:this.y):(this.skipY||(this._target.scrollTop=this.y),this.skipX||(this._target.scrollLeft=this.x)),this.xPrev=this.x,this.yPrev=this.y}}),e=u.prototype;u.max=r,u.getOffset=s,u.buildGetter=c,u.autoKillThreshold=7,e._kill=function(e){return e.scrollTo_x&&(this.skipX=!0),e.scrollTo_y&&(this.skipY=!0),this._super._kill.call(this,e)}}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()(),function(){"use strict";function e(){return(_gsScope.GreenSockGlobals||_gsScope).ScrollToPlugin}"undefined"!=typeof module&&module.exports?(require("TweenLite.min.html"),module.exports=e()):"function"==typeof define&&define.amd&&define(["TweenLite"],e)}(),function(e,t){"function"==typeof define&&define.amd?define(["ScrollMagic","TweenMax","TimelineMax"],t):"object"==typeof exports?(require("gsap"),t(require("scrollmagic"),TweenMax,TimelineMax)):t(e.ScrollMagic||e.jQuery&&e.jQuery.ScrollMagic,e.TweenMax||e.TweenLite,e.TimelineMax||e.TimelineLite)}(this,function(e,l,a){"use strict";e.Scene.addOption("tweenChanges",!1,function(e){return!!e}),e.Scene.extend(function(){var i,r=this,s=(r.on("progress.plugin_gsap",function(){s()}),r.on("destroy.plugin_gsap",function(e){r.removeTween(e.reset)}),function(){var e,t;i&&(e=r.progress(),t=r.state(),i.repeat&&-1===i.repeat()?"DURING"===t&&i.paused()?i.play():"DURING"===t||i.paused()||i.pause():e!=i.progress()&&(0===r.duration()?0<e?i.play():i.reverse():r.tweenChanges()&&i.tweenTo?i.tweenTo(e*i.duration()):i.progress(e).pause()))});r.setTween=function(e,t,n){var o;1<arguments.length&&(arguments.length<3&&(n=t,t=1),e=l.to(e,t,n));try{(o=a?new a({smoothChildTiming:!0}).add(e):e).pause()}catch(e){return r}return i&&r.removeTween(),i=o,e.repeat&&-1===e.repeat()&&(i.repeat(-1),i.yoyo(e.yoyo())),s(),r},r.removeTween=function(e){return i&&(e&&i.progress(0).pause(),i.kill(),i=void 0),r}})});