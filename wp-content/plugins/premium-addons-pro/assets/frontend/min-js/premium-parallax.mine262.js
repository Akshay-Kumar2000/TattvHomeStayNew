!function(g){function i(e){if(n[e])return n[e].exports;var t=n[e]={i:e,l:!1,exports:{}};return a[e].call(t.exports,t,t.exports,i),t.l=!0,t.exports}var a,n,e,t;n={},i.m=a=[,,function(e,t,a){"use strict";e.exports=function(e){"complete"===document.readyState||"interactive"===document.readyState?e.call():document.attachEvent?document.attachEvent("onreadystatechange",function(){"interactive"===document.readyState&&e.call()}):document.addEventListener&&document.addEventListener("DOMContentLoaded",e)}},,function(a,e,t){"use strict";(function(e){var t;t="undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{},a.exports=t}).call(this,t(5))},function(e,t,a){"use strict";var n,i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"===("undefined"==typeof window?"undefined":i(window))&&(n=window)}e.exports=n},,,,,,function(e,t,a){e.exports=a(12)},function(e,t,a){"use strict";var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=l(a(2)),o=a(4),r=l(a(13));function l(e){return e&&e.__esModule?e:{default:e}}var s=o.window.jarallax;if(o.window.jarallax=r.default,o.window.jarallax.noConflict=function(){return o.window.jarallax=s,this},void 0!==o.jQuery){var p=function(){var e=arguments||[];Array.prototype.unshift.call(e,this);var t=r.default.apply(o.window,e);return"object"!==(void 0===t?"undefined":n(t))?t:this};p.constructor=r.default.constructor;var c=o.jQuery.fn.jarallax;o.jQuery.fn.jarallax=p,o.jQuery.fn.jarallax.noConflict=function(){return o.jQuery.fn.jarallax=c,this}}(0,i.default)(function(){(0,r.default)(document.querySelectorAll("[data-jarallax]"))})},function(e,S,k){"use strict";(function(e){Object.defineProperty(S,"__esModule",{value:!0});var t=function(e,t,a){return t&&o(e.prototype,t),a&&o(e,a),e},c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=r(k(2)),n=r(k(14)),i=k(4);function o(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function r(e){return e&&e.__esModule?e:{default:e}}var s=-1<navigator.userAgent.indexOf("MSIE ")||-1<navigator.userAgent.indexOf("Trident/index.html")||-1<navigator.userAgent.indexOf("Edge/index.html"),l=function(){for(var e="transform WebkitTransform MozTransform".split(" "),t=document.createElement("div"),a=0;a<e.length;a++)if(t&&void 0!==t.style[e[a]])return e[a];return!1}(),v=void 0,x=void 0,p=void 0,u=!1,d=!1;function m(e){v=i.window.innerWidth||document.documentElement.clientWidth,x=i.window.innerHeight||document.documentElement.clientHeight,"object"!==(void 0===e?"undefined":c(e))||"load"!==e.type&&"dom-loaded"!==e.type||(u=!0)}m(),i.window.addEventListener("resize",m),i.window.addEventListener("orientationchange",m),i.window.addEventListener("load",m),(0,a.default)(function(){m({type:"dom-loaded"})});var f=[],y=!1;function g(){if(f.length){p=void 0!==i.window.pageYOffset?i.window.pageYOffset:(document.documentElement||document.body.parentNode||document.body).scrollTop;var t=u||!y||y.width!==v||y.height!==x,a=d||t||!y||y.y!==p;d=u=!1,(t||a)&&(f.forEach(function(e){t&&e.onResize(),a&&e.onScroll()}),y={width:v,height:x,y:p}),(0,n.default)(g)}}function h(e){("object"===("undefined"==typeof HTMLElement?"undefined":c(HTMLElement))?e instanceof HTMLElement:e&&"object"===(void 0===e?"undefined":c(e))&&null!==e&&1===e.nodeType&&"string"==typeof e.nodeName)&&(e=[e]);for(var t=arguments[1],a=Array.prototype.slice.call(arguments,2),n=e.length,i=0,o=void 0;i<n;i++)if("object"===(void 0===t?"undefined":c(t))||void 0===t?e[i].jarallax||(e[i].jarallax=new w(e[i],t)):e[i].jarallax&&(o=e[i].jarallax[t].apply(e[i].jarallax,a)),void 0!==o)return o;return e}var _=!!e.ResizeObserver&&new e.ResizeObserver(function(e){e&&e.length&&(0,n.default)(function(){e.forEach(function(e){e.target&&e.target.jarallax&&(u||e.target.jarallax.onResize(),d=!0)})})}),b=0,w=(t(P,[{key:"css",value:function(t,a){return"string"==typeof a?i.window.getComputedStyle(t).getPropertyValue(a):(a.transform&&l&&(a[l]=a.transform),Object.keys(a).forEach(function(e){t.style[e]=a[e]}),t)}},{key:"extend",value:function(a){var n=arguments;return a=a||{},Object.keys(arguments).forEach(function(t){n[t]&&Object.keys(n[t]).forEach(function(e){a[e]=n[t][e]})}),a}},{key:"getWindowData",value:function(){return{width:v,height:x,y:p}}},{key:"initImg",value:function(){var e=this,t=e.options.imgElement;return t&&"string"==typeof t&&(t=e.$item.querySelector(t)),t instanceof Element||(t=null),t&&(e.options.keepImg?e.image.$item=t.cloneNode(!0):(e.image.$item=t,e.image.$itemParent=t.parentNode),e.image.useImgTag=!0),!(!e.image.$item&&(null===e.image.src&&(e.image.src=e.css(e.$item,"background-image").replace(/^url\(['"]?/g,"").replace(/['"]?\)$/g,"")),!e.image.src||"none"===e.image.src))}},{key:"canInitParallax",value:function(){return l&&!this.options.disableParallax()}},{key:"init",value:function(){var e=this,t={position:"absolute",top:0,left:0,width:"100%",height:"100%",overflow:"hidden",pointerEvents:"none"},a={};if(!e.options.keepImg){var n=e.$item.getAttribute("style");if(n&&e.$item.setAttribute("data-jarallax-original-styles",n),e.image.useImgTag){var i=e.image.$item.getAttribute("style");i&&e.image.$item.setAttribute("data-jarallax-original-styles",i)}}if("static"===e.css(e.$item,"position")&&e.css(e.$item,{position:"relative"}),"auto"===e.css(e.$item,"z-index")&&e.css(e.$item,{zIndex:0}),e.image.$container=document.createElement("div"),e.css(e.image.$container,t),e.css(e.image.$container,{"z-index":e.options.zIndex}),s&&e.css(e.image.$container,{opacity:.9999}),e.image.$container.setAttribute("id","jarallax-container-"+e.instanceID),e.$item.appendChild(e.image.$container),e.image.useImgTag?a=e.extend({"object-fit":e.options.imgSize,"object-position":e.options.imgPosition,"font-family":"object-fit: "+e.options.imgSize+"; object-position: "+e.options.imgPosition+";","max-width":"none"},t,a):(e.image.$item=document.createElement("div"),e.image.src&&(a=e.extend({"background-position":e.options.imgPosition,"background-size":e.options.imgSize,"background-repeat":e.options.imgRepeat,"background-image":'url("'+e.image.src+'")'},t,a))),"opacity"!==e.options.type&&"scale"!==e.options.type&&"scale-opacity"!==e.options.type&&1!==e.options.speed||(e.image.position="absolute"),"fixed"===e.image.position)for(var o=0,r=e.$item;null!==r&&r!==document&&0===o;){var l=e.css(r,"-webkit-transform")||e.css(r,"-moz-transform")||e.css(r,"transform");l&&"none"!==l&&(o=1,e.image.position="absolute"),r=r.parentNode}a.position=e.image.position,e.css(e.image.$item,a),e.image.$container.appendChild(e.image.$item),e.onResize(),e.onScroll(!0),e.options.automaticResize&&_&&_.observe(e.$item),e.options.onInit&&e.options.onInit.call(e),"none"!==e.css(e.$item,"background-image")&&e.css(e.$item,{"background-image":"none"}),e.addToParallaxList()}},{key:"addToParallaxList",value:function(){f.push(this),1===f.length&&g()}},{key:"removeFromParallaxList",value:function(){var a=this;f.forEach(function(e,t){e.instanceID===a.instanceID&&f.splice(t,1)})}},{key:"destroy",value:function(){var e=this;e.removeFromParallaxList();var t=e.$item.getAttribute("data-jarallax-original-styles");if(e.$item.removeAttribute("data-jarallax-original-styles"),t?e.$item.setAttribute("style",t):e.$item.removeAttribute("style"),e.image.useImgTag){var a=e.image.$item.getAttribute("data-jarallax-original-styles");e.image.$item.removeAttribute("data-jarallax-original-styles"),a?e.image.$item.setAttribute("style",t):e.image.$item.removeAttribute("style"),e.image.$itemParent&&e.image.$itemParent.appendChild(e.image.$item)}e.$clipStyles&&e.$clipStyles.parentNode.removeChild(e.$clipStyles),e.image.$container&&e.image.$container.parentNode.removeChild(e.image.$container),e.options.onDestroy&&e.options.onDestroy.call(e),delete e.$item.jarallax}},{key:"clipContainer",value:function(){if("fixed"===this.image.position){var e=this,t=e.image.$container.getBoundingClientRect(),a=t.width,n=t.height;e.$clipStyles||(e.$clipStyles=document.createElement("style"),e.$clipStyles.setAttribute("type","text/css"),e.$clipStyles.setAttribute("id","jarallax-clip-"+e.instanceID),(document.head||document.getElementsByTagName("head")[0]).appendChild(e.$clipStyles));var i="#jarallax-container-"+e.instanceID+" {\n           clip: rect(0 "+a+"px "+n+"px 0);\n           clip: rect(0, "+a+"px, "+n+"px, 0);\n        }";e.$clipStyles.styleSheet?e.$clipStyles.styleSheet.cssText=i:e.$clipStyles.innerHTML=i}}},{key:"coverImage",value:function(){var e,t=this,a=t.image.$container.getBoundingClientRect(),n=a.height,i=t.options.speed,o="scroll"===t.options.type||"scroll-opacity"===t.options.type,r=0,l=n;return o&&(r=i<0?i*Math.max(n,x):i*(n+x),1<i?l=Math.abs(r-x):i<0?l=r/i+Math.abs(r):l+=Math.abs(x-n)*(1-i),r/=2),t.parallaxScrollDistance=r,e=o?(x-l)/2:(n-l)/2,t.css(t.image.$item,{height:l+"px",marginTop:e+"px",left:"fixed"===t.image.position?a.left+"px":"0",width:a.width+"px"}),t.options.onCoverImage&&t.options.onCoverImage.call(t),{image:{height:l,marginTop:e},container:a}}},{key:"isVisible",value:function(){return this.isElementInViewport||!1}},{key:"onScroll",value:function(e){var t=this,a=t.$item.getBoundingClientRect(),n=a.top,i=a.height,o={},r=a;if(t.options.elementInViewport&&(r=t.options.elementInViewport.getBoundingClientRect()),t.isElementInViewport=0<=r.bottom&&0<=r.right&&r.top<=x&&r.left<=v,e||t.isElementInViewport){var l=Math.max(0,n),s=Math.max(0,i+n),p=Math.max(0,-n),c=Math.max(0,n+i-x),u=Math.max(0,i-(n+i-x)),d=Math.max(0,-n+x-i),m=1-2*(x-n)/(x+i),f=1;if(i<x?f=1-(p||c)/i:s<=x?f=s/x:u<=x&&(f=u/x),"opacity"!==t.options.type&&"scale-opacity"!==t.options.type&&"scroll-opacity"!==t.options.type||(o.transform="translate3d(0,0,0)",o.opacity=f),"scale"===t.options.type||"scale-opacity"===t.options.type){var y=1;t.options.speed<0?y-=t.options.speed*f:y+=t.options.speed*(1-f),o.transform="scale("+y+") translate3d(0,0,0)"}if("scroll"===t.options.type||"scroll-opacity"===t.options.type){var g=t.parallaxScrollDistance*m;"absolute"===t.image.position&&(g-=n),o.transform="translate3d(0,"+g+"px,0)"}t.css(t.image.$item,o),t.options.onScroll&&t.options.onScroll.call(t,{section:a,beforeTop:l,beforeTopEnd:s,afterTop:p,beforeBottom:c,beforeBottomEnd:u,afterBottom:d,visiblePercent:f,fromViewportCenter:m})}}},{key:"onResize",value:function(){this.coverImage(),this.clipContainer()}}]),P);function P(e,t){!function(e){if(!(e instanceof P))throw new TypeError("Cannot call a class as a function")}(this);var a=this;a.instanceID=b++,a.$item=e,a.defaults={type:"scroll",speed:.5,imgSrc:null,imgElement:".jarallax-img",imgSize:"cover",imgPosition:"50% 50%",imgRepeat:"no-repeat",keepImg:!1,elementInViewport:null,zIndex:-100,disableParallax:!1,disableVideo:!1,automaticResize:!0,videoSrc:null,videoStartTime:0,videoEndTime:0,videoVolume:0,videoPlayOnlyVisible:!0,onScroll:null,onInit:null,onDestroy:null,onCoverImage:null};var n=a.$item.getAttribute("data-jarallax"),i=JSON.parse(n||"{}");n&&console.warn("Detected usage of deprecated data-jarallax JSON options, you should use pure data-attribute options. See info here - https://github.com/nk-o/jarallax/issues/53");var o=a.$item.dataset||{},r={};if(Object.keys(o).forEach(function(e){var t=e.substr(0,1).toLowerCase()+e.substr(1);t&&void 0!==a.defaults[t]&&(r[t]=o[e])}),a.options=a.extend({},a.defaults,i,r,t),a.pureOptions=a.extend({},a.options),Object.keys(a.options).forEach(function(e){"true"===a.options[e]?a.options[e]=!0:"false"===a.options[e]&&(a.options[e]=!1)}),a.options.speed=Math.min(2,Math.max(-1,parseFloat(a.options.speed))),(a.options.noAndroid||a.options.noIos)&&(console.warn("Detected usage of deprecated noAndroid or noIos options, you should use disableParallax option. See info here - https://github.com/nk-o/jarallax/#disable-on-mobile-devices"),a.options.disableParallax||(a.options.noIos&&a.options.noAndroid?a.options.disableParallax=/iPad|iPhone|iPod|Android/:a.options.noIos?a.options.disableParallax=/iPad|iPhone|iPod/:a.options.noAndroid&&(a.options.disableParallax=/Android/))),"string"==typeof a.options.disableParallax&&(a.options.disableParallax=new RegExp(a.options.disableParallax)),a.options.disableParallax instanceof RegExp){var l=a.options.disableParallax;a.options.disableParallax=function(){return l.test(navigator.userAgent)}}if("function"!=typeof a.options.disableParallax&&(a.options.disableParallax=function(){return!1}),"string"==typeof a.options.disableVideo&&(a.options.disableVideo=new RegExp(a.options.disableVideo)),a.options.disableVideo instanceof RegExp){var s=a.options.disableVideo;a.options.disableVideo=function(){return s.test(navigator.userAgent)}}"function"!=typeof a.options.disableVideo&&(a.options.disableVideo=function(){return!1});var p=a.options.elementInViewport;p&&"object"===(void 0===p?"undefined":c(p))&&void 0!==p.length&&(p=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var a=[],n=!0,i=!1,o=void 0;try{for(var r,l=e[Symbol.iterator]();!(n=(r=l.next()).done)&&(a.push(r.value),!t||a.length!==t);n=!0);}catch(e){i=!0,o=e}finally{try{!n&&l.return&&l.return()}finally{if(i)throw o}}return a}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}(p,1)[0]),p instanceof Element||(p=null),a.options.elementInViewport=p,a.image={src:a.options.imgSrc||null,$container:null,useImgTag:!1,position:"absolute"},a.initImg()&&a.canInitParallax()&&a.init()}h.constructor=w,S.default=h}).call(this,k(5))},function(e,t,a){"use strict";var n=a(4),i=n.requestAnimationFrame||n.webkitRequestAnimationFrame||n.mozRequestAnimationFrame||function(e){var t=+new Date,a=Math.max(0,16-(t-o)),n=setTimeout(e,a);return o=t,n},o=+new Date,r=n.cancelAnimationFrame||n.webkitCancelAnimationFrame||n.mozCancelAnimationFrame||clearTimeout;Function.prototype.bind&&(i=i.bind(n),r=r.bind(n)),(e.exports=i).cancel=r}],i.c=n,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=11),e=this,t=function(e){"use strict";function t(){return"undefined"!=typeof window}function a(){return n||t()&&(n=window.gsap)&&n.registerPlugin&&n}function r(e){return"string"==typeof e}function l(e){return"function"==typeof e}function f(e,t){var a="x"===t?"Width":"Height",n="scroll"+a,i="client"+a;return e===y||e===d||e===m?Math.max(d[n],m[n])-(y["inner"+a]||d[i]||m[i]):e[n]-e["offset"+a]}function s(e,t){var a="scroll"+("x"===t?"Left":"Top");return e===y&&(null!=e.pageXOffset?a="page"+t.toUpperCase()+"Offset":e=null!=d[a]?d:m),function(){return e[a]}}function o(e,t){if(!(e=g(e)[0])||!e.getBoundingClientRect)return console.warn("scrollTo target doesn't exist. Using 0")||{x:0,y:0};var a=e.getBoundingClientRect(),n=!t||t===y||t===m,i=n?{top:d.clientTop-(y.pageYOffset||d.scrollTop||m.scrollTop||0),left:d.clientLeft-(y.pageXOffset||d.scrollLeft||m.scrollLeft||0)}:t.getBoundingClientRect(),o={x:a.left-i.left,y:a.top-i.top};return!n&&t&&(o.x+=s(t,"x")(),o.y+=s(t,"y")()),o}function p(e,t,a,n,i){return isNaN(e)||"object"==typeof e?r(e)&&"="===e.charAt(1)?parseFloat(e.substr(2))*("-"===e.charAt(0)?-1:1)+n-i:"max"===e?f(t,a)-i:Math.min(f(t,a),o(e,t)[a]-i):parseFloat(e)-i}function c(){n=a(),t()&&n&&document.body&&(y=window,m=document.body,d=document.documentElement,g=n.utils.toArray,n.config({autoKillThreshold:7}),v=n.config(),u=1)}var n,u,y,d,m,g,v,i={version:"3.6.1",name:"scrollTo",rawVars:1,register:function(e){n=e,c()},init:function(e,t,a,n,i){u||c();var o=this;o.isWin=e===y,o.target=e,o.tween=a,t=function(e,t,a,n){if(l(e)&&(e=e(t,a,n)),"object"!=typeof e)return r(e)&&"max"!==e&&"="!==e.charAt(1)?{x:e,y:e}:{y:e};if(e.nodeType)return{y:e,x:e};var i,o={};for(i in e)o[i]="onAutoKill"!==i&&l(e[i])?e[i](t,a,n):e[i];return o}(t,n,e,i),o.vars=t,o.autoKill=!!t.autoKill,o.getX=s(e,"x"),o.getY=s(e,"y"),o.x=o.xPrev=o.getX(),o.y=o.yPrev=o.getY(),null!=t.x?(o.add(o,"x",o.x,p(t.x,e,"x",o.x,t.offsetX||0),n,i),o._props.push("scrollTo_x")):o.skipX=1,null!=t.y?(o.add(o,"y",o.y,p(t.y,e,"y",o.y,t.offsetY||0),n,i),o._props.push("scrollTo_y")):o.skipY=1},render:function(e,t){for(var a,n,i,o,r,l=t._pt,s=t.target,p=t.tween,c=t.autoKill,u=t.xPrev,d=t.yPrev,m=t.isWin;l;)l.r(e,l.d),l=l._next;a=m||!t.skipX?t.getX():u,i=(n=m||!t.skipY?t.getY():d)-d,o=a-u,r=v.autoKillThreshold,t.x<0&&(t.x=0),t.y<0&&(t.y=0),c&&(!t.skipX&&(r<o||o<-r)&&a<f(s,"x")&&(t.skipX=1),!t.skipY&&(r<i||i<-r)&&n<f(s,"y")&&(t.skipY=1),t.skipX&&t.skipY&&(p.kill(),t.vars.onAutoKill&&t.vars.onAutoKill.apply(p,t.vars.onAutoKillParams||[]))),m?y.scrollTo(t.skipX?a:t.x,t.skipY?n:t.y):(t.skipY||(s.scrollTop=t.y),t.skipX||(s.scrollLeft=t.x)),t.xPrev=t.x,t.yPrev=t.y},kill:function(e){var t="scrollTo"===e;!t&&"scrollTo_x"!==e||(this.skipX=1),!t&&"scrollTo_y"!==e||(this.skipY=1)}};i.max=f,i.getOffset=o,i.buildGetter=s,a()&&n.registerPlugin(i),e.ScrollToPlugin=i,e.default=i,"undefined"==typeof window||window!==e?Object.defineProperty(e,"__esModule",{value:!0}):delete e.default},"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e=e||self).window=e.window||{}),window.premiumParallaxEffects=function(i,e){var o=this,a=g(i),t=a.data("scrolls"),n=e,r=n.elType,l=a.offset(),s=a.closest(".premium-hscroll-temp").length;o.elementRules={},o.init=function(){t||"SECTION"===r?n.effects.length&&(o.setDefaults(),elementorFrontend.elements.$window.on("scroll load",o.initScroll)):elementorFrontend.elements.$window.off("scroll load",o.initScroll)},o.setDefaults=function(){n.defaults={},n.defaults.axis="y"},o.transform=function(e,t,a){"down"===a.direction&&(t=100-t),a.range&&(a.range.start>t&&!s&&(t=a.range.start),a.range.end<t&&!s&&(t=a.range.end)),n.defaults.unit="rotate"===e?"deg":"px",o.updateElement("transform",e,o.getStep(t,a)+n.defaults.unit)},o.getPercents=function(){var e=o.getDimensions(),t=innerHeight;return s&&(t=0),elementTopWindowPoint=e.elementTop-pageYOffset,elementEntrancePoint=elementTopWindowPoint-t,passedRangePercents=100/e.range*(-1*elementEntrancePoint),passedRangePercents},o.initScroll=function(){n.effects.includes("translateY")&&o.initVScroll(),n.effects.includes("translateX")&&o.initHScroll()},o.initVScroll=function(){var e=o.getPercents();o.transform("translateY",e,n.vscroll)},o.initHScroll=function(){var e=o.getPercents();o.transform("translateX",e,n.hscroll)},o.getDimensions=function(){var e=l,t={elementHeight:a.outerHeight(),elementWidth:a.outerWidth(),elementTop:e.top,elementLeft:e.left};return t.range=t.elementHeight+innerHeight,t},o.getStep=function(e,t){return-(e-50)*t.speed},o.getEffectMovePoint=function(e,t,a){var n=0;return e<a.start?n="down"===t?0:100:e<a.end?(n=o.getPointFromPercents(a.end-a.start,e-a.start),"up"===t&&(n=100-n)):"up"===t?n=0:"down"===t&&(n=100),n},o.getEffectValueFromMovePoint=function(e,t){return e*t/100},o.getPointFromPercents=function(e,t){return+(t/e*100).toFixed(2)},o.updateElement=function(e,t,a){o.elementRules[e]||(o.elementRules[e]={}),o.elementRules[e][t]||(o.elementRules[e][t]=!0,o.updateElementRule(e));var n="--"+t;i.style.setProperty(n,a)},o.updateElementRule=function(e){var t="";g.each(o.elementRules[e],function(e){t+=e+"(var(--"+e+"))"}),a.css(e,t)}},g(window).on("elementor/frontend/init",function(){function e(a){if(a.hasClass("premium-parallax-yes")){var f=a,e=f.data("id"),n=f.data("element_type"),y={},t=f.find("#premium-parallax-"+e),i=elementorFrontend.isEditMode()&&0<t.length;if(!function(e){var t=e.data("pa-parallax");if(!t)return;if(y.type=t.type,null==y.type)return;"multi"!==y.type&&"automove"!==y.type?(y.speed=t.speed,y.android=t.android,y.ios=t.ios,y.size=t.size,y.position=e.css("backgroundPosition"),y.repeat=t.repeat):"automove"===y.type?(y.speed=t.speed,y.direction=t.direction):(y.items=[],g.each(t.items,function(e,t){y.items.push(t)}),y.devices=t.devices,y.speed=t.speed);Object.keys(y).length}(i?t:f),!y||null==y.type)return!1;if("multi"!==y.type&&"automove"!==y.type)!function(){f.removeClass("premium-parallax-section-hide"),"column"!==n||(f=a.find(".elementor-column-wrap").first()).length<1&&(f=a.find(".elementor-widget-wrap").first());f.jarallax({type:y.type,speed:y.speed||.1,disableParallax:function(e,t){switch(!0){case e&&t:return/iPad|iPhone|iPod|Android/;case e&&!t:return/Android/;case!e&&t:return/iPad|iPhone|iPod/;case!e&&!t:return null}}(1==y.android,1==y.ios),keepImg:!0,imgSize:y.size,imgPosition:y.position,imgRepeat:y.repeat})}();else if("automove"===y.type)!function(){var e=parseInt(y.speed);"column"===n&&(f=a.find(".elementor-column-wrap").first()).length<1&&(f=a.find(".elementor-widget-wrap").first());/^((?!chrome|android).)*safari/i.test(navigator.userAgent)&&f.addClass("premium-parallax-no-trans");if(f.css("background-position","0px 0px"),"left"===y.direction){var t=parseInt(f.css("background-position-x"));setInterval(function(){t+=e,f.css("backgroundPosition",t+"px 0")},70)}else if("right"===y.direction){t=parseInt(f.css("background-position-x"));setInterval(function(){t-=e,f.css("backgroundPosition",t+"px 0")},70)}else if("top"===y.direction){t=parseInt(f.css("background-position-y"));setInterval(function(){t+=e,f.css("backgroundPosition","0 "+t+"px")},70)}else if("bottom"===y.direction){t=parseInt(f.css("background-position-y"));setInterval(function(){t-=e,f.css("backgroundPosition","0 "+t+"px")},70)}}();else{if(!function(c){var u="",d="desktop"===c?"":"_"+c,m="";f.find(".premium-parallax-layer").remove(),g.each(y.items,function(e,t){if(t.show_layer_on.includes(c)){var a=function(e){var t="";if("img"===e.layer_type){if(null!==e.premium_parallax_layer_image.url&&""!==e.premium_parallax_layer_image.url){var a=e.premium_parallax_layer_image.url,n=""!=e.premium_parallax_layer_id?'id="'+e.premium_parallax_layer_id+'"':"",i=e.alt;t="<img "+n+' class="premium-parallax-img" src="'+a+'" alt="'+i+'">'}}else{var o='class="'+("yes"===e.draw_svg?"premium-svg-drawer":"premium-svg-nodraw")+'"';"yes"===e.draw_svg&&(o+='data-svg-reverse="'+e.svg_reverse+'"',o+='data-svg-loop="'+e.svg_loop+'"',o+='data-svg-sync="'+e.svg_sync+'"',o+='data-svg-hover="'+e.svg_hover+'"',o+='data-svg-restart="'+e.restart_draw+'"',o+='data-svg-fill="'+e.svg_color+'"',o+='data-svg-stroke="'+e.svg_stroke+'"',o+='data-svg-frames="'+e.frames+'"',o+='data-svg-yoyo="'+e.svg_yoyo+'"',o+='data-svg-point="'+(e.svg_reverse?e.end_point.size:e.start_point.size)+'"'),t="<div "+o+">"+e.premium_parallax_layer_svg+"</div>"}return t}(t);if(""!=a){var n="premium-parallax-layer-"+t._id,i=" premium-parallax-"+t.premium_parallax_layer_hor+" premium-parallax-"+t.premium_parallax_layer_ver,o=" parallax-"+t.layer_type;if("yes"===t.premium_parallax_layer_mouse&&""!==t.premium_parallax_layer_rate?(u=' data-parallax="true" ',m=' data-rate="'+t.premium_parallax_layer_rate+'" '):u=' data-parallax="false" ',"img"===t.layer_type)var r=void 0!==t["premium_parallax_layer_width"+d]?t["premium_parallax_layer_width"+d].size:t.premium_parallax_layer_width.size;g('<div id="'+n+'"'+u+m+' class="premium-parallax-layer elementor-repeater-item-'+t._id+i+o+'">'+a+"</div>").prependTo(f).css({"z-index":t.premium_parallax_layer_z_index,"background-size":t.premium_parallax_layer_back_size,width:"img"===t.layer_type?r+"%":"auto"});var l=f.find("#"+n);if("custom"===t.premium_parallax_layer_hor){var s=void 0!==t["premium_parallax_layer_hor_pos"+d]?t["premium_parallax_layer_hor_pos"+d].size:t.premium_parallax_layer_hor_pos.size;l.css("left",s+"%")}if("custom"===t.premium_parallax_layer_ver){var p=void 0!==t["premium_parallax_layer_ver_pos"+d]?t["premium_parallax_layer_ver_pos"+d].size:t.premium_parallax_layer_ver_pos.size;l.css("top",p+"%")}y.devices.includes(c)&&"yes"===t.premium_parallax_layer_scroll&&("yes"===t.premium_parallax_layer_scroll_hor&&l.attr({"data-parallax-scroll":"yes","data-parallax-hscroll":"yes","data-parallax-hscroll_speed":t.premium_parallax_layer_speed_hor.size,"data-parallax-hscroll_start":t.premium_parallax_layer_view_hor.sizes.start,"data-parallax-hscroll_end":t.premium_parallax_layer_view_hor.sizes.end,"data-parallax-hscroll_direction":t.premium_parallax_layer_direction_hor}),"yes"===t.premium_parallax_layer_scroll_ver&&l.attr({"data-parallax-scroll":"yes","data-parallax-vscroll":"yes","data-parallax-speed":t.premium_parallax_layer_speed.size,"data-parallax-start":t.premium_parallax_layer_view.sizes.start,"data-parallax-end":t.premium_parallax_layer_view.sizes.end,"data-parallax-direction":t.premium_parallax_layer_direction}))}}}),window.PremiumSvgDrawerHandler&&window.PremiumSvgDrawerHandler(f,g,y.speed);-1!==y.devices.indexOf(c)&&f.find(".premium-parallax-layer").each(function(e,t){var a=g(t).data();if("yes"===a.parallaxScroll){var n=[],i={},o={};"yes"===a.parallaxVscroll&&(n.push("translateY"),i={speed:a.parallaxSpeed,direction:a.parallaxDirection,range:{start:a.parallaxStart,end:a.parallaxEnd}}),"yes"===a.parallaxHscroll&&(n.push("translateX"),o={speed:a.parallaxHscroll_speed,direction:a.parallaxHscroll_direction,range:{start:a.parallaxHscroll_start,end:a.parallaxHscroll_end}}),new premiumParallaxEffects(t,{elType:"SECTION",vscroll:i,hscroll:o,effects:n}).init()}});f.mousemove(function(a){g(this).find('.premium-parallax-layer[data-parallax="true"]').each(function(){var e=g(this),t=g(this).data("rate");TweenLite.to(e,.2,{x:-(a.clientX-window.innerWidth/2)/t,y:-(a.clientY-window.innerHeight/2)/t})})})}(elementorFrontend.getCurrentDeviceMode()),i){y={repeater:"premium_parallax_layers_list",item:".premium-parallax-layer",hor:"premium_parallax_layer_hor_pos",ver:"premium_parallax_layer_ver_pos",width:"premium_parallax_layer_width",tab:"section_premium_parallax",offset:0,widgets:["drag","resize"]};new premiumEditorBehavior(f,y).init()}}}}elementorFrontend.hooks.addAction("frontend/element_ready/section",e),elementorFrontend.hooks.addAction("frontend/element_ready/column",e),elementorFrontend.hooks.addAction("frontend/element_ready/container",e)})}(jQuery);