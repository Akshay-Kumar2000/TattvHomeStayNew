!function(t){function e(t,n){var e;t.hasClass("premium-mask-yes")&&("premium-addon-title.default"===t.data("widget_type")?t.find(e=".premium-title-header").find(".premium-title-icon, .premium-title-img").addClass("premium-mask-span"):e=".premium-dual-header-first-header",t.find(e).find("span:not(.premium-title-style7-stripe-wrap):not(.premium-title-img)").each(function(t,e){var a="";n(this).text().split(" ").forEach(function(t){""!==t&&(a+=' <span class="premium-mask-span">'+t+"</span>")}),n(this).text("").append(a)}),elementorFrontend.waypoint(t,function(){n(t).addClass("premium-mask-active")}))}function a(t,a){var e,n,i=t.find(".premium-title-container"),r=i.find(".premium-title-text");i.hasClass("style9")&&t.find(".premium-title-style9").each(function(){var t=a(this),e=1e3*t.attr("data-blur-delay");t.attr("data-animation-blur","process"),t.find(".premium-title-style9-letter").each(function(t,e){t+=1,t=a("body").hasClass("rtl")?.2/t+"s":t/20+"s",a(e).css({"-webkit-animation-delay":t,"animation-delay":t})}),setInterval(function(){t.attr("data-animation-blur","done"),setTimeout(function(){t.attr("data-animation-blur","process")},150)},e)}),i.hasClass("style8")&&(e=1e3*r.attr("data-shiny-delay"),n=1e3*r.attr("data-shiny-dur"),function t(){r.get(0).setAttribute("data-animation","shiny"),setTimeout(function(){r.removeAttr("data-animation")},n),setTimeout(t,e)}())}t(window).on("elementor/frontend/init",function(){elementorFrontend.hooks.addAction("frontend/element_ready/premium-addon-title.default",a),elementorFrontend.hooks.addAction("frontend/element_ready/premium-addon-title.default",e)})}(jQuery);